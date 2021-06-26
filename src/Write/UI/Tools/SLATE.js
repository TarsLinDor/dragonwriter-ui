import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { createEditor, Transforms, Editor, Text, Node } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import db from 'db.json';

function SLATE(props) {
  // Format
  const editor = props.editor;
  const value = props.value;

  function newValue(e) {
    props.setValue(e);
  }
  const serialize = nodes => {
    return nodes.map(n => Node.string(n)).join('\n');
  };
  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'note':
        return <NoteElement {...props} />;
      case 'center':
        return <CenterElement {...props} />;
      case 'code':
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);
  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />;
  }, []);
  return (
    <Slate
      {...{
        editor: editor,
        value: value,
        onChange: value => newValue(value)
      }}
    >
      <Editable
        {...{
          renderElement: renderElement,
          renderLeaf: renderLeaf,
          onKeyDown: event => eventKeys(event, editor)
        }}
      />
    </Slate>
  );
}

const DefaultElement = props => {
  return <p {...props.attributes}>{props.children}</p>;
};
const CenterElement = props => {
  return (
    <p {...props.attributes} style={{ textAlign: 'center' }}>
      {props.children}
    </p>
  );
};
const CodeElement = props => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};
const QuoteElement = props => {
  return (
    <pre {...props.attributes} style={{ textAlign: 'center' }}>
      <p style={{ fontStyle: 'italic' }}>{props.children}</p>
    </pre>
  );
};
const NoteElement = props => {
  return (
    <div {...props.attributes} className="note">
      <a style={{ fontStyle: 'italic' }}>{props.children}</a>
    </div>
  );
};
const Leaf = props => {
  return (
    <span
      {...props.attributes}
      style={{
        fontWeight: props.leaf.bold ? 'bold' : 'normal',
        fontStyle: props.leaf.italic ? 'italic' : 'normal',
        textDecoration: props.leaf.strike ? 'line-through' : null
      }}
    >
      {props.children}
    </span>
  );
};
function eventKeys(e, editor) {
  if (e.key === '&') {
    e.preventDefault();
    editor.insertText('and');
  }
  if (!e.ctrlKey) {
    return;
  }
  switch (e.key) {
    //Elements...
    case '`': {
      e.preventDefault();
      CustomEditor.toggleCodeBlock(editor);
      break;
    }
    case 'q': {
      e.preventDefault();
      CustomEditor.toggleQuote(editor);
      break;
    }
    case '6': {
      e.preventDefault();
      CustomEditor.toggleCentered(editor);
      break;
    }
    //leafs...
    case 'b': {
      e.preventDefault();
      CustomEditor.toggleBoldMark(editor);
      break;
    }

    case 'i': {
      e.preventDefault();
      CustomEditor.toggleItalicMark(editor);
      break;
    }
    case '-': {
      e.preventDefault();
      CustomEditor.toggleStrikeThrew(editor);
      break;
    }
    case 'u': {
      e.preventDefault();
      CustomEditor.toggleUnderline(editor);
      break;
    }
  }
}
const CustomEditor = {
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.bold === true,
      universal: true
    });
    return !!match;
  },
  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    );
  },
  isItalicMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.italic === true,
      universal: true
    });
    return !!match;
  },
  toggleItalicMark(editor) {
    const isActive = CustomEditor.isItalicMarkActive(editor);
    Transforms.setNodes(
      editor,
      { italic: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    );
  },
  isStrikeThrew(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.strike === true,
      universal: true
    });
    return !!match;
  },
  toggleStrikeThrew(editor) {
    const isActive = CustomEditor.isStrikeThrew(editor);
    Transforms.setNodes(
      editor,
      { strike: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    );
  },
  isUnderline(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.underline === true,
      universal: true
    });
    return !!match;
  },
  toggleUnderline(editor) {
    const isActive = CustomEditor.isUnderline(editor);
    Transforms.setNodes(
      editor,
      { underline: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    );
  },
  //Elements...
  isCenterActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === 'center'
    });
    return !!match;
  },
  toggleCentered(editor) {
    const isActive = CustomEditor.isCenterActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'center' },
      { match: n => Editor.isBlock(editor, n) }
    );
  },

  isLeftActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === null
    });
    return !!match;
  },
  toggleLeft(editor) {
    const isActive = CustomEditor.isLeftActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : null },
      { match: n => Editor.isBlock(editor, n) }
    );
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === 'code'
    });
    return !!match;
  },
  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'code' },
      { match: n => Editor.isBlock(editor, n) }
    );
  },

  isNoteActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === 'note'
    });
    return !!match;
  },

  toggleNoteBlock(editor) {
    const isActive = CustomEditor.isNoteActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'note' },
      { match: n => Editor.isBlock(editor, n) }
    );
  }
};

export { SLATE, CustomEditor };

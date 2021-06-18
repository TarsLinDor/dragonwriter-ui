function toggle(value, set) {
  if (value == 0) {
    set(1);
  } else {
    set(0);
  }
}
function sort() {}

function dbSort() {}

export { toggle, sort, dbSort };

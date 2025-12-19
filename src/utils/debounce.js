export function debounce(fn, delay) {
  let id;
  return function (...args) {
    if (id) {
      clearTimeout(id);
    }

    id = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

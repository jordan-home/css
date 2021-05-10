export const $$ = (selector, context) => {
  context = context || document;
  const elements = context.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
}

export const getCoords = (elem: Element) => {
  const box = elem.getBoundingClientRect();
  return {
    top: box.top,
    left: box.left,
  };
};

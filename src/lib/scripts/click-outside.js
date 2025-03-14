export const clickOutside = (node) => {
  const handleClickOutside = (event) => {
    if (!node.contains(event.target)) {
      node.dispatchEvent(new CustomEvent("outsideclick"));
    }
  };

  window.addEventListener("click", handleClickOutside);

  return {
    destroy() {
      window.removeEventListener("click", handleClickOutside);
    },
  };
};

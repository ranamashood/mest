const tag = (tagName, ...children) => {
  const elem = document.createElement(tagName);

  children.forEach((child) => {
    if (typeof child === "string") {
      elem.appendChild(document.createTextNode(child));
    } else {
      elem.appendChild(child);
    }
  });

  elem.attr = (name, value) => {
    elem.setAttribute(name, value);
    return elem;
  };
  document.body.appendChild(elem);
  return elem;
};

const TAGS = ["h1", "h2", "div"];
TAGS.forEach((tagName) => {
  window[tagName] = (...children) => tag(tagName, ...children);
});

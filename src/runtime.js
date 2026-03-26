import { generateClass } from "./rules.js";

const style = document.createElement("style");
document.head.appendChild(style);

const cssSet = new Set();

function process(el) {
  el.classList.forEach((cls) => {
    const rule = generateClass(cls);
    if (rule) cssSet.add(rule);
  });
}

function scan(root = document.body) {
  root.querySelectorAll("[class*='titan-']").forEach(process);
  style.textContent = [...cssSet].join("");
}

scan();

const observer = new MutationObserver((mutations) => {
  mutations.forEach((m) => {
    m.addedNodes.forEach((node) => {
      if (node.nodeType === 1) {
        process(node);
        scan(node);
      }
    });
  });
});

observer.observe(document.body, { childList: true, subtree: true });

import { generateClasses } from "./rules.js";

const style = document.createElement("style");
document.head.appendChild(style);

function scan() {
  const elements = document.body.querySelectorAll("[class*=titan]");

  const cssSet = new Set();

  elements.forEach((el) => {
    const rules = generateClasses(el);
    rules.forEach((r) => cssSet.add(r));
  });

  style.textContent = [...cssSet].join("\n");
}

scan();

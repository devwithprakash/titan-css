(() => {
  // src/rules.js
  function generateClasses(el) {
    const rules = [];
    const styles = {
      // Colors
      bg: (value) => `background-color:${value};`,
      color: (value) => `color:${value};`,
      // Typography
      text: (value) => `font-size:${value}px;`,
      weight: (value) => `font-weight:${value};`,
      lh: (value) => `line-height:${value};`,
      align: (value) => `text-align:${value};`,
      transform: (value) => `text-transform:${value};`,
      spacing: (value) => `letter-spacing:${value}px;`,
      // Display & layout
      display: (value) => `display:${value};`,
      hidden: () => `display:none;`,
      flexdir: (value) => `flex-direction:${value};`,
      justify: (value) => `justify-content:${value};`,
      items: (value) => `align-items:${value};`,
      gap: (value) => `gap:${value}px;`,
      width: (value) => `width:${value}px;`,
      height: (value) => `height:${value}px;`,
      opacity: (value) => `opacity:${value};`,
      // Borders
      radius: (value) => `border-radius:${value}px;`,
      border: (value) => `border:${value};`,
      bordercolor: (value) => `border-color:${value};`,
      // Spacing (padding/margin)
      p: (value) => `padding:${value}px;`,
      px: (value) => `padding-left:${value}px;padding-right:${value}px;`,
      py: (value) => `padding-top:${value}px;padding-bottom:${value}px;`,
      pt: (value) => `padding-top:${value}px;`,
      pr: (value) => `padding-right:${value}px;`,
      pb: (value) => `padding-bottom:${value}px;`,
      pl: (value) => `padding-left:${value}px;`,
      m: (value) => `margin:${value}px;`,
      mx: (value) => `margin-left:${value}px;margin-right:${value}px;`,
      my: (value) => `margin-top:${value}px;margin-bottom:${value}px;`,
      mt: (value) => `margin-top:${value}px;`,
      mr: (value) => `margin-right:${value}px;`,
      mb: (value) => `margin-bottom:${value}px;`,
      ml: (value) => `margin-left:${value}px;`
    };
    for (const cls of el.classList) {
      const [, key, value] = cls.split("-");
      if (styles[key]) {
        rules.push(`.${cls}{${styles[key](value)}}`);
      }
    }
    return rules;
  }

  // src/runtime.js
  var style = document.createElement("style");
  document.head.appendChild(style);
  function scan() {
    const elements = document.body.querySelectorAll("[class*=titan]");
    const cssSet = /* @__PURE__ */ new Set();
    elements.forEach((el) => {
      const rules = generateClasses(el);
      rules.forEach((r) => cssSet.add(r));
    });
    style.textContent = [...cssSet].join("\n");
  }
  scan();
})();

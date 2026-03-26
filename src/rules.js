// rules.js
const styles = {
  bg: (v) => `background-color:${v};`,
  color: (v) => `color:${v};`,
  text: (v) => `font-size:${v}px;`,
  weight: (v) => `font-weight:${v};`,
  lh: (v) => `line-height:${v};`,
  align: (v) => `text-align:${v};`,
  transform: (v) => `text-transform:${v};`,
  spacing: (v) => `letter-spacing:${v}px;`,

  display: (v) => `display:${v};`,
  hidden: () => `display:none;`,
  flexdir: (v) => `flex-direction:${v};`,
  justify: (v) => `justify-content:${v};`,
  items: (v) => `align-items:${v};`,
  gap: (v) => `gap:${v}px;`,
  width: (v) => `width:${v}px;`,
  height: (v) => `height:${v}px;`,
  opacity: (v) => `opacity:${v};`,

  radius: (v) => `border-radius:${v}px;`,
  border: (v) => `border:${v};`,
  bordercolor: (v) => `border-color:${v};`,

  p: (v) => `padding:${v}px;`,
  px: (v) => `padding-left:${v}px;padding-right:${v}px;`,
  py: (v) => `padding-top:${v}px;padding-bottom:${v}px;`,
  pt: (v) => `padding-top:${v}px;`,
  pr: (v) => `padding-right:${v}px;`,
  pb: (v) => `padding-bottom:${v}px;`,
  pl: (v) => `padding-left:${v}px;`,

  m: (v) => `margin:${v}px;`,
  mx: (v) => `margin-left:${v}px;margin-right:${v}px;`,
  my: (v) => `margin-top:${v}px;margin-bottom:${v}px;`,
  mt: (v) => `margin-top:${v}px;`,
  mr: (v) => `margin-right:${v}px;`,
  mb: (v) => `margin-bottom:${v}px;`,
  ml: (v) => `margin-left:${v}px;`,
};

const cache = new Map();

export function generateClass(cls) {
  if (cache.has(cls)) return cache.get(cls);

  if (!cls.startsWith("titan-")) return "";

  const [, key, value] = cls.split("-");
  const rule = styles[key] ? `.${cls}{${styles[key](value)}}` : "";

  cache.set(cls, rule);
  return rule;
}

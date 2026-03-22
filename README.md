# Titan-CSS Plus 🚀

**Titan-CSS Plus** is a runtime-powered, utility-first CSS engine that generates styles dynamically from your HTML—no pre-compilation, no config, no hassle.

---

## ⚡ Features

- ⚙️ Runtime CSS generation (no build step required)
- 📦 Works with both CDN and npm
- 🧠 Smart class parsing engine
- 🔁 DOM scanning & live style injection
- 💨 Lightweight and fast

---

## 📦 Installation

### npm

```bash
npm install titan-css-Plus
```

---

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/titan-css-plus/dist/titan.js"></script>
```

---

## 🎨 Utility Pattern

```txt
namespace-prefix-value
```

Example:

```txt
titan-text-18 → font-size:18px;
```

---

## 🧩 Available Styles

### 🎨 Colors

- `titan-bg-red` → `background-color:red;`
- `titan-color-blue` → `color:blue;`

### 🔤 Typography

- `titan-text-18` → `font-size:18px;`
- `titan-weight-700` → `font-weight:700;`
- `titan-lh-24` → `line-height:24;`
- `titan-align-center` → `text-align:center;`
- `titan-transform-uppercase` → `text-transform:uppercase;`
- `titan-spacing-2` → `letter-spacing:2px;`

### 📐 Layout & Display

- `titan-display-flex` → `display:flex;`
- `titan-hidden` → `display:none;`
- `titan-flexdir-row` → `flex-direction:row;`
- `titan-justify-center` → `justify-content:center;`
- `titan-items-center` → `align-items:center;`
- `titan-gap-10` → `gap:10px;`
- `titan-width-200` → `width:200px;`
- `titan-height-100` → `height:100px;`
- `titan-opacity-0.5` → `opacity:0.5;`

### 🧱 Borders

- `titan-radius-10` → `border-radius:10px;`
- `titan-border-1px-solid-black` → `border:1px solid black;`
- `titan-bordercolor-red` → `border-color:red;`

### 📦 Spacing

**Padding**

- `titan-p-20`, `titan-px-10`, `titan-py-10`, `titan-pt-10` etc.

**Margin**

- `titan-m-20`, `titan-mx-10`, `titan-my-10`, `titan-mt-10` etc.

---

## 🧪 Example

```html
<div
  class="titan-bg-black titan-color-white titan-p-20 titan-radius-10 titan-text-18"
>
  Titan CSS Plus 🔥
</div>
```

---

## 🧠 How It Works

- Scans DOM for class names
- Parses `namespace-prefix-value`
- Uses rule engine to map styles
- Injects CSS into a `<style>` tag
- Caches rules for performance

---

## 📁 Plusject Structure

```txt
titan-css-Plus/
├── src/
│   ├── runtime.js   # DOM scanner & injector
│   └── rules.js     # style definitions & mappings
├── dist/
│   └── titan.js     # bundled output
├── package.json
```

---

---

## 🧑‍💻 Author

Prakash Jangid

---

## 📜 License

MIT

---

## 🚀 Future Plans

- Responsive variants (`md:`, `lg:`)
- Pseudo states (`hover:`)
- Plugin system
- Custom themes

---

## ⭐ Support

If you like Titan-CSS Plus, give it a star ⭐

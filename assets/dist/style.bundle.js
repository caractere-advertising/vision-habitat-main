/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/tailwind.css"
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/tailwind.css ***!
  \******************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! tailwindcss v4.2.1 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
    --default-mono-font-family: var(--font-mono);
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
    font-feature-settings: var(--default-mono-font-feature-settings, normal);
    font-variation-settings: var(--default-mono-font-variation-settings, normal);
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .visible {
    visibility: visible;
  }
  .absolute {
    position: absolute;
  }
  .static {
    position: static;
  }
  .col-40 {
    grid-column: 40;
  }
  .col-50 {
    grid-column: 50;
  }
  .col-60 {
    grid-column: 60;
  }
  .container {
    width: 100%;
    @media (width >= 40rem) {
      max-width: 40rem;
    }
    @media (width >= 48rem) {
      max-width: 48rem;
    }
    @media (width >= 64rem) {
      max-width: 64rem;
    }
    @media (width >= 80rem) {
      max-width: 80rem;
    }
    @media (width >= 96rem) {
      max-width: 96rem;
    }
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .flex-shrink {
    flex-shrink: 1;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .ease-in {
    --tw-ease: var(--ease-in);
    transition-timing-function: var(--ease-in);
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-border-style: solid;
      --tw-ease: initial;
    }
  }
}
`, "",{"version":3,"sources":["<no source>","webpack://./node_modules/tailwindcss/index.css"],"names":[],"mappings":"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","sourcesContent":[null,"@layer theme, base, components, utilities;\n\n@layer theme {\n  @theme default {\n    --font-sans:\n      ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\",\n      \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n    --font-serif: ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif;\n    --font-mono:\n      ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\",\n      \"Courier New\", monospace;\n\n    --color-red-50: oklch(97.1% 0.013 17.38);\n    --color-red-100: oklch(93.6% 0.032 17.717);\n    --color-red-200: oklch(88.5% 0.062 18.334);\n    --color-red-300: oklch(80.8% 0.114 19.571);\n    --color-red-400: oklch(70.4% 0.191 22.216);\n    --color-red-500: oklch(63.7% 0.237 25.331);\n    --color-red-600: oklch(57.7% 0.245 27.325);\n    --color-red-700: oklch(50.5% 0.213 27.518);\n    --color-red-800: oklch(44.4% 0.177 26.899);\n    --color-red-900: oklch(39.6% 0.141 25.723);\n    --color-red-950: oklch(25.8% 0.092 26.042);\n\n    --color-orange-50: oklch(98% 0.016 73.684);\n    --color-orange-100: oklch(95.4% 0.038 75.164);\n    --color-orange-200: oklch(90.1% 0.076 70.697);\n    --color-orange-300: oklch(83.7% 0.128 66.29);\n    --color-orange-400: oklch(75% 0.183 55.934);\n    --color-orange-500: oklch(70.5% 0.213 47.604);\n    --color-orange-600: oklch(64.6% 0.222 41.116);\n    --color-orange-700: oklch(55.3% 0.195 38.402);\n    --color-orange-800: oklch(47% 0.157 37.304);\n    --color-orange-900: oklch(40.8% 0.123 38.172);\n    --color-orange-950: oklch(26.6% 0.079 36.259);\n\n    --color-amber-50: oklch(98.7% 0.022 95.277);\n    --color-amber-100: oklch(96.2% 0.059 95.617);\n    --color-amber-200: oklch(92.4% 0.12 95.746);\n    --color-amber-300: oklch(87.9% 0.169 91.605);\n    --color-amber-400: oklch(82.8% 0.189 84.429);\n    --color-amber-500: oklch(76.9% 0.188 70.08);\n    --color-amber-600: oklch(66.6% 0.179 58.318);\n    --color-amber-700: oklch(55.5% 0.163 48.998);\n    --color-amber-800: oklch(47.3% 0.137 46.201);\n    --color-amber-900: oklch(41.4% 0.112 45.904);\n    --color-amber-950: oklch(27.9% 0.077 45.635);\n\n    --color-yellow-50: oklch(98.7% 0.026 102.212);\n    --color-yellow-100: oklch(97.3% 0.071 103.193);\n    --color-yellow-200: oklch(94.5% 0.129 101.54);\n    --color-yellow-300: oklch(90.5% 0.182 98.111);\n    --color-yellow-400: oklch(85.2% 0.199 91.936);\n    --color-yellow-500: oklch(79.5% 0.184 86.047);\n    --color-yellow-600: oklch(68.1% 0.162 75.834);\n    --color-yellow-700: oklch(55.4% 0.135 66.442);\n    --color-yellow-800: oklch(47.6% 0.114 61.907);\n    --color-yellow-900: oklch(42.1% 0.095 57.708);\n    --color-yellow-950: oklch(28.6% 0.066 53.813);\n\n    --color-lime-50: oklch(98.6% 0.031 120.757);\n    --color-lime-100: oklch(96.7% 0.067 122.328);\n    --color-lime-200: oklch(93.8% 0.127 124.321);\n    --color-lime-300: oklch(89.7% 0.196 126.665);\n    --color-lime-400: oklch(84.1% 0.238 128.85);\n    --color-lime-500: oklch(76.8% 0.233 130.85);\n    --color-lime-600: oklch(64.8% 0.2 131.684);\n    --color-lime-700: oklch(53.2% 0.157 131.589);\n    --color-lime-800: oklch(45.3% 0.124 130.933);\n    --color-lime-900: oklch(40.5% 0.101 131.063);\n    --color-lime-950: oklch(27.4% 0.072 132.109);\n\n    --color-green-50: oklch(98.2% 0.018 155.826);\n    --color-green-100: oklch(96.2% 0.044 156.743);\n    --color-green-200: oklch(92.5% 0.084 155.995);\n    --color-green-300: oklch(87.1% 0.15 154.449);\n    --color-green-400: oklch(79.2% 0.209 151.711);\n    --color-green-500: oklch(72.3% 0.219 149.579);\n    --color-green-600: oklch(62.7% 0.194 149.214);\n    --color-green-700: oklch(52.7% 0.154 150.069);\n    --color-green-800: oklch(44.8% 0.119 151.328);\n    --color-green-900: oklch(39.3% 0.095 152.535);\n    --color-green-950: oklch(26.6% 0.065 152.934);\n\n    --color-emerald-50: oklch(97.9% 0.021 166.113);\n    --color-emerald-100: oklch(95% 0.052 163.051);\n    --color-emerald-200: oklch(90.5% 0.093 164.15);\n    --color-emerald-300: oklch(84.5% 0.143 164.978);\n    --color-emerald-400: oklch(76.5% 0.177 163.223);\n    --color-emerald-500: oklch(69.6% 0.17 162.48);\n    --color-emerald-600: oklch(59.6% 0.145 163.225);\n    --color-emerald-700: oklch(50.8% 0.118 165.612);\n    --color-emerald-800: oklch(43.2% 0.095 166.913);\n    --color-emerald-900: oklch(37.8% 0.077 168.94);\n    --color-emerald-950: oklch(26.2% 0.051 172.552);\n\n    --color-teal-50: oklch(98.4% 0.014 180.72);\n    --color-teal-100: oklch(95.3% 0.051 180.801);\n    --color-teal-200: oklch(91% 0.096 180.426);\n    --color-teal-300: oklch(85.5% 0.138 181.071);\n    --color-teal-400: oklch(77.7% 0.152 181.912);\n    --color-teal-500: oklch(70.4% 0.14 182.503);\n    --color-teal-600: oklch(60% 0.118 184.704);\n    --color-teal-700: oklch(51.1% 0.096 186.391);\n    --color-teal-800: oklch(43.7% 0.078 188.216);\n    --color-teal-900: oklch(38.6% 0.063 188.416);\n    --color-teal-950: oklch(27.7% 0.046 192.524);\n\n    --color-cyan-50: oklch(98.4% 0.019 200.873);\n    --color-cyan-100: oklch(95.6% 0.045 203.388);\n    --color-cyan-200: oklch(91.7% 0.08 205.041);\n    --color-cyan-300: oklch(86.5% 0.127 207.078);\n    --color-cyan-400: oklch(78.9% 0.154 211.53);\n    --color-cyan-500: oklch(71.5% 0.143 215.221);\n    --color-cyan-600: oklch(60.9% 0.126 221.723);\n    --color-cyan-700: oklch(52% 0.105 223.128);\n    --color-cyan-800: oklch(45% 0.085 224.283);\n    --color-cyan-900: oklch(39.8% 0.07 227.392);\n    --color-cyan-950: oklch(30.2% 0.056 229.695);\n\n    --color-sky-50: oklch(97.7% 0.013 236.62);\n    --color-sky-100: oklch(95.1% 0.026 236.824);\n    --color-sky-200: oklch(90.1% 0.058 230.902);\n    --color-sky-300: oklch(82.8% 0.111 230.318);\n    --color-sky-400: oklch(74.6% 0.16 232.661);\n    --color-sky-500: oklch(68.5% 0.169 237.323);\n    --color-sky-600: oklch(58.8% 0.158 241.966);\n    --color-sky-700: oklch(50% 0.134 242.749);\n    --color-sky-800: oklch(44.3% 0.11 240.79);\n    --color-sky-900: oklch(39.1% 0.09 240.876);\n    --color-sky-950: oklch(29.3% 0.066 243.157);\n\n    --color-blue-50: oklch(97% 0.014 254.604);\n    --color-blue-100: oklch(93.2% 0.032 255.585);\n    --color-blue-200: oklch(88.2% 0.059 254.128);\n    --color-blue-300: oklch(80.9% 0.105 251.813);\n    --color-blue-400: oklch(70.7% 0.165 254.624);\n    --color-blue-500: oklch(62.3% 0.214 259.815);\n    --color-blue-600: oklch(54.6% 0.245 262.881);\n    --color-blue-700: oklch(48.8% 0.243 264.376);\n    --color-blue-800: oklch(42.4% 0.199 265.638);\n    --color-blue-900: oklch(37.9% 0.146 265.522);\n    --color-blue-950: oklch(28.2% 0.091 267.935);\n\n    --color-indigo-50: oklch(96.2% 0.018 272.314);\n    --color-indigo-100: oklch(93% 0.034 272.788);\n    --color-indigo-200: oklch(87% 0.065 274.039);\n    --color-indigo-300: oklch(78.5% 0.115 274.713);\n    --color-indigo-400: oklch(67.3% 0.182 276.935);\n    --color-indigo-500: oklch(58.5% 0.233 277.117);\n    --color-indigo-600: oklch(51.1% 0.262 276.966);\n    --color-indigo-700: oklch(45.7% 0.24 277.023);\n    --color-indigo-800: oklch(39.8% 0.195 277.366);\n    --color-indigo-900: oklch(35.9% 0.144 278.697);\n    --color-indigo-950: oklch(25.7% 0.09 281.288);\n\n    --color-violet-50: oklch(96.9% 0.016 293.756);\n    --color-violet-100: oklch(94.3% 0.029 294.588);\n    --color-violet-200: oklch(89.4% 0.057 293.283);\n    --color-violet-300: oklch(81.1% 0.111 293.571);\n    --color-violet-400: oklch(70.2% 0.183 293.541);\n    --color-violet-500: oklch(60.6% 0.25 292.717);\n    --color-violet-600: oklch(54.1% 0.281 293.009);\n    --color-violet-700: oklch(49.1% 0.27 292.581);\n    --color-violet-800: oklch(43.2% 0.232 292.759);\n    --color-violet-900: oklch(38% 0.189 293.745);\n    --color-violet-950: oklch(28.3% 0.141 291.089);\n\n    --color-purple-50: oklch(97.7% 0.014 308.299);\n    --color-purple-100: oklch(94.6% 0.033 307.174);\n    --color-purple-200: oklch(90.2% 0.063 306.703);\n    --color-purple-300: oklch(82.7% 0.119 306.383);\n    --color-purple-400: oklch(71.4% 0.203 305.504);\n    --color-purple-500: oklch(62.7% 0.265 303.9);\n    --color-purple-600: oklch(55.8% 0.288 302.321);\n    --color-purple-700: oklch(49.6% 0.265 301.924);\n    --color-purple-800: oklch(43.8% 0.218 303.724);\n    --color-purple-900: oklch(38.1% 0.176 304.987);\n    --color-purple-950: oklch(29.1% 0.149 302.717);\n\n    --color-fuchsia-50: oklch(97.7% 0.017 320.058);\n    --color-fuchsia-100: oklch(95.2% 0.037 318.852);\n    --color-fuchsia-200: oklch(90.3% 0.076 319.62);\n    --color-fuchsia-300: oklch(83.3% 0.145 321.434);\n    --color-fuchsia-400: oklch(74% 0.238 322.16);\n    --color-fuchsia-500: oklch(66.7% 0.295 322.15);\n    --color-fuchsia-600: oklch(59.1% 0.293 322.896);\n    --color-fuchsia-700: oklch(51.8% 0.253 323.949);\n    --color-fuchsia-800: oklch(45.2% 0.211 324.591);\n    --color-fuchsia-900: oklch(40.1% 0.17 325.612);\n    --color-fuchsia-950: oklch(29.3% 0.136 325.661);\n\n    --color-pink-50: oklch(97.1% 0.014 343.198);\n    --color-pink-100: oklch(94.8% 0.028 342.258);\n    --color-pink-200: oklch(89.9% 0.061 343.231);\n    --color-pink-300: oklch(82.3% 0.12 346.018);\n    --color-pink-400: oklch(71.8% 0.202 349.761);\n    --color-pink-500: oklch(65.6% 0.241 354.308);\n    --color-pink-600: oklch(59.2% 0.249 0.584);\n    --color-pink-700: oklch(52.5% 0.223 3.958);\n    --color-pink-800: oklch(45.9% 0.187 3.815);\n    --color-pink-900: oklch(40.8% 0.153 2.432);\n    --color-pink-950: oklch(28.4% 0.109 3.907);\n\n    --color-rose-50: oklch(96.9% 0.015 12.422);\n    --color-rose-100: oklch(94.1% 0.03 12.58);\n    --color-rose-200: oklch(89.2% 0.058 10.001);\n    --color-rose-300: oklch(81% 0.117 11.638);\n    --color-rose-400: oklch(71.2% 0.194 13.428);\n    --color-rose-500: oklch(64.5% 0.246 16.439);\n    --color-rose-600: oklch(58.6% 0.253 17.585);\n    --color-rose-700: oklch(51.4% 0.222 16.935);\n    --color-rose-800: oklch(45.5% 0.188 13.697);\n    --color-rose-900: oklch(41% 0.159 10.272);\n    --color-rose-950: oklch(27.1% 0.105 12.094);\n\n    --color-slate-50: oklch(98.4% 0.003 247.858);\n    --color-slate-100: oklch(96.8% 0.007 247.896);\n    --color-slate-200: oklch(92.9% 0.013 255.508);\n    --color-slate-300: oklch(86.9% 0.022 252.894);\n    --color-slate-400: oklch(70.4% 0.04 256.788);\n    --color-slate-500: oklch(55.4% 0.046 257.417);\n    --color-slate-600: oklch(44.6% 0.043 257.281);\n    --color-slate-700: oklch(37.2% 0.044 257.287);\n    --color-slate-800: oklch(27.9% 0.041 260.031);\n    --color-slate-900: oklch(20.8% 0.042 265.755);\n    --color-slate-950: oklch(12.9% 0.042 264.695);\n\n    --color-gray-50: oklch(98.5% 0.002 247.839);\n    --color-gray-100: oklch(96.7% 0.003 264.542);\n    --color-gray-200: oklch(92.8% 0.006 264.531);\n    --color-gray-300: oklch(87.2% 0.01 258.338);\n    --color-gray-400: oklch(70.7% 0.022 261.325);\n    --color-gray-500: oklch(55.1% 0.027 264.364);\n    --color-gray-600: oklch(44.6% 0.03 256.802);\n    --color-gray-700: oklch(37.3% 0.034 259.733);\n    --color-gray-800: oklch(27.8% 0.033 256.848);\n    --color-gray-900: oklch(21% 0.034 264.665);\n    --color-gray-950: oklch(13% 0.028 261.692);\n\n    --color-zinc-50: oklch(98.5% 0 0);\n    --color-zinc-100: oklch(96.7% 0.001 286.375);\n    --color-zinc-200: oklch(92% 0.004 286.32);\n    --color-zinc-300: oklch(87.1% 0.006 286.286);\n    --color-zinc-400: oklch(70.5% 0.015 286.067);\n    --color-zinc-500: oklch(55.2% 0.016 285.938);\n    --color-zinc-600: oklch(44.2% 0.017 285.786);\n    --color-zinc-700: oklch(37% 0.013 285.805);\n    --color-zinc-800: oklch(27.4% 0.006 286.033);\n    --color-zinc-900: oklch(21% 0.006 285.885);\n    --color-zinc-950: oklch(14.1% 0.005 285.823);\n\n    --color-neutral-50: oklch(98.5% 0 0);\n    --color-neutral-100: oklch(97% 0 0);\n    --color-neutral-200: oklch(92.2% 0 0);\n    --color-neutral-300: oklch(87% 0 0);\n    --color-neutral-400: oklch(70.8% 0 0);\n    --color-neutral-500: oklch(55.6% 0 0);\n    --color-neutral-600: oklch(43.9% 0 0);\n    --color-neutral-700: oklch(37.1% 0 0);\n    --color-neutral-800: oklch(26.9% 0 0);\n    --color-neutral-900: oklch(20.5% 0 0);\n    --color-neutral-950: oklch(14.5% 0 0);\n\n    --color-stone-50: oklch(98.5% 0.001 106.423);\n    --color-stone-100: oklch(97% 0.001 106.424);\n    --color-stone-200: oklch(92.3% 0.003 48.717);\n    --color-stone-300: oklch(86.9% 0.005 56.366);\n    --color-stone-400: oklch(70.9% 0.01 56.259);\n    --color-stone-500: oklch(55.3% 0.013 58.071);\n    --color-stone-600: oklch(44.4% 0.011 73.639);\n    --color-stone-700: oklch(37.4% 0.01 67.558);\n    --color-stone-800: oklch(26.8% 0.007 34.298);\n    --color-stone-900: oklch(21.6% 0.006 56.043);\n    --color-stone-950: oklch(14.7% 0.004 49.25);\n\n    --color-mauve-50: oklch(98.5% 0 0);\n    --color-mauve-100: oklch(96% 0.003 325.6);\n    --color-mauve-200: oklch(92.2% 0.005 325.62);\n    --color-mauve-300: oklch(86.5% 0.012 325.68);\n    --color-mauve-400: oklch(71.1% 0.019 323.02);\n    --color-mauve-500: oklch(54.2% 0.034 322.5);\n    --color-mauve-600: oklch(43.5% 0.029 321.78);\n    --color-mauve-700: oklch(36.4% 0.029 323.89);\n    --color-mauve-800: oklch(26.3% 0.024 320.12);\n    --color-mauve-900: oklch(21.2% 0.019 322.12);\n    --color-mauve-950: oklch(14.5% 0.008 326);\n\n    --color-olive-50: oklch(98.8% 0.003 106.5);\n    --color-olive-100: oklch(96.6% 0.005 106.5);\n    --color-olive-200: oklch(93% 0.007 106.5);\n    --color-olive-300: oklch(88% 0.011 106.6);\n    --color-olive-400: oklch(73.7% 0.021 106.9);\n    --color-olive-500: oklch(58% 0.031 107.3);\n    --color-olive-600: oklch(46.6% 0.025 107.3);\n    --color-olive-700: oklch(39.4% 0.023 107.4);\n    --color-olive-800: oklch(28.6% 0.016 107.4);\n    --color-olive-900: oklch(22.8% 0.013 107.4);\n    --color-olive-950: oklch(15.3% 0.006 107.1);\n\n    --color-mist-50: oklch(98.7% 0.002 197.1);\n    --color-mist-100: oklch(96.3% 0.002 197.1);\n    --color-mist-200: oklch(92.5% 0.005 214.3);\n    --color-mist-300: oklch(87.2% 0.007 219.6);\n    --color-mist-400: oklch(72.3% 0.014 214.4);\n    --color-mist-500: oklch(56% 0.021 213.5);\n    --color-mist-600: oklch(45% 0.017 213.2);\n    --color-mist-700: oklch(37.8% 0.015 216);\n    --color-mist-800: oklch(27.5% 0.011 216.9);\n    --color-mist-900: oklch(21.8% 0.008 223.9);\n    --color-mist-950: oklch(14.8% 0.004 228.8);\n\n    --color-taupe-50: oklch(98.6% 0.002 67.8);\n    --color-taupe-100: oklch(96% 0.002 17.2);\n    --color-taupe-200: oklch(92.2% 0.005 34.3);\n    --color-taupe-300: oklch(86.8% 0.007 39.5);\n    --color-taupe-400: oklch(71.4% 0.014 41.2);\n    --color-taupe-500: oklch(54.7% 0.021 43.1);\n    --color-taupe-600: oklch(43.8% 0.017 39.3);\n    --color-taupe-700: oklch(36.7% 0.016 35.7);\n    --color-taupe-800: oklch(26.8% 0.011 36.5);\n    --color-taupe-900: oklch(21.4% 0.009 43.1);\n    --color-taupe-950: oklch(14.7% 0.004 49.3);\n\n    --color-black: #000;\n    --color-white: #fff;\n\n    --spacing: 0.25rem;\n\n    --breakpoint-sm: 40rem;\n    --breakpoint-md: 48rem;\n    --breakpoint-lg: 64rem;\n    --breakpoint-xl: 80rem;\n    --breakpoint-2xl: 96rem;\n\n    --container-3xs: 16rem;\n    --container-2xs: 18rem;\n    --container-xs: 20rem;\n    --container-sm: 24rem;\n    --container-md: 28rem;\n    --container-lg: 32rem;\n    --container-xl: 36rem;\n    --container-2xl: 42rem;\n    --container-3xl: 48rem;\n    --container-4xl: 56rem;\n    --container-5xl: 64rem;\n    --container-6xl: 72rem;\n    --container-7xl: 80rem;\n\n    --text-xs: 0.75rem;\n    --text-xs--line-height: calc(1 / 0.75);\n    --text-sm: 0.875rem;\n    --text-sm--line-height: calc(1.25 / 0.875);\n    --text-base: 1rem;\n    --text-base--line-height: calc(1.5 / 1);\n    --text-lg: 1.125rem;\n    --text-lg--line-height: calc(1.75 / 1.125);\n    --text-xl: 1.25rem;\n    --text-xl--line-height: calc(1.75 / 1.25);\n    --text-2xl: 1.5rem;\n    --text-2xl--line-height: calc(2 / 1.5);\n    --text-3xl: 1.875rem;\n    --text-3xl--line-height: calc(2.25 / 1.875);\n    --text-4xl: 2.25rem;\n    --text-4xl--line-height: calc(2.5 / 2.25);\n    --text-5xl: 3rem;\n    --text-5xl--line-height: 1;\n    --text-6xl: 3.75rem;\n    --text-6xl--line-height: 1;\n    --text-7xl: 4.5rem;\n    --text-7xl--line-height: 1;\n    --text-8xl: 6rem;\n    --text-8xl--line-height: 1;\n    --text-9xl: 8rem;\n    --text-9xl--line-height: 1;\n\n    --font-weight-thin: 100;\n    --font-weight-extralight: 200;\n    --font-weight-light: 300;\n    --font-weight-normal: 400;\n    --font-weight-medium: 500;\n    --font-weight-semibold: 600;\n    --font-weight-bold: 700;\n    --font-weight-extrabold: 800;\n    --font-weight-black: 900;\n\n    --tracking-tighter: -0.05em;\n    --tracking-tight: -0.025em;\n    --tracking-normal: 0em;\n    --tracking-wide: 0.025em;\n    --tracking-wider: 0.05em;\n    --tracking-widest: 0.1em;\n\n    --leading-tight: 1.25;\n    --leading-snug: 1.375;\n    --leading-normal: 1.5;\n    --leading-relaxed: 1.625;\n    --leading-loose: 2;\n\n    --radius-xs: 0.125rem;\n    --radius-sm: 0.25rem;\n    --radius-md: 0.375rem;\n    --radius-lg: 0.5rem;\n    --radius-xl: 0.75rem;\n    --radius-2xl: 1rem;\n    --radius-3xl: 1.5rem;\n    --radius-4xl: 2rem;\n\n    --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);\n    --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n    --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n    --shadow-md:\n      0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n    --shadow-lg:\n      0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n    --shadow-xl:\n      0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n\n    --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);\n    --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);\n    --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);\n\n    --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);\n    --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);\n    --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);\n    --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);\n    --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);\n    --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);\n\n    --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);\n    --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);\n    --text-shadow-sm:\n      0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075),\n      0px 2px 2px rgb(0 0 0 / 0.075);\n    --text-shadow-md:\n      0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1),\n      0px 2px 4px rgb(0 0 0 / 0.1);\n    --text-shadow-lg:\n      0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1),\n      0px 4px 8px rgb(0 0 0 / 0.1);\n\n    --ease-in: cubic-bezier(0.4, 0, 1, 1);\n    --ease-out: cubic-bezier(0, 0, 0.2, 1);\n    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);\n\n    --animate-spin: spin 1s linear infinite;\n    --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n    --animate-bounce: bounce 1s infinite;\n\n    @keyframes spin {\n      to {\n        transform: rotate(360deg);\n      }\n    }\n\n    @keyframes ping {\n      75%,\n      100% {\n        transform: scale(2);\n        opacity: 0;\n      }\n    }\n\n    @keyframes pulse {\n      50% {\n        opacity: 0.5;\n      }\n    }\n\n    @keyframes bounce {\n      0%,\n      100% {\n        transform: translateY(-25%);\n        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n      }\n\n      50% {\n        transform: none;\n        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n      }\n    }\n\n    --blur-xs: 4px;\n    --blur-sm: 8px;\n    --blur-md: 12px;\n    --blur-lg: 16px;\n    --blur-xl: 24px;\n    --blur-2xl: 40px;\n    --blur-3xl: 64px;\n\n    --perspective-dramatic: 100px;\n    --perspective-near: 300px;\n    --perspective-normal: 500px;\n    --perspective-midrange: 800px;\n    --perspective-distant: 1200px;\n\n    --aspect-video: 16 / 9;\n\n    --default-transition-duration: 150ms;\n    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    --default-font-family: --theme(--font-sans, initial);\n    --default-font-feature-settings: --theme(\n      --font-sans--font-feature-settings,\n      initial\n    );\n    --default-font-variation-settings: --theme(\n      --font-sans--font-variation-settings,\n      initial\n    );\n    --default-mono-font-family: --theme(--font-mono, initial);\n    --default-mono-font-feature-settings: --theme(\n      --font-mono--font-feature-settings,\n      initial\n    );\n    --default-mono-font-variation-settings: --theme(\n      --font-mono--font-variation-settings,\n      initial\n    );\n  }\n\n  /* Deprecated */\n  @theme default inline reference {\n    --blur: 8px;\n    --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n    --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);\n    --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);\n    --radius: 0.25rem;\n    --max-width-prose: 65ch;\n  }\n}\n\n@layer base {\n  /*\n  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n  2. Remove default margins and padding\n  3. Reset all borders.\n*/\n\n  *,\n  ::after,\n  ::before,\n  ::backdrop,\n  ::file-selector-button {\n    box-sizing: border-box; /* 1 */\n    margin: 0; /* 2 */\n    padding: 0; /* 2 */\n    border: 0 solid; /* 3 */\n  }\n\n  /*\n  1. Use a consistent sensible line-height in all browsers.\n  2. Prevent adjustments of font size after orientation changes in iOS.\n  3. Use a more readable tab size.\n  4. Use the user's configured `sans` font-family by default.\n  5. Use the user's configured `sans` font-feature-settings by default.\n  6. Use the user's configured `sans` font-variation-settings by default.\n  7. Disable tap highlights on iOS.\n*/\n\n  html,\n  :host {\n    line-height: 1.5; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    tab-size: 4; /* 3 */\n    font-family: --theme(\n      --default-font-family,\n      ui-sans-serif,\n      system-ui,\n      sans-serif,\n      \"Apple Color Emoji\",\n      \"Segoe UI Emoji\",\n      \"Segoe UI Symbol\",\n      \"Noto Color Emoji\"\n    ); /* 4 */\n    font-feature-settings: --theme(\n      --default-font-feature-settings,\n      normal\n    ); /* 5 */\n    font-variation-settings: --theme(\n      --default-font-variation-settings,\n      normal\n    ); /* 6 */\n    -webkit-tap-highlight-color: transparent; /* 7 */\n  }\n\n  /*\n  1. Add the correct height in Firefox.\n  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n  3. Reset the default border style to a 1px solid border.\n*/\n\n  hr {\n    height: 0; /* 1 */\n    color: inherit; /* 2 */\n    border-top-width: 1px; /* 3 */\n  }\n\n  /*\n  Add the correct text decoration in Chrome, Edge, and Safari.\n*/\n\n  abbr:where([title]) {\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n\n  /*\n  Remove the default font size and weight for headings.\n*/\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n\n  /*\n  Reset links to optimize for opt-in styling instead of opt-out.\n*/\n\n  a {\n    color: inherit;\n    -webkit-text-decoration: inherit;\n    text-decoration: inherit;\n  }\n\n  /*\n  Add the correct font weight in Edge and Safari.\n*/\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  /*\n  1. Use the user's configured `mono` font-family by default.\n  2. Use the user's configured `mono` font-feature-settings by default.\n  3. Use the user's configured `mono` font-variation-settings by default.\n  4. Correct the odd `em` font sizing in all browsers.\n*/\n\n  code,\n  kbd,\n  samp,\n  pre {\n    font-family: --theme(\n      --default-mono-font-family,\n      ui-monospace,\n      SFMono-Regular,\n      Menlo,\n      Monaco,\n      Consolas,\n      \"Liberation Mono\",\n      \"Courier New\",\n      monospace\n    ); /* 1 */\n    font-feature-settings: --theme(\n      --default-mono-font-feature-settings,\n      normal\n    ); /* 2 */\n    font-variation-settings: --theme(\n      --default-mono-font-variation-settings,\n      normal\n    ); /* 3 */\n    font-size: 1em; /* 4 */\n  }\n\n  /*\n  Add the correct font size in all browsers.\n*/\n\n  small {\n    font-size: 80%;\n  }\n\n  /*\n  Prevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  /*\n  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n  3. Remove gaps between table borders by default.\n*/\n\n  table {\n    text-indent: 0; /* 1 */\n    border-color: inherit; /* 2 */\n    border-collapse: collapse; /* 3 */\n  }\n\n  /*\n  Use the modern Firefox focus style for all focusable elements.\n*/\n\n  :-moz-focusring {\n    outline: auto;\n  }\n\n  /*\n  Add the correct vertical alignment in Chrome and Firefox.\n*/\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  /*\n  Add the correct display in Chrome and Safari.\n*/\n\n  summary {\n    display: list-item;\n  }\n\n  /*\n  Make lists unstyled by default.\n*/\n\n  ol,\n  ul,\n  menu {\n    list-style: none;\n  }\n\n  /*\n  1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n  2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n      This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\n  img,\n  svg,\n  video,\n  canvas,\n  audio,\n  iframe,\n  embed,\n  object {\n    display: block; /* 1 */\n    vertical-align: middle; /* 2 */\n  }\n\n  /*\n  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\n  img,\n  video {\n    max-width: 100%;\n    height: auto;\n  }\n\n  /*\n  1. Inherit font styles in all browsers.\n  2. Remove border radius in all browsers.\n  3. Remove background color in all browsers.\n  4. Ensure consistent opacity for disabled states in all browsers.\n*/\n\n  button,\n  input,\n  select,\n  optgroup,\n  textarea,\n  ::file-selector-button {\n    font: inherit; /* 1 */\n    font-feature-settings: inherit; /* 1 */\n    font-variation-settings: inherit; /* 1 */\n    letter-spacing: inherit; /* 1 */\n    color: inherit; /* 1 */\n    border-radius: 0; /* 2 */\n    background-color: transparent; /* 3 */\n    opacity: 1; /* 4 */\n  }\n\n  /*\n  Restore default font weight.\n*/\n\n  :where(select:is([multiple], [size])) optgroup {\n    font-weight: bolder;\n  }\n\n  /*\n  Restore indentation.\n*/\n\n  :where(select:is([multiple], [size])) optgroup option {\n    padding-inline-start: 20px;\n  }\n\n  /*\n  Restore space after button.\n*/\n\n  ::file-selector-button {\n    margin-inline-end: 4px;\n  }\n\n  /*\n  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n*/\n\n  ::placeholder {\n    opacity: 1;\n  }\n\n  /*\n  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not\n  crash when using `color-mix(…)` with `currentcolor`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)\n*/\n\n  @supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or\n    (contain-intrinsic-size: 1px) /* Safari 17+ */ {\n    ::placeholder {\n      color: color-mix(in oklab, currentcolor 50%, transparent);\n    }\n  }\n\n  /*\n  Prevent resizing textareas horizontally by default.\n*/\n\n  textarea {\n    resize: vertical;\n  }\n\n  /*\n  Remove the inner padding in Chrome and Safari on macOS.\n*/\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  /*\n  1. Ensure date/time inputs have the same height when empty in iOS Safari.\n  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.\n*/\n\n  ::-webkit-date-and-time-value {\n    min-height: 1lh; /* 1 */\n    text-align: inherit; /* 2 */\n  }\n\n  /*\n  Prevent height from changing on date/time inputs in macOS Safari when the input is set to `display: block`.\n*/\n\n  ::-webkit-datetime-edit {\n    display: inline-flex;\n  }\n\n  /*\n  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.\n*/\n\n  ::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n  }\n\n  ::-webkit-datetime-edit,\n  ::-webkit-datetime-edit-year-field,\n  ::-webkit-datetime-edit-month-field,\n  ::-webkit-datetime-edit-day-field,\n  ::-webkit-datetime-edit-hour-field,\n  ::-webkit-datetime-edit-minute-field,\n  ::-webkit-datetime-edit-second-field,\n  ::-webkit-datetime-edit-millisecond-field,\n  ::-webkit-datetime-edit-meridiem-field {\n    padding-block: 0;\n  }\n\n  /*\n  Center dropdown marker shown on inputs with paired `<datalist>`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)\n*/\n\n  ::-webkit-calendar-picker-indicator {\n    line-height: 1;\n  }\n\n  /*\n  Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n  :-moz-ui-invalid {\n    box-shadow: none;\n  }\n\n  /*\n  Correct the inability to style the border radius in iOS Safari.\n*/\n\n  button,\n  input:where([type=\"button\"], [type=\"reset\"], [type=\"submit\"]),\n  ::file-selector-button {\n    appearance: button;\n  }\n\n  /*\n  Correct the cursor style of increment and decrement buttons in Safari.\n*/\n\n  ::-webkit-inner-spin-button,\n  ::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  /*\n  Make elements with the HTML hidden attribute stay hidden by default.\n*/\n\n  [hidden]:where(:not([hidden=\"until-found\"])) {\n    display: none !important;\n  }\n}\n\n@layer utilities {\n  @tailwind utilities;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/scss/main.scss"
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/scss/main.scss ***!
  \***************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/* 

Si des class peuvent être centralisées et réutilisées sur plusieurs fichiers, n'hésite pas à créer un fichier séparé qu'on peut réutiliser partout 
ex : couleurs, cta , fonts , animations , container ... 

Tu gagneras du temps dans ton css et le reste du développement. 

*/
.container {
  width: 80vw;
  max-width: 1200px;
  margin: auto;
}
.container.columns, .container.flex {
  display: flex;
  gap: 50px;
}
.container.columns .col-1, .container.flex .col-1 {
  width: 1%;
}
.container.columns .col-2, .container.flex .col-2 {
  width: 2%;
}
.container.columns .col-3, .container.flex .col-3 {
  width: 3%;
}
.container.columns .col-4, .container.flex .col-4 {
  width: 4%;
}
.container.columns .col-5, .container.flex .col-5 {
  width: 5%;
}
.container.columns .col-6, .container.flex .col-6 {
  width: 6%;
}
.container.columns .col-7, .container.flex .col-7 {
  width: 7%;
}
.container.columns .col-8, .container.flex .col-8 {
  width: 8%;
}
.container.columns .col-9, .container.flex .col-9 {
  width: 9%;
}
.container.columns .col-10, .container.flex .col-10 {
  width: 10%;
}
.container.columns .col-11, .container.flex .col-11 {
  width: 11%;
}
.container.columns .col-12, .container.flex .col-12 {
  width: 12%;
}
.container.columns .col-13, .container.flex .col-13 {
  width: 13%;
}
.container.columns .col-14, .container.flex .col-14 {
  width: 14%;
}
.container.columns .col-15, .container.flex .col-15 {
  width: 15%;
}
.container.columns .col-16, .container.flex .col-16 {
  width: 16%;
}
.container.columns .col-17, .container.flex .col-17 {
  width: 17%;
}
.container.columns .col-18, .container.flex .col-18 {
  width: 18%;
}
.container.columns .col-19, .container.flex .col-19 {
  width: 19%;
}
.container.columns .col-20, .container.flex .col-20 {
  width: 20%;
}
.container.columns .col-21, .container.flex .col-21 {
  width: 21%;
}
.container.columns .col-22, .container.flex .col-22 {
  width: 22%;
}
.container.columns .col-23, .container.flex .col-23 {
  width: 23%;
}
.container.columns .col-24, .container.flex .col-24 {
  width: 24%;
}
.container.columns .col-25, .container.flex .col-25 {
  width: 25%;
}
.container.columns .col-26, .container.flex .col-26 {
  width: 26%;
}
.container.columns .col-27, .container.flex .col-27 {
  width: 27%;
}
.container.columns .col-28, .container.flex .col-28 {
  width: 28%;
}
.container.columns .col-29, .container.flex .col-29 {
  width: 29%;
}
.container.columns .col-30, .container.flex .col-30 {
  width: 30%;
}
.container.columns .col-31, .container.flex .col-31 {
  width: 31%;
}
.container.columns .col-32, .container.flex .col-32 {
  width: 32%;
}
.container.columns .col-33, .container.flex .col-33 {
  width: 33%;
}
.container.columns .col-34, .container.flex .col-34 {
  width: 34%;
}
.container.columns .col-35, .container.flex .col-35 {
  width: 35%;
}
.container.columns .col-36, .container.flex .col-36 {
  width: 36%;
}
.container.columns .col-37, .container.flex .col-37 {
  width: 37%;
}
.container.columns .col-38, .container.flex .col-38 {
  width: 38%;
}
.container.columns .col-39, .container.flex .col-39 {
  width: 39%;
}
.container.columns .col-40, .container.flex .col-40 {
  width: 40%;
}
.container.columns .col-41, .container.flex .col-41 {
  width: 41%;
}
.container.columns .col-42, .container.flex .col-42 {
  width: 42%;
}
.container.columns .col-43, .container.flex .col-43 {
  width: 43%;
}
.container.columns .col-44, .container.flex .col-44 {
  width: 44%;
}
.container.columns .col-45, .container.flex .col-45 {
  width: 45%;
}
.container.columns .col-46, .container.flex .col-46 {
  width: 46%;
}
.container.columns .col-47, .container.flex .col-47 {
  width: 47%;
}
.container.columns .col-48, .container.flex .col-48 {
  width: 48%;
}
.container.columns .col-49, .container.flex .col-49 {
  width: 49%;
}
.container.columns .col-50, .container.flex .col-50 {
  width: 50%;
}
.container.columns .col-51, .container.flex .col-51 {
  width: 51%;
}
.container.columns .col-52, .container.flex .col-52 {
  width: 52%;
}
.container.columns .col-53, .container.flex .col-53 {
  width: 53%;
}
.container.columns .col-54, .container.flex .col-54 {
  width: 54%;
}
.container.columns .col-55, .container.flex .col-55 {
  width: 55%;
}
.container.columns .col-56, .container.flex .col-56 {
  width: 56%;
}
.container.columns .col-57, .container.flex .col-57 {
  width: 57%;
}
.container.columns .col-58, .container.flex .col-58 {
  width: 58%;
}
.container.columns .col-59, .container.flex .col-59 {
  width: 59%;
}
.container.columns .col-60, .container.flex .col-60 {
  width: 60%;
}
.container.columns .col-61, .container.flex .col-61 {
  width: 61%;
}
.container.columns .col-62, .container.flex .col-62 {
  width: 62%;
}
.container.columns .col-63, .container.flex .col-63 {
  width: 63%;
}
.container.columns .col-64, .container.flex .col-64 {
  width: 64%;
}
.container.columns .col-65, .container.flex .col-65 {
  width: 65%;
}
.container.columns .col-66, .container.flex .col-66 {
  width: 66%;
}
.container.columns .col-67, .container.flex .col-67 {
  width: 67%;
}
.container.columns .col-68, .container.flex .col-68 {
  width: 68%;
}
.container.columns .col-69, .container.flex .col-69 {
  width: 69%;
}
.container.columns .col-70, .container.flex .col-70 {
  width: 70%;
}
.container.columns .col-71, .container.flex .col-71 {
  width: 71%;
}
.container.columns .col-72, .container.flex .col-72 {
  width: 72%;
}
.container.columns .col-73, .container.flex .col-73 {
  width: 73%;
}
.container.columns .col-74, .container.flex .col-74 {
  width: 74%;
}
.container.columns .col-75, .container.flex .col-75 {
  width: 75%;
}
.container.columns .col-76, .container.flex .col-76 {
  width: 76%;
}
.container.columns .col-77, .container.flex .col-77 {
  width: 77%;
}
.container.columns .col-78, .container.flex .col-78 {
  width: 78%;
}
.container.columns .col-79, .container.flex .col-79 {
  width: 79%;
}
.container.columns .col-80, .container.flex .col-80 {
  width: 80%;
}
.container.columns .col-81, .container.flex .col-81 {
  width: 81%;
}
.container.columns .col-82, .container.flex .col-82 {
  width: 82%;
}
.container.columns .col-83, .container.flex .col-83 {
  width: 83%;
}
.container.columns .col-84, .container.flex .col-84 {
  width: 84%;
}
.container.columns .col-85, .container.flex .col-85 {
  width: 85%;
}
.container.columns .col-86, .container.flex .col-86 {
  width: 86%;
}
.container.columns .col-87, .container.flex .col-87 {
  width: 87%;
}
.container.columns .col-88, .container.flex .col-88 {
  width: 88%;
}
.container.columns .col-89, .container.flex .col-89 {
  width: 89%;
}
.container.columns .col-90, .container.flex .col-90 {
  width: 90%;
}
.container.columns .col-91, .container.flex .col-91 {
  width: 91%;
}
.container.columns .col-92, .container.flex .col-92 {
  width: 92%;
}
.container.columns .col-93, .container.flex .col-93 {
  width: 93%;
}
.container.columns .col-94, .container.flex .col-94 {
  width: 94%;
}
.container.columns .col-95, .container.flex .col-95 {
  width: 95%;
}
.container.columns .col-96, .container.flex .col-96 {
  width: 96%;
}
.container.columns .col-97, .container.flex .col-97 {
  width: 97%;
}
.container.columns .col-98, .container.flex .col-98 {
  width: 98%;
}
.container.columns .col-99, .container.flex .col-99 {
  width: 99%;
}
.container.columns .col-100, .container.flex .col-100 {
  width: 100%;
}
.container.grid {
  display: grid;
  gap: 50px;
}
.container.-full {
  width: 90vw;
  max-width: 1500px;
}

.block-img img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

.btn-cta {
  display: flex;
  align-items: center;
  gap: 80px;
  color: #05233c;
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 1px;
  z-index: 0;
  font-weight: 500;
  text-transform: uppercase;
  padding-bottom: 6px;
  position: relative;
  border-bottom: 1px solid rgba(5, 35, 60, 0.4);
  margin-top: 16px;
  transition: gap 0.25s ease, border-color 0.25s ease;
  width: -moz-fit-content;
  width: fit-content;
}
.btn-cta::after {
  content: "↘";
  font-size: 0.85rem;
  color: #d3bea1;
  transform: rotate(0deg);
  transition: all ease-in 300ms;
}
.btn-cta:hover {
  gap: 100px;
  border-bottom: 1px solid;
  color: #d3bea1;
}
.btn-cta:hover::after {
  transform: rotate(-90deg);
}

.site-header {
  width: 100%;
  z-index: 100;
  padding: 30px 40px;
  position: relative;
}
.site-header .header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}
.site-header .header-inner .header-logo {
  flex-shrink: 0;
  width: 180px;
  display: block;
}
.site-header .header-inner .header-logo img {
  width: 100%;
  height: auto;
  display: block;
}
.site-header .header-inner .header-nav {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.site-header .header-inner .header-nav .navbar {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 0;
  padding: 0;
}
.site-header .header-inner .header-nav .navbar > li {
  position: relative;
}
.site-header .header-inner .header-nav .navbar > li > a {
  color: #05233c;
  text-decoration: none;
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: opacity 0.2s ease;
}
.site-header .header-inner .header-nav .navbar > li > a:hover {
  opacity: 0.7;
}
.site-header .header-inner .header-nav .navbar > li.menu-item-has-children > a::after {
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #fff;
  margin-top: 2px;
  transition: transform 0.2s ease;
}
.site-header .header-inner .header-nav .navbar > li.menu-item-has-children .sub-menu {
  position: absolute;
  top: calc(100% + 20px);
  left: 0;
  background-color: rgba(255, 255, 255, 0.6);
  min-width: 220px;
  list-style: none;
  padding: 0;
  margin: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-6px);
  transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;
}
.site-header .header-inner .header-nav .navbar > li.menu-item-has-children .sub-menu li a {
  display: block;
  padding: 12px 20px;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  color: #05233c;
  text-decoration: none;
  border-bottom: 1px solid #e2e2e2;
  transition: color 0.2s ease;
}
.site-header .header-inner .header-nav .navbar > li.menu-item-has-children .sub-menu li a:hover {
  color: #d3bea1;
}
.site-header .header-inner .header-nav .navbar > li.menu-item-has-children .sub-menu li:last-child a {
  border-bottom: none;
}
.site-header .header-inner .header-nav .navbar > li.menu-item-has-children:hover > a::after {
  transform: rotate(180deg);
}
.site-header .header-inner .header-nav .navbar > li.menu-item-has-children:hover .sub-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.site-header .header-actions {
  display: flex;
  align-items: center;
  gap: 30px;
  flex-shrink: 0;
}
.site-header .header-actions .header-separator {
  display: block;
  width: 1px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.4);
}
.site-header .header-actions .burger-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.site-header .header-actions .burger-btn span {
  display: block;
  width: 28px;
  height: 1.5px;
  background-color: #05233c;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.site-header .header-actions .burger-btn span:last-child {
  width: 18px;
}
.site-header .header-actions .burger-btn.is-active span {
  background-color: #fff;
}
.site-header .header-actions .burger-btn.is-active span:nth-child(1) {
  transform: translateY(7.5px) rotate(45deg);
}
.site-header .header-actions .burger-btn.is-active span:nth-child(2) {
  opacity: 0;
}
.site-header .header-actions .burger-btn.is-active span:nth-child(3) {
  transform: translateY(-7.5px) rotate(-45deg);
  width: 28px;
}
.site-header.-frontpage {
  position: absolute;
  top: 0;
  left: 0;
}
.site-header.-frontpage .header-inner .header-nav .navbar > li > a {
  color: #fff;
}
.site-header.-frontpage .header-actions .burger-btn span {
  background-color: #fff;
}

.mobile-menu {
  position: fixed;
  inset: 0;
  background-color: #05233c;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transform: translateX(100%);
  transition: transform 0.4s ease, opacity 0.3s ease, visibility 0.4s;
}
.mobile-menu.is-open {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}
.mobile-menu .mobile-navbar {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}
.mobile-menu .mobile-navbar > li {
  padding: 16px 0;
}
.mobile-menu .mobile-navbar > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.4rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: color 0.2s ease;
}
.mobile-menu .mobile-navbar > li > a:hover {
  color: #d3bea1;
}
.mobile-menu .mobile-navbar > li .sub-menu {
  list-style: none;
  padding: 10px 0 0;
  margin: 0;
}
.mobile-menu .mobile-navbar > li .sub-menu li {
  padding: 6px 0;
}
.mobile-menu .mobile-navbar > li .sub-menu li a {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  letter-spacing: 0.06em;
  transition: color 0.2s ease;
}
.mobile-menu .mobile-navbar > li .sub-menu li a:hover {
  color: #fff;
}

@media (max-width: 768px) {
  .site-header {
    padding: 20px;
  }
  .header-nav {
    display: none;
  }
  .header-separator {
    display: none;
  }
}
.site-footer {
  background-color: #05233c;
  padding: 80px 8%;
  position: relative;
}
.site-footer .footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 60px;
}
.site-footer .footer-top .footer-left {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.site-footer .footer-top .footer-left .footer-titre {
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.1;
}
.site-footer .footer-top .footer-left .footer-lien {
  color: #d3bea1;
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 0.05em;
}
.site-footer .footer-top .footer-left .footer-lien:hover {
  text-decoration: underline;
}
.site-footer .footer-top .footer-right {
  width: 40%;
  padding-top: 20px;
}
.site-footer .footer-top .footer-right .footer-texte {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.7;
}
.site-footer .footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 30px;
}
.site-footer .footer-bottom .footer-made-by {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.75rem;
}
.site-footer .footer-bottom .footer-nav {
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.site-footer .footer-bottom .footer-nav li a {
  color: #fff;
  text-decoration: none;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
.site-footer .footer-bottom .footer-nav li a:hover {
  color: #d3bea1;
}

.scroll-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 44px;
  height: 44px;
  background-color: #d3bea1;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1rem;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
}
.scroll-top.visible {
  opacity: 1;
  visibility: visible;
}

@media (max-width: 768px) {
  .site-footer {
    padding: 60px 5%;
  }
  .site-footer .footer-top {
    flex-direction: column;
    gap: 40px;
  }
  .site-footer .footer-top .footer-left,
  .site-footer .footer-top .footer-right {
    width: 100%;
  }
  .site-footer .footer-bottom {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  .site-footer .footer-bottom .footer-nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}
.galerie-reference .swiper-reference {
  height: 90vh;
}
.galerie-reference .swiper-reference .swiper-slide img {
  -o-object-fit: cover;
     object-fit: cover;
  width: 100%;
  height: 100%;
}

.bloc-reference {
  padding-top: 150px;
}
.bloc-reference .container .cold .section-informations {
  padding: 0 100px 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.bloc-reference .container .cold .section-informations p {
  font-weight: 200;
}
.bloc-reference .container .cold .section-informations p strong {
  font-weight: 400;
}

.slider-fullwidth {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.swiper-fullwidth {
  width: 100%;
  height: 100vh;
}
.swiper-fullwidth .swiper-slide {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.swiper-fullwidth .swiper-slide .background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.swiper-fullwidth .swiper-slide .background img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  display: block;
}
.swiper-fullwidth .swiper-slide .content {
  position: absolute;
  bottom: 110px;
  left: 10%;
  z-index: 1;
  max-width: 60%;
}
.swiper-fullwidth .swiper-slide .content .content-titre {
  color: #fff;
  font-size: 6rem;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 30px;
}
.swiper-fullwidth .swiper-slide .content .btn-cta {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: #fff;
  text-decoration: none;
  font-size: 0.68rem;
  font-weight: 500;
  text-transform: uppercase;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.55);
  transition: gap 0.25s ease, border-color 0.25s ease;
}
.swiper-fullwidth .swiper-slide .content .btn-cta::after {
  content: "↘";
  font-size: 0.85rem;
  line-height: 1;
}
.swiper-fullwidth .block-pagination {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  background-color: #fff;
  width: clamp(220px, 26vw, 400px);
  height: 90px;
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.swiper-fullwidth .block-pagination .block-scrollbar {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
}
.swiper-fullwidth .block-pagination .block-scrollbar .number-slide {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: #05233c;
  min-width: 18px;
}
.swiper-fullwidth .block-pagination .block-scrollbar .swiper-scrollbar {
  flex: 1;
  height: 1px;
  background-color: #e2e2e2;
  border-radius: 0;
  position: relative;
  top: auto;
  left: auto;
}
.swiper-fullwidth .block-pagination .block-scrollbar .swiper-scrollbar .swiper-scrollbar-drag {
  height: 100%;
  background-color: #05233c;
  border-radius: 0;
  cursor: pointer;
}
.swiper-fullwidth .block-pagination .swiper-pagination {
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  width: auto;
}
.swiper-fullwidth .block-pagination .swiper-pagination .swiper-pagination-bullet {
  width: 7px;
  height: 7px;
  background-color: #e2e2e2;
  opacity: 1;
  margin: 0;
  transition: background-color 0.25s ease;
}
.swiper-fullwidth .block-pagination .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #05233c;
}

@media (max-width: 1024px) {
  .swiper-fullwidth .swiper-slide .content {
    left: 7%;
    max-width: 75%;
  }
}
@media (max-width: 768px) {
  .swiper-fullwidth .swiper-slide .content {
    left: 5%;
    bottom: 90px;
    max-width: 90%;
  }
  .swiper-fullwidth .block-pagination {
    width: 100%;
    height: 72px;
    padding: 0 20px;
  }
}
.section-text-evidence {
  background-color: #fff;
  padding: 90px 0;
}
.section-text-evidence .section-inner {
  max-width: 65%;
}
.section-text-evidence .section-label {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 36px;
}
.section-text-evidence .section-label span {
  font-size: 0.9rem;
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
  color: #05233c;
  white-space: nowrap;
}
.section-text-evidence .section-label::after {
  content: "";
  display: block;
  height: 1px;
  width: 60px;
  background-color: #d3bea1;
  opacity: 0.4;
}
.section-text-evidence .section-content {
  margin-bottom: 40px;
}
.section-text-evidence .section-paragraph,
.section-text-evidence .section-content {
  color: #222;
}
.section-text-evidence .section-paragraph p,
.section-text-evidence .section-content p {
  font-size: 4rem;
  line-height: 3.5rem;
  font-weight: 100;
}

@media (max-width: 1024px) {
  .section-text-evidence .section-inner {
    max-width: 80%;
  }
}
@media (max-width: 768px) {
  .section-text-evidence {
    padding: 60px 0;
  }
  .section-text-evidence .section-inner {
    margin: 0;
    max-width: 90%;
  }
}
.section-card-solutions {
  background-color: #fff;
  padding: 80px;
}
.section-card-solutions .cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  padding-bottom: 100px;
  border-bottom: 1px solid #e2e2e2;
}
.section-card-solutions .card {
  display: flex;
  flex-direction: column;
  max-height: 600px;
}
.section-card-solutions .card-image {
  position: relative;
  width: 100%;
  aspect-ratio: 4/5;
  max-height: 500px;
  background-color: #e2e2e2;
}
.section-card-solutions .card-image img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  display: block;
}
.section-card-solutions .card-image .card-plus {
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 80px;
  height: 80px;
  background-color: #fff;
  color: #05233c;
  font-size: 2rem;
  font-weight: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.25s ease, color 0.25s ease;
}
.section-card-solutions .card-image .card-plus:hover {
  background-color: #05233c;
  color: #fff;
}
.section-card-solutions .card-body {
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.section-card-solutions .card-category {
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #d3bea1;
}
.section-card-solutions .card-title {
  font-size: 1.2rem;
  letter-spacing: 5px;
  font-weight: 500;
  text-transform: uppercase;
  color: #05233c;
  margin: 0;
}

@media (max-width: 1024px) {
  .section-card-solutions {
    padding: 60px;
  }
  .section-card-solutions .cards-grid {
    gap: 20px;
  }
}
@media (max-width: 768px) {
  .section-card-solutions {
    padding: 50px;
  }
  .section-card-solutions .cards-grid {
    grid-template-columns: 100%;
    gap: 32px;
  }
}
.section-two-col {
  background-color: #fff;
  padding: 90px 0;
}
.section-two-col .two-col-inner .two-col-left,
.section-two-col .two-col-inner .two-col-right {
  width: 50%;
}
.section-two-col .two-col-inner .two-col-left .section-label {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
}
.section-two-col .two-col-inner .two-col-left .section-label span {
  font-size: 0.9rem;
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
  color: #05233c;
  white-space: nowrap;
}
.section-two-col .two-col-inner .two-col-left .section-label::after {
  content: "";
  display: block;
  height: 1px;
  width: 60px;
  background-color: #05233c;
  opacity: 0.4;
}
.section-two-col .two-col-inner .two-col-left .two-col-title {
  font-size: 4rem;
  line-height: 3.5rem;
  font-weight: 100;
}
.section-two-col .two-col-inner .two-col-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 60px;
}
.section-two-col .two-col-inner .two-col-right .two-col-details,
.section-two-col .two-col-inner .two-col-right .two-col-paragraph {
  font-size: 1rem;
  line-height: 1.8;
  color: #222;
}
.section-two-col .two-col-inner .two-col-right .two-col-details p,
.section-two-col .two-col-inner .two-col-right .two-col-paragraph p {
  margin: 0;
  font-weight: 200;
}

@media (max-width: 1024px) {
  .section-two-col .two-col-inner {
    grid-template-columns: 100%;
    gap: 48px;
    margin: 0;
  }
}
@media (max-width: 768px) {
  .section-two-col {
    padding: 60px 0;
  }
  .section-two-col .two-col-inner {
    grid-template-columns: 100%;
    gap: 32px;
    margin: 0 5%;
  }
  .section-two-col .two-col-right {
    padding-top: 0;
  }
}
.section-gallery {
  position: relative;
  padding: 80px 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  height: 100vh;
}

.swiper-gallery {
  width: 100%;
  overflow: hidden;
  height: 100vh;
}
.swiper-gallery .swiper-slide {
  width: 60%;
}
.swiper-gallery .swiper-slide .gallery-slide-inner {
  position: relative;
}
.swiper-gallery .swiper-slide .gallery-image {
  width: 100%;
  max-height: 100vh;
  aspect-ratio: 4/3;
  background-color: #e2e2e2;
}
.swiper-gallery .swiper-slide .gallery-image img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  display: block;
}
.swiper-gallery .swiper-slide .gallery-info {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #fff;
  padding: 20px 28px;
  min-width: 55%;
}
.swiper-gallery .swiper-slide .gallery-info .gallery-titre {
  font-size: 0.85rem;
  font-weight: 600;
  color: #05233c;
  margin: 0 0 4px;
}
.swiper-gallery .swiper-slide .gallery-info .gallery-description {
  font-size: 0.78rem;
  color: #222;
  margin: 0;
}

.gallery-pagination {
  display: flex;
  justify-content: flex-end;
  width: 80%;
  position: relative;
  bottom: 50px;
}
.gallery-pagination .swiper-pagination-gallery {
  position: relative;
  padding-right: 80px;
}
.gallery-pagination .swiper-pagination-gallery .swiper-pagination-bullet {
  background-color: #e2e2e2;
  opacity: 1;
}
.gallery-pagination .swiper-pagination-gallery .swiper-pagination-bullet-active {
  background-color: #05233c;
}

.gallery-nav {
  position: absolute;
  right: 34%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 2;
}
.gallery-nav button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #e2e2e2;
  background: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  color: #05233c;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease, color 0.2s ease;
}
.gallery-nav button:hover {
  background-color: #05233c;
  color: #fff;
  border-color: #05233c;
}

@media (max-width: 768px) {
  .swiper-gallery .swiper-slide {
    width: 85%;
  }
  .gallery-nav {
    right: 2%;
  }
}
.section-img-text {
  background-color: #fff;
  padding: 90px 0;
}
.section-img-text .section-img-text-inner {
  margin: 0 10%;
  display: grid;
  grid-template-columns: 45% 1fr;
  gap: 80px;
  align-items: center;
}

.img-col {
  padding-bottom: 80px;
}

.img-wrapper {
  position: relative;
  padding-bottom: 120px;
}
.img-wrapper .img-large {
  display: block;
  width: 72%;
  aspect-ratio: 3/4;
  -o-object-fit: cover;
     object-fit: cover;
  position: relative;
  z-index: 1;
}
.img-wrapper .img-small {
  display: block;
  width: 55%;
  aspect-ratio: 4/3;
  -o-object-fit: cover;
     object-fit: cover;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 5;
}

.text-col {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.text-col .section-label {
  display: flex;
  align-items: center;
  gap: 16px;
}
.text-col .section-label span {
  font-size: 0.65rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #05233c;
}
.text-col .section-label::after {
  content: "";
  display: block;
  height: 1px;
  width: 60px;
  background-color: #05233c;
  opacity: 0.4;
}
.text-col .text-col-paragraph {
  font-size: 0.88rem;
  color: #222;
}
.text-col .text-col-paragraph p {
  margin: 0;
}
.text-col .text-col-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.text-col .text-col-list li {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 0.88rem;
  color: #222;
}
.text-col .text-col-list li::before {
  content: "";
  display: inline-block;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  background-color: #d3bea1;
  clip-path: polygon(14% 44%, 0 58%, 30% 85%, 100% 14%, 86% 0%, 30% 62%);
}
.text-col .btn-cta {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: #05233c;
  text-decoration: none;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(5, 35, 60, 0.4);
  margin-top: 8px;
  align-self: flex-start;
  transition: gap 0.25s ease, border-color 0.25s ease;
}
.text-col .btn-cta::after {
  content: "↘";
  font-size: 0.85rem;
  line-height: 1;
}
.text-col .btn-cta:hover {
  gap: 22px;
  border-color: #05233c;
}
.text-col .text-col-title {
  font-size: 3rem;
}

@media (max-width: 1024px) {
  .section-img-text .section-img-text-inner {
    grid-template-columns: 50% 1fr;
    gap: 50px;
    margin: 0;
  }
}
@media (max-width: 768px) {
  .section-img-text {
    padding: 60px 0;
  }
  .section-img-text .section-img-text-inner {
    grid-template-columns: 100%;
    gap: 60px;
    margin: 0 5%;
  }
  .img-col {
    padding-bottom: 60px;
  }
}
.section-projects {
  background-color: #fff;
}

.projects-inner {
  display: grid;
  grid-template-columns: 50% 50%;
  min-height: 500px;
}

.projects-left {
  background-color: #05233c;
  padding: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
}
.projects-left .projects-title {
  color: rgba(255, 255, 255, 0.7);
  font-size: 2rem;
}
.projects-left .projects-paragraph {
  font-size: 0.85rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}
.projects-left .btn-cta {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: #fff;
  text-decoration: none;
  font-size: 0.68rem;
  font-weight: 500;
  text-transform: uppercase;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  align-self: flex-start;
  margin-top: 150px;
  transition: gap 0.25s ease, border-color 0.25s ease;
}
.projects-left .btn-cta::after {
  content: "↗";
  font-size: 0.85rem;
  line-height: 1;
}
.projects-left .btn-cta:hover {
  gap: 22px;
  border-color: #fff;
}

.projects-right {
  position: relative;
  overflow: hidden;
}
.projects-right .swiper-projects {
  width: 100%;
  height: 100%;
}
.projects-right .swiper-projects .swiper-slide {
  position: relative;
  height: 100%;
}
.projects-right .swiper-projects .swiper-slide img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  display: block;
}
.projects-right .swiper-projects .swiper-slide .slide-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
}
.projects-right .swiper-projects .swiper-slide .slide-info .slide-location {
  font-size: 1.5rem;
  color: #fff;
  font-weight: 400;
}
.projects-right .swiper-projects .swiper-slide .slide-info .slide-price {
  background-color: #fff;
  color: #05233c;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 8px 18px;
  border-radius: 40px;
}

.projects-controls {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 28px;
  border-top: 1px solid #e2e2e2;
}

.projects-nav {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}
.projects-nav button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #e2e2e2;
  background: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #05233c;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.projects-nav button:hover {
  background-color: #05233c;
  color: #fff;
  border-color: #05233c;
}

.swiper-scrollbar-projects {
  flex: 1;
  height: 4px;
  background-color: #e2e2e2;
  position: relative;
}
.swiper-scrollbar-projects .swiper-scrollbar-drag {
  height: 100%;
  background-color: #05233c;
  border-radius: 0;
}

.projects-number {
  font-size: 2.4rem;
  font-weight: 700;
  color: #d3bea1;
  flex-shrink: 0;
  min-width: 48px;
  text-align: right;
}

@media (max-width: 768px) {
  .projects-inner {
    grid-template-columns: 100%;
  }
  .projects-right {
    min-height: 300px;
  }
  .projects-left {
    padding: 50px;
  }
  .projects-controls {
    padding: 20px;
  }
}
.section-citation {
  display: flex;
  flex-direction: column;
  min-height: 400px;
}

.citation-block {
  width: 90%;
  background-color: #fff;
  padding: 70px;
  display: flex;
  align-items: center;
}
.citation-block .citation-inner {
  position: relative;
}
.citation-block .citation-name {
  font-size: 1rem;
  color: #d3bea1;
  position: absolute;
  top: 10px;
  left: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.citation-block .citation-text {
  font-size: 4em;
  font-weight: 100;
  line-height: 1;
  color: #222;
  text-indent: 150px;
}

.citation-blue {
  width: 100%;
  min-height: 500px;
  background-color: #05233c;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.citation-blue .citation-deco {
  position: absolute;
  top: -1px;
  right: 15px;
  width: 260px;
  height: 260px;
  background-color: #fff;
  clip-path: polygon(100% 0, 0 0, 0% 100%);
}
.citation-blue .citation-blue-inner {
  padding: 70px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
}
.citation-blue .citation-blue-title {
  color: #fff;
  font-size: 4rem;
  font-weight: 200;
  line-height: 3.5rem;
}
.citation-blue .btn-cta {
  color: #fff;
  border-color: #fff;
}

@media (max-width: 1024px) {
  .citation-block {
    padding: 50px;
  }
  .citation-blue .citation-blue-inner {
    padding: 50px;
  }
}
@media (max-width: 768px) {
  .section-citation {
    flex-direction: column;
  }
  .citation-block {
    width: 100%;
    padding: 50px;
  }
  .citation-blue {
    width: 100%;
  }
  .citation-blue .citation-deco {
    display: none;
  }
  .citation-blue .citation-blue-inner {
    padding: 50px;
  }
}
.section-discover {
  display: flex;
  min-height: 70vh;
  align-items: stretch;
  width: 60%;
  margin: 0 auto;
}
.section-discover .discover-left {
  width: 50%;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 60px;
  padding-right: 60px;
  min-height: 70vh;
  background-color: #05233c;
  background-size: cover;
  background-position: center;
}
.section-discover .discover-right {
  width: 50%;
  background-color: rgb(229, 229, 229);
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 60px;
  padding-right: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}
.section-discover .discover-right .discover-title {
  color: #05233c;
  font-size: 2.2rem;
  line-height: 1.2;
  margin-bottom: 30px;
}
.section-discover .discover-right .discover-paragraph {
  color: #222;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 50px;
}
.section-discover .discover-right .discover-btn {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: #d3bea1;
  color: #fff;
  text-decoration: none;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 16px 30px;
  align-self: flex-end;
}

@media (max-width: 1024px) {
  .section-discover .discover-right {
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media (max-width: 768px) {
  .section-discover {
    flex-direction: column;
  }
  .section-discover .discover-left {
    width: 100%;
    min-height: 300px;
  }
  .section-discover .discover-right {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 5%;
    padding-right: 5%;
  }
  .section-discover .discover-right .discover-btn {
    align-self: flex-start;
  }
}
.section-links {
  background-color: #fff;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 10%;
  padding-right: 10%;
}
.section-links .links-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 30px 0;
  border-top: 1px solid #e2e2e2;
  text-decoration: none;
}
.section-links .links-item:last-child {
  border-bottom: 1px solid #e2e2e2;
}
.section-links .links-item .links-numero {
  font-size: 0.65rem;
  color: #d3bea1;
  letter-spacing: 0.1em;
  min-width: 20px;
}
.section-links .links-item .links-label {
  font-size: 3rem;
  font-weight: 300;
  color: #05233c;
  line-height: 1;
}

@media (max-width: 768px) {
  .section-links {
    padding: 40px 5%;
  }
  .section-links .links-item {
    padding: 20px 0;
  }
  .section-links .links-item .links-label {
    font-size: 2rem;
  }
}
.section-video {
  background-color: #f4f4f4;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 10%;
  padding-right: 10%;
}
.section-video .video-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 50px;
}
.section-video .video-top .video-top-left {
  width: 45%;
}
.section-video .video-top .video-top-left .video-text {
  color: #05233c;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: 30px;
}
.section-video .video-top .video-top-left .video-line {
  border: none;
  border-top: 1px solid #e2e2e2;
  margin: 0;
}
.section-video .video-top .video-top-right {
  width: 40%;
  padding-top: 20px;
}
.section-video .video-top .video-top-right .video-paragraph {
  color: #222;
  font-size: 0.85rem;
  line-height: 1.7;
  margin-top: 120px;
}
.section-video .video-wrapper {
  background-color: #05233c;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
}
.section-video .video-wrapper iframe {
  width: 100%;
  height: 100%;
  display: block;
}

@media (max-width: 1024px) {
  .section-video {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .section-video .video-top .video-top-left {
    width: 50%;
  }
  .section-video .video-top .video-top-right {
    width: 45%;
  }
}
@media (max-width: 768px) {
  .section-video {
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 5%;
    padding-right: 5%;
  }
  .section-video .video-top {
    flex-direction: column;
    gap: 30px;
  }
  .section-video .video-top .video-top-left {
    width: 100%;
  }
  .section-video .video-top .video-top-right {
    width: 100%;
    padding-top: 0;
  }
}
.section-actu {
  background-color: #fff;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 8%;
  padding-right: 8%;
}
.section-actu .actu-title {
  color: #05233c;
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 50px;
}
.section-actu .actu-title strong {
  font-weight: 700;
}
.section-actu .actu-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 50px;
  align-items: start;
}
.section-actu .actu-card .actu-card-img {
  position: relative;
  background-color: #e2e2e2;
  aspect-ratio: 8/3;
  overflow: hidden;
  margin-bottom: 15px;
}
.section-actu .actu-card .actu-card-img img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  display: block;
}
.section-actu .actu-card .actu-card-img .actu-card-plus {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 36px;
  height: 36px;
  background-color: #fff;
  color: #05233c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-decoration: none;
}
.section-actu .actu-card .actu-card-cat {
  display: block;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #d3bea1;
  margin-bottom: 10px;
}
.section-actu .actu-card .actu-card-text {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #222;
}
.section-actu .actu-card:first-child {
  grid-column: span 2;
}
.section-actu .actu-btn-wrap {
  display: flex;
  justify-content: center;
}
.section-actu .actu-btn-wrap .actu-btn {
  display: inline-block;
  background-color: #05233c;
  color: #fff;
  text-decoration: none;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 40px;
  padding-right: 40px;
}

@media (max-width: 1024px) {
  .section-actu .actu-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .section-actu {
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 5%;
    padding-right: 5%;
  }
  .section-actu .actu-grid {
    grid-template-columns: 1fr;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/main.scss","webpack://./src/scss/variables/base.scss","webpack://./src/scss/variables/cta.scss","webpack://./src/scss/variables/colors.scss","webpack://./src/scss/base/header.scss","webpack://./src/scss/base/footer.scss","webpack://./src/scss/base/single-reference.scss","webpack://./src/scss/builder/swiper.scss","webpack://./src/scss/builder/section2.scss","webpack://./src/scss/builder/section3.scss","webpack://./src/scss/builder/section4.scss","webpack://./src/scss/builder/section5.scss","webpack://./src/scss/builder/section6.scss","webpack://./src/scss/builder/section7.scss","webpack://./src/scss/builder/section8.scss","webpack://./src/scss/builder/section9.scss","webpack://./src/scss/builder/section10.scss","webpack://./src/scss/builder/section11.scss","webpack://./src/scss/builder/section12.scss"],"names":[],"mappings":"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","sourcesContent":["/* \n\nSi des class peuvent être centralisées et réutilisées sur plusieurs fichiers, n'hésite pas à créer un fichier séparé qu'on peut réutiliser partout \nex : couleurs, cta , fonts , animations , container ... \n\nTu gagneras du temps dans ton css et le reste du développement. \n\n*/\n\n@use \"variables/base.scss\" as *;\n@use \"variables/cta.scss\" as *;\n\n@use \"base/header.scss\" as *;\n@use \"base/footer.scss\" as *;\n@use \"base/single-reference.scss\" as *;\n\n@use \"builder/swiper.scss\" as *;\n@use \"builder/section2.scss\" as *;\n@use \"builder/section3.scss\" as *;\n@use \"builder/section4.scss\" as *;\n@use \"builder/section5.scss\" as *;\n@use \"builder/section6.scss\" as *;\n@use \"builder/section7.scss\" as *;\n@use \"builder/section8.scss\" as *;\n@use \"builder/section9.scss\" as *;\n@use \"builder/section10.scss\" as *;\n@use \"builder/section11.scss\" as *;\n@use \"builder/section12.scss\" as *;\n",".container {\n  width: 80vw;\n  max-width: 1200px;\n  margin: auto;\n\n  &.columns,\n  &.flex {\n    display: flex;\n    gap: 50px;\n\n    @for $i from 1 through 100 {\n      .col-#{$i} {\n        width: $i * 1%;\n      }\n    }\n  }\n\n  &.grid {\n    display: grid;\n    gap: 50px;\n  }\n\n  &.-full {\n    width: 90vw;\n    max-width: 1500px;\n  }\n}\n\n.block-img {\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n}\n","@use \"./colors.scss\" as *;\n\n.btn-cta {\n  display: flex;\n  align-items: center;\n  gap: 80px;\n  color: $primaryColor;\n  text-decoration: none;\n  font-size: 1rem;\n  letter-spacing: 1px;\n  z-index: 0;\n  font-weight: 500;\n  text-transform: uppercase;\n  padding-bottom: 6px;\n  position: relative;\n  border-bottom: 1px solid rgba($primaryColor, 0.4);\n  margin-top: 16px;\n  transition:\n    gap 0.25s ease,\n    border-color 0.25s ease;\n  width: fit-content;\n\n  //   &::before {\n  //     content: \"\";\n  //     position: absolute;\n  //     bottom: 0;\n  //     left: 0;\n  //     width: 100%;\n  //     height: 100%;\n  //     background-color: $secondaryColor;\n  //     transform: scaleX(0);\n  //     transition: all ease-in-out 300ms;\n  //     transform-origin: left center;\n  //     z-index: -1;\n  //   }\n\n  &::after {\n    content: \"↘\";\n    font-size: 0.85rem;\n    color: $secondaryColor;\n    transform: rotate(0deg);\n    transition: all ease-in 300ms;\n  }\n\n  &:hover {\n    gap: 100px;\n    border-bottom: 1px solid;\n    color: $secondaryColor;\n\n    &::after {\n      transform: rotate(-90deg);\n    }\n  }\n}\n","$primaryColor: #05233c;\n$secondaryColor: #d3bea1;\n\n$txtColor: #222;\n$lightGray: #e2e2e2;\n$white: #fff;\n$black: #000;\n","@use \"./../variables/colors.scss\" as *;\n\n.site-header {\n  width: 100%;\n  z-index: 100;\n  padding: 30px 40px;\n  position: relative;\n\n  .header-inner {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 40px;\n\n    .header-logo {\n      flex-shrink: 0;\n      width: 180px;\n      display: block;\n\n      img {\n        width: 100%;\n        height: auto;\n        display: block;\n      }\n    }\n\n    .header-nav {\n      flex: 1;\n      display: flex;\n      justify-content: flex-end;\n\n      .navbar {\n        list-style: none;\n        display: flex;\n        align-items: center;\n        gap: 40px;\n        margin: 0;\n        padding: 0;\n\n        > li {\n          position: relative;\n\n          > a {\n            color: $primaryColor;\n            text-decoration: none;\n            font-size: 0.8rem;\n            letter-spacing: 1px;\n            text-transform: uppercase;\n            white-space: nowrap;\n            display: flex;\n            align-items: center;\n            gap: 6px;\n            transition: opacity 0.2s ease;\n\n            &:hover {\n              opacity: 0.7;\n            }\n          }\n\n          &.menu-item-has-children {\n            > a::after {\n              content: \"\";\n              display: inline-block;\n              width: 0;\n              height: 0;\n              border-left: 4px solid transparent;\n              border-right: 4px solid transparent;\n              border-top: 5px solid $white;\n              margin-top: 2px;\n              transition: transform 0.2s ease;\n            }\n\n            .sub-menu {\n              position: absolute;\n              top: calc(100% + 20px);\n              left: 0;\n              background-color: rgba(255, 255, 255, 0.6);\n              min-width: 220px;\n              list-style: none;\n              padding: 0;\n              margin: 0;\n              opacity: 0;\n              visibility: hidden;\n              transform: translateY(-6px);\n              transition:\n                opacity 0.25s ease,\n                transform 0.25s ease,\n                visibility 0.25s;\n\n              li {\n                a {\n                  display: block;\n                  padding: 12px 20px;\n                  font-size: 0.75rem;\n                  letter-spacing: 0.08em;\n                  color: $primaryColor;\n                  text-decoration: none;\n                  border-bottom: 1px solid $lightGray;\n                  transition: color 0.2s ease;\n\n                  &:hover {\n                    color: $secondaryColor;\n                  }\n                }\n\n                &:last-child a {\n                  border-bottom: none;\n                }\n              }\n            }\n\n            &:hover {\n              > a::after {\n                transform: rotate(180deg);\n              }\n\n              .sub-menu {\n                opacity: 1;\n                visibility: visible;\n                transform: translateY(0);\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .header-actions {\n    display: flex;\n    align-items: center;\n    gap: 30px;\n    flex-shrink: 0;\n\n    .header-separator {\n      display: block;\n      width: 1px;\n      height: 36px;\n      background-color: rgba(255, 255, 255, 0.4);\n    }\n\n    .burger-btn {\n      background: none;\n      border: none;\n      cursor: pointer;\n      padding: 4px;\n      display: flex;\n      flex-direction: column;\n      gap: 6px;\n\n      span {\n        display: block;\n        width: 28px;\n        height: 1.5px;\n        background-color: $primaryColor;\n        transition:\n          transform 0.3s ease,\n          opacity 0.3s ease;\n\n        &:last-child {\n          width: 18px;\n        }\n      }\n\n      &.is-active {\n        span {\n          background-color: $white;\n        }\n\n        span:nth-child(1) {\n          transform: translateY(7.5px) rotate(45deg);\n        }\n        span:nth-child(2) {\n          opacity: 0;\n        }\n        span:nth-child(3) {\n          transform: translateY(-7.5px) rotate(-45deg);\n          width: 28px;\n        }\n      }\n    }\n  }\n\n  &.-frontpage {\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    .header-inner {\n      .header-nav {\n        .navbar {\n          > li {\n            > a {\n              color: $white;\n            }\n          }\n        }\n      }\n    }\n\n    .header-actions {\n      .burger-btn {\n        span {\n          background-color: $white;\n        }\n      }\n    }\n  }\n}\n\n.mobile-menu {\n  position: fixed;\n  inset: 0;\n  background-color: $primaryColor;\n  z-index: 99;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateX(100%);\n  transition:\n    transform 0.4s ease,\n    opacity 0.3s ease,\n    visibility 0.4s;\n\n  &.is-open {\n    opacity: 1;\n    visibility: visible;\n    transform: translateX(0);\n  }\n\n  .mobile-navbar {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    text-align: center;\n\n    > li {\n      padding: 16px 0;\n\n      > a {\n        color: $white;\n        text-decoration: none;\n        font-size: 1.4rem;\n        letter-spacing: 0.12em;\n        text-transform: uppercase;\n        transition: color 0.2s ease;\n\n        &:hover {\n          color: $secondaryColor;\n        }\n      }\n\n      .sub-menu {\n        list-style: none;\n        padding: 10px 0 0;\n        margin: 0;\n\n        li {\n          padding: 6px 0;\n\n          a {\n            font-size: 0.95rem;\n            color: rgba(255, 255, 255, 0.6);\n            text-decoration: none;\n            letter-spacing: 0.06em;\n            transition: color 0.2s ease;\n\n            &:hover {\n              color: $white;\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\n// Responsive\n\n@media (max-width: 768px) {\n  .site-header {\n    padding: 20px;\n  }\n\n  .header-nav {\n    display: none;\n  }\n\n  .header-separator {\n    display: none;\n  }\n}\n","@use \"./../variables/colors.scss\" as *;\n\n.site-footer {\n    background-color: $primaryColor;\n    padding: 80px 8%;\n    position: relative;\n\n    .footer-top {\n        display: flex;\n        justify-content: space-between;\n        align-items: flex-start;\n        margin-bottom: 60px;\n\n        .footer-left {\n            width: 50%;\n            display: flex;\n            flex-direction: column;\n            gap: 40px;\n\n            .footer-titre {\n                color: $white;\n                font-size: 2.5rem;\n                font-weight: 700;\n                line-height: 1.1;\n            }\n\n            .footer-lien {\n                color: $secondaryColor;\n                text-decoration: none;\n                font-size: 1rem;\n                letter-spacing: 0.05em;\n\n                &:hover {\n                    text-decoration: underline;\n                }\n            }\n        }\n\n        .footer-right {\n            width: 40%;\n            padding-top: 20px;\n\n            .footer-texte {\n                color: rgba($white, 0.7);\n                font-size: 0.9rem;\n                line-height: 1.7;\n            }\n        }\n    }\n\n    .footer-bottom {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        border-top: 1px solid rgba($white, 0.15);\n        padding-top: 30px;\n\n        .footer-made-by {\n            color: rgba($white, 0.5);\n            font-size: 0.75rem;\n        }\n\n        .footer-nav {\n            display: flex;\n            gap: 30px;\n            list-style: none;\n            margin: 0;\n            padding: 0;\n\n            li a {\n                color: $white;\n                text-decoration: none;\n                font-size: 0.7rem;\n                letter-spacing: 0.15em;\n                text-transform: uppercase;\n\n                &:hover {\n                    color: $secondaryColor;\n                }\n            }\n        }\n    }\n}\n\n.scroll-top {\n    position: fixed;\n    bottom: 30px;\n    right: 30px;\n    width: 44px;\n    height: 44px;\n    background-color: $secondaryColor;\n    color: $white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    font-size: 1rem;\n    z-index: 100;\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity 0.3s;\n\n    &.visible {\n        opacity: 1;\n        visibility: visible;\n    }\n}\n\n@media (max-width: 768px) {\n    .site-footer {\n        padding: 60px 5%;\n\n        .footer-top {\n            flex-direction: column;\n            gap: 40px;\n\n            .footer-left,\n            .footer-right {\n                width: 100%;\n            }\n        }\n\n        .footer-bottom {\n            flex-direction: column;\n            gap: 20px;\n            text-align: center;\n\n            .footer-nav {\n                flex-wrap: wrap;\n                justify-content: center;\n            }\n        }\n    }\n}",".galerie-reference {\n  .swiper-reference {\n    height: 90vh;\n\n    .swiper-slide {\n      img {\n        object-fit: cover;\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n}\n\n.bloc-reference {\n  padding-top: 150px;\n\n  .container {\n    .cold {\n      .section-informations {\n        padding: 0 100px 100px;\n        display: flex;\n        flex-direction: column;\n        gap: 20px;\n\n        p {\n          font-weight: 200;\n\n          strong {\n            font-weight: 400;\n          }\n        }\n      }\n    }\n  }\n}\n","@use \"./../variables/colors.scss\" as *;\n\n.slider-fullwidth {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.swiper-fullwidth {\n  width: 100%;\n  height: 100vh;\n\n  .swiper-slide {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n\n    .background {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 0;\n\n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        display: block;\n      }\n    }\n\n    .content {\n      position: absolute;\n      bottom: 110px;\n      left: 10%;\n      z-index: 1;\n      max-width: 60%;\n\n      .content-titre {\n        color: $white;\n        font-size: 6rem;\n        font-weight: 300;\n        line-height: 1.2;\n        margin-bottom: 30px;\n      }\n\n      .btn-cta {\n        display: inline-flex;\n        align-items: center;\n        gap: 14px;\n        color: $white;\n        text-decoration: none;\n        font-size: 0.68rem;\n        font-weight: 500;\n        text-transform: uppercase;\n        padding-bottom: 6px;\n        border-bottom: 1px solid rgba(255, 255, 255, 0.55);\n        transition:\n          gap 0.25s ease,\n          border-color 0.25s ease;\n\n        &::after {\n          content: \"↘\";\n          font-size: 0.85rem;\n          line-height: 1;\n        }\n      }\n    }\n  }\n\n  .block-pagination {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    z-index: 2;\n    background-color: $white;\n    width: clamp(220px, 26vw, 400px);\n    height: 90px;\n    padding: 0 28px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 20px;\n\n    .block-scrollbar {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      flex: 1;\n\n      .number-slide {\n        font-size: 0.72rem;\n        font-weight: 500;\n        letter-spacing: 0.08em;\n        color: $primaryColor;\n        min-width: 18px;\n      }\n\n      .swiper-scrollbar {\n        flex: 1;\n        height: 1px;\n        background-color: $lightGray;\n        border-radius: 0;\n        position: relative;\n        top: auto;\n        left: auto;\n\n        .swiper-scrollbar-drag {\n          height: 100%;\n          background-color: $primaryColor;\n          border-radius: 0;\n          cursor: pointer;\n        }\n      }\n    }\n\n    .swiper-pagination {\n      position: relative;\n      display: flex;\n      align-items: center;\n      gap: 6px;\n      flex-shrink: 0;\n      width: auto;\n\n      .swiper-pagination-bullet {\n        width: 7px;\n        height: 7px;\n        background-color: $lightGray;\n        opacity: 1;\n        margin: 0;\n        transition: background-color 0.25s ease;\n      }\n\n      .swiper-pagination-bullet-active {\n        background-color: $primaryColor;\n      }\n    }\n  }\n}\n\n// Responsive\n\n@media (max-width: 1024px) {\n  .swiper-fullwidth {\n    .swiper-slide .content {\n      left: 7%;\n      max-width: 75%;\n    }\n  }\n}\n\n@media (max-width: 768px) {\n  .swiper-fullwidth {\n    .swiper-slide .content {\n      left: 5%;\n      bottom: 90px;\n      max-width: 90%;\n    }\n\n    .block-pagination {\n      width: 100%;\n      height: 72px;\n      padding: 0 20px;\n    }\n  }\n}\n","@use \"./../variables/colors.scss\" as *;\n\n.section-text-evidence {\n  background-color: $white;\n  padding: 90px 0;\n\n  .section-inner {\n    max-width: 65%;\n  }\n\n  .section-label {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    margin-bottom: 36px;\n\n    span {\n      font-size: 0.9rem;\n      letter-spacing: 1px;\n      font-weight: 500;\n      text-transform: uppercase;\n      color: $primaryColor;\n      white-space: nowrap;\n    }\n\n    &::after {\n      content: \"\";\n      display: block;\n      height: 1px;\n      width: 60px;\n      background-color: $secondaryColor;\n      opacity: 0.4;\n    }\n  }\n\n  .section-content {\n    margin-bottom: 40px;\n  }\n\n  .section-paragraph,\n  .section-content {\n    color: $txtColor;\n\n    p {\n      font-size: 4rem;\n      line-height: 3.5rem;\n      font-weight: 100;\n    }\n  }\n}\n\n@media (max-width: 1024px) {\n  .section-text-evidence .section-inner {\n    max-width: 80%;\n  }\n}\n\n@media (max-width: 768px) {\n  .section-text-evidence {\n    padding: 60px 0;\n\n    .section-inner {\n      margin: 0;\n      max-width: 90%;\n    }\n  }\n}\n","@use \"./../variables/colors.scss\" as *;\n\n.section-card-solutions {\n  background-color: $white;\n  padding: 80px;\n\n  .cards-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 70px;\n    padding-bottom: 100px;\n    border-bottom: 1px solid $lightGray;\n  }\n\n  .card {\n    display: flex;\n    flex-direction: column;\n    max-height: 600px;\n  }\n\n  .card-image {\n    position: relative;\n    width: 100%;\n    aspect-ratio: 4 / 5;\n    max-height: 500px;\n    background-color: $lightGray;\n\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      display: block;\n    }\n\n    .card-plus {\n      position: absolute;\n      bottom: -1px;\n      right: -1px;\n      width: 80px;\n      height: 80px;\n      background-color: $white;\n      color: $primaryColor;\n      font-size: 2rem;\n      font-weight: 100;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-decoration: none;\n      transition:\n        background-color 0.25s ease,\n        color 0.25s ease;\n\n      &:hover {\n        background-color: $primaryColor;\n        color: $white;\n      }\n    }\n  }\n\n  .card-body {\n    padding-top: 18px;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n\n  .card-category {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    color: $secondaryColor;\n  }\n\n  .card-title {\n    font-size: 1.2rem;\n    letter-spacing: 5px;\n    font-weight: 500;\n    text-transform: uppercase;\n    color: $primaryColor;\n    margin: 0;\n  }\n}\n\n// Responsive\n@media (max-width: 1024px) {\n  .section-card-solutions {\n    padding: 60px;\n\n    .cards-grid {\n      gap: 20px;\n    }\n  }\n}\n\n@media (max-width: 768px) {\n  .section-card-solutions {\n    padding: 50px;\n\n    .cards-grid {\n      grid-template-columns: 100%;\n      gap: 32px;\n    }\n  }\n}\n","@use \"./../variables/colors.scss\" as *;\n\n.section-two-col {\n  background-color: $white;\n  padding: 90px 0;\n\n  .two-col-inner {\n    .two-col-left,\n    .two-col-right {\n      width: 50%;\n    }\n\n    .two-col-left {\n      .section-label {\n        display: flex;\n        align-items: center;\n        gap: 16px;\n        margin-bottom: 28px;\n\n        span {\n          font-size: 0.9rem;\n          letter-spacing: 1px;\n          font-weight: 500;\n          text-transform: uppercase;\n          color: $primaryColor;\n          white-space: nowrap;\n        }\n\n        &::after {\n          content: \"\";\n          display: block;\n          height: 1px;\n          width: 60px;\n          background-color: $primaryColor;\n          opacity: 0.4;\n        }\n      }\n\n      .two-col-title {\n        font-size: 4rem;\n        line-height: 3.5rem;\n        font-weight: 100;\n      }\n    }\n\n    .two-col-right {\n      display: flex;\n      flex-direction: column;\n      gap: 20px;\n      padding-top: 60px;\n\n      .two-col-details,\n      .two-col-paragraph {\n        font-size: 1rem;\n        line-height: 1.8;\n        color: $txtColor;\n\n        p {\n          margin: 0;\n          font-weight: 200;\n        }\n      }\n    }\n  }\n}\n\n// ── Responsive\n\n@media (max-width: 1024px) {\n  .section-two-col .two-col-inner {\n    grid-template-columns: 100%;\n    gap: 48px;\n    margin: 0;\n  }\n}\n\n@media (max-width: 768px) {\n  .section-two-col {\n    padding: 60px 0;\n\n    .two-col-inner {\n      grid-template-columns: 100%;\n      gap: 32px;\n      margin: 0 5%;\n    }\n\n    .two-col-right {\n      padding-top: 0;\n    }\n  }\n}\n","@use \"./../variables/colors.scss\" as *;\n\n.section-gallery {\n  position: relative;\n  padding: 80px 0;\n  background-color: $white;\n  display: flex;\n  align-items: center;\n  height: 100vh;\n}\n\n.swiper-gallery {\n  width: 100%;\n  overflow: hidden;\n  height: 100vh;\n\n  .swiper-slide {\n    width: 60%;\n\n    .gallery-slide-inner {\n      position: relative;\n    }\n\n    .gallery-image {\n      width: 100%;\n      max-height: 100vh;\n      aspect-ratio: 4 / 3;\n      background-color: $lightGray;\n\n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        display: block;\n      }\n    }\n\n    .gallery-info {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      background-color: $white;\n      padding: 20px 28px;\n      min-width: 55%;\n\n      .gallery-titre {\n        font-size: 0.85rem;\n        font-weight: 600;\n        color: $primaryColor;\n        margin: 0 0 4px;\n      }\n\n      .gallery-description {\n        font-size: 0.78rem;\n        color: $txtColor;\n        margin: 0;\n      }\n    }\n  }\n}\n\n// Dots pagination\n.gallery-pagination {\n  display: flex;\n  justify-content: flex-end;\n  width: 80%;\n  position: relative;\n  bottom: 50px;\n\n  .swiper-pagination-gallery {\n    position: relative;\n    padding-right: 80px;\n\n    .swiper-pagination-bullet {\n      background-color: $lightGray;\n      opacity: 1;\n    }\n\n    .swiper-pagination-bullet-active {\n      background-color: $primaryColor;\n    }\n  }\n}\n\n.gallery-nav {\n  position: absolute;\n  right: 34%;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  z-index: 2;\n\n  button {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    border: 1px solid $lightGray;\n    background: $white;\n    cursor: pointer;\n    font-size: 1.2rem;\n    color: $primaryColor;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition:\n      background-color 0.2s ease,\n      color 0.2s ease;\n\n    &:hover {\n      background-color: $primaryColor;\n      color: $white;\n      border-color: $primaryColor;\n    }\n  }\n}\n\n@media (max-width: 768px) {\n  .swiper-gallery .swiper-slide {\n    width: 85%;\n  }\n\n  .gallery-nav {\n    right: 2%;\n  }\n}\n","@use \"./../variables/colors.scss\" as *;\n\n.section-img-text {\n    background-color: $white;\n    padding: 90px 0;\n\n    .section-img-text-inner {\n        margin: 0 10%;\n        display: grid;\n        grid-template-columns: 45% 1fr;\n        gap: 80px;\n        align-items: center;\n    }\n}\n\n.img-col {\n    padding-bottom: 80px;\n}\n\n.img-wrapper {\n    position: relative;\n    padding-bottom: 120px;\n\n    .img-large {\n        display: block;\n        width: 72%;\n        aspect-ratio: 3 / 4;\n        object-fit: cover;\n        position: relative;\n        z-index: 1;\n    }\n\n    .img-small {\n        display: block;\n        width: 55%;\n        aspect-ratio: 4 / 3;\n        object-fit: cover;\n        position: absolute;\n        bottom: 0;\n        right: 0;\n        z-index: 5;\n    }\n}\n\n.text-col {\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n\n    .section-label {\n        display: flex;\n        align-items: center;\n        gap: 16px;\n\n        span {\n            font-size: 0.65rem;\n            font-weight: 500;\n            text-transform: uppercase;\n            color: $primaryColor;\n        }\n\n        &::after {\n            content: \"\";\n            display: block;\n            height: 1px;\n            width: 60px;\n            background-color: $primaryColor;\n            opacity: 0.4;\n        }\n    }\n\n    .text-col-paragraph {\n        font-size: 0.88rem;\n        color: $txtColor;\n\n        p {\n            margin: 0;\n        }\n    }\n\n    .text-col-list {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n\n        li {\n            display: flex;\n            align-items: center;\n            gap: 14px;\n            font-size: 0.88rem;\n            color: $txtColor;\n\n            &::before {\n                content: \"\";\n                display: inline-block;\n                flex-shrink: 0;\n                width: 16px;\n                height: 16px;\n                background-color: $secondaryColor;\n                clip-path: polygon(14% 44%, 0 58%, 30% 85%, 100% 14%, 86% 0%, 30% 62%);\n            }\n        }\n    }\n\n    .btn-cta {\n        display: inline-flex;\n        align-items: center;\n        gap: 14px;\n        color: $primaryColor;\n        text-decoration: none;\n        font-size: 0.68rem;\n        font-weight: 500;\n        letter-spacing: 0.22em;\n        text-transform: uppercase;\n        padding-bottom: 6px;\n        border-bottom: 1px solid rgba($primaryColor, 0.4);\n        margin-top: 8px;\n        align-self: flex-start;\n        transition: gap 0.25s ease, border-color 0.25s ease;\n\n        &::after {\n            content: '↘';\n            font-size: 0.85rem;\n            line-height: 1;\n        }\n\n        &:hover {\n            gap: 22px;\n            border-color: $primaryColor;\n        }\n    }\n    .text-col-title{\n      font-size: 3rem;\n    }\n}\n\n@media (max-width: 1024px) {\n    .section-img-text .section-img-text-inner {\n        grid-template-columns: 50% 1fr;\n        gap: 50px;\n        margin: 0;\n    }\n}\n\n@media (max-width: 768px) {\n    .section-img-text {\n        padding: 60px 0;\n\n        .section-img-text-inner {\n            grid-template-columns: 100%;\n            gap: 60px;\n            margin: 0 5%;\n        }\n    }\n\n    .img-col {\n        padding-bottom: 60px;\n    }\n}","@use \"./../variables/colors.scss\" as *;\n\n.section-projects {\n  background-color: $white;\n}\n\n.projects-inner {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  min-height: 500px;\n}\n\n// Panneau bleu\n.projects-left {\n  background-color: $primaryColor;\n  padding: 180px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 24px;\n\n  .projects-title{\n     color: rgba(255, 255, 255, 0.7);\n     font-size: 2rem;\n  }\n  .projects-paragraph {\n    font-size: 0.85rem;\n    line-height: 1.8;\n    color: rgba(255, 255, 255, 0.7);\n    margin: 0;\n  }\n\n  .btn-cta {\n    display: inline-flex;\n    align-items: center;\n    gap: 14px;\n    color: $white;\n    text-decoration: none;\n    font-size: 0.68rem;\n    font-weight: 500;\n    text-transform: uppercase;\n    padding-bottom: 6px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.4);\n    align-self: flex-start;\n    margin-top: 150px;\n    transition:\n      gap 0.25s ease,\n      border-color 0.25s ease;\n\n    &::after {\n      content: \"↗\";\n      font-size: 0.85rem;\n      line-height: 1;\n    }\n\n    &:hover {\n      gap: 22px;\n      border-color: $white;\n    }\n  }\n}\n\n.projects-right {\n  position: relative;\n  overflow: hidden;\n\n  .swiper-projects {\n    width: 100%;\n    height: 100%;\n\n    .swiper-slide {\n      position: relative;\n      height: 100%;\n\n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        display: block;\n      }\n\n      .slide-info {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 18px 24px;\n\n        .slide-location {\n          font-size: 1.5rem;\n          color: $white;\n          font-weight: 400;\n        }\n\n        .slide-price {\n          background-color: $white;\n          color: $primaryColor;\n          font-size: 0.75rem;\n          font-weight: 500;\n          padding: 8px 18px;\n          border-radius: 40px;\n        }\n      }\n    }\n  }\n}\n\n.projects-controls {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  padding: 28px;\n  border-top: 1px solid $lightGray;\n}\n\n.projects-nav {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n\n  button {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    border: 1px solid $lightGray;\n    background: none;\n    cursor: pointer;\n    font-size: 1.2rem;\n    color: $primaryColor;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition:\n      background-color 0.2s ease,\n      color 0.2s ease,\n      border-color 0.2s ease;\n\n    &:hover {\n      background-color: $primaryColor;\n      color: $white;\n      border-color: $primaryColor;\n    }\n  }\n}\n\n.swiper-scrollbar-projects {\n  flex: 1;\n  height: 4px;\n  background-color: $lightGray;\n  position: relative;\n\n  .swiper-scrollbar-drag {\n    height: 100%;\n    background-color: $primaryColor;\n    border-radius: 0;\n  }\n}\n\n.projects-number {\n  font-size: 2.4rem;\n  font-weight: 700;\n  color: $secondaryColor;\n  flex-shrink: 0;\n  min-width: 48px;\n  text-align: right;\n}\n\n// ── Responsive\n\n@media (max-width: 768px) {\n  .projects-inner {\n    grid-template-columns: 100%;\n  }\n\n  .projects-right {\n    min-height: 300px;\n  }\n\n  .projects-left {\n    padding: 50px ;\n  }\n\n  .projects-controls {\n    padding: 20px;\n  }\n}\n","@use \"./../variables/colors.scss\" as *;\n\n.section-citation {\n  display: flex;\n  flex-direction: column;\n  min-height: 400px;\n}\n\n.citation-block {\n  width: 90%;\n  background-color: $white;\n  padding: 70px;\n  display: flex;\n  align-items: center;\n\n  .citation-inner {\n    position: relative;\n  }\n\n  .citation-name {\n    font-size: 1rem;\n    color: $secondaryColor;\n    position: absolute;\n    top: 10px;\n    left: 0;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n  }\n\n  .citation-text {\n    font-size: 4em;\n    font-weight: 100;\n    line-height: 1;\n    color: $txtColor;\n    text-indent: 150px;\n  }\n}\n\n.citation-blue {\n  width: 100%;\n  min-height: 500px;\n  background-color: $primaryColor;\n  display: flex;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n\n  .citation-deco {\n    position: absolute;\n    top: -1px;\n    right: 15px;\n    width: 260px;\n    height: 260px;\n    background-color: $white;\n    clip-path: polygon(100% 0, 0 0, 0% 100%);\n  }\n\n  .citation-blue-inner {\n    padding: 70px;\n    display: flex;\n    flex-direction: column;\n    gap: 28px;\n    width: 100%;\n  }\n\n  .citation-blue-title {\n    color: $white;\n    font-size: 4rem;\n    font-weight: 200;\n    line-height: 3.5rem;\n  }\n\n  .btn-cta {\n    color: $white;\n    border-color: $white;\n  }\n}\n\n@media (max-width: 1024px) {\n  .citation-block {\n    padding: 50px;\n  }\n\n  .citation-blue .citation-blue-inner {\n    padding: 50px;\n  }\n}\n\n@media (max-width: 768px) {\n  .section-citation {\n    flex-direction: column;\n  }\n\n  .citation-block {\n    width: 100%;\n    padding: 50px;\n  }\n\n  .citation-blue {\n    width: 100%;\n\n    .citation-deco {\n      display: none;\n    }\n\n    .citation-blue-inner {\n      padding: 50px;\n    }\n  }\n}\n","@use \"./../variables/colors.scss\" as *;\n\n.section-discover {\n  display: flex;\n  min-height: 70vh;\n  align-items: stretch;\n  width: 60%;\n  margin: 0 auto;\n\n  .discover-left {\n    width: 50%;\n    padding-top: 80px;\n    padding-bottom: 80px;\n    padding-left: 60px;\n    padding-right: 60px;\n    min-height: 70vh;\n    background-color: $primaryColor;\n    background-size: cover;\n    background-position: center;\n  }\n\n  .discover-right {\n    width: 50%;\n    background-color: rgb(229, 229, 229);\n    padding-top: 80px;\n    padding-bottom: 80px;\n    padding-left: 60px;\n    padding-right: 60px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    position: relative;\n\n    .discover-title {\n      color: $primaryColor;\n      font-size: 2.2rem;\n      line-height: 1.2;\n      margin-bottom: 30px;\n    }\n\n    .discover-paragraph {\n      color: $txtColor;\n      font-size: 0.95rem;\n      line-height: 1.7;\n      margin-bottom: 50px;\n    }\n\n    .discover-btn {\n      margin-top: auto;\n      display: inline-flex;\n      align-items: center;\n      gap: 12px;\n      background-color: $secondaryColor;\n      color: $white;\n      text-decoration: none;\n      font-size: 0.7rem;\n      letter-spacing: 0.2em;\n      text-transform: uppercase;\n      padding: 16px 30px;\n      align-self: flex-end;\n    }\n  }\n}\n\n@media (max-width: 1024px) {\n  .section-discover {\n    .discover-right {\n      padding-top: 50px;\n      padding-bottom: 50px;\n      padding-left: 40px;\n      padding-right: 40px;\n    }\n  }\n}\n\n@media (max-width: 768px) {\n  .section-discover {\n    flex-direction: column;\n\n    .discover-left {\n      width: 100%;\n      min-height: 300px;\n    }\n\n    .discover-right {\n      width: 100%;\n      padding-top: 50px;\n      padding-bottom: 50px;\n      padding-left: 5%;\n      padding-right: 5%;\n\n      .discover-btn {\n        align-self: flex-start;\n      }\n    }\n  }\n}\n","@use \"./../variables/colors.scss\" as *;\n\n.section-links {\n  background-color: $white;\n  padding-top: 60px;\n  padding-bottom: 60px;\n  padding-left: 10%;\n  padding-right: 10%;\n  // Tu peux condenser tes 4 lignes padding en écrivant :\n  //// padding: 60px 10%; (le premier nombre fait haut / bas le second gauche / droite);\n\n  .links-item {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 30px 0;\n    border-top: 1px solid $lightGray;\n    text-decoration: none;\n\n    &:last-child {\n      border-bottom: 1px solid $lightGray;\n    }\n\n    .links-numero {\n      font-size: 0.65rem;\n      color: $secondaryColor;\n      letter-spacing: 0.1em;\n      min-width: 20px;\n    }\n\n    .links-label {\n      font-size: 3rem;\n      font-weight: 300;\n      color: $primaryColor;\n      line-height: 1;\n    }\n  }\n}\n\n@media (max-width: 768px) {\n  .section-links {\n    padding: 40px 5%;\n\n    .links-item {\n      padding: 20px 0;\n\n      .links-label {\n        font-size: 2rem;\n      }\n    }\n  }\n}\n","@use \"./../variables/colors.scss\" as *;\n\n.section-video {\n    background-color: #f4f4f4;\n    max-width: 1440px;\n    margin-left: auto;\n    margin-right: auto;\n    padding-top: 80px;\n    padding-bottom: 80px;\n    padding-left: 10%;\n    padding-right: 10%;\n\n    .video-top {\n        display: flex;\n        justify-content: space-between;\n        align-items: flex-start;\n        margin-bottom: 50px;\n\n        .video-top-left {\n            width: 45%;\n\n            .video-text {\n                color: $primaryColor;\n                font-size: 1.5rem;\n                font-weight: 300;\n                line-height: 1.4;\n                margin-bottom: 30px;\n            }\n\n            .video-line {\n                border: none;\n                border-top: 1px solid $lightGray;\n                margin: 0;\n            }\n        }\n\n        .video-top-right {\n            width: 40%;\n            padding-top: 20px;\n\n            .video-paragraph {\n                color: $txtColor;\n                font-size: 0.85rem;\n                line-height: 1.7;\n                 margin-top: 120px; \n            }\n        }\n    }\n\n    .video-wrapper {\n        background-color: $primaryColor;\n        width: 100%;\n        aspect-ratio: 16 / 9;\n        overflow: hidden;\n\n        iframe {\n            width: 100%;\n            height: 100%;\n            display: block;\n        }\n    }\n}\n\n@media (max-width: 1024px) {\n    .section-video {\n        padding-top: 60px;\n        padding-bottom: 60px;\n\n        .video-top {\n            .video-top-left {\n                width: 50%;\n            }\n\n            .video-top-right {\n                width: 45%;\n            }\n        }\n    }\n}\n\n@media (max-width: 768px) {\n    .section-video {\n        padding-top: 50px;\n        padding-bottom: 50px;\n        padding-left: 5%;\n        padding-right: 5%;\n\n        .video-top {\n            flex-direction: column;\n            gap: 30px;\n\n            .video-top-left {\n                width: 100%;\n            }\n\n            .video-top-right {\n                width: 100%;\n                padding-top: 0;\n            }\n        }\n    }\n}\n","@use \"./../variables/colors.scss\" as *;\n\n.section-actu {\n    background-color: $white;\n    padding-top: 80px;\n    padding-bottom: 80px;\n    padding-left: 8%;\n    padding-right: 8%;\n\n    .actu-title {\n        color: $primaryColor;\n        font-size: 2rem;\n        font-weight: 300;\n        text-align: center;\n        margin-bottom: 50px;\n\n        strong {\n            font-weight: 700;\n        }\n    }\n\n    .actu-grid {\n        display: grid;\n        grid-template-columns: repeat(4, 1fr);\n        gap: 30px;\n        margin-bottom: 50px;\n        align-items: start;\n    }\n\n    .actu-card {\n\n        .actu-card-img {\n            position: relative;\n            background-color: $lightGray;\n            aspect-ratio: 8 / 3;\n            overflow: hidden;\n            margin-bottom: 15px;\n\n            img {\n                width: 100%;\n                height: 100%;\n                object-fit: cover;\n                display: block;\n            }\n\n            .actu-card-plus {\n                position: absolute;\n                bottom: 10px;\n                right: 10px;\n                width: 36px;\n                height: 36px;\n                background-color: $white;\n                color: $primaryColor;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                font-size: 1.2rem;\n                text-decoration: none;\n            }\n        }\n\n       \n\n        .actu-card-cat {\n            display: block;\n            font-size: 0.65rem;\n            letter-spacing: 0.15em;\n            text-transform: uppercase;\n            color: $secondaryColor;\n            margin-bottom: 10px;\n        }\n\n        .actu-card-text {\n            font-size: 0.9rem;\n            line-height: 1.6;\n            color: $txtColor;\n        }\n\n         &:first-child {\n        grid-column: span 2;    }\n    }\n\n    .actu-btn-wrap {\n        display: flex;\n        justify-content: center;\n\n        .actu-btn {\n            display: inline-block;\n            background-color: $primaryColor;\n            color: $white;\n            text-decoration: none;\n            font-size: 0.7rem;\n            letter-spacing: 0.2em;\n            text-transform: uppercase;\n            padding-top: 16px;\n            padding-bottom: 16px;\n            padding-left: 40px;\n            padding-right: 40px;\n        }\n    }\n}\n\n@media (max-width: 1024px) {\n    .section-actu .actu-grid {\n        grid-template-columns: repeat(2, 1fr);\n    }\n}\n\n@media (max-width: 768px) {\n    .section-actu {\n        padding-top: 50px;\n        padding-bottom: 50px;\n        padding-left: 5%;\n        padding-right: 5%;\n\n        .actu-grid {\n            grid-template-columns: 1fr;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./src/tailwind.css"
/*!**************************!*\
  !*** ./src/tailwind.css ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_tailwind_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./tailwind.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/tailwind.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_tailwind_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_tailwind_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_tailwind_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_tailwind_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/scss/main.scss"
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./main.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tailwind_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tailwind.css */ "./src/tailwind.css");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");



})();

/******/ })()
;
//# sourceMappingURL=style.bundle.js.map
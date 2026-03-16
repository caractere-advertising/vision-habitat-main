/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/tailwind.css"(
      /*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/tailwind.css ***!
  \******************************************************************************************************************************************************************/
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js",
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js",
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
        );
      // Imports

      var ___CSS_LOADER_EXPORT___ =
        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
        );
      // Module
      ___CSS_LOADER_EXPORT___.push([
        module.id,
        `/*! tailwindcss v4.2.1 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
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
  .hidden {
    display: none;
  }
  .flex-shrink {
    flex-shrink: 1;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
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
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
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
      --tw-outline-style: solid;
    }
  }
}
`,
        "",
        {
          version: 3,
          sources: [
            "<no source>",
            "webpack://./node_modules/tailwindcss/index.css",
          ],
          names: [],
          mappings:
            "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",
          sourcesContent: [
            null,
            '@layer theme, base, components, utilities;\n\n@layer theme {\n  @theme default {\n    --font-sans:\n      ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",\n      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n    --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;\n    --font-mono:\n      ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",\n      "Courier New", monospace;\n\n    --color-red-50: oklch(97.1% 0.013 17.38);\n    --color-red-100: oklch(93.6% 0.032 17.717);\n    --color-red-200: oklch(88.5% 0.062 18.334);\n    --color-red-300: oklch(80.8% 0.114 19.571);\n    --color-red-400: oklch(70.4% 0.191 22.216);\n    --color-red-500: oklch(63.7% 0.237 25.331);\n    --color-red-600: oklch(57.7% 0.245 27.325);\n    --color-red-700: oklch(50.5% 0.213 27.518);\n    --color-red-800: oklch(44.4% 0.177 26.899);\n    --color-red-900: oklch(39.6% 0.141 25.723);\n    --color-red-950: oklch(25.8% 0.092 26.042);\n\n    --color-orange-50: oklch(98% 0.016 73.684);\n    --color-orange-100: oklch(95.4% 0.038 75.164);\n    --color-orange-200: oklch(90.1% 0.076 70.697);\n    --color-orange-300: oklch(83.7% 0.128 66.29);\n    --color-orange-400: oklch(75% 0.183 55.934);\n    --color-orange-500: oklch(70.5% 0.213 47.604);\n    --color-orange-600: oklch(64.6% 0.222 41.116);\n    --color-orange-700: oklch(55.3% 0.195 38.402);\n    --color-orange-800: oklch(47% 0.157 37.304);\n    --color-orange-900: oklch(40.8% 0.123 38.172);\n    --color-orange-950: oklch(26.6% 0.079 36.259);\n\n    --color-amber-50: oklch(98.7% 0.022 95.277);\n    --color-amber-100: oklch(96.2% 0.059 95.617);\n    --color-amber-200: oklch(92.4% 0.12 95.746);\n    --color-amber-300: oklch(87.9% 0.169 91.605);\n    --color-amber-400: oklch(82.8% 0.189 84.429);\n    --color-amber-500: oklch(76.9% 0.188 70.08);\n    --color-amber-600: oklch(66.6% 0.179 58.318);\n    --color-amber-700: oklch(55.5% 0.163 48.998);\n    --color-amber-800: oklch(47.3% 0.137 46.201);\n    --color-amber-900: oklch(41.4% 0.112 45.904);\n    --color-amber-950: oklch(27.9% 0.077 45.635);\n\n    --color-yellow-50: oklch(98.7% 0.026 102.212);\n    --color-yellow-100: oklch(97.3% 0.071 103.193);\n    --color-yellow-200: oklch(94.5% 0.129 101.54);\n    --color-yellow-300: oklch(90.5% 0.182 98.111);\n    --color-yellow-400: oklch(85.2% 0.199 91.936);\n    --color-yellow-500: oklch(79.5% 0.184 86.047);\n    --color-yellow-600: oklch(68.1% 0.162 75.834);\n    --color-yellow-700: oklch(55.4% 0.135 66.442);\n    --color-yellow-800: oklch(47.6% 0.114 61.907);\n    --color-yellow-900: oklch(42.1% 0.095 57.708);\n    --color-yellow-950: oklch(28.6% 0.066 53.813);\n\n    --color-lime-50: oklch(98.6% 0.031 120.757);\n    --color-lime-100: oklch(96.7% 0.067 122.328);\n    --color-lime-200: oklch(93.8% 0.127 124.321);\n    --color-lime-300: oklch(89.7% 0.196 126.665);\n    --color-lime-400: oklch(84.1% 0.238 128.85);\n    --color-lime-500: oklch(76.8% 0.233 130.85);\n    --color-lime-600: oklch(64.8% 0.2 131.684);\n    --color-lime-700: oklch(53.2% 0.157 131.589);\n    --color-lime-800: oklch(45.3% 0.124 130.933);\n    --color-lime-900: oklch(40.5% 0.101 131.063);\n    --color-lime-950: oklch(27.4% 0.072 132.109);\n\n    --color-green-50: oklch(98.2% 0.018 155.826);\n    --color-green-100: oklch(96.2% 0.044 156.743);\n    --color-green-200: oklch(92.5% 0.084 155.995);\n    --color-green-300: oklch(87.1% 0.15 154.449);\n    --color-green-400: oklch(79.2% 0.209 151.711);\n    --color-green-500: oklch(72.3% 0.219 149.579);\n    --color-green-600: oklch(62.7% 0.194 149.214);\n    --color-green-700: oklch(52.7% 0.154 150.069);\n    --color-green-800: oklch(44.8% 0.119 151.328);\n    --color-green-900: oklch(39.3% 0.095 152.535);\n    --color-green-950: oklch(26.6% 0.065 152.934);\n\n    --color-emerald-50: oklch(97.9% 0.021 166.113);\n    --color-emerald-100: oklch(95% 0.052 163.051);\n    --color-emerald-200: oklch(90.5% 0.093 164.15);\n    --color-emerald-300: oklch(84.5% 0.143 164.978);\n    --color-emerald-400: oklch(76.5% 0.177 163.223);\n    --color-emerald-500: oklch(69.6% 0.17 162.48);\n    --color-emerald-600: oklch(59.6% 0.145 163.225);\n    --color-emerald-700: oklch(50.8% 0.118 165.612);\n    --color-emerald-800: oklch(43.2% 0.095 166.913);\n    --color-emerald-900: oklch(37.8% 0.077 168.94);\n    --color-emerald-950: oklch(26.2% 0.051 172.552);\n\n    --color-teal-50: oklch(98.4% 0.014 180.72);\n    --color-teal-100: oklch(95.3% 0.051 180.801);\n    --color-teal-200: oklch(91% 0.096 180.426);\n    --color-teal-300: oklch(85.5% 0.138 181.071);\n    --color-teal-400: oklch(77.7% 0.152 181.912);\n    --color-teal-500: oklch(70.4% 0.14 182.503);\n    --color-teal-600: oklch(60% 0.118 184.704);\n    --color-teal-700: oklch(51.1% 0.096 186.391);\n    --color-teal-800: oklch(43.7% 0.078 188.216);\n    --color-teal-900: oklch(38.6% 0.063 188.416);\n    --color-teal-950: oklch(27.7% 0.046 192.524);\n\n    --color-cyan-50: oklch(98.4% 0.019 200.873);\n    --color-cyan-100: oklch(95.6% 0.045 203.388);\n    --color-cyan-200: oklch(91.7% 0.08 205.041);\n    --color-cyan-300: oklch(86.5% 0.127 207.078);\n    --color-cyan-400: oklch(78.9% 0.154 211.53);\n    --color-cyan-500: oklch(71.5% 0.143 215.221);\n    --color-cyan-600: oklch(60.9% 0.126 221.723);\n    --color-cyan-700: oklch(52% 0.105 223.128);\n    --color-cyan-800: oklch(45% 0.085 224.283);\n    --color-cyan-900: oklch(39.8% 0.07 227.392);\n    --color-cyan-950: oklch(30.2% 0.056 229.695);\n\n    --color-sky-50: oklch(97.7% 0.013 236.62);\n    --color-sky-100: oklch(95.1% 0.026 236.824);\n    --color-sky-200: oklch(90.1% 0.058 230.902);\n    --color-sky-300: oklch(82.8% 0.111 230.318);\n    --color-sky-400: oklch(74.6% 0.16 232.661);\n    --color-sky-500: oklch(68.5% 0.169 237.323);\n    --color-sky-600: oklch(58.8% 0.158 241.966);\n    --color-sky-700: oklch(50% 0.134 242.749);\n    --color-sky-800: oklch(44.3% 0.11 240.79);\n    --color-sky-900: oklch(39.1% 0.09 240.876);\n    --color-sky-950: oklch(29.3% 0.066 243.157);\n\n    --color-blue-50: oklch(97% 0.014 254.604);\n    --color-blue-100: oklch(93.2% 0.032 255.585);\n    --color-blue-200: oklch(88.2% 0.059 254.128);\n    --color-blue-300: oklch(80.9% 0.105 251.813);\n    --color-blue-400: oklch(70.7% 0.165 254.624);\n    --color-blue-500: oklch(62.3% 0.214 259.815);\n    --color-blue-600: oklch(54.6% 0.245 262.881);\n    --color-blue-700: oklch(48.8% 0.243 264.376);\n    --color-blue-800: oklch(42.4% 0.199 265.638);\n    --color-blue-900: oklch(37.9% 0.146 265.522);\n    --color-blue-950: oklch(28.2% 0.091 267.935);\n\n    --color-indigo-50: oklch(96.2% 0.018 272.314);\n    --color-indigo-100: oklch(93% 0.034 272.788);\n    --color-indigo-200: oklch(87% 0.065 274.039);\n    --color-indigo-300: oklch(78.5% 0.115 274.713);\n    --color-indigo-400: oklch(67.3% 0.182 276.935);\n    --color-indigo-500: oklch(58.5% 0.233 277.117);\n    --color-indigo-600: oklch(51.1% 0.262 276.966);\n    --color-indigo-700: oklch(45.7% 0.24 277.023);\n    --color-indigo-800: oklch(39.8% 0.195 277.366);\n    --color-indigo-900: oklch(35.9% 0.144 278.697);\n    --color-indigo-950: oklch(25.7% 0.09 281.288);\n\n    --color-violet-50: oklch(96.9% 0.016 293.756);\n    --color-violet-100: oklch(94.3% 0.029 294.588);\n    --color-violet-200: oklch(89.4% 0.057 293.283);\n    --color-violet-300: oklch(81.1% 0.111 293.571);\n    --color-violet-400: oklch(70.2% 0.183 293.541);\n    --color-violet-500: oklch(60.6% 0.25 292.717);\n    --color-violet-600: oklch(54.1% 0.281 293.009);\n    --color-violet-700: oklch(49.1% 0.27 292.581);\n    --color-violet-800: oklch(43.2% 0.232 292.759);\n    --color-violet-900: oklch(38% 0.189 293.745);\n    --color-violet-950: oklch(28.3% 0.141 291.089);\n\n    --color-purple-50: oklch(97.7% 0.014 308.299);\n    --color-purple-100: oklch(94.6% 0.033 307.174);\n    --color-purple-200: oklch(90.2% 0.063 306.703);\n    --color-purple-300: oklch(82.7% 0.119 306.383);\n    --color-purple-400: oklch(71.4% 0.203 305.504);\n    --color-purple-500: oklch(62.7% 0.265 303.9);\n    --color-purple-600: oklch(55.8% 0.288 302.321);\n    --color-purple-700: oklch(49.6% 0.265 301.924);\n    --color-purple-800: oklch(43.8% 0.218 303.724);\n    --color-purple-900: oklch(38.1% 0.176 304.987);\n    --color-purple-950: oklch(29.1% 0.149 302.717);\n\n    --color-fuchsia-50: oklch(97.7% 0.017 320.058);\n    --color-fuchsia-100: oklch(95.2% 0.037 318.852);\n    --color-fuchsia-200: oklch(90.3% 0.076 319.62);\n    --color-fuchsia-300: oklch(83.3% 0.145 321.434);\n    --color-fuchsia-400: oklch(74% 0.238 322.16);\n    --color-fuchsia-500: oklch(66.7% 0.295 322.15);\n    --color-fuchsia-600: oklch(59.1% 0.293 322.896);\n    --color-fuchsia-700: oklch(51.8% 0.253 323.949);\n    --color-fuchsia-800: oklch(45.2% 0.211 324.591);\n    --color-fuchsia-900: oklch(40.1% 0.17 325.612);\n    --color-fuchsia-950: oklch(29.3% 0.136 325.661);\n\n    --color-pink-50: oklch(97.1% 0.014 343.198);\n    --color-pink-100: oklch(94.8% 0.028 342.258);\n    --color-pink-200: oklch(89.9% 0.061 343.231);\n    --color-pink-300: oklch(82.3% 0.12 346.018);\n    --color-pink-400: oklch(71.8% 0.202 349.761);\n    --color-pink-500: oklch(65.6% 0.241 354.308);\n    --color-pink-600: oklch(59.2% 0.249 0.584);\n    --color-pink-700: oklch(52.5% 0.223 3.958);\n    --color-pink-800: oklch(45.9% 0.187 3.815);\n    --color-pink-900: oklch(40.8% 0.153 2.432);\n    --color-pink-950: oklch(28.4% 0.109 3.907);\n\n    --color-rose-50: oklch(96.9% 0.015 12.422);\n    --color-rose-100: oklch(94.1% 0.03 12.58);\n    --color-rose-200: oklch(89.2% 0.058 10.001);\n    --color-rose-300: oklch(81% 0.117 11.638);\n    --color-rose-400: oklch(71.2% 0.194 13.428);\n    --color-rose-500: oklch(64.5% 0.246 16.439);\n    --color-rose-600: oklch(58.6% 0.253 17.585);\n    --color-rose-700: oklch(51.4% 0.222 16.935);\n    --color-rose-800: oklch(45.5% 0.188 13.697);\n    --color-rose-900: oklch(41% 0.159 10.272);\n    --color-rose-950: oklch(27.1% 0.105 12.094);\n\n    --color-slate-50: oklch(98.4% 0.003 247.858);\n    --color-slate-100: oklch(96.8% 0.007 247.896);\n    --color-slate-200: oklch(92.9% 0.013 255.508);\n    --color-slate-300: oklch(86.9% 0.022 252.894);\n    --color-slate-400: oklch(70.4% 0.04 256.788);\n    --color-slate-500: oklch(55.4% 0.046 257.417);\n    --color-slate-600: oklch(44.6% 0.043 257.281);\n    --color-slate-700: oklch(37.2% 0.044 257.287);\n    --color-slate-800: oklch(27.9% 0.041 260.031);\n    --color-slate-900: oklch(20.8% 0.042 265.755);\n    --color-slate-950: oklch(12.9% 0.042 264.695);\n\n    --color-gray-50: oklch(98.5% 0.002 247.839);\n    --color-gray-100: oklch(96.7% 0.003 264.542);\n    --color-gray-200: oklch(92.8% 0.006 264.531);\n    --color-gray-300: oklch(87.2% 0.01 258.338);\n    --color-gray-400: oklch(70.7% 0.022 261.325);\n    --color-gray-500: oklch(55.1% 0.027 264.364);\n    --color-gray-600: oklch(44.6% 0.03 256.802);\n    --color-gray-700: oklch(37.3% 0.034 259.733);\n    --color-gray-800: oklch(27.8% 0.033 256.848);\n    --color-gray-900: oklch(21% 0.034 264.665);\n    --color-gray-950: oklch(13% 0.028 261.692);\n\n    --color-zinc-50: oklch(98.5% 0 0);\n    --color-zinc-100: oklch(96.7% 0.001 286.375);\n    --color-zinc-200: oklch(92% 0.004 286.32);\n    --color-zinc-300: oklch(87.1% 0.006 286.286);\n    --color-zinc-400: oklch(70.5% 0.015 286.067);\n    --color-zinc-500: oklch(55.2% 0.016 285.938);\n    --color-zinc-600: oklch(44.2% 0.017 285.786);\n    --color-zinc-700: oklch(37% 0.013 285.805);\n    --color-zinc-800: oklch(27.4% 0.006 286.033);\n    --color-zinc-900: oklch(21% 0.006 285.885);\n    --color-zinc-950: oklch(14.1% 0.005 285.823);\n\n    --color-neutral-50: oklch(98.5% 0 0);\n    --color-neutral-100: oklch(97% 0 0);\n    --color-neutral-200: oklch(92.2% 0 0);\n    --color-neutral-300: oklch(87% 0 0);\n    --color-neutral-400: oklch(70.8% 0 0);\n    --color-neutral-500: oklch(55.6% 0 0);\n    --color-neutral-600: oklch(43.9% 0 0);\n    --color-neutral-700: oklch(37.1% 0 0);\n    --color-neutral-800: oklch(26.9% 0 0);\n    --color-neutral-900: oklch(20.5% 0 0);\n    --color-neutral-950: oklch(14.5% 0 0);\n\n    --color-stone-50: oklch(98.5% 0.001 106.423);\n    --color-stone-100: oklch(97% 0.001 106.424);\n    --color-stone-200: oklch(92.3% 0.003 48.717);\n    --color-stone-300: oklch(86.9% 0.005 56.366);\n    --color-stone-400: oklch(70.9% 0.01 56.259);\n    --color-stone-500: oklch(55.3% 0.013 58.071);\n    --color-stone-600: oklch(44.4% 0.011 73.639);\n    --color-stone-700: oklch(37.4% 0.01 67.558);\n    --color-stone-800: oklch(26.8% 0.007 34.298);\n    --color-stone-900: oklch(21.6% 0.006 56.043);\n    --color-stone-950: oklch(14.7% 0.004 49.25);\n\n    --color-mauve-50: oklch(98.5% 0 0);\n    --color-mauve-100: oklch(96% 0.003 325.6);\n    --color-mauve-200: oklch(92.2% 0.005 325.62);\n    --color-mauve-300: oklch(86.5% 0.012 325.68);\n    --color-mauve-400: oklch(71.1% 0.019 323.02);\n    --color-mauve-500: oklch(54.2% 0.034 322.5);\n    --color-mauve-600: oklch(43.5% 0.029 321.78);\n    --color-mauve-700: oklch(36.4% 0.029 323.89);\n    --color-mauve-800: oklch(26.3% 0.024 320.12);\n    --color-mauve-900: oklch(21.2% 0.019 322.12);\n    --color-mauve-950: oklch(14.5% 0.008 326);\n\n    --color-olive-50: oklch(98.8% 0.003 106.5);\n    --color-olive-100: oklch(96.6% 0.005 106.5);\n    --color-olive-200: oklch(93% 0.007 106.5);\n    --color-olive-300: oklch(88% 0.011 106.6);\n    --color-olive-400: oklch(73.7% 0.021 106.9);\n    --color-olive-500: oklch(58% 0.031 107.3);\n    --color-olive-600: oklch(46.6% 0.025 107.3);\n    --color-olive-700: oklch(39.4% 0.023 107.4);\n    --color-olive-800: oklch(28.6% 0.016 107.4);\n    --color-olive-900: oklch(22.8% 0.013 107.4);\n    --color-olive-950: oklch(15.3% 0.006 107.1);\n\n    --color-mist-50: oklch(98.7% 0.002 197.1);\n    --color-mist-100: oklch(96.3% 0.002 197.1);\n    --color-mist-200: oklch(92.5% 0.005 214.3);\n    --color-mist-300: oklch(87.2% 0.007 219.6);\n    --color-mist-400: oklch(72.3% 0.014 214.4);\n    --color-mist-500: oklch(56% 0.021 213.5);\n    --color-mist-600: oklch(45% 0.017 213.2);\n    --color-mist-700: oklch(37.8% 0.015 216);\n    --color-mist-800: oklch(27.5% 0.011 216.9);\n    --color-mist-900: oklch(21.8% 0.008 223.9);\n    --color-mist-950: oklch(14.8% 0.004 228.8);\n\n    --color-taupe-50: oklch(98.6% 0.002 67.8);\n    --color-taupe-100: oklch(96% 0.002 17.2);\n    --color-taupe-200: oklch(92.2% 0.005 34.3);\n    --color-taupe-300: oklch(86.8% 0.007 39.5);\n    --color-taupe-400: oklch(71.4% 0.014 41.2);\n    --color-taupe-500: oklch(54.7% 0.021 43.1);\n    --color-taupe-600: oklch(43.8% 0.017 39.3);\n    --color-taupe-700: oklch(36.7% 0.016 35.7);\n    --color-taupe-800: oklch(26.8% 0.011 36.5);\n    --color-taupe-900: oklch(21.4% 0.009 43.1);\n    --color-taupe-950: oklch(14.7% 0.004 49.3);\n\n    --color-black: #000;\n    --color-white: #fff;\n\n    --spacing: 0.25rem;\n\n    --breakpoint-sm: 40rem;\n    --breakpoint-md: 48rem;\n    --breakpoint-lg: 64rem;\n    --breakpoint-xl: 80rem;\n    --breakpoint-2xl: 96rem;\n\n    --container-3xs: 16rem;\n    --container-2xs: 18rem;\n    --container-xs: 20rem;\n    --container-sm: 24rem;\n    --container-md: 28rem;\n    --container-lg: 32rem;\n    --container-xl: 36rem;\n    --container-2xl: 42rem;\n    --container-3xl: 48rem;\n    --container-4xl: 56rem;\n    --container-5xl: 64rem;\n    --container-6xl: 72rem;\n    --container-7xl: 80rem;\n\n    --text-xs: 0.75rem;\n    --text-xs--line-height: calc(1 / 0.75);\n    --text-sm: 0.875rem;\n    --text-sm--line-height: calc(1.25 / 0.875);\n    --text-base: 1rem;\n    --text-base--line-height: calc(1.5 / 1);\n    --text-lg: 1.125rem;\n    --text-lg--line-height: calc(1.75 / 1.125);\n    --text-xl: 1.25rem;\n    --text-xl--line-height: calc(1.75 / 1.25);\n    --text-2xl: 1.5rem;\n    --text-2xl--line-height: calc(2 / 1.5);\n    --text-3xl: 1.875rem;\n    --text-3xl--line-height: calc(2.25 / 1.875);\n    --text-4xl: 2.25rem;\n    --text-4xl--line-height: calc(2.5 / 2.25);\n    --text-5xl: 3rem;\n    --text-5xl--line-height: 1;\n    --text-6xl: 3.75rem;\n    --text-6xl--line-height: 1;\n    --text-7xl: 4.5rem;\n    --text-7xl--line-height: 1;\n    --text-8xl: 6rem;\n    --text-8xl--line-height: 1;\n    --text-9xl: 8rem;\n    --text-9xl--line-height: 1;\n\n    --font-weight-thin: 100;\n    --font-weight-extralight: 200;\n    --font-weight-light: 300;\n    --font-weight-normal: 400;\n    --font-weight-medium: 500;\n    --font-weight-semibold: 600;\n    --font-weight-bold: 700;\n    --font-weight-extrabold: 800;\n    --font-weight-black: 900;\n\n    --tracking-tighter: -0.05em;\n    --tracking-tight: -0.025em;\n    --tracking-normal: 0em;\n    --tracking-wide: 0.025em;\n    --tracking-wider: 0.05em;\n    --tracking-widest: 0.1em;\n\n    --leading-tight: 1.25;\n    --leading-snug: 1.375;\n    --leading-normal: 1.5;\n    --leading-relaxed: 1.625;\n    --leading-loose: 2;\n\n    --radius-xs: 0.125rem;\n    --radius-sm: 0.25rem;\n    --radius-md: 0.375rem;\n    --radius-lg: 0.5rem;\n    --radius-xl: 0.75rem;\n    --radius-2xl: 1rem;\n    --radius-3xl: 1.5rem;\n    --radius-4xl: 2rem;\n\n    --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);\n    --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n    --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n    --shadow-md:\n      0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n    --shadow-lg:\n      0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n    --shadow-xl:\n      0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n\n    --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);\n    --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);\n    --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);\n\n    --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);\n    --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);\n    --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);\n    --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);\n    --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);\n    --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);\n\n    --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);\n    --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);\n    --text-shadow-sm:\n      0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075),\n      0px 2px 2px rgb(0 0 0 / 0.075);\n    --text-shadow-md:\n      0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1),\n      0px 2px 4px rgb(0 0 0 / 0.1);\n    --text-shadow-lg:\n      0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1),\n      0px 4px 8px rgb(0 0 0 / 0.1);\n\n    --ease-in: cubic-bezier(0.4, 0, 1, 1);\n    --ease-out: cubic-bezier(0, 0, 0.2, 1);\n    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);\n\n    --animate-spin: spin 1s linear infinite;\n    --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n    --animate-bounce: bounce 1s infinite;\n\n    @keyframes spin {\n      to {\n        transform: rotate(360deg);\n      }\n    }\n\n    @keyframes ping {\n      75%,\n      100% {\n        transform: scale(2);\n        opacity: 0;\n      }\n    }\n\n    @keyframes pulse {\n      50% {\n        opacity: 0.5;\n      }\n    }\n\n    @keyframes bounce {\n      0%,\n      100% {\n        transform: translateY(-25%);\n        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n      }\n\n      50% {\n        transform: none;\n        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n      }\n    }\n\n    --blur-xs: 4px;\n    --blur-sm: 8px;\n    --blur-md: 12px;\n    --blur-lg: 16px;\n    --blur-xl: 24px;\n    --blur-2xl: 40px;\n    --blur-3xl: 64px;\n\n    --perspective-dramatic: 100px;\n    --perspective-near: 300px;\n    --perspective-normal: 500px;\n    --perspective-midrange: 800px;\n    --perspective-distant: 1200px;\n\n    --aspect-video: 16 / 9;\n\n    --default-transition-duration: 150ms;\n    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    --default-font-family: --theme(--font-sans, initial);\n    --default-font-feature-settings: --theme(\n      --font-sans--font-feature-settings,\n      initial\n    );\n    --default-font-variation-settings: --theme(\n      --font-sans--font-variation-settings,\n      initial\n    );\n    --default-mono-font-family: --theme(--font-mono, initial);\n    --default-mono-font-feature-settings: --theme(\n      --font-mono--font-feature-settings,\n      initial\n    );\n    --default-mono-font-variation-settings: --theme(\n      --font-mono--font-variation-settings,\n      initial\n    );\n  }\n\n  /* Deprecated */\n  @theme default inline reference {\n    --blur: 8px;\n    --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n    --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);\n    --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);\n    --radius: 0.25rem;\n    --max-width-prose: 65ch;\n  }\n}\n\n@layer base {\n  /*\n  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n  2. Remove default margins and padding\n  3. Reset all borders.\n*/\n\n  *,\n  ::after,\n  ::before,\n  ::backdrop,\n  ::file-selector-button {\n    box-sizing: border-box; /* 1 */\n    margin: 0; /* 2 */\n    padding: 0; /* 2 */\n    border: 0 solid; /* 3 */\n  }\n\n  /*\n  1. Use a consistent sensible line-height in all browsers.\n  2. Prevent adjustments of font size after orientation changes in iOS.\n  3. Use a more readable tab size.\n  4. Use the user\'s configured `sans` font-family by default.\n  5. Use the user\'s configured `sans` font-feature-settings by default.\n  6. Use the user\'s configured `sans` font-variation-settings by default.\n  7. Disable tap highlights on iOS.\n*/\n\n  html,\n  :host {\n    line-height: 1.5; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    tab-size: 4; /* 3 */\n    font-family: --theme(\n      --default-font-family,\n      ui-sans-serif,\n      system-ui,\n      sans-serif,\n      "Apple Color Emoji",\n      "Segoe UI Emoji",\n      "Segoe UI Symbol",\n      "Noto Color Emoji"\n    ); /* 4 */\n    font-feature-settings: --theme(\n      --default-font-feature-settings,\n      normal\n    ); /* 5 */\n    font-variation-settings: --theme(\n      --default-font-variation-settings,\n      normal\n    ); /* 6 */\n    -webkit-tap-highlight-color: transparent; /* 7 */\n  }\n\n  /*\n  1. Add the correct height in Firefox.\n  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n  3. Reset the default border style to a 1px solid border.\n*/\n\n  hr {\n    height: 0; /* 1 */\n    color: inherit; /* 2 */\n    border-top-width: 1px; /* 3 */\n  }\n\n  /*\n  Add the correct text decoration in Chrome, Edge, and Safari.\n*/\n\n  abbr:where([title]) {\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n\n  /*\n  Remove the default font size and weight for headings.\n*/\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n\n  /*\n  Reset links to optimize for opt-in styling instead of opt-out.\n*/\n\n  a {\n    color: inherit;\n    -webkit-text-decoration: inherit;\n    text-decoration: inherit;\n  }\n\n  /*\n  Add the correct font weight in Edge and Safari.\n*/\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  /*\n  1. Use the user\'s configured `mono` font-family by default.\n  2. Use the user\'s configured `mono` font-feature-settings by default.\n  3. Use the user\'s configured `mono` font-variation-settings by default.\n  4. Correct the odd `em` font sizing in all browsers.\n*/\n\n  code,\n  kbd,\n  samp,\n  pre {\n    font-family: --theme(\n      --default-mono-font-family,\n      ui-monospace,\n      SFMono-Regular,\n      Menlo,\n      Monaco,\n      Consolas,\n      "Liberation Mono",\n      "Courier New",\n      monospace\n    ); /* 1 */\n    font-feature-settings: --theme(\n      --default-mono-font-feature-settings,\n      normal\n    ); /* 2 */\n    font-variation-settings: --theme(\n      --default-mono-font-variation-settings,\n      normal\n    ); /* 3 */\n    font-size: 1em; /* 4 */\n  }\n\n  /*\n  Add the correct font size in all browsers.\n*/\n\n  small {\n    font-size: 80%;\n  }\n\n  /*\n  Prevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  /*\n  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n  3. Remove gaps between table borders by default.\n*/\n\n  table {\n    text-indent: 0; /* 1 */\n    border-color: inherit; /* 2 */\n    border-collapse: collapse; /* 3 */\n  }\n\n  /*\n  Use the modern Firefox focus style for all focusable elements.\n*/\n\n  :-moz-focusring {\n    outline: auto;\n  }\n\n  /*\n  Add the correct vertical alignment in Chrome and Firefox.\n*/\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  /*\n  Add the correct display in Chrome and Safari.\n*/\n\n  summary {\n    display: list-item;\n  }\n\n  /*\n  Make lists unstyled by default.\n*/\n\n  ol,\n  ul,\n  menu {\n    list-style: none;\n  }\n\n  /*\n  1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n  2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n      This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\n  img,\n  svg,\n  video,\n  canvas,\n  audio,\n  iframe,\n  embed,\n  object {\n    display: block; /* 1 */\n    vertical-align: middle; /* 2 */\n  }\n\n  /*\n  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\n  img,\n  video {\n    max-width: 100%;\n    height: auto;\n  }\n\n  /*\n  1. Inherit font styles in all browsers.\n  2. Remove border radius in all browsers.\n  3. Remove background color in all browsers.\n  4. Ensure consistent opacity for disabled states in all browsers.\n*/\n\n  button,\n  input,\n  select,\n  optgroup,\n  textarea,\n  ::file-selector-button {\n    font: inherit; /* 1 */\n    font-feature-settings: inherit; /* 1 */\n    font-variation-settings: inherit; /* 1 */\n    letter-spacing: inherit; /* 1 */\n    color: inherit; /* 1 */\n    border-radius: 0; /* 2 */\n    background-color: transparent; /* 3 */\n    opacity: 1; /* 4 */\n  }\n\n  /*\n  Restore default font weight.\n*/\n\n  :where(select:is([multiple], [size])) optgroup {\n    font-weight: bolder;\n  }\n\n  /*\n  Restore indentation.\n*/\n\n  :where(select:is([multiple], [size])) optgroup option {\n    padding-inline-start: 20px;\n  }\n\n  /*\n  Restore space after button.\n*/\n\n  ::file-selector-button {\n    margin-inline-end: 4px;\n  }\n\n  /*\n  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n*/\n\n  ::placeholder {\n    opacity: 1;\n  }\n\n  /*\n  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not\n  crash when using `color-mix(…)` with `currentcolor`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)\n*/\n\n  @supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or\n    (contain-intrinsic-size: 1px) /* Safari 17+ */ {\n    ::placeholder {\n      color: color-mix(in oklab, currentcolor 50%, transparent);\n    }\n  }\n\n  /*\n  Prevent resizing textareas horizontally by default.\n*/\n\n  textarea {\n    resize: vertical;\n  }\n\n  /*\n  Remove the inner padding in Chrome and Safari on macOS.\n*/\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  /*\n  1. Ensure date/time inputs have the same height when empty in iOS Safari.\n  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.\n*/\n\n  ::-webkit-date-and-time-value {\n    min-height: 1lh; /* 1 */\n    text-align: inherit; /* 2 */\n  }\n\n  /*\n  Prevent height from changing on date/time inputs in macOS Safari when the input is set to `display: block`.\n*/\n\n  ::-webkit-datetime-edit {\n    display: inline-flex;\n  }\n\n  /*\n  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.\n*/\n\n  ::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n  }\n\n  ::-webkit-datetime-edit,\n  ::-webkit-datetime-edit-year-field,\n  ::-webkit-datetime-edit-month-field,\n  ::-webkit-datetime-edit-day-field,\n  ::-webkit-datetime-edit-hour-field,\n  ::-webkit-datetime-edit-minute-field,\n  ::-webkit-datetime-edit-second-field,\n  ::-webkit-datetime-edit-millisecond-field,\n  ::-webkit-datetime-edit-meridiem-field {\n    padding-block: 0;\n  }\n\n  /*\n  Center dropdown marker shown on inputs with paired `<datalist>`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)\n*/\n\n  ::-webkit-calendar-picker-indicator {\n    line-height: 1;\n  }\n\n  /*\n  Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n  :-moz-ui-invalid {\n    box-shadow: none;\n  }\n\n  /*\n  Correct the inability to style the border radius in iOS Safari.\n*/\n\n  button,\n  input:where([type="button"], [type="reset"], [type="submit"]),\n  ::file-selector-button {\n    appearance: button;\n  }\n\n  /*\n  Correct the cursor style of increment and decrement buttons in Safari.\n*/\n\n  ::-webkit-inner-spin-button,\n  ::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  /*\n  Make elements with the HTML hidden attribute stay hidden by default.\n*/\n\n  [hidden]:where(:not([hidden="until-found"])) {\n    display: none !important;\n  }\n}\n\n@layer utilities {\n  @tailwind utilities;\n}\n',
          ],
          sourceRoot: "",
        },
      ]);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        ___CSS_LOADER_EXPORT___;

      /***/
    },

    /***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/scss/main.scss"(
      /*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/scss/main.scss ***!
  \***************************************************************************************************************************************************************************************************************************************/
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js",
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js",
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
        );
      // Imports

<<<<<<< HEAD
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
<<<<<<< HEAD
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
=======
      var ___CSS_LOADER_EXPORT___ =
        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
        );
      // Module
      ___CSS_LOADER_EXPORT___.push([
        module.id,
        `@charset "UTF-8";
>>>>>>> 640e6ee (fixes style 16-03)
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
  content: "↗";
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
=======
___CSS_LOADER_EXPORT___.push([module.id, `.swiper-fullwidth {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.swiper-fullwidth .block-pagination {
  position: absolute;
  border: 1px solid red;
  bottom: 0;
  right: 0;
  width: 25%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
>>>>>>> 4acce8b (maj 093)
}
.swiper-fullwidth .block-pagination .block-scrollbar {
  display: flex;
  align-items: center;
  gap: 10px;
<<<<<<< HEAD
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
  margin: 0 10%;
  max-width: 65%;
}
.section-text-evidence .section-label {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 36px;
}
.section-text-evidence .section-label span {
  font-size: 0.65rem;
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
  background-color: #05233c;
  opacity: 0.4;
}
.section-text-evidence .section-content {
  margin-bottom: 40px;
}
.section-text-evidence .section-paragraph {
  margin-top: 20px;
  font-size: 0.95rem;
  color: #222;
}
.section-text-evidence .btn-cta {
  display: flex;
  align-items: center;
  gap: 14px;
  color: #05233c;
  text-decoration: none;
  font-size: 0.68rem;
  font-weight: 500;
  text-transform: uppercase;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(5, 35, 60, 0.4);
  transition: gap 0.25s ease, border-color 0.25s ease;
}
.section-text-evidence .btn-cta::after {
  content: "↗";
  font-size: 0.85rem;
}
.section-text-evidence .btn-cta:hover {
  gap: 22px;
  border-color: #05233c;
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
  border-bottom: 1px solid #e2e2e2;
}
.section-card-solutions .cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.section-card-solutions .card {
  display: flex;
  flex-direction: column;
}
.section-card-solutions .card-image {
  position: relative;
  width: 100%;
  aspect-ratio: 4/5;
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
  width: 44px;
  height: 44px;
  background-color: #fff;
  color: #05233c;
  font-size: 1.4rem;
  font-weight: 300;
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
  font-size: 0.62rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #d3bea1;
}
.section-card-solutions .card-title {
  font-size: 0.78rem;
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
.section-two-col .two-col-inner {
  margin: 0 10%;
  display: grid;
  grid-template-columns: 45% 100%;
  gap: 80px;
  align-items: start;
}

.two-col-left .section-label {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
}
.two-col-left .section-label span {
  font-size: 0.65rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #05233c;
  white-space: nowrap;
}
.two-col-left .section-label::after {
  content: "";
  display: block;
  height: 1px;
  width: 60px;
  background-color: #05233c;
  opacity: 0.4;
}

.two-col-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 60px;
}
.two-col-right .two-col-details,
.two-col-right .two-col-paragraph {
  font-size: 0.9rem;
  line-height: 1.8;
  color: #222;
}
.two-col-right .two-col-details p,
.two-col-right .two-col-paragraph p {
  margin: 0;
}
.two-col-right .btn-cta {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: #05233c;
  text-decoration: none;
  font-size: 0.68rem;
  font-weight: 500;
  text-transform: uppercase;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(5, 35, 60, 0.4);
  margin-top: 16px;
  transition: gap 0.25s ease, border-color 0.25s ease;
}
.two-col-right .btn-cta::after {
  content: "↗";
  font-size: 0.85rem;
  line-height: 1;
}
.two-col-right .btn-cta:hover {
  gap: 22px;
  border-color: #05233c;
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
}

.swiper-gallery {
  width: 100%;
  overflow: hidden;
}
.swiper-gallery .swiper-slide {
  width: 60%;
}
.swiper-gallery .swiper-slide .gallery-slide-inner {
  position: relative;
}
.swiper-gallery .swiper-slide .gallery-image {
  width: 100%;
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
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.gallery-pagination .swiper-pagination-gallery {
  position: relative;
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
  right: 4%;
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
  grid-template-columns: 45% 100%;
  gap: 80px;
  align-items: center;
}

.img-col {
  padding-bottom: 80px;
}

.img-wrapper {
  position: relative;
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
  width: 52%;
  aspect-ratio: 4/3;
  -o-object-fit: cover;
     object-fit: cover;
  position: absolute;
  bottom: -80px;
  right: 0;
  z-index: 2;
  outline: 10px solid #fff;
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
  content: "↗";
  font-size: 0.85rem;
  line-height: 1;
}
.text-col .btn-cta:hover {
  gap: 22px;
  border-color: #05233c;
}

@media (max-width: 1024px) {
  .section-img-text .section-img-text-inner {
    grid-template-columns: 50% 50%;
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
  .section-img-text .img-col {
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
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
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
  letter-spacing: 0.22em;
  text-transform: uppercase;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  align-self: flex-start;
  margin-top: 16px;
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
  font-size: 0.9rem;
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
  height: 1px;
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
  background-color: #fff;
}

.citation-block {
  padding: 70px 0;
}
.citation-block .citation-inner {
  margin: 0;
  display: grid;
  grid-template-columns: 120px;
  gap: 40px;
  align-items: start;
}
.citation-block .citation-name {
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #e2e2e2;
  padding-top: 8px;
}
.citation-block .citation-name {
  font-size: x-large;
}

.citation-blue {
  background-color: #05233c;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: stretch;
}
.citation-blue .citation-blue-inner {
  padding: 70px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  flex: 1;
  position: relative;
  z-index: 1;
}
.citation-blue .btn-cta {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: #fff;
  text-decoration: none;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  align-self: flex-start;
  transition: gap 0.25s ease, border-color 0.25s ease;
}
.citation-blue .btn-cta::after {
  content: "↗";
  font-size: 1rem;
}
.citation-blue .btn-cta:hover {
  gap: 22px;
  border-color: #fff;
}

@media (max-width: 768px) {
  .citation-block {
    padding: 50px 0;
  }
  .citation-block .citation-inner {
    grid-template-columns: 100%;
    gap: 16px;
    margin: 0;
  }
  .citation-blue .citation-blue-inner {
    padding: 50px 5%;
  }
  .citation-blue .citation-deco {
    display: none;
  }
}
.section-discover {
  display: flex;
  min-height: 70vh;
}
.section-discover .discover-left {
  width: 50%;
  background-color: #05233c;
  background-size: cover;
  background-position: center;
}
.section-discover .discover-right {
  width: 50%;
  background-color: #fff;
  padding: 80px 60px;
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
    padding: 50px 5%;
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
  padding-top: 30px;
  padding-bottom: 30px;
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
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 5%;
    padding-right: 5%;
  }
  .section-links .links-item {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .section-links .links-item .links-label {
    font-size: 2rem;
  }
}
.section-video {
  background-color: #f4f4f4;
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
.site-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 30px 40px;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.header-logo {
  flex-shrink: 0;
  width: 180px;
  display: block;
}
.header-logo img {
  width: 100%;
  height: auto;
  display: block;
}

.header-nav {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.header-nav .navbar {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 0;
  padding: 0;
}
.header-nav .navbar > li {
  position: relative;
}
.header-nav .navbar > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: opacity 0.2s ease;
}
.header-nav .navbar > li > a:hover {
  opacity: 0.7;
}
.header-nav .navbar > li.menu-item-has-children > a::after {
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
.header-nav .navbar > li.menu-item-has-children .sub-menu {
  position: absolute;
  top: calc(100% + 20px);
  left: 0;
  background-color: rgba(255, 255, 255, 0.95);
  min-width: 220px;
  list-style: none;
  padding: 0;
  margin: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-6px);
  transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;
}
.header-nav .navbar > li.menu-item-has-children .sub-menu li a {
  display: block;
  padding: 12px 20px;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  color: #05233c;
  text-decoration: none;
  border-bottom: 1px solid #e2e2e2;
  transition: color 0.2s ease;
}
.header-nav .navbar > li.menu-item-has-children .sub-menu li a:hover {
  color: #d3bea1;
}
.header-nav .navbar > li.menu-item-has-children .sub-menu li:last-child a {
  border-bottom: none;
}
.header-nav .navbar > li.menu-item-has-children:hover > a::after {
  transform: rotate(180deg);
}
.header-nav .navbar > li.menu-item-has-children:hover .sub-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
}

.header-separator {
  display: block;
  width: 1px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.4);
}

.burger-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.burger-btn span {
  display: block;
  width: 28px;
  height: 1.5px;
  background-color: #fff;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.burger-btn span:last-child {
  width: 18px;
}
.burger-btn.is-active span:nth-child(1) {
  transform: translateY(7.5px) rotate(45deg);
}
.burger-btn.is-active span:nth-child(2) {
  opacity: 0;
}
.burger-btn.is-active span:nth-child(3) {
  transform: translateY(-7.5px) rotate(-45deg);
  width: 28px;
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
<<<<<<< HEAD
}`, "",{"version":3,"sources":["webpack://./src/scss/main.scss","webpack://./src/scss/builder/swiper.scss","webpack://./src/scss/variables/colors.scss","webpack://./src/scss/builder/section2.scss","webpack://./src/scss/builder/section3.scss","webpack://./src/scss/builder/section4.scss","webpack://./src/scss/builder/section5.scss","webpack://./src/scss/builder/section6.scss","webpack://./src/scss/builder/section7.scss","webpack://./src/scss/builder/section8.scss","webpack://./src/scss/builder/section9.scss","webpack://./src/scss/builder/section10.scss","webpack://./src/scss/builder/section11.scss","webpack://./src/scss/header.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n.slider-fullwidth {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.swiper-fullwidth {\n  width: 100%;\n  height: 100vh;\n}\n.swiper-fullwidth .swiper-slide {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.swiper-fullwidth .swiper-slide .background {\n  position: absolute;\n  z-index: 0;\n}\n.swiper-fullwidth .swiper-slide .background img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.swiper-fullwidth .swiper-slide .content {\n  position: absolute;\n  bottom: 110px;\n  left: 10%;\n  z-index: 1;\n  max-width: 60%;\n}\n.swiper-fullwidth .swiper-slide .content .btn-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n  color: #fff;\n  text-decoration: none;\n  font-size: 0.68rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  padding-bottom: 6px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.55);\n  transition: gap 0.25s ease, border-color 0.25s ease;\n}\n.swiper-fullwidth .swiper-slide .content .btn-cta::after {\n  content: \"↗\";\n  font-size: 0.85rem;\n  line-height: 1;\n}\n.swiper-fullwidth .block-pagination {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  z-index: 2;\n  background-color: #fff;\n  width: clamp(220px, 26vw, 400px);\n  height: 90px;\n  padding: 0 28px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n}\n.swiper-fullwidth .block-pagination .block-scrollbar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n}\n.swiper-fullwidth .block-pagination .block-scrollbar .number-slide {\n  font-size: 0.72rem;\n  font-weight: 500;\n  letter-spacing: 0.08em;\n  color: #05233c;\n  min-width: 18px;\n}\n.swiper-fullwidth .block-pagination .block-scrollbar .swiper-scrollbar {\n  flex: 1;\n  height: 1px;\n  background-color: #e2e2e2;\n  border-radius: 0;\n  position: relative;\n  top: auto;\n  left: auto;\n}\n.swiper-fullwidth .block-pagination .block-scrollbar .swiper-scrollbar .swiper-scrollbar-drag {\n  height: 100%;\n  background-color: #05233c;\n  border-radius: 0;\n  cursor: pointer;\n}\n.swiper-fullwidth .block-pagination .swiper-pagination {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n  width: auto;\n}\n.swiper-fullwidth .block-pagination .swiper-pagination .swiper-pagination-bullet {\n  width: 7px;\n  height: 7px;\n  background-color: #e2e2e2;\n  opacity: 1;\n  margin: 0;\n  transition: background-color 0.25s ease;\n}\n.swiper-fullwidth .block-pagination .swiper-pagination .swiper-pagination-bullet-active {\n  background-color: #05233c;\n}\n\n@media (max-width: 1024px) {\n  .swiper-fullwidth .swiper-slide .content {\n    left: 7%;\n    max-width: 75%;\n  }\n}\n@media (max-width: 768px) {\n  .swiper-fullwidth .swiper-slide .content {\n    left: 5%;\n    bottom: 90px;\n    max-width: 90%;\n  }\n  .swiper-fullwidth .block-pagination {\n    width: 100%;\n    height: 72px;\n    padding: 0 20px;\n  }\n}\n.section-text-evidence {\n  background-color: #fff;\n  padding: 90px 0;\n}\n.section-text-evidence .section-inner {\n  margin: 0 10%;\n  max-width: 65%;\n}\n.section-text-evidence .section-label {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 36px;\n}\n.section-text-evidence .section-label span {\n  font-size: 0.65rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #05233c;\n  white-space: nowrap;\n}\n.section-text-evidence .section-label::after {\n  content: \"\";\n  display: block;\n  height: 1px;\n  width: 60px;\n  background-color: #05233c;\n  opacity: 0.4;\n}\n.section-text-evidence .section-content {\n  margin-bottom: 40px;\n}\n.section-text-evidence .section-paragraph {\n  margin-top: 20px;\n  font-size: 0.95rem;\n  color: #222;\n}\n.section-text-evidence .btn-cta {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  color: #05233c;\n  text-decoration: none;\n  font-size: 0.68rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  padding-bottom: 6px;\n  border-bottom: 1px solid rgba(5, 35, 60, 0.4);\n  transition: gap 0.25s ease, border-color 0.25s ease;\n}\n.section-text-evidence .btn-cta::after {\n  content: \"↗\";\n  font-size: 0.85rem;\n}\n.section-text-evidence .btn-cta:hover {\n  gap: 22px;\n  border-color: #05233c;\n}\n\n@media (max-width: 1024px) {\n  .section-text-evidence .section-inner {\n    max-width: 80%;\n  }\n}\n@media (max-width: 768px) {\n  .section-text-evidence {\n    padding: 60px 0;\n  }\n  .section-text-evidence .section-inner {\n    margin: 0;\n    max-width: 90%;\n  }\n}\n.section-card-solutions {\n  background-color: #fff;\n  padding: 80px;\n  border-bottom: 1px solid #e2e2e2;\n}\n.section-card-solutions .cards-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 28px;\n}\n.section-card-solutions .card {\n  display: flex;\n  flex-direction: column;\n}\n.section-card-solutions .card-image {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 4/5;\n  background-color: #e2e2e2;\n}\n.section-card-solutions .card-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.section-card-solutions .card-image .card-plus {\n  position: absolute;\n  bottom: -1px;\n  right: -1px;\n  width: 44px;\n  height: 44px;\n  background-color: #fff;\n  color: #05233c;\n  font-size: 1.4rem;\n  font-weight: 300;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  transition: background-color 0.25s ease, color 0.25s ease;\n}\n.section-card-solutions .card-image .card-plus:hover {\n  background-color: #05233c;\n  color: #fff;\n}\n.section-card-solutions .card-body {\n  padding-top: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.section-card-solutions .card-category {\n  font-size: 0.62rem;\n  font-weight: 500;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: #d3bea1;\n}\n.section-card-solutions .card-title {\n  font-size: 0.78rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #05233c;\n  margin: 0;\n}\n\n@media (max-width: 1024px) {\n  .section-card-solutions {\n    padding: 60px;\n  }\n  .section-card-solutions .cards-grid {\n    gap: 20px;\n  }\n}\n@media (max-width: 768px) {\n  .section-card-solutions {\n    padding: 50px;\n  }\n  .section-card-solutions .cards-grid {\n    grid-template-columns: 100%;\n    gap: 32px;\n  }\n}\n.section-two-col {\n  background-color: #fff;\n  padding: 90px 0;\n}\n.section-two-col .two-col-inner {\n  margin: 0 10%;\n  display: grid;\n  grid-template-columns: 45% 100%;\n  gap: 80px;\n  align-items: start;\n}\n\n.two-col-left .section-label {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.two-col-left .section-label span {\n  font-size: 0.65rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #05233c;\n  white-space: nowrap;\n}\n.two-col-left .section-label::after {\n  content: \"\";\n  display: block;\n  height: 1px;\n  width: 60px;\n  background-color: #05233c;\n  opacity: 0.4;\n}\n\n.two-col-right {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding-top: 60px;\n}\n.two-col-right .two-col-details,\n.two-col-right .two-col-paragraph {\n  font-size: 0.9rem;\n  line-height: 1.8;\n  color: #222;\n}\n.two-col-right .two-col-details p,\n.two-col-right .two-col-paragraph p {\n  margin: 0;\n}\n.two-col-right .btn-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n  color: #05233c;\n  text-decoration: none;\n  font-size: 0.68rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  padding-bottom: 6px;\n  border-bottom: 1px solid rgba(5, 35, 60, 0.4);\n  margin-top: 16px;\n  transition: gap 0.25s ease, border-color 0.25s ease;\n}\n.two-col-right .btn-cta::after {\n  content: \"↗\";\n  font-size: 0.85rem;\n  line-height: 1;\n}\n.two-col-right .btn-cta:hover {\n  gap: 22px;\n  border-color: #05233c;\n}\n\n@media (max-width: 1024px) {\n  .section-two-col .two-col-inner {\n    grid-template-columns: 100%;\n    gap: 48px;\n    margin: 0;\n  }\n}\n@media (max-width: 768px) {\n  .section-two-col {\n    padding: 60px 0;\n  }\n  .section-two-col .two-col-inner {\n    grid-template-columns: 100%;\n    gap: 32px;\n    margin: 0 5%;\n  }\n  .section-two-col .two-col-right {\n    padding-top: 0;\n  }\n}\n.section-gallery {\n  position: relative;\n  padding: 80px 0;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n}\n\n.swiper-gallery {\n  width: 100%;\n  overflow: hidden;\n}\n.swiper-gallery .swiper-slide {\n  width: 60%;\n}\n.swiper-gallery .swiper-slide .gallery-slide-inner {\n  position: relative;\n}\n.swiper-gallery .swiper-slide .gallery-image {\n  width: 100%;\n  aspect-ratio: 4/3;\n  background-color: #e2e2e2;\n}\n.swiper-gallery .swiper-slide .gallery-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.swiper-gallery .swiper-slide .gallery-info {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: #fff;\n  padding: 20px 28px;\n  min-width: 55%;\n}\n.swiper-gallery .swiper-slide .gallery-info .gallery-titre {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #05233c;\n  margin: 0 0 4px;\n}\n.swiper-gallery .swiper-slide .gallery-info .gallery-description {\n  font-size: 0.78rem;\n  color: #222;\n  margin: 0;\n}\n\n.gallery-pagination {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n}\n.gallery-pagination .swiper-pagination-gallery {\n  position: relative;\n}\n.gallery-pagination .swiper-pagination-gallery .swiper-pagination-bullet {\n  background-color: #e2e2e2;\n  opacity: 1;\n}\n.gallery-pagination .swiper-pagination-gallery .swiper-pagination-bullet-active {\n  background-color: #05233c;\n}\n\n.gallery-nav {\n  position: absolute;\n  right: 4%;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  z-index: 2;\n}\n.gallery-nav button {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 1px solid #e2e2e2;\n  background: #fff;\n  cursor: pointer;\n  font-size: 1.2rem;\n  color: #05233c;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s ease, color 0.2s ease;\n}\n.gallery-nav button:hover {\n  background-color: #05233c;\n  color: #fff;\n  border-color: #05233c;\n}\n\n@media (max-width: 768px) {\n  .swiper-gallery .swiper-slide {\n    width: 85%;\n  }\n  .gallery-nav {\n    right: 2%;\n  }\n}\n.section-img-text {\n  background-color: #fff;\n  padding: 90px 0;\n}\n.section-img-text .section-img-text-inner {\n  margin: 0 10%;\n  display: grid;\n  grid-template-columns: 45% 100%;\n  gap: 80px;\n  align-items: center;\n}\n\n.img-col {\n  padding-bottom: 80px;\n}\n\n.img-wrapper {\n  position: relative;\n}\n.img-wrapper .img-large {\n  display: block;\n  width: 72%;\n  aspect-ratio: 3/4;\n  object-fit: cover;\n  position: relative;\n  z-index: 1;\n}\n.img-wrapper .img-small {\n  display: block;\n  width: 52%;\n  aspect-ratio: 4/3;\n  object-fit: cover;\n  position: absolute;\n  bottom: -80px;\n  right: 0;\n  z-index: 2;\n  outline: 10px solid #fff;\n}\n\n.text-col {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.text-col .section-label {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.text-col .section-label span {\n  font-size: 0.65rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #05233c;\n}\n.text-col .section-label::after {\n  content: \"\";\n  display: block;\n  height: 1px;\n  width: 60px;\n  background-color: #05233c;\n  opacity: 0.4;\n}\n.text-col .text-col-paragraph {\n  font-size: 0.88rem;\n  color: #222;\n}\n.text-col .text-col-paragraph p {\n  margin: 0;\n}\n.text-col .text-col-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.text-col .text-col-list li {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  font-size: 0.88rem;\n  color: #222;\n}\n.text-col .text-col-list li::before {\n  content: \"\";\n  display: inline-block;\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  background-color: #d3bea1;\n  clip-path: polygon(14% 44%, 0 58%, 30% 85%, 100% 14%, 86% 0%, 30% 62%);\n}\n.text-col .btn-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n  color: #05233c;\n  text-decoration: none;\n  font-size: 0.68rem;\n  font-weight: 500;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  padding-bottom: 6px;\n  border-bottom: 1px solid rgba(5, 35, 60, 0.4);\n  margin-top: 8px;\n  align-self: flex-start;\n  transition: gap 0.25s ease, border-color 0.25s ease;\n}\n.text-col .btn-cta::after {\n  content: \"↗\";\n  font-size: 0.85rem;\n  line-height: 1;\n}\n.text-col .btn-cta:hover {\n  gap: 22px;\n  border-color: #05233c;\n}\n\n@media (max-width: 1024px) {\n  .section-img-text .section-img-text-inner {\n    grid-template-columns: 50% 50%;\n    gap: 50px;\n    margin: 0;\n  }\n}\n@media (max-width: 768px) {\n  .section-img-text {\n    padding: 60px 0;\n  }\n  .section-img-text .section-img-text-inner {\n    grid-template-columns: 100%;\n    gap: 60px;\n    margin: 0 5%;\n  }\n  .section-img-text .img-col {\n    padding-bottom: 60px;\n  }\n}\n.section-projects {\n  background-color: #fff;\n}\n\n.projects-inner {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  min-height: 500px;\n}\n\n.projects-left {\n  background-color: #05233c;\n  padding: 70px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 24px;\n}\n.projects-left .projects-paragraph {\n  font-size: 0.85rem;\n  line-height: 1.8;\n  color: rgba(255, 255, 255, 0.7);\n  margin: 0;\n}\n.projects-left .btn-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n  color: #fff;\n  text-decoration: none;\n  font-size: 0.68rem;\n  font-weight: 500;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  padding-bottom: 6px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.4);\n  align-self: flex-start;\n  margin-top: 16px;\n  transition: gap 0.25s ease, border-color 0.25s ease;\n}\n.projects-left .btn-cta::after {\n  content: \"↗\";\n  font-size: 0.85rem;\n  line-height: 1;\n}\n.projects-left .btn-cta:hover {\n  gap: 22px;\n  border-color: #fff;\n}\n\n.projects-right {\n  position: relative;\n  overflow: hidden;\n}\n.projects-right .swiper-projects {\n  width: 100%;\n  height: 100%;\n}\n.projects-right .swiper-projects .swiper-slide {\n  position: relative;\n  height: 100%;\n}\n.projects-right .swiper-projects .swiper-slide img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.projects-right .swiper-projects .swiper-slide .slide-info {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n}\n.projects-right .swiper-projects .swiper-slide .slide-info .slide-location {\n  font-size: 0.9rem;\n  color: #fff;\n  font-weight: 400;\n}\n.projects-right .swiper-projects .swiper-slide .slide-info .slide-price {\n  background-color: #fff;\n  color: #05233c;\n  font-size: 0.75rem;\n  font-weight: 500;\n  padding: 8px 18px;\n  border-radius: 40px;\n}\n\n.projects-controls {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  padding: 28px;\n  border-top: 1px solid #e2e2e2;\n}\n\n.projects-nav {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.projects-nav button {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 1px solid #e2e2e2;\n  background: none;\n  cursor: pointer;\n  font-size: 1.2rem;\n  color: #05233c;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;\n}\n.projects-nav button:hover {\n  background-color: #05233c;\n  color: #fff;\n  border-color: #05233c;\n}\n\n.swiper-scrollbar-projects {\n  flex: 1;\n  height: 1px;\n  background-color: #e2e2e2;\n  position: relative;\n}\n.swiper-scrollbar-projects .swiper-scrollbar-drag {\n  height: 100%;\n  background-color: #05233c;\n  border-radius: 0;\n}\n\n.projects-number {\n  font-size: 2.4rem;\n  font-weight: 700;\n  color: #d3bea1;\n  flex-shrink: 0;\n  min-width: 48px;\n  text-align: right;\n}\n\n@media (max-width: 768px) {\n  .projects-inner {\n    grid-template-columns: 100%;\n  }\n  .projects-right {\n    min-height: 300px;\n  }\n  .projects-left {\n    padding: 50px;\n  }\n  .projects-controls {\n    padding: 20px;\n  }\n}\n.section-citation {\n  background-color: #fff;\n}\n\n.citation-block {\n  padding: 70px 0;\n}\n.citation-block .citation-inner {\n  margin: 0;\n  display: grid;\n  grid-template-columns: 120px;\n  gap: 40px;\n  align-items: start;\n}\n.citation-block .citation-name {\n  font-size: 0.62rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #e2e2e2;\n  padding-top: 8px;\n}\n.citation-block .citation-name {\n  font-size: x-large;\n}\n\n.citation-blue {\n  background-color: #05233c;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: stretch;\n}\n.citation-blue .citation-blue-inner {\n  padding: 70px;\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n  flex: 1;\n  position: relative;\n  z-index: 1;\n}\n.citation-blue .btn-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n  color: #fff;\n  text-decoration: none;\n  font-size: 0.68rem;\n  font-weight: 500;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  padding-bottom: 6px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.4);\n  align-self: flex-start;\n  transition: gap 0.25s ease, border-color 0.25s ease;\n}\n.citation-blue .btn-cta::after {\n  content: \"↗\";\n  font-size: 1rem;\n}\n.citation-blue .btn-cta:hover {\n  gap: 22px;\n  border-color: #fff;\n}\n\n@media (max-width: 768px) {\n  .citation-block {\n    padding: 50px 0;\n  }\n  .citation-block .citation-inner {\n    grid-template-columns: 100%;\n    gap: 16px;\n    margin: 0;\n  }\n  .citation-blue .citation-blue-inner {\n    padding: 50px 5%;\n  }\n  .citation-blue .citation-deco {\n    display: none;\n  }\n}\n.section-discover {\n  display: flex;\n  min-height: 70vh;\n}\n.section-discover .discover-left {\n  width: 50%;\n  background-color: #05233c;\n  background-size: cover;\n  background-position: center;\n}\n.section-discover .discover-right {\n  width: 50%;\n  background-color: #fff;\n  padding: 80px 60px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n}\n.section-discover .discover-right .discover-title {\n  color: #05233c;\n  font-size: 2.2rem;\n  line-height: 1.2;\n  margin-bottom: 30px;\n}\n.section-discover .discover-right .discover-paragraph {\n  color: #222;\n  font-size: 0.95rem;\n  line-height: 1.7;\n  margin-bottom: 50px;\n}\n.section-discover .discover-right .discover-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  background-color: #d3bea1;\n  color: #fff;\n  text-decoration: none;\n  font-size: 0.7rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  padding: 16px 30px;\n  align-self: flex-end;\n}\n\n@media (max-width: 768px) {\n  .section-discover {\n    flex-direction: column;\n  }\n  .section-discover .discover-left {\n    width: 100%;\n    min-height: 300px;\n  }\n  .section-discover .discover-right {\n    width: 100%;\n    padding: 50px 5%;\n  }\n  .section-discover .discover-right .discover-btn {\n    align-self: flex-start;\n  }\n}\n.section-links {\n  background-color: #fff;\n  padding-top: 60px;\n  padding-bottom: 60px;\n  padding-left: 10%;\n  padding-right: 10%;\n}\n.section-links .links-item {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  border-top: 1px solid #e2e2e2;\n  text-decoration: none;\n}\n.section-links .links-item:last-child {\n  border-bottom: 1px solid #e2e2e2;\n}\n.section-links .links-item .links-numero {\n  font-size: 0.65rem;\n  color: #d3bea1;\n  letter-spacing: 0.1em;\n  min-width: 20px;\n}\n.section-links .links-item .links-label {\n  font-size: 3rem;\n  font-weight: 300;\n  color: #05233c;\n  line-height: 1;\n}\n\n@media (max-width: 768px) {\n  .section-links {\n    padding-top: 40px;\n    padding-bottom: 40px;\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n  .section-links .links-item {\n    padding-top: 20px;\n    padding-bottom: 20px;\n  }\n  .section-links .links-item .links-label {\n    font-size: 2rem;\n  }\n}\n.section-video {\n  background-color: #f4f4f4;\n  padding-top: 80px;\n  padding-bottom: 80px;\n  padding-left: 10%;\n  padding-right: 10%;\n}\n.section-video .video-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 50px;\n}\n.section-video .video-top .video-top-left {\n  width: 45%;\n}\n.section-video .video-top .video-top-left .video-text {\n  color: #05233c;\n  font-size: 1.5rem;\n  font-weight: 300;\n  line-height: 1.4;\n  margin-bottom: 30px;\n}\n.section-video .video-top .video-top-left .video-line {\n  border: none;\n  border-top: 1px solid #e2e2e2;\n  margin: 0;\n}\n.section-video .video-top .video-top-right {\n  width: 40%;\n  padding-top: 20px;\n}\n.section-video .video-top .video-top-right .video-paragraph {\n  color: #222;\n  font-size: 0.85rem;\n  line-height: 1.7;\n}\n.section-video .video-wrapper {\n  background-color: #05233c;\n  width: 100%;\n  aspect-ratio: 16/9;\n  overflow: hidden;\n}\n.section-video .video-wrapper iframe {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n@media (max-width: 768px) {\n  .section-video {\n    padding-top: 50px;\n    padding-bottom: 50px;\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n  .section-video .video-top {\n    flex-direction: column;\n    gap: 30px;\n  }\n  .section-video .video-top .video-top-left {\n    width: 100%;\n  }\n  .section-video .video-top .video-top-right {\n    width: 100%;\n    padding-top: 0;\n  }\n}\n.site-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 100;\n  padding: 30px 40px;\n}\n\n.header-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 40px;\n}\n\n.header-logo {\n  flex-shrink: 0;\n  width: 180px;\n  display: block;\n}\n.header-logo img {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n\n.header-nav {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n}\n.header-nav .navbar {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  gap: 40px;\n  margin: 0;\n  padding: 0;\n}\n.header-nav .navbar > li {\n  position: relative;\n}\n.header-nav .navbar > li > a {\n  color: #fff;\n  text-decoration: none;\n  font-size: 0.7rem;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: opacity 0.2s ease;\n}\n.header-nav .navbar > li > a:hover {\n  opacity: 0.7;\n}\n.header-nav .navbar > li.menu-item-has-children > a::after {\n  content: \"\";\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 5px solid #fff;\n  margin-top: 2px;\n  transition: transform 0.2s ease;\n}\n.header-nav .navbar > li.menu-item-has-children .sub-menu {\n  position: absolute;\n  top: calc(100% + 20px);\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.95);\n  min-width: 220px;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-6px);\n  transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;\n}\n.header-nav .navbar > li.menu-item-has-children .sub-menu li a {\n  display: block;\n  padding: 12px 20px;\n  font-size: 0.75rem;\n  letter-spacing: 0.08em;\n  color: #05233c;\n  text-decoration: none;\n  border-bottom: 1px solid #e2e2e2;\n  transition: color 0.2s ease;\n}\n.header-nav .navbar > li.menu-item-has-children .sub-menu li a:hover {\n  color: #d3bea1;\n}\n.header-nav .navbar > li.menu-item-has-children .sub-menu li:last-child a {\n  border-bottom: none;\n}\n.header-nav .navbar > li.menu-item-has-children:hover > a::after {\n  transform: rotate(180deg);\n}\n.header-nav .navbar > li.menu-item-has-children:hover .sub-menu {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-shrink: 0;\n}\n\n.header-separator {\n  display: block;\n  width: 1px;\n  height: 36px;\n  background-color: rgba(255, 255, 255, 0.4);\n}\n\n.burger-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.burger-btn span {\n  display: block;\n  width: 28px;\n  height: 1.5px;\n  background-color: #fff;\n  transition: transform 0.3s ease, opacity 0.3s ease;\n}\n.burger-btn span:last-child {\n  width: 18px;\n}\n.burger-btn.is-active span:nth-child(1) {\n  transform: translateY(7.5px) rotate(45deg);\n}\n.burger-btn.is-active span:nth-child(2) {\n  opacity: 0;\n}\n.burger-btn.is-active span:nth-child(3) {\n  transform: translateY(-7.5px) rotate(-45deg);\n  width: 28px;\n}\n\n.mobile-menu {\n  position: fixed;\n  inset: 0;\n  background-color: #05233c;\n  z-index: 99;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateX(100%);\n  transition: transform 0.4s ease, opacity 0.3s ease, visibility 0.4s;\n}\n.mobile-menu.is-open {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(0);\n}\n.mobile-menu .mobile-navbar {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n}\n.mobile-menu .mobile-navbar > li {\n  padding: 16px 0;\n}\n.mobile-menu .mobile-navbar > li > a {\n  color: #fff;\n  text-decoration: none;\n  font-size: 1.4rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  transition: color 0.2s ease;\n}\n.mobile-menu .mobile-navbar > li > a:hover {\n  color: #d3bea1;\n}\n.mobile-menu .mobile-navbar > li .sub-menu {\n  list-style: none;\n  padding: 10px 0 0;\n  margin: 0;\n}\n.mobile-menu .mobile-navbar > li .sub-menu li {\n  padding: 6px 0;\n}\n.mobile-menu .mobile-navbar > li .sub-menu li a {\n  font-size: 0.95rem;\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n  letter-spacing: 0.06em;\n  transition: color 0.2s ease;\n}\n.mobile-menu .mobile-navbar > li .sub-menu li a:hover {\n  color: #fff;\n}\n\n@media (max-width: 768px) {\n  .site-header {\n    padding: 20px;\n  }\n  .header-nav {\n    display: none;\n  }\n  .header-separator {\n    display: none;\n  }\n}","@use \"./../variables/colors.scss\" as *;\n\n\n.slider-fullwidth {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.swiper-fullwidth {\n  width: 100%;\n  height: 100vh;\n\n\n  .swiper-slide {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n\n    \n    .background {\n      position: absolute;\n      z-index: 0;\n\n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        display: block;\n      }\n\n      \n     \n    }\n\n    \n    .content {\n      position: absolute;\n      bottom: 110px;\n      left: 10%;\n      z-index: 1;\n      max-width: 60%;\n\n      \n      .btn-cta {\n        display: inline-flex;\n        align-items: center;\n        gap: 14px;\n        color: $white;\n        text-decoration: none;\n        font-size: 0.68rem;\n        font-weight: 500;\n        text-transform: uppercase;\n        padding-bottom: 6px;\n        border-bottom: 1px solid rgba(255, 255, 255, 0.55);\n        transition: gap 0.25s ease, border-color 0.25s ease;\n\n        &::after {\n          content: '↗';\n          font-size: 0.85rem;\n          line-height: 1;\n        }\n\n\n      }\n    }\n  }\n\n  .block-pagination {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    z-index: 2;\n    background-color: $white;\n    width: clamp(220px, 26vw, 400px);\n    height: 90px;\n    padding: 0 28px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 20px;\n\n    .block-scrollbar {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      flex: 1;\n\n      .number-slide {\n        font-size: 0.72rem;\n        font-weight: 500;\n        letter-spacing: 0.08em;\n        color: $primaryColor;\n        min-width: 18px;\n      }\n\n      .swiper-scrollbar {\n        flex: 1;\n        height: 1px;\n        background-color: $lightGray;\n        border-radius: 0;\n        position: relative;\n        top: auto;\n        left: auto;\n\n        .swiper-scrollbar-drag {\n          height: 100%;\n          background-color: $primaryColor;\n          border-radius: 0;\n          cursor: pointer;\n        }\n      }\n    }\n\n    .swiper-pagination {\n      position: relative;\n      display: flex;\n      align-items: center;\n      gap: 6px;\n      flex-shrink: 0;\n      width: auto;\n\n      .swiper-pagination-bullet {\n        width: 7px;\n        height: 7px;\n        background-color: $lightGray;\n        opacity: 1;\n        margin: 0;\n        transition: background-color 0.25s ease;\n      }\n\n      .swiper-pagination-bullet-active {\n        background-color: $primaryColor;\n      }\n    }\n  }\n}\n\n// Responsive \n\n@media (max-width: 1024px) {\n  .swiper-fullwidth {\n    .swiper-slide .content {\n      left: 7%;\n      max-width: 75%;\n    }\n  }\n}\n\n@media (max-width: 768px) {\n  .swiper-fullwidth {\n    .swiper-slide .content {\n      left: 5%;\n      bottom: 90px;\n      max-width: 90%;\n    }\n\n    .block-pagination {\n      width: 100%;\n      height: 72px;\n      padding: 0 20px;\n    }\n  }\n}\n","$primaryColor: #05233c;\n$secondaryColor: #d3bea1;\n\n$txtColor: #222;\n$lightGray: #e2e2e2;\n$white: #fff;\n$black: #000;\n","@use \"./../variables/colors.scss\" as *;\n\n.section-text-evidence {\n  background-color: $white;\n  padding: 90px 0;\n\n  .section-inner {\n    margin: 0 10%;\n    max-width: 65%;\n  }\n\n  .section-label {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    margin-bottom: 36px;\n\n    span {\n      font-size: 0.65rem;\n      font-weight: 500;\n      text-transform: uppercase;\n      color: $primaryColor;\n      white-space: nowrap;\n    }\n\n    &::after {\n      content: \"\";\n      display: block;\n      height: 1px;\n      width: 60px;\n      background-color: $primaryColor;\n      opacity: 0.4;\n    }\n  }\n\n  .section-content {\n    margin-bottom: 40px;\n  }\n\n  .section-paragraph {\n    margin-top: 20px;\n    font-size: 0.95rem;\n    color: $txtColor;\n  }\n\n  .btn-cta {\n    display: flex;\n    align-items: center;\n    gap: 14px;\n    color: $primaryColor;\n    text-decoration: none;\n    font-size: 0.68rem;\n    font-weight: 500;\n    text-transform: uppercase;\n    padding-bottom: 6px;\n    border-bottom: 1px solid rgba($primaryColor, 0.4);\n    transition:\n      gap 0.25s ease,\n      border-color 0.25s ease;\n\n    &::after {\n      content: \"↗\";\n      font-size: 0.85rem;\n    }\n\n    &:hover {\n      gap: 22px;\n      border-color: $primaryColor;\n    }\n  }\n}\n\n// responsive\n@media (max-width: 1024px) {\n  .section-text-evidence .section-inner {\n    max-width: 80%;\n  }\n}\n\n@media (max-width: 768px) {\n  .section-text-evidence {\n    padding: 60px 0;\n\n    .section-inner {\n      margin: 0;\n      max-width: 90%;\n    }\n  }\n}\n","@use \"./../variables/colors.scss\" as *;\n\n.section-card-solutions {\n  background-color: $white;\n  padding: 80px ;\n  border-bottom: 1px solid $lightGray;\n\n  .cards-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 28px;\n  }\n\n  .card {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .card-image {\n    position: relative;\n    width: 100%;\n    aspect-ratio: 4 / 5;\n    background-color: $lightGray;\n\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      display: block;\n    }\n\n    .card-plus {\n      position: absolute;\n      bottom: -1px;\n      right: -1px;\n      width: 44px;\n      height: 44px;\n      background-color: $white;\n      color: $primaryColor;\n      font-size: 1.4rem;\n      font-weight: 300;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-decoration: none;\n      transition:\n        background-color 0.25s ease,\n        color 0.25s ease;\n\n      &:hover {\n        background-color: $primaryColor;\n        color: $white;\n      }\n    }\n  }\n\n  .card-body {\n    padding-top: 18px;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n\n  .card-category {\n    font-size: 0.62rem;\n    font-weight: 500;\n    letter-spacing: 0.18em;\n    text-transform: uppercase;\n    color: $secondaryColor;\n  }\n\n  .card-title {\n    font-size: 0.78rem;\n    font-weight: 500;\n    text-transform: uppercase;\n    color: $primaryColor;\n    margin: 0;\n  }\n}\n\n// Responsive\n@media (max-width: 1024px) {\n  .section-card-solutions {\n    padding: 60px ;\n\n    .cards-grid {\n      gap: 20px;\n    }\n  }\n}\n\n@media (max-width: 768px) {\n  .section-card-solutions {\n    padding: 50px;\n\n    .cards-grid {\n      grid-template-columns: 100%;\n      gap: 32px;\n    }\n  }\n}\n","@use \"./../variables/colors.scss\" as *;\n\n.section-two-col {\n  background-color: $white;\n  padding: 90px 0;\n\n  .two-col-inner {\n    margin: 0 10%;\n    display: grid;\n    grid-template-columns: 45% 100%;\n    gap: 80px;\n    align-items: start;\n  }\n}\n\n.two-col-left {\n  .section-label {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    margin-bottom: 28px;\n\n    span {\n      font-size: 0.65rem;\n      font-weight: 500;\n      text-transform: uppercase;\n      color: $primaryColor;\n      white-space: nowrap;\n    }\n\n    &::after {\n      content: \"\";\n      display: block;\n      height: 1px;\n      width: 60px;\n      background-color: $primaryColor;\n      opacity: 0.4;\n    }\n  }\n\n  //.two-col-title {\n// }\n}\n\n.two-col-right {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding-top: 60px;\n\n  .two-col-details,\n  .two-col-paragraph {\n    font-size: 0.9rem;\n    line-height: 1.8;\n    color: $txtColor;\n\n    p {\n      margin: 0;\n    }\n  }\n\n  .btn-cta {\n    display: inline-flex;\n    align-items: center;\n    gap: 14px;\n    color: $primaryColor;\n    text-decoration: none;\n    font-size: 0.68rem;\n    font-weight: 500;\n    text-transform: uppercase;\n    padding-bottom: 6px;\n    border-bottom: 1px solid rgba($primaryColor, 0.4);\n    margin-top: 16px;\n    transition:\n      gap 0.25s ease,\n      border-color 0.25s ease;\n\n    &::after {\n      content: \"↗\";\n      font-size: 0.85rem;\n      line-height: 1;\n    }\n\n    &:hover {\n      gap: 22px;\n      border-color: $primaryColor;\n    }\n  }\n}\n\n// ── Responsive\n\n@media (max-width: 1024px) {\n  .section-two-col .two-col-inner {\n    grid-template-columns: 100% ;\n    gap: 48px;\n    margin: 0;\n  }\n}\n\n@media (max-width: 768px) {\n  .section-two-col {\n    padding: 60px 0;\n\n    .two-col-inner {\n      grid-template-columns: 100%;\n      gap: 32px;\n      margin: 0 5%;\n    }\n\n    .two-col-right {\n      padding-top: 0;\n    }\n  }\n}\n","@use \"./../variables/colors.scss\" as *;\n\n.section-gallery {\n  position: relative;\n  padding: 80px 0;\n  background-color: $white;\n  display: flex;\n  align-items: center;\n}\n\n.swiper-gallery {\n  width: 100%;\n  overflow: hidden;\n\n  .swiper-slide {\n    width: 60%;\n\n    .gallery-slide-inner {\n      position: relative;\n    }\n\n    .gallery-image {\n      width: 100%;\n      aspect-ratio: 4 / 3;\n      background-color: $lightGray;\n\n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        display: block;\n      }\n    }\n\n    .gallery-info {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      background-color: $white;\n      padding: 20px 28px;\n      min-width: 55%;\n\n      .gallery-titre {\n        font-size: 0.85rem;\n        font-weight: 600;\n        color: $primaryColor;\n        margin: 0 0 4px;\n      }\n\n      .gallery-description {\n        font-size: 0.78rem;\n        color: $txtColor;\n        margin: 0;\n      }\n    }\n  }\n}\n\n// Dots pagination\n.gallery-pagination {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n\n  .swiper-pagination-gallery {\n    position: relative;\n\n    .swiper-pagination-bullet {\n      background-color: $lightGray;\n      opacity: 1;\n    }\n\n    .swiper-pagination-bullet-active {\n      background-color: $primaryColor;\n    }\n  }\n}\n\n.gallery-nav {\n  position: absolute;\n  right: 4%;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  z-index: 2;\n\n  button {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    border: 1px solid $lightGray;\n    background: $white;\n    cursor: pointer;\n    font-size: 1.2rem;\n    color: $primaryColor;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition:\n      background-color 0.2s ease,\n      color 0.2s ease;\n\n    &:hover {\n      background-color: $primaryColor;\n      color: $white;\n      border-color: $primaryColor;\n    }\n  }\n}\n\n@media (max-width: 768px) {\n  .swiper-gallery .swiper-slide {\n    width: 85%;\n  }\n\n  .gallery-nav {\n    right: 2%;\n  }\n}\n","@use \"./../variables/colors.scss\" as *;\n\n.section-img-text {\n  background-color: $white;\n  padding: 90px 0;\n\n  .section-img-text-inner {\n    margin: 0 10%;\n    display: grid;\n    grid-template-columns: 45% 100%;\n    gap: 80px;\n    align-items: center;\n  }\n}\n\n.img-col {\n  padding-bottom: 80px;\n}\n\n.img-wrapper {\n  position: relative;\n\n  .img-large {\n    display: block;\n    width: 72%;\n    aspect-ratio: 3 / 4;\n    object-fit: cover;\n    position: relative;\n    z-index: 1;\n  }\n\n  .img-small {\n    display: block;\n    width: 52%;\n    aspect-ratio: 4 / 3;\n    object-fit: cover;\n    position: absolute;\n    bottom: -80px;\n    right: 0;\n    z-index: 2;\n    outline: 10px solid $white;\n  }\n}\n\n.text-col {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n\n  .section-label {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n\n    span {\n      font-size: 0.65rem;\n      font-weight: 500;\n      text-transform: uppercase;\n      color: $primaryColor;\n    }\n\n    &::after {\n      content: \"\";\n      display: block;\n      height: 1px;\n      width: 60px;\n      background-color: $primaryColor;\n      opacity: 0.4;\n    }\n  }\n\n  .text-col-title {\n  }\n\n  .text-col-paragraph {\n    font-size: 0.88rem;\n    color: $txtColor;\n\n    p {\n      margin: 0;\n    }\n  }\n\n  .text-col-list {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n\n    li {\n      display: flex;\n      align-items: center;\n      gap: 14px;\n      font-size: 0.88rem;\n      color: $txtColor;\n\n      &::before {\n        content: \"\";\n        display: inline-block;\n        flex-shrink: 0;\n        width: 16px;\n        height: 16px;\n        background-color: $secondaryColor;\n        clip-path: polygon(14% 44%, 0 58%, 30% 85%, 100% 14%, 86% 0%, 30% 62%);\n      }\n    }\n  }\n\n  .btn-cta {\n    display: inline-flex;\n    align-items: center;\n    gap: 14px;\n    color: $primaryColor;\n    text-decoration: none;\n    font-size: 0.68rem;\n    font-weight: 500;\n    letter-spacing: 0.22em;\n    text-transform: uppercase;\n    padding-bottom: 6px;\n    border-bottom: 1px solid rgba($primaryColor, 0.4);\n    margin-top: 8px;\n    align-self: flex-start;\n    transition:\n      gap 0.25s ease,\n      border-color 0.25s ease;\n\n    &::after {\n      content: \"↗\";\n      font-size: 0.85rem;\n      line-height: 1;\n    }\n\n    &:hover {\n      gap: 22px;\n      border-color: $primaryColor;\n    }\n  }\n}\n\n// partie responsive\n\n@media (max-width: 1024px) {\n  .section-img-text .section-img-text-inner {\n    grid-template-columns: 50% 50%;\n    gap: 50px;                     \n    margin: 0 ;                   \n  }\n}\n\n@media (max-width: 768px) {\n  .section-img-text {\n    padding: 60px 0;\n\n    .section-img-text-inner {\n      grid-template-columns: 100%;\n      gap: 60px;\n      margin: 0 5%;\n    }\n\n    .img-col {\n      padding-bottom: 60px;\n    }\n  }\n}\n","@use \"./../variables/colors.scss\" as *;\n\n.section-projects {\n  background-color: $white;\n}\n\n.projects-inner {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  min-height: 500px;\n}\n\n// Panneau bleu\n.projects-left {\n  background-color: $primaryColor;\n  padding: 70px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 24px;\n\n  .projects-paragraph {\n    font-size: 0.85rem;\n    line-height: 1.8;\n    color: rgba(255, 255, 255, 0.7);\n    margin: 0;\n  }\n\n  .btn-cta {\n    display: inline-flex;\n    align-items: center;\n    gap: 14px;\n    color: $white;\n    text-decoration: none;\n    font-size: 0.68rem;\n    font-weight: 500;\n    letter-spacing: 0.22em;\n    text-transform: uppercase;\n    padding-bottom: 6px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.4);\n    align-self: flex-start;\n    margin-top: 16px;\n    transition:\n      gap 0.25s ease,\n      border-color 0.25s ease;\n\n    &::after {\n      content: \"↗\";\n      font-size: 0.85rem;\n      line-height: 1;\n    }\n\n    &:hover {\n      gap: 22px;\n      border-color: $white;\n    }\n  }\n}\n\n.projects-right {\n  position: relative;\n  overflow: hidden;\n\n  .swiper-projects {\n    width: 100%;\n    height: 100%;\n\n    .swiper-slide {\n      position: relative;\n      height: 100%;\n\n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        display: block;\n      }\n\n      .slide-info {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 18px 24px;\n\n        .slide-location {\n          font-size: 0.9rem;\n          color: $white;\n          font-weight: 400;\n        }\n\n        .slide-price {\n          background-color: $white;\n          color: $primaryColor;\n          font-size: 0.75rem;\n          font-weight: 500;\n          padding: 8px 18px;\n          border-radius: 40px;\n        }\n      }\n    }\n  }\n}\n\n.projects-controls {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  padding: 28px;\n  border-top: 1px solid $lightGray;\n}\n\n.projects-nav {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n\n  button {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    border: 1px solid $lightGray;\n    background: none;\n    cursor: pointer;\n    font-size: 1.2rem;\n    color: $primaryColor;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition:\n      background-color 0.2s ease,\n      color 0.2s ease,\n      border-color 0.2s ease;\n\n    &:hover {\n      background-color: $primaryColor;\n      color: $white;\n      border-color: $primaryColor;\n    }\n  }\n}\n\n.swiper-scrollbar-projects {\n  flex: 1;\n  height: 1px;\n  background-color: $lightGray;\n  position: relative;\n\n  .swiper-scrollbar-drag {\n    height: 100%;\n    background-color: $primaryColor;\n    border-radius: 0;\n  }\n}\n\n.projects-number {\n  font-size: 2.4rem;\n  font-weight: 700;\n  color: $secondaryColor;\n  flex-shrink: 0;\n  min-width: 48px;\n  text-align: right;\n}\n\n// ── Responsive\n\n@media (max-width: 768px) {\n  .projects-inner {\n    grid-template-columns: 100%;\n  }\n\n  .projects-right {\n    min-height: 300px;\n  }\n\n  .projects-left {\n    padding: 50px ;\n  }\n\n  .projects-controls {\n    padding: 20px;\n  }\n}\n","@use \"./../variables/colors.scss\" as *;\n\n.section-citation {\n  background-color: $white;\n}\n\n\n\n.citation-block {\n  padding: 70px 0;\n\n  .citation-inner {\n    margin: 0;\n    display: grid;\n    grid-template-columns: 120px ;\n    gap: 40px;\n    align-items: start;\n  }\n\n  .citation-name {\n    font-size: 0.62rem;\n    letter-spacing: 0.14em;\n    text-transform: uppercase;\n    color: $lightGray;\n    padding-top: 8px;\n  }\n\n  .citation-name{\n\n  font-size: x-large;\n  }\n}\n\n\n\n.citation-blue {\n  background-color: $primaryColor;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: stretch;\n\n  .citation-blue-inner {\n    padding: 70px;\n    display: flex;\n    flex-direction: column;\n    gap: 28px;\n    flex: 1;\n    position: relative;\n    z-index: 1;\n  }\n\n  \n\n  .btn-cta {\n    display: inline-flex;\n    align-items: center;\n    gap: 14px;\n    color: $white;\n    text-decoration: none;\n    font-size: 0.68rem;\n    font-weight: 500;\n    letter-spacing: 0.22em;\n    text-transform: uppercase;\n    padding-bottom: 6px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.4);\n    align-self: flex-start;\n    transition:\n      gap 0.25s ease,\n      border-color 0.25s ease;\n\n    &::after {\n      content: \"↗\";\n      font-size: 1rem;\n    }\n\n    &:hover {\n      gap: 22px;\n      border-color: $white;\n    }\n  }\n\n  \n}\n\n// ── Responsive\n\n@media (max-width: 768px) {\n  .citation-block {\n    padding: 50px 0;\n\n    .citation-inner {\n      grid-template-columns: 100%;\n      gap: 16px;\n      margin: 0;\n    }\n  }\n\n  .citation-blue {\n    .citation-blue-inner {\n      padding: 50px 5%;\n    }\n\n    .citation-deco {\n      display: none;\n    }\n  }\n}\n","@use \"./../variables/colors.scss\" as *;\n\n.section-discover {\n    display: flex;\n    min-height: 70vh;\n\n    .discover-left {\n        width: 50%;\n        background-color: $primaryColor;\n        background-size: cover;\n        background-position: center;\n    }\n\n    .discover-right {\n        width: 50%;\n        background-color: $white;\n        padding: 80px 60px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        position: relative;\n\n        .discover-title {\n            color: $primaryColor;\n            font-size: 2.2rem;\n            line-height: 1.2;\n            margin-bottom: 30px;\n        }\n\n        .discover-paragraph {\n            color: $txtColor;\n            font-size: 0.95rem;\n            line-height: 1.7;\n            margin-bottom: 50px;\n        }\n\n        .discover-btn {\n            display: inline-flex;\n            align-items: center;\n            gap: 12px;\n            background-color: $secondaryColor;\n            color: $white;\n            text-decoration: none;\n            font-size: 0.7rem;\n            letter-spacing: 0.2em;\n            text-transform: uppercase;\n            padding: 16px 30px;\n            align-self: flex-end;\n        }\n    }\n}\n\n@media (max-width: 768px) {\n    .section-discover {\n        flex-direction: column;\n\n        .discover-left {\n            width: 100%;\n            min-height: 300px;\n        }\n\n        .discover-right {\n            width: 100%;\n            padding: 50px 5%;\n\n            .discover-btn {\n                align-self: flex-start;\n            }\n        }\n    }\n}\n","@use \"./../variables/colors.scss\" as *;\n\n.section-links {\n    background-color: $white;\n    padding-top: 60px;\n    padding-bottom: 60px;\n    padding-left: 10%;\n    padding-right: 10%;\n\n    .links-item {\n        display: flex;\n        align-items: center;\n        gap: 20px;\n        padding-top: 30px;\n        padding-bottom: 30px;\n        border-top: 1px solid $lightGray;\n        text-decoration: none;\n\n        &:last-child {\n            border-bottom: 1px solid $lightGray;\n        }\n\n        .links-numero {\n            font-size: 0.65rem;\n            color: $secondaryColor;\n            letter-spacing: 0.1em;\n            min-width: 20px;\n        }\n\n        .links-label {\n            font-size: 3rem;\n            font-weight: 300;\n            color: $primaryColor;\n            line-height: 1;\n        }\n    }\n}\n\n@media (max-width: 768px) {\n    .section-links {\n        padding-top: 40px;\n        padding-bottom: 40px;\n        padding-left: 5%;\n        padding-right: 5%;\n\n        .links-item {\n            padding-top: 20px;\n            padding-bottom: 20px;\n\n            .links-label {\n                font-size: 2rem;\n            }\n        }\n    }\n}\n","@use \"./../variables/colors.scss\" as *;\n\n.section-video {\n    background-color: #f4f4f4;\n    padding-top: 80px;\n    padding-bottom: 80px;\n    padding-left: 10%;\n    padding-right: 10%;\n\n    .video-top {\n        display: flex;\n        justify-content: space-between;\n        align-items: flex-start;\n        margin-bottom: 50px;\n\n        .video-top-left {\n            width: 45%;\n\n            .video-text {\n                color: $primaryColor;\n                font-size: 1.5rem;\n                font-weight: 300;\n                line-height: 1.4;\n                margin-bottom: 30px;\n            }\n\n            .video-line {\n                border: none;\n                border-top: 1px solid $lightGray;\n                margin: 0;\n            }\n        }\n\n        .video-top-right {\n            width: 40%;\n            padding-top: 20px;\n\n            .video-paragraph {\n                color: $txtColor;\n                font-size: 0.85rem;\n                line-height: 1.7;\n            }\n        }\n    }\n\n    .video-wrapper {\n        background-color: $primaryColor;\n        width: 100%;\n        aspect-ratio: 16 / 9;\n        overflow: hidden;\n\n        iframe {\n            width: 100%;\n            height: 100%;\n            display: block;\n        }\n    }\n}\n\n@media (max-width: 768px) {\n    .section-video {\n        padding-top: 50px;\n        padding-bottom: 50px;\n        padding-left: 5%;\n        padding-right: 5%;\n\n        .video-top {\n            flex-direction: column;\n            gap: 30px;\n\n            .video-top-left {\n                width: 100%;\n            }\n\n            .video-top-right {\n                width: 100%;\n                padding-top: 0;\n            }\n        }\n    }\n}\n","@use \"./variables/colors.scss\" as *;\n\n\n.site-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 100;\n  padding: 30px 40px;\n}\n\n.header-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 40px;\n}\n\n.header-logo {\n  flex-shrink: 0;\n  width: 180px;\n  display: block;\n\n  img {\n    width: 100%;\n    height: auto;\n    display: block;\n  }\n}\n\n.header-nav {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n\n  .navbar {\n    list-style: none;\n    display: flex;\n    align-items: center;\n    gap: 40px;\n    margin: 0;\n    padding: 0;\n\n    > li {\n      position: relative;\n\n      > a {\n        color: $white;\n        text-decoration: none;\n        font-size: 0.7rem;\n        letter-spacing: 0.15em;\n        text-transform: uppercase;\n        white-space: nowrap;\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        transition: opacity 0.2s ease;\n\n        &:hover {\n          opacity: 0.7;\n        }\n      }\n\n      &.menu-item-has-children {\n        > a::after {\n          content: \"\";\n          display: inline-block;\n          width: 0;\n          height: 0;\n          border-left: 4px solid transparent;\n          border-right: 4px solid transparent;\n          border-top: 5px solid $white;\n          margin-top: 2px;\n          transition: transform 0.2s ease;\n        }\n\n        .sub-menu {\n          position: absolute;\n          top: calc(100% + 20px);\n          left: 0;\n          background-color: rgba(255, 255, 255, 0.95);\n          min-width: 220px;\n          list-style: none;\n          padding: 0;\n          margin: 0;\n          opacity: 0;\n          visibility: hidden;\n          transform: translateY(-6px);\n          transition:\n            opacity 0.25s ease,\n            transform 0.25s ease,\n            visibility 0.25s;\n\n          li {\n            a {\n              display: block;\n              padding: 12px 20px;\n              font-size: 0.75rem;\n              letter-spacing: 0.08em;\n              color: $primaryColor;\n              text-decoration: none;\n              border-bottom: 1px solid $lightGray;\n              transition: color 0.2s ease;\n\n              &:hover {\n                color: $secondaryColor;\n              }\n            }\n\n            &:last-child a {\n              border-bottom: none;\n            }\n          }\n        }\n\n        &:hover {\n          > a::after {\n            transform: rotate(180deg);\n          }\n\n          .sub-menu {\n            opacity: 1;\n            visibility: visible;\n            transform: translateY(0);\n          }\n        }\n      }\n    }\n  }\n}\n\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-shrink: 0;\n}\n\n.header-separator {\n  display: block;\n  width: 1px;\n  height: 36px;\n  background-color: rgba(255, 255, 255, 0.4);\n}\n\n.burger-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n\n  span {\n    display: block;\n    width: 28px;\n    height: 1.5px;\n    background-color: $white;\n    transition:\n      transform 0.3s ease,\n      opacity 0.3s ease;\n\n    &:last-child {\n      width: 18px;\n    }\n  }\n\n  &.is-active {\n    span:nth-child(1) {\n      transform: translateY(7.5px) rotate(45deg);\n    }\n    span:nth-child(2) {\n      opacity: 0;\n    }\n    span:nth-child(3) {\n      transform: translateY(-7.5px) rotate(-45deg);\n      width: 28px;\n    }\n  }\n}\n\n\n\n.mobile-menu {\n  position: fixed;\n  inset: 0;\n  background-color: $primaryColor;\n  z-index: 99;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateX(100%);\n  transition:\n    transform 0.4s ease,\n    opacity 0.3s ease,\n    visibility 0.4s;\n\n  &.is-open {\n    opacity: 1;\n    visibility: visible;\n    transform: translateX(0);\n  }\n\n  .mobile-navbar {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    text-align: center;\n\n    > li {\n      padding: 16px 0;\n\n      > a {\n        color: $white;\n        text-decoration: none;\n        font-size: 1.4rem;\n        letter-spacing: 0.12em;\n        text-transform: uppercase;\n        transition: color 0.2s ease;\n\n        &:hover {\n          color: $secondaryColor;\n        }\n      }\n\n      .sub-menu {\n        list-style: none;\n        padding: 10px 0 0;\n        margin: 0;\n\n        li {\n          padding: 6px 0;\n\n          a {\n            font-size: 0.95rem;\n            color: rgba(255, 255, 255, 0.6);\n            text-decoration: none;\n            letter-spacing: 0.06em;\n            transition: color 0.2s ease;\n\n            &:hover {\n              color: $white;\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\n\n// Responsive\n\n\n@media (max-width: 768px) {\n  .site-header {\n    padding: 20px;\n  }\n\n  .header-nav {\n    display: none;\n  }\n\n  .header-separator {\n    display: none;\n  }\n}\n"],"sourceRoot":""}]);
=======
}
.swiper-fullwidth .block-pagination .swiper-pagination {
  position: relative;
}

header {
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
header .block-img {
  width: 250px;
  height: auto;
}
header .block-img img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
header .navbar {
  display: flex;
}
header .block-nav {
  display: flex;
}
header .block-nav svg {
  width: 40px;
  height: 40px;
}`, "",{"version":3,"sources":["webpack://./src/scss/builder/swiper.scss","webpack://./src/scss/main.scss","webpack://./src/scss/header.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,YAAA;EACA,aAAA;ACCJ;ADCI;EACA,kBAAA;EACA,qBAAA;EACA,SAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;ACCJ;ADCI;EACI,aAAA;EACA,mBAAA;EACA,SAAA;ACCR;ADOI;EACI,kBAAA;ACLR;;ACvBA;EAEI,MAAA;EACA,OAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;ADyBJ;ACvBI;EACI,YAAA;EACA,YAAA;ADyBR;ACvBQ;EACI,WAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;ADyBZ;ACrBI;EACI,aAAA;ADuBR;ACpBI;EACI,aAAA;ADsBR;ACpBQ;EACI,WAAA;EACA,YAAA;ADsBZ","sourcesContent":[".swiper-fullwidth{\n    position: relative;\n    width: 100vw;\n    height: 100vh;\n    \n    .block-pagination{\n    position: absolute;\n    border: 1px solid red;\n    bottom: 0;\n    right: 0;\n    width: 25%;\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    .block-scrollbar{\n        display: flex;\n        align-items: center;\n        gap: 10px;\n\n        .number-slide{\n        }\n\n        .swiper-scrollbar{}\n    }\n\n    .swiper-pagination{\n        position: relative;\n    }\n}}\n            \n               ",".swiper-fullwidth {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n}\n.swiper-fullwidth .block-pagination {\n  position: absolute;\n  border: 1px solid red;\n  bottom: 0;\n  right: 0;\n  width: 25%;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.swiper-fullwidth .block-pagination .block-scrollbar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.swiper-fullwidth .block-pagination .swiper-pagination {\n  position: relative;\n}\n\nheader {\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\nheader .block-img {\n  width: 250px;\n  height: auto;\n}\nheader .block-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\nheader .navbar {\n  display: flex;\n}\nheader .block-nav {\n  display: flex;\n}\nheader .block-nav svg {\n  width: 40px;\n  height: 40px;\n}","header{\n   // position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n\n    .block-img{\n        width: 250px;\n        height: auto;\n\n        img{\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n        }\n    }\n\n    .navbar{\n        display: flex;\n    }\n\n    .block-nav{\n        display: flex;\n\n        svg{\n            width: 40px;\n            height: 40px;\n        }\n    }\n}"],"sourceRoot":""}]);
>>>>>>> 4acce8b (maj 093)
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
=======
}`,
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/scss/main.scss",
            "webpack://./src/scss/builder/swiper.scss",
            "webpack://./src/scss/variables/colors.scss",
            "webpack://./src/scss/builder/section2.scss",
            "webpack://./src/scss/builder/section3.scss",
            "webpack://./src/scss/builder/section4.scss",
            "webpack://./src/scss/builder/section5.scss",
            "webpack://./src/scss/builder/section6.scss",
            "webpack://./src/scss/builder/section7.scss",
            "webpack://./src/scss/builder/section8.scss",
            "webpack://./src/scss/header.scss",
          ],
          names: [],
          mappings:
            "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",
          sourcesContent: [
            '@charset "UTF-8";\n.slider-fullwidth {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.swiper-fullwidth {\n  width: 100%;\n  height: 100vh;\n}\n.swiper-fullwidth .swiper-slide {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.swiper-fullwidth .swiper-slide .background {\n  position: absolute;\n  z-index: 0;\n}\n.swiper-fullwidth .swiper-slide .background img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.swiper-fullwidth .swiper-slide .content {\n  position: absolute;\n  bottom: 110px;\n  left: 10%;\n  z-index: 1;\n  max-width: 60%;\n}\n.swiper-fullwidth .swiper-slide .content .btn-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n  color: #fff;\n  text-decoration: none;\n  font-size: 0.68rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  padding-bottom: 6px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.55);\n  transition: gap 0.25s ease, border-color 0.25s ease;\n}\n.swiper-fullwidth .swiper-slide .content .btn-cta::after {\n  content: "↗";\n  font-size: 0.85rem;\n  line-height: 1;\n}\n.swiper-fullwidth .block-pagination {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  z-index: 2;\n  background-color: #fff;\n  width: clamp(220px, 26vw, 400px);\n  height: 90px;\n  padding: 0 28px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n}\n.swiper-fullwidth .block-pagination .block-scrollbar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n}\n.swiper-fullwidth .block-pagination .block-scrollbar .number-slide {\n  font-size: 0.72rem;\n  font-weight: 500;\n  letter-spacing: 0.08em;\n  color: #05233c;\n  min-width: 18px;\n}\n.swiper-fullwidth .block-pagination .block-scrollbar .swiper-scrollbar {\n  flex: 1;\n  height: 1px;\n  background-color: #e2e2e2;\n  border-radius: 0;\n  position: relative;\n  top: auto;\n  left: auto;\n}\n.swiper-fullwidth .block-pagination .block-scrollbar .swiper-scrollbar .swiper-scrollbar-drag {\n  height: 100%;\n  background-color: #05233c;\n  border-radius: 0;\n  cursor: pointer;\n}\n.swiper-fullwidth .block-pagination .swiper-pagination {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n  width: auto;\n}\n.swiper-fullwidth .block-pagination .swiper-pagination .swiper-pagination-bullet {\n  width: 7px;\n  height: 7px;\n  background-color: #e2e2e2;\n  opacity: 1;\n  margin: 0;\n  transition: background-color 0.25s ease;\n}\n.swiper-fullwidth .block-pagination .swiper-pagination .swiper-pagination-bullet-active {\n  background-color: #05233c;\n}\n\n@media (max-width: 1024px) {\n  .swiper-fullwidth .swiper-slide .content {\n    left: 7%;\n    max-width: 75%;\n  }\n}\n@media (max-width: 768px) {\n  .swiper-fullwidth .swiper-slide .content {\n    left: 5%;\n    bottom: 90px;\n    max-width: 90%;\n  }\n  .swiper-fullwidth .block-pagination {\n    width: 100%;\n    height: 72px;\n    padding: 0 20px;\n  }\n}\n.section-text-evidence {\n  background-color: #fff;\n  padding: 90px 0;\n}\n.section-text-evidence .section-inner {\n  margin: 0 10%;\n  max-width: 65%;\n}\n.section-text-evidence .section-label {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 36px;\n}\n.section-text-evidence .section-label span {\n  font-size: 0.65rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #05233c;\n  white-space: nowrap;\n}\n.section-text-evidence .section-label::after {\n  content: "";\n  display: block;\n  height: 1px;\n  width: 60px;\n  background-color: #05233c;\n  opacity: 0.4;\n}\n.section-text-evidence .section-content {\n  margin-bottom: 40px;\n}\n.section-text-evidence .section-paragraph {\n  margin-top: 20px;\n  font-size: 0.95rem;\n  color: #222;\n}\n.section-text-evidence .btn-cta {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  color: #05233c;\n  text-decoration: none;\n  font-size: 0.68rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  padding-bottom: 6px;\n  border-bottom: 1px solid rgba(5, 35, 60, 0.4);\n  transition: gap 0.25s ease, border-color 0.25s ease;\n}\n.section-text-evidence .btn-cta::after {\n  content: "↗";\n  font-size: 0.85rem;\n}\n.section-text-evidence .btn-cta:hover {\n  gap: 22px;\n  border-color: #05233c;\n}\n\n@media (max-width: 1024px) {\n  .section-text-evidence .section-inner {\n    max-width: 80%;\n  }\n}\n@media (max-width: 768px) {\n  .section-text-evidence {\n    padding: 60px 0;\n  }\n  .section-text-evidence .section-inner {\n    margin: 0;\n    max-width: 90%;\n  }\n}\n.section-card-solutions {\n  background-color: #fff;\n  padding: 80px;\n  border-bottom: 1px solid #e2e2e2;\n}\n.section-card-solutions .cards-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 28px;\n}\n.section-card-solutions .card {\n  display: flex;\n  flex-direction: column;\n}\n.section-card-solutions .card-image {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 4/5;\n  background-color: #e2e2e2;\n}\n.section-card-solutions .card-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.section-card-solutions .card-image .card-plus {\n  position: absolute;\n  bottom: -1px;\n  right: -1px;\n  width: 44px;\n  height: 44px;\n  background-color: #fff;\n  color: #05233c;\n  font-size: 1.4rem;\n  font-weight: 300;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  transition: background-color 0.25s ease, color 0.25s ease;\n}\n.section-card-solutions .card-image .card-plus:hover {\n  background-color: #05233c;\n  color: #fff;\n}\n.section-card-solutions .card-body {\n  padding-top: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.section-card-solutions .card-category {\n  font-size: 0.62rem;\n  font-weight: 500;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: #d3bea1;\n}\n.section-card-solutions .card-title {\n  font-size: 0.78rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #05233c;\n  margin: 0;\n}\n\n@media (max-width: 1024px) {\n  .section-card-solutions {\n    padding: 60px;\n  }\n  .section-card-solutions .cards-grid {\n    gap: 20px;\n  }\n}\n@media (max-width: 768px) {\n  .section-card-solutions {\n    padding: 50px;\n  }\n  .section-card-solutions .cards-grid {\n    grid-template-columns: 100%;\n    gap: 32px;\n  }\n}\n.section-two-col {\n  background-color: #fff;\n  padding: 90px 0;\n}\n.section-two-col .two-col-inner {\n  margin: 0 10%;\n  display: grid;\n  grid-template-columns: 45% 100%;\n  gap: 80px;\n  align-items: start;\n}\n\n.two-col-left .section-label {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.two-col-left .section-label span {\n  font-size: 0.65rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #05233c;\n  white-space: nowrap;\n}\n.two-col-left .section-label::after {\n  content: "";\n  display: block;\n  height: 1px;\n  width: 60px;\n  background-color: #05233c;\n  opacity: 0.4;\n}\n\n.two-col-right {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding-top: 60px;\n}\n.two-col-right .two-col-details,\n.two-col-right .two-col-paragraph {\n  font-size: 0.9rem;\n  line-height: 1.8;\n  color: #222;\n}\n.two-col-right .two-col-details p,\n.two-col-right .two-col-paragraph p {\n  margin: 0;\n}\n.two-col-right .btn-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n  color: #05233c;\n  text-decoration: none;\n  font-size: 0.68rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  padding-bottom: 6px;\n  border-bottom: 1px solid rgba(5, 35, 60, 0.4);\n  margin-top: 16px;\n  transition: gap 0.25s ease, border-color 0.25s ease;\n}\n.two-col-right .btn-cta::after {\n  content: "↗";\n  font-size: 0.85rem;\n  line-height: 1;\n}\n.two-col-right .btn-cta:hover {\n  gap: 22px;\n  border-color: #05233c;\n}\n\n@media (max-width: 1024px) {\n  .section-two-col .two-col-inner {\n    grid-template-columns: 100%;\n    gap: 48px;\n    margin: 0;\n  }\n}\n@media (max-width: 768px) {\n  .section-two-col {\n    padding: 60px 0;\n  }\n  .section-two-col .two-col-inner {\n    grid-template-columns: 100%;\n    gap: 32px;\n    margin: 0 5%;\n  }\n  .section-two-col .two-col-right {\n    padding-top: 0;\n  }\n}\n.section-gallery {\n  position: relative;\n  padding: 80px 0;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n}\n\n.swiper-gallery {\n  width: 100%;\n  overflow: hidden;\n}\n.swiper-gallery .swiper-slide {\n  width: 60%;\n}\n.swiper-gallery .swiper-slide .gallery-slide-inner {\n  position: relative;\n}\n.swiper-gallery .swiper-slide .gallery-image {\n  width: 100%;\n  aspect-ratio: 4/3;\n  background-color: #e2e2e2;\n}\n.swiper-gallery .swiper-slide .gallery-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.swiper-gallery .swiper-slide .gallery-info {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: #fff;\n  padding: 20px 28px;\n  min-width: 55%;\n}\n.swiper-gallery .swiper-slide .gallery-info .gallery-titre {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #05233c;\n  margin: 0 0 4px;\n}\n.swiper-gallery .swiper-slide .gallery-info .gallery-description {\n  font-size: 0.78rem;\n  color: #222;\n  margin: 0;\n}\n\n.gallery-pagination {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n}\n.gallery-pagination .swiper-pagination-gallery {\n  position: relative;\n}\n.gallery-pagination .swiper-pagination-gallery .swiper-pagination-bullet {\n  background-color: #e2e2e2;\n  opacity: 1;\n}\n.gallery-pagination .swiper-pagination-gallery .swiper-pagination-bullet-active {\n  background-color: #05233c;\n}\n\n.gallery-nav {\n  position: absolute;\n  right: 4%;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  z-index: 2;\n}\n.gallery-nav button {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 1px solid #e2e2e2;\n  background: #fff;\n  cursor: pointer;\n  font-size: 1.2rem;\n  color: #05233c;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s ease, color 0.2s ease;\n}\n.gallery-nav button:hover {\n  background-color: #05233c;\n  color: #fff;\n  border-color: #05233c;\n}\n\n@media (max-width: 768px) {\n  .swiper-gallery .swiper-slide {\n    width: 85%;\n  }\n  .gallery-nav {\n    right: 2%;\n  }\n}\n.section-img-text {\n  background-color: #fff;\n  padding: 90px 0;\n}\n.section-img-text .section-img-text-inner {\n  margin: 0 10%;\n  display: grid;\n  grid-template-columns: 45% 100%;\n  gap: 80px;\n  align-items: center;\n}\n\n.img-col {\n  padding-bottom: 80px;\n}\n\n.img-wrapper {\n  position: relative;\n}\n.img-wrapper .img-large {\n  display: block;\n  width: 72%;\n  aspect-ratio: 3/4;\n  object-fit: cover;\n  position: relative;\n  z-index: 1;\n}\n.img-wrapper .img-small {\n  display: block;\n  width: 52%;\n  aspect-ratio: 4/3;\n  object-fit: cover;\n  position: absolute;\n  bottom: -80px;\n  right: 0;\n  z-index: 2;\n  outline: 10px solid #fff;\n}\n\n.text-col {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.text-col .section-label {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.text-col .section-label span {\n  font-size: 0.65rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #05233c;\n}\n.text-col .section-label::after {\n  content: "";\n  display: block;\n  height: 1px;\n  width: 60px;\n  background-color: #05233c;\n  opacity: 0.4;\n}\n.text-col .text-col-paragraph {\n  font-size: 0.88rem;\n  color: #222;\n}\n.text-col .text-col-paragraph p {\n  margin: 0;\n}\n.text-col .text-col-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.text-col .text-col-list li {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  font-size: 0.88rem;\n  color: #222;\n}\n.text-col .text-col-list li::before {\n  content: "";\n  display: inline-block;\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  background-color: #d3bea1;\n  clip-path: polygon(14% 44%, 0 58%, 30% 85%, 100% 14%, 86% 0%, 30% 62%);\n}\n.text-col .btn-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n  color: #05233c;\n  text-decoration: none;\n  font-size: 0.68rem;\n  font-weight: 500;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  padding-bottom: 6px;\n  border-bottom: 1px solid rgba(5, 35, 60, 0.4);\n  margin-top: 8px;\n  align-self: flex-start;\n  transition: gap 0.25s ease, border-color 0.25s ease;\n}\n.text-col .btn-cta::after {\n  content: "↗";\n  font-size: 0.85rem;\n  line-height: 1;\n}\n.text-col .btn-cta:hover {\n  gap: 22px;\n  border-color: #05233c;\n}\n\n@media (max-width: 1024px) {\n  .section-img-text .section-img-text-inner {\n    grid-template-columns: 50% 50%;\n    gap: 50px;\n    margin: 0;\n  }\n}\n@media (max-width: 768px) {\n  .section-img-text {\n    padding: 60px 0;\n  }\n  .section-img-text .section-img-text-inner {\n    grid-template-columns: 100%;\n    gap: 60px;\n    margin: 0 5%;\n  }\n  .section-img-text .img-col {\n    padding-bottom: 60px;\n  }\n}\n.section-projects {\n  background-color: #fff;\n}\n\n.projects-inner {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  min-height: 500px;\n}\n\n.projects-left {\n  background-color: #05233c;\n  padding: 70px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 24px;\n}\n.projects-left .projects-paragraph {\n  font-size: 0.85rem;\n  line-height: 1.8;\n  color: rgba(255, 255, 255, 0.7);\n  margin: 0;\n}\n.projects-left .btn-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n  color: #fff;\n  text-decoration: none;\n  font-size: 0.68rem;\n  font-weight: 500;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  padding-bottom: 6px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.4);\n  align-self: flex-start;\n  margin-top: 16px;\n  transition: gap 0.25s ease, border-color 0.25s ease;\n}\n.projects-left .btn-cta::after {\n  content: "↗";\n  font-size: 0.85rem;\n  line-height: 1;\n}\n.projects-left .btn-cta:hover {\n  gap: 22px;\n  border-color: #fff;\n}\n\n.projects-right {\n  position: relative;\n  overflow: hidden;\n}\n.projects-right .swiper-projects {\n  width: 100%;\n  height: 100%;\n}\n.projects-right .swiper-projects .swiper-slide {\n  position: relative;\n  height: 100%;\n}\n.projects-right .swiper-projects .swiper-slide img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.projects-right .swiper-projects .swiper-slide .slide-info {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n}\n.projects-right .swiper-projects .swiper-slide .slide-info .slide-location {\n  font-size: 0.9rem;\n  color: #fff;\n  font-weight: 400;\n}\n.projects-right .swiper-projects .swiper-slide .slide-info .slide-price {\n  background-color: #fff;\n  color: #05233c;\n  font-size: 0.75rem;\n  font-weight: 500;\n  padding: 8px 18px;\n  border-radius: 40px;\n}\n\n.projects-controls {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  padding: 28px;\n  border-top: 1px solid #e2e2e2;\n}\n\n.projects-nav {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.projects-nav button {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 1px solid #e2e2e2;\n  background: none;\n  cursor: pointer;\n  font-size: 1.2rem;\n  color: #05233c;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;\n}\n.projects-nav button:hover {\n  background-color: #05233c;\n  color: #fff;\n  border-color: #05233c;\n}\n\n.swiper-scrollbar-projects {\n  flex: 1;\n  height: 1px;\n  background-color: #e2e2e2;\n  position: relative;\n}\n.swiper-scrollbar-projects .swiper-scrollbar-drag {\n  height: 100%;\n  background-color: #05233c;\n  border-radius: 0;\n}\n\n.projects-number {\n  font-size: 2.4rem;\n  font-weight: 700;\n  color: #d3bea1;\n  flex-shrink: 0;\n  min-width: 48px;\n  text-align: right;\n}\n\n@media (max-width: 768px) {\n  .projects-inner {\n    grid-template-columns: 100%;\n  }\n  .projects-right {\n    min-height: 300px;\n  }\n  .projects-left {\n    padding: 50px;\n  }\n  .projects-controls {\n    padding: 20px;\n  }\n}\n.section-citation {\n  background-color: #fff;\n}\n\n.citation-block {\n  padding: 70px 0;\n}\n.citation-block .citation-inner {\n  margin: 0;\n  display: grid;\n  grid-template-columns: 120px;\n  gap: 40px;\n  align-items: start;\n}\n.citation-block .citation-name {\n  font-size: 0.62rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #e2e2e2;\n  padding-top: 8px;\n}\n.citation-block .citation-name {\n  font-size: x-large;\n}\n\n.citation-blue {\n  background-color: #05233c;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: stretch;\n}\n.citation-blue .citation-blue-inner {\n  padding: 70px;\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n  flex: 1;\n  position: relative;\n  z-index: 1;\n}\n.citation-blue .btn-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n  color: #fff;\n  text-decoration: none;\n  font-size: 0.68rem;\n  font-weight: 500;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  padding-bottom: 6px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.4);\n  align-self: flex-start;\n  transition: gap 0.25s ease, border-color 0.25s ease;\n}\n.citation-blue .btn-cta::after {\n  content: "↗";\n  font-size: 1rem;\n}\n.citation-blue .btn-cta:hover {\n  gap: 22px;\n  border-color: #fff;\n}\n\n@media (max-width: 768px) {\n  .citation-block {\n    padding: 50px 0;\n  }\n  .citation-block .citation-inner {\n    grid-template-columns: 100%;\n    gap: 16px;\n    margin: 0;\n  }\n  .citation-blue .citation-blue-inner {\n    padding: 50px 5%;\n  }\n  .citation-blue .citation-deco {\n    display: none;\n  }\n}\n.site-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 100;\n  padding: 30px 40px;\n}\n\n.header-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 40px;\n}\n\n.header-logo {\n  flex-shrink: 0;\n  width: 180px;\n  display: block;\n}\n.header-logo img {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n\n.header-nav {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n}\n.header-nav .navbar {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  gap: 40px;\n  margin: 0;\n  padding: 0;\n}\n.header-nav .navbar > li {\n  position: relative;\n}\n.header-nav .navbar > li > a {\n  color: #fff;\n  text-decoration: none;\n  font-size: 0.7rem;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: opacity 0.2s ease;\n}\n.header-nav .navbar > li > a:hover {\n  opacity: 0.7;\n}\n.header-nav .navbar > li.menu-item-has-children > a::after {\n  content: "";\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 5px solid #fff;\n  margin-top: 2px;\n  transition: transform 0.2s ease;\n}\n.header-nav .navbar > li.menu-item-has-children .sub-menu {\n  position: absolute;\n  top: calc(100% + 20px);\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.95);\n  min-width: 220px;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-6px);\n  transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;\n}\n.header-nav .navbar > li.menu-item-has-children .sub-menu li a {\n  display: block;\n  padding: 12px 20px;\n  font-size: 0.75rem;\n  letter-spacing: 0.08em;\n  color: #05233c;\n  text-decoration: none;\n  border-bottom: 1px solid #e2e2e2;\n  transition: color 0.2s ease;\n}\n.header-nav .navbar > li.menu-item-has-children .sub-menu li a:hover {\n  color: #d3bea1;\n}\n.header-nav .navbar > li.menu-item-has-children .sub-menu li:last-child a {\n  border-bottom: none;\n}\n.header-nav .navbar > li.menu-item-has-children:hover > a::after {\n  transform: rotate(180deg);\n}\n.header-nav .navbar > li.menu-item-has-children:hover .sub-menu {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-shrink: 0;\n}\n\n.header-separator {\n  display: block;\n  width: 1px;\n  height: 36px;\n  background-color: rgba(255, 255, 255, 0.4);\n}\n\n.burger-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.burger-btn span {\n  display: block;\n  width: 28px;\n  height: 1.5px;\n  background-color: #fff;\n  transition: transform 0.3s ease, opacity 0.3s ease;\n}\n.burger-btn span:last-child {\n  width: 18px;\n}\n.burger-btn.is-active span:nth-child(1) {\n  transform: translateY(7.5px) rotate(45deg);\n}\n.burger-btn.is-active span:nth-child(2) {\n  opacity: 0;\n}\n.burger-btn.is-active span:nth-child(3) {\n  transform: translateY(-7.5px) rotate(-45deg);\n  width: 28px;\n}\n\n.mobile-menu {\n  position: fixed;\n  inset: 0;\n  background-color: #05233c;\n  z-index: 99;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateX(100%);\n  transition: transform 0.4s ease, opacity 0.3s ease, visibility 0.4s;\n}\n.mobile-menu.is-open {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(0);\n}\n.mobile-menu .mobile-navbar {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n}\n.mobile-menu .mobile-navbar > li {\n  padding: 16px 0;\n}\n.mobile-menu .mobile-navbar > li > a {\n  color: #fff;\n  text-decoration: none;\n  font-size: 1.4rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  transition: color 0.2s ease;\n}\n.mobile-menu .mobile-navbar > li > a:hover {\n  color: #d3bea1;\n}\n.mobile-menu .mobile-navbar > li .sub-menu {\n  list-style: none;\n  padding: 10px 0 0;\n  margin: 0;\n}\n.mobile-menu .mobile-navbar > li .sub-menu li {\n  padding: 6px 0;\n}\n.mobile-menu .mobile-navbar > li .sub-menu li a {\n  font-size: 0.95rem;\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n  letter-spacing: 0.06em;\n  transition: color 0.2s ease;\n}\n.mobile-menu .mobile-navbar > li .sub-menu li a:hover {\n  color: #fff;\n}\n\n@media (max-width: 768px) {\n  .site-header {\n    padding: 20px;\n  }\n  .header-nav {\n    display: none;\n  }\n  .header-separator {\n    display: none;\n  }\n}',
            "@use \"./../variables/colors.scss\" as *;\n\n\n.slider-fullwidth {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.swiper-fullwidth {\n  width: 100%;\n  height: 100vh;\n\n\n  .swiper-slide {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n\n    \n    .background {\n      position: absolute;\n      z-index: 0;\n\n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        display: block;\n      }\n\n      \n     \n    }\n\n    \n    .content {\n      position: absolute;\n      bottom: 110px;\n      left: 10%;\n      z-index: 1;\n      max-width: 60%;\n\n      \n      .btn-cta {\n        display: inline-flex;\n        align-items: center;\n        gap: 14px;\n        color: $white;\n        text-decoration: none;\n        font-size: 0.68rem;\n        font-weight: 500;\n        text-transform: uppercase;\n        padding-bottom: 6px;\n        border-bottom: 1px solid rgba(255, 255, 255, 0.55);\n        transition: gap 0.25s ease, border-color 0.25s ease;\n\n        &::after {\n          content: '↗';\n          font-size: 0.85rem;\n          line-height: 1;\n        }\n\n\n      }\n    }\n  }\n\n  .block-pagination {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    z-index: 2;\n    background-color: $white;\n    width: clamp(220px, 26vw, 400px);\n    height: 90px;\n    padding: 0 28px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 20px;\n\n    .block-scrollbar {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      flex: 1;\n\n      .number-slide {\n        font-size: 0.72rem;\n        font-weight: 500;\n        letter-spacing: 0.08em;\n        color: $primaryColor;\n        min-width: 18px;\n      }\n\n      .swiper-scrollbar {\n        flex: 1;\n        height: 1px;\n        background-color: $lightGray;\n        border-radius: 0;\n        position: relative;\n        top: auto;\n        left: auto;\n\n        .swiper-scrollbar-drag {\n          height: 100%;\n          background-color: $primaryColor;\n          border-radius: 0;\n          cursor: pointer;\n        }\n      }\n    }\n\n    .swiper-pagination {\n      position: relative;\n      display: flex;\n      align-items: center;\n      gap: 6px;\n      flex-shrink: 0;\n      width: auto;\n\n      .swiper-pagination-bullet {\n        width: 7px;\n        height: 7px;\n        background-color: $lightGray;\n        opacity: 1;\n        margin: 0;\n        transition: background-color 0.25s ease;\n      }\n\n      .swiper-pagination-bullet-active {\n        background-color: $primaryColor;\n      }\n    }\n  }\n}\n\n// Responsive \n\n@media (max-width: 1024px) {\n  .swiper-fullwidth {\n    .swiper-slide .content {\n      left: 7%;\n      max-width: 75%;\n    }\n  }\n}\n\n@media (max-width: 768px) {\n  .swiper-fullwidth {\n    .swiper-slide .content {\n      left: 5%;\n      bottom: 90px;\n      max-width: 90%;\n    }\n\n    .block-pagination {\n      width: 100%;\n      height: 72px;\n      padding: 0 20px;\n    }\n  }\n}\n",
            "$primaryColor: #05233c;\n$secondaryColor: #d3bea1;\n\n$txtColor: #222;\n$lightGray: #e2e2e2;\n$white: #fff;\n$black: #000;\n",
            '@use "./../variables/colors.scss" as *;\n\n.section-text-evidence {\n  background-color: $white;\n  padding: 90px 0;\n\n  .section-inner {\n    margin: 0 10%;\n    max-width: 65%;\n  }\n\n  .section-label {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    margin-bottom: 36px;\n\n    span {\n      font-size: 0.65rem;\n      font-weight: 500;\n      text-transform: uppercase;\n      color: $primaryColor;\n      white-space: nowrap;\n    }\n\n    &::after {\n      content: "";\n      display: block;\n      height: 1px;\n      width: 60px;\n      background-color: $primaryColor;\n      opacity: 0.4;\n    }\n  }\n\n  .section-content {\n    margin-bottom: 40px;\n  }\n\n  .section-paragraph {\n    margin-top: 20px;\n    font-size: 0.95rem;\n    color: $txtColor;\n  }\n\n  .btn-cta {\n    display: flex;\n    align-items: center;\n    gap: 14px;\n    color: $primaryColor;\n    text-decoration: none;\n    font-size: 0.68rem;\n    font-weight: 500;\n    text-transform: uppercase;\n    padding-bottom: 6px;\n    border-bottom: 1px solid rgba($primaryColor, 0.4);\n    transition:\n      gap 0.25s ease,\n      border-color 0.25s ease;\n\n    &::after {\n      content: "↗";\n      font-size: 0.85rem;\n    }\n\n    &:hover {\n      gap: 22px;\n      border-color: $primaryColor;\n    }\n  }\n}\n\n// responsive\n@media (max-width: 1024px) {\n  .section-text-evidence .section-inner {\n    max-width: 80%;\n  }\n}\n\n@media (max-width: 768px) {\n  .section-text-evidence {\n    padding: 60px 0;\n\n    .section-inner {\n      margin: 0;\n      max-width: 90%;\n    }\n  }\n}\n',
            '@use "./../variables/colors.scss" as *;\n\n.section-card-solutions {\n  background-color: $white;\n  padding: 80px ;\n  border-bottom: 1px solid $lightGray;\n\n  .cards-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 28px;\n  }\n\n  .card {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .card-image {\n    position: relative;\n    width: 100%;\n    aspect-ratio: 4 / 5;\n    background-color: $lightGray;\n\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      display: block;\n    }\n\n    .card-plus {\n      position: absolute;\n      bottom: -1px;\n      right: -1px;\n      width: 44px;\n      height: 44px;\n      background-color: $white;\n      color: $primaryColor;\n      font-size: 1.4rem;\n      font-weight: 300;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-decoration: none;\n      transition:\n        background-color 0.25s ease,\n        color 0.25s ease;\n\n      &:hover {\n        background-color: $primaryColor;\n        color: $white;\n      }\n    }\n  }\n\n  .card-body {\n    padding-top: 18px;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n\n  .card-category {\n    font-size: 0.62rem;\n    font-weight: 500;\n    letter-spacing: 0.18em;\n    text-transform: uppercase;\n    color: $secondaryColor;\n  }\n\n  .card-title {\n    font-size: 0.78rem;\n    font-weight: 500;\n    text-transform: uppercase;\n    color: $primaryColor;\n    margin: 0;\n  }\n}\n\n// Responsive\n@media (max-width: 1024px) {\n  .section-card-solutions {\n    padding: 60px ;\n\n    .cards-grid {\n      gap: 20px;\n    }\n  }\n}\n\n@media (max-width: 768px) {\n  .section-card-solutions {\n    padding: 50px;\n\n    .cards-grid {\n      grid-template-columns: 100%;\n      gap: 32px;\n    }\n  }\n}\n',
            '@use "./../variables/colors.scss" as *;\n\n.section-two-col {\n  background-color: $white;\n  padding: 90px 0;\n\n  .two-col-inner {\n    margin: 0 10%;\n    display: grid;\n    grid-template-columns: 45% 100%;\n    gap: 80px;\n    align-items: start;\n  }\n}\n\n.two-col-left {\n  .section-label {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    margin-bottom: 28px;\n\n    span {\n      font-size: 0.65rem;\n      font-weight: 500;\n      text-transform: uppercase;\n      color: $primaryColor;\n      white-space: nowrap;\n    }\n\n    &::after {\n      content: "";\n      display: block;\n      height: 1px;\n      width: 60px;\n      background-color: $primaryColor;\n      opacity: 0.4;\n    }\n  }\n\n  //.two-col-title {\n// }\n}\n\n.two-col-right {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding-top: 60px;\n\n  .two-col-details,\n  .two-col-paragraph {\n    font-size: 0.9rem;\n    line-height: 1.8;\n    color: $txtColor;\n\n    p {\n      margin: 0;\n    }\n  }\n\n  .btn-cta {\n    display: inline-flex;\n    align-items: center;\n    gap: 14px;\n    color: $primaryColor;\n    text-decoration: none;\n    font-size: 0.68rem;\n    font-weight: 500;\n    text-transform: uppercase;\n    padding-bottom: 6px;\n    border-bottom: 1px solid rgba($primaryColor, 0.4);\n    margin-top: 16px;\n    transition:\n      gap 0.25s ease,\n      border-color 0.25s ease;\n\n    &::after {\n      content: "↗";\n      font-size: 0.85rem;\n      line-height: 1;\n    }\n\n    &:hover {\n      gap: 22px;\n      border-color: $primaryColor;\n    }\n  }\n}\n\n// ── Responsive\n\n@media (max-width: 1024px) {\n  .section-two-col .two-col-inner {\n    grid-template-columns: 100% ;\n    gap: 48px;\n    margin: 0;\n  }\n}\n\n@media (max-width: 768px) {\n  .section-two-col {\n    padding: 60px 0;\n\n    .two-col-inner {\n      grid-template-columns: 100%;\n      gap: 32px;\n      margin: 0 5%;\n    }\n\n    .two-col-right {\n      padding-top: 0;\n    }\n  }\n}\n',
            '@use "./../variables/colors.scss" as *;\n\n.section-gallery {\n  position: relative;\n  padding: 80px 0;\n  background-color: $white;\n  display: flex;\n  align-items: center;\n}\n\n.swiper-gallery {\n  width: 100%;\n  overflow: hidden;\n\n  .swiper-slide {\n    width: 60%;\n\n    .gallery-slide-inner {\n      position: relative;\n    }\n\n    .gallery-image {\n      width: 100%;\n      aspect-ratio: 4 / 3;\n      background-color: $lightGray;\n\n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        display: block;\n      }\n    }\n\n    .gallery-info {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      background-color: $white;\n      padding: 20px 28px;\n      min-width: 55%;\n\n      .gallery-titre {\n        font-size: 0.85rem;\n        font-weight: 600;\n        color: $primaryColor;\n        margin: 0 0 4px;\n      }\n\n      .gallery-description {\n        font-size: 0.78rem;\n        color: $txtColor;\n        margin: 0;\n      }\n    }\n  }\n}\n\n// Dots pagination\n.gallery-pagination {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n\n  .swiper-pagination-gallery {\n    position: relative;\n\n    .swiper-pagination-bullet {\n      background-color: $lightGray;\n      opacity: 1;\n    }\n\n    .swiper-pagination-bullet-active {\n      background-color: $primaryColor;\n    }\n  }\n}\n\n.gallery-nav {\n  position: absolute;\n  right: 4%;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  z-index: 2;\n\n  button {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    border: 1px solid $lightGray;\n    background: $white;\n    cursor: pointer;\n    font-size: 1.2rem;\n    color: $primaryColor;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition:\n      background-color 0.2s ease,\n      color 0.2s ease;\n\n    &:hover {\n      background-color: $primaryColor;\n      color: $white;\n      border-color: $primaryColor;\n    }\n  }\n}\n\n@media (max-width: 768px) {\n  .swiper-gallery .swiper-slide {\n    width: 85%;\n  }\n\n  .gallery-nav {\n    right: 2%;\n  }\n}\n',
            '@use "./../variables/colors.scss" as *;\n\n.section-img-text {\n  background-color: $white;\n  padding: 90px 0;\n\n  .section-img-text-inner {\n    margin: 0 10%;\n    display: grid;\n    grid-template-columns: 45% 100%;\n    gap: 80px;\n    align-items: center;\n  }\n}\n\n.img-col {\n  padding-bottom: 80px;\n}\n\n.img-wrapper {\n  position: relative;\n\n  .img-large {\n    display: block;\n    width: 72%;\n    aspect-ratio: 3 / 4;\n    object-fit: cover;\n    position: relative;\n    z-index: 1;\n  }\n\n  .img-small {\n    display: block;\n    width: 52%;\n    aspect-ratio: 4 / 3;\n    object-fit: cover;\n    position: absolute;\n    bottom: -80px;\n    right: 0;\n    z-index: 2;\n    outline: 10px solid $white;\n  }\n}\n\n.text-col {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n\n  .section-label {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n\n    span {\n      font-size: 0.65rem;\n      font-weight: 500;\n      text-transform: uppercase;\n      color: $primaryColor;\n    }\n\n    &::after {\n      content: "";\n      display: block;\n      height: 1px;\n      width: 60px;\n      background-color: $primaryColor;\n      opacity: 0.4;\n    }\n  }\n\n  .text-col-title {\n  }\n\n  .text-col-paragraph {\n    font-size: 0.88rem;\n    color: $txtColor;\n\n    p {\n      margin: 0;\n    }\n  }\n\n  .text-col-list {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n\n    li {\n      display: flex;\n      align-items: center;\n      gap: 14px;\n      font-size: 0.88rem;\n      color: $txtColor;\n\n      &::before {\n        content: "";\n        display: inline-block;\n        flex-shrink: 0;\n        width: 16px;\n        height: 16px;\n        background-color: $secondaryColor;\n        clip-path: polygon(14% 44%, 0 58%, 30% 85%, 100% 14%, 86% 0%, 30% 62%);\n      }\n    }\n  }\n\n  .btn-cta {\n    display: inline-flex;\n    align-items: center;\n    gap: 14px;\n    color: $primaryColor;\n    text-decoration: none;\n    font-size: 0.68rem;\n    font-weight: 500;\n    letter-spacing: 0.22em;\n    text-transform: uppercase;\n    padding-bottom: 6px;\n    border-bottom: 1px solid rgba($primaryColor, 0.4);\n    margin-top: 8px;\n    align-self: flex-start;\n    transition:\n      gap 0.25s ease,\n      border-color 0.25s ease;\n\n    &::after {\n      content: "↗";\n      font-size: 0.85rem;\n      line-height: 1;\n    }\n\n    &:hover {\n      gap: 22px;\n      border-color: $primaryColor;\n    }\n  }\n}\n\n// partie responsive\n\n@media (max-width: 1024px) {\n  .section-img-text .section-img-text-inner {\n    grid-template-columns: 50% 50%;\n    gap: 50px;                     \n    margin: 0 ;                   \n  }\n}\n\n@media (max-width: 768px) {\n  .section-img-text {\n    padding: 60px 0;\n\n    .section-img-text-inner {\n      grid-template-columns: 100%;\n      gap: 60px;\n      margin: 0 5%;\n    }\n\n    .img-col {\n      padding-bottom: 60px;\n    }\n  }\n}\n',
            '@use "./../variables/colors.scss" as *;\n\n.section-projects {\n  background-color: $white;\n}\n\n.projects-inner {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  min-height: 500px;\n}\n\n// Panneau bleu\n.projects-left {\n  background-color: $primaryColor;\n  padding: 70px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 24px;\n\n  .projects-paragraph {\n    font-size: 0.85rem;\n    line-height: 1.8;\n    color: rgba(255, 255, 255, 0.7);\n    margin: 0;\n  }\n\n  .btn-cta {\n    display: inline-flex;\n    align-items: center;\n    gap: 14px;\n    color: $white;\n    text-decoration: none;\n    font-size: 0.68rem;\n    font-weight: 500;\n    letter-spacing: 0.22em;\n    text-transform: uppercase;\n    padding-bottom: 6px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.4);\n    align-self: flex-start;\n    margin-top: 16px;\n    transition:\n      gap 0.25s ease,\n      border-color 0.25s ease;\n\n    &::after {\n      content: "↗";\n      font-size: 0.85rem;\n      line-height: 1;\n    }\n\n    &:hover {\n      gap: 22px;\n      border-color: $white;\n    }\n  }\n}\n\n.projects-right {\n  position: relative;\n  overflow: hidden;\n\n  .swiper-projects {\n    width: 100%;\n    height: 100%;\n\n    .swiper-slide {\n      position: relative;\n      height: 100%;\n\n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        display: block;\n      }\n\n      .slide-info {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 18px 24px;\n\n        .slide-location {\n          font-size: 0.9rem;\n          color: $white;\n          font-weight: 400;\n        }\n\n        .slide-price {\n          background-color: $white;\n          color: $primaryColor;\n          font-size: 0.75rem;\n          font-weight: 500;\n          padding: 8px 18px;\n          border-radius: 40px;\n        }\n      }\n    }\n  }\n}\n\n.projects-controls {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  padding: 28px;\n  border-top: 1px solid $lightGray;\n}\n\n.projects-nav {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n\n  button {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    border: 1px solid $lightGray;\n    background: none;\n    cursor: pointer;\n    font-size: 1.2rem;\n    color: $primaryColor;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition:\n      background-color 0.2s ease,\n      color 0.2s ease,\n      border-color 0.2s ease;\n\n    &:hover {\n      background-color: $primaryColor;\n      color: $white;\n      border-color: $primaryColor;\n    }\n  }\n}\n\n.swiper-scrollbar-projects {\n  flex: 1;\n  height: 1px;\n  background-color: $lightGray;\n  position: relative;\n\n  .swiper-scrollbar-drag {\n    height: 100%;\n    background-color: $primaryColor;\n    border-radius: 0;\n  }\n}\n\n.projects-number {\n  font-size: 2.4rem;\n  font-weight: 700;\n  color: $secondaryColor;\n  flex-shrink: 0;\n  min-width: 48px;\n  text-align: right;\n}\n\n// ── Responsive\n\n@media (max-width: 768px) {\n  .projects-inner {\n    grid-template-columns: 100%;\n  }\n\n  .projects-right {\n    min-height: 300px;\n  }\n\n  .projects-left {\n    padding: 50px ;\n  }\n\n  .projects-controls {\n    padding: 20px;\n  }\n}\n',
            '@use "./../variables/colors.scss" as *;\n\n.section-citation {\n  background-color: $white;\n}\n\n\n\n.citation-block {\n  padding: 70px 0;\n\n  .citation-inner {\n    margin: 0;\n    display: grid;\n    grid-template-columns: 120px ;\n    gap: 40px;\n    align-items: start;\n  }\n\n  .citation-name {\n    font-size: 0.62rem;\n    letter-spacing: 0.14em;\n    text-transform: uppercase;\n    color: $lightGray;\n    padding-top: 8px;\n  }\n\n  .citation-name{\n\n  font-size: x-large;\n  }\n}\n\n\n\n.citation-blue {\n  background-color: $primaryColor;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: stretch;\n\n  .citation-blue-inner {\n    padding: 70px;\n    display: flex;\n    flex-direction: column;\n    gap: 28px;\n    flex: 1;\n    position: relative;\n    z-index: 1;\n  }\n\n  \n\n  .btn-cta {\n    display: inline-flex;\n    align-items: center;\n    gap: 14px;\n    color: $white;\n    text-decoration: none;\n    font-size: 0.68rem;\n    font-weight: 500;\n    letter-spacing: 0.22em;\n    text-transform: uppercase;\n    padding-bottom: 6px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.4);\n    align-self: flex-start;\n    transition:\n      gap 0.25s ease,\n      border-color 0.25s ease;\n\n    &::after {\n      content: "↗";\n      font-size: 1rem;\n    }\n\n    &:hover {\n      gap: 22px;\n      border-color: $white;\n    }\n  }\n\n  \n}\n\n// ── Responsive\n\n@media (max-width: 768px) {\n  .citation-block {\n    padding: 50px 0;\n\n    .citation-inner {\n      grid-template-columns: 100%;\n      gap: 16px;\n      margin: 0;\n    }\n  }\n\n  .citation-blue {\n    .citation-blue-inner {\n      padding: 50px 5%;\n    }\n\n    .citation-deco {\n      display: none;\n    }\n  }\n}\n',
            '@use "./variables/colors.scss" as *;\n\n\n.site-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 100;\n  padding: 30px 40px;\n}\n\n.header-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 40px;\n}\n\n.header-logo {\n  flex-shrink: 0;\n  width: 180px;\n  display: block;\n\n  img {\n    width: 100%;\n    height: auto;\n    display: block;\n  }\n}\n\n.header-nav {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n\n  .navbar {\n    list-style: none;\n    display: flex;\n    align-items: center;\n    gap: 40px;\n    margin: 0;\n    padding: 0;\n\n    > li {\n      position: relative;\n\n      > a {\n        color: $white;\n        text-decoration: none;\n        font-size: 0.7rem;\n        letter-spacing: 0.15em;\n        text-transform: uppercase;\n        white-space: nowrap;\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        transition: opacity 0.2s ease;\n\n        &:hover {\n          opacity: 0.7;\n        }\n      }\n\n      &.menu-item-has-children {\n        > a::after {\n          content: "";\n          display: inline-block;\n          width: 0;\n          height: 0;\n          border-left: 4px solid transparent;\n          border-right: 4px solid transparent;\n          border-top: 5px solid $white;\n          margin-top: 2px;\n          transition: transform 0.2s ease;\n        }\n\n        .sub-menu {\n          position: absolute;\n          top: calc(100% + 20px);\n          left: 0;\n          background-color: rgba(255, 255, 255, 0.95);\n          min-width: 220px;\n          list-style: none;\n          padding: 0;\n          margin: 0;\n          opacity: 0;\n          visibility: hidden;\n          transform: translateY(-6px);\n          transition:\n            opacity 0.25s ease,\n            transform 0.25s ease,\n            visibility 0.25s;\n\n          li {\n            a {\n              display: block;\n              padding: 12px 20px;\n              font-size: 0.75rem;\n              letter-spacing: 0.08em;\n              color: $primaryColor;\n              text-decoration: none;\n              border-bottom: 1px solid $lightGray;\n              transition: color 0.2s ease;\n\n              &:hover {\n                color: $secondaryColor;\n              }\n            }\n\n            &:last-child a {\n              border-bottom: none;\n            }\n          }\n        }\n\n        &:hover {\n          > a::after {\n            transform: rotate(180deg);\n          }\n\n          .sub-menu {\n            opacity: 1;\n            visibility: visible;\n            transform: translateY(0);\n          }\n        }\n      }\n    }\n  }\n}\n\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-shrink: 0;\n}\n\n.header-separator {\n  display: block;\n  width: 1px;\n  height: 36px;\n  background-color: rgba(255, 255, 255, 0.4);\n}\n\n.burger-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n\n  span {\n    display: block;\n    width: 28px;\n    height: 1.5px;\n    background-color: $white;\n    transition:\n      transform 0.3s ease,\n      opacity 0.3s ease;\n\n    &:last-child {\n      width: 18px;\n    }\n  }\n\n  &.is-active {\n    span:nth-child(1) {\n      transform: translateY(7.5px) rotate(45deg);\n    }\n    span:nth-child(2) {\n      opacity: 0;\n    }\n    span:nth-child(3) {\n      transform: translateY(-7.5px) rotate(-45deg);\n      width: 28px;\n    }\n  }\n}\n\n\n\n.mobile-menu {\n  position: fixed;\n  inset: 0;\n  background-color: $primaryColor;\n  z-index: 99;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateX(100%);\n  transition:\n    transform 0.4s ease,\n    opacity 0.3s ease,\n    visibility 0.4s;\n\n  &.is-open {\n    opacity: 1;\n    visibility: visible;\n    transform: translateX(0);\n  }\n\n  .mobile-navbar {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    text-align: center;\n\n    > li {\n      padding: 16px 0;\n\n      > a {\n        color: $white;\n        text-decoration: none;\n        font-size: 1.4rem;\n        letter-spacing: 0.12em;\n        text-transform: uppercase;\n        transition: color 0.2s ease;\n\n        &:hover {\n          color: $secondaryColor;\n        }\n      }\n\n      .sub-menu {\n        list-style: none;\n        padding: 10px 0 0;\n        margin: 0;\n\n        li {\n          padding: 6px 0;\n\n          a {\n            font-size: 0.95rem;\n            color: rgba(255, 255, 255, 0.6);\n            text-decoration: none;\n            letter-spacing: 0.06em;\n            transition: color 0.2s ease;\n\n            &:hover {\n              color: $white;\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\n\n// Responsive\n\n\n@media (max-width: 768px) {\n  .site-header {\n    padding: 20px;\n  }\n\n  .header-nav {\n    display: none;\n  }\n\n  .header-separator {\n    display: none;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        ___CSS_LOADER_EXPORT___;
>>>>>>> 640e6ee (fixes style 16-03)

      /***/
    },

    /***/ "./node_modules/css-loader/dist/runtime/api.js"(
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      module,
    ) {
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
              content += "@layer".concat(
                item[5].length > 0 ? " ".concat(item[5]) : "",
                " {",
              );
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
                item[1] = "@layer"
                  .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                  .concat(item[1], "}");
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
                item[1] = "@supports ("
                  .concat(item[4], ") {")
                  .concat(item[1], "}");
                item[4] = supports;
              }
            }
            list.push(item);
          }
        };
        return list;
      };

      /***/
    },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"(
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      module,
    ) {
      module.exports = function (item) {
        var content = item[1];
        var cssMapping = item[3];
        if (!cssMapping) {
          return content;
        }
        if (typeof btoa === "function") {
          var base64 = btoa(
            unescape(encodeURIComponent(JSON.stringify(cssMapping))),
          );
          var data =
            "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
              base64,
            );
          var sourceMapping = "/*# ".concat(data, " */");
          return [content].concat([sourceMapping]).join("\n");
        }
        return [content].join("\n");
      };

      /***/
    },

    /***/ "./src/tailwind.css"(
      /*!**************************!*\
  !*** ./src/tailwind.css ***!
  \**************************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js",
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
        );
      /* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_tailwind_css__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./tailwind.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/tailwind.css",
        );

      var options = {};

      options.styleTagTransform =
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
      options.setAttributes =
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
      options.insert =
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
          null,
          "head",
        );
      options.domAPI =
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
      options.insertStyleElement =
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

      var update =
        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_tailwind_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ],
          options,
        );

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_tailwind_css__WEBPACK_IMPORTED_MODULE_6__[
          "default"
        ] &&
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_tailwind_css__WEBPACK_IMPORTED_MODULE_6__[
          "default"
        ].locals
          ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_tailwind_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ].locals
          : undefined;

      /***/
    },

    /***/ "./src/scss/main.scss"(
      /*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js",
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
        );
      /* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./main.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/scss/main.scss",
        );

      var options = {};

      options.styleTagTransform =
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
      options.setAttributes =
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
      options.insert =
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
          null,
          "head",
        );
      options.domAPI =
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
      options.insertStyleElement =
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

      var update =
        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ],
          options,
        );

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__[
          "default"
        ] &&
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__[
          "default"
        ].locals
          ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_main_scss__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ].locals
          : undefined;

      /***/
    },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"(
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      module,
    ) {
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
            layer: item[5],
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
              references: 1,
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
            if (
              newObj.css === obj.css &&
              newObj.media === obj.media &&
              newObj.sourceMap === obj.sourceMap &&
              newObj.supports === obj.supports &&
              newObj.layer === obj.layer
            ) {
              return;
            }
            api.update((obj = newObj));
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

      /***/
    },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"(
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      module,
    ) {
      var memo = {};

      /* istanbul ignore next  */
      function getTarget(target) {
        if (typeof memo[target] === "undefined") {
          var styleTarget = document.querySelector(target);

          // Special case to return head of iframe instead of iframe itself
          if (
            window.HTMLIFrameElement &&
            styleTarget instanceof window.HTMLIFrameElement
          ) {
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
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
          );
        }
        target.appendChild(style);
      }
      module.exports = insertBySelector;

      /***/
    },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"(
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      module,
    ) {
      /* istanbul ignore next  */
      function insertStyleElement(options) {
        var element = document.createElement("style");
        options.setAttributes(element, options.attributes);
        options.insert(element, options.options);
        return element;
      }
      module.exports = insertStyleElement;

      /***/
    },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"(
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      module,
      __unused_webpack_exports,
      __webpack_require__,
    ) {
      /* istanbul ignore next  */
      function setAttributesWithoutAttributes(styleElement) {
        var nonce = true ? __webpack_require__.nc : 0;
        if (nonce) {
          styleElement.setAttribute("nonce", nonce);
        }
      }
      module.exports = setAttributesWithoutAttributes;

      /***/
    },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"(
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      module,
    ) {
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
          css += "@layer".concat(
            obj.layer.length > 0 ? " ".concat(obj.layer) : "",
            " {",
          );
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
          css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
            " */",
          );
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
            remove: function remove() {},
          };
        }
        var styleElement = options.insertStyleElement(options);
        return {
          update: function update(obj) {
            apply(styleElement, options, obj);
          },
          remove: function remove() {
            removeStyleElement(styleElement);
          },
        };
      }
      module.exports = domAPI;

      /***/
    },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"(
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      module,
    ) {
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

      /***/
    },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ if (!(moduleId in __webpack_modules__)) {
      /******/ delete __webpack_module_cache__[moduleId];
      /******/ var e = new Error("Cannot find module '" + moduleId + "'");
      /******/ e.code = "MODULE_NOT_FOUND";
      /******/ throw e;
      /******/
    }
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
  (() => {
    /*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _tailwind_css__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./tailwind.css */ "./src/tailwind.css");
    /* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
  })();

  /******/
})();
//# sourceMappingURL=style.bundle.js.map

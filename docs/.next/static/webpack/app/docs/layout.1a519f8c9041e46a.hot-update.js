/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/docs/layout",{

/***/ "(app-pages-browser)/./.contentlayer/generated/Docs/_index.mjs":
/*!*************************************************!*\
  !*** ./.contentlayer/generated/Docs/_index.mjs ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./.contentlayer/generated/index.mjs":
/*!*******************************************!*\
  !*** ./.contentlayer/generated/index.mjs ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allDocs: function() { return /* reexport safe */ _Docs_index_mjs__WEBPACK_IMPORTED_MODULE_2__.allDocs; },\n/* harmony export */   allDocuments: function() { return /* binding */ allDocuments; },\n/* harmony export */   allPosts: function() { return /* reexport safe */ _Post_index_mjs__WEBPACK_IMPORTED_MODULE_1__.allPosts; },\n/* harmony export */   isType: function() { return /* reexport safe */ contentlayer_client__WEBPACK_IMPORTED_MODULE_0__.isType; }\n/* harmony export */ });\n/* harmony import */ var contentlayer_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! contentlayer/client */ \"(app-pages-browser)/../node_modules/.pnpm/contentlayer@0.3.4_esbuild@0.20.2/node_modules/contentlayer/dist/client/index.js\");\n/* harmony import */ var _Post_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post/_index.mjs */ \"(app-pages-browser)/./.contentlayer/generated/Post/_index.mjs\");\n/* harmony import */ var _Docs_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Docs/_index.mjs */ \"(app-pages-browser)/./.contentlayer/generated/Docs/_index.mjs\");\n/* harmony import */ var _Docs_index_mjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Docs_index_mjs__WEBPACK_IMPORTED_MODULE_2__);\n// NOTE This file is auto-generated by Contentlayer\n\n// NOTE During development Contentlayer imports from `.mjs` files to improve HMR speeds.\n// During (production) builds Contentlayer it imports from `.json` files to improve build performance.\n\n\n\nconst allDocuments = [\n    ..._Post_index_mjs__WEBPACK_IMPORTED_MODULE_1__.allPosts,\n    ..._Docs_index_mjs__WEBPACK_IMPORTED_MODULE_2__.allDocs\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uLy5jb250ZW50bGF5ZXIvZ2VuZXJhdGVkL2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1EQUFtRDtBQUVQO0FBRTVDLHdGQUF3RjtBQUN4RixzR0FBc0c7QUFDMUQ7QUFDRDtBQUVmO0FBRXJCLE1BQU1HLGVBQWU7T0FBSUYscURBQVFBO09BQUtDLG9EQUFPQTtDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uLy5jb250ZW50bGF5ZXIvZ2VuZXJhdGVkL2luZGV4Lm1qcz85NWRlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5PVEUgVGhpcyBmaWxlIGlzIGF1dG8tZ2VuZXJhdGVkIGJ5IENvbnRlbnRsYXllclxuXG5leHBvcnQgeyBpc1R5cGUgfSBmcm9tICdjb250ZW50bGF5ZXIvY2xpZW50J1xuXG4vLyBOT1RFIER1cmluZyBkZXZlbG9wbWVudCBDb250ZW50bGF5ZXIgaW1wb3J0cyBmcm9tIGAubWpzYCBmaWxlcyB0byBpbXByb3ZlIEhNUiBzcGVlZHMuXG4vLyBEdXJpbmcgKHByb2R1Y3Rpb24pIGJ1aWxkcyBDb250ZW50bGF5ZXIgaXQgaW1wb3J0cyBmcm9tIGAuanNvbmAgZmlsZXMgdG8gaW1wcm92ZSBidWlsZCBwZXJmb3JtYW5jZS5cbmltcG9ydCB7IGFsbFBvc3RzIH0gZnJvbSAnLi9Qb3N0L19pbmRleC5tanMnXG5pbXBvcnQgeyBhbGxEb2NzIH0gZnJvbSAnLi9Eb2NzL19pbmRleC5tanMnXG5cbmV4cG9ydCB7IGFsbFBvc3RzLCBhbGxEb2NzIH1cblxuZXhwb3J0IGNvbnN0IGFsbERvY3VtZW50cyA9IFsuLi5hbGxQb3N0cywgLi4uYWxsRG9jc11cblxuXG4iXSwibmFtZXMiOlsiaXNUeXBlIiwiYWxsUG9zdHMiLCJhbGxEb2NzIiwiYWxsRG9jdW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./.contentlayer/generated/index.mjs\n"));

/***/ })

});
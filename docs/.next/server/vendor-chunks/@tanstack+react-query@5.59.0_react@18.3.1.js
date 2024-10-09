"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@tanstack+react-query@5.59.0_react@18.3.1";
exports.ids = ["vendor-chunks/@tanstack+react-query@5.59.0_react@18.3.1"];
exports.modules = {

/***/ "(ssr)/../node_modules/.pnpm/@tanstack+react-query@5.59.0_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@tanstack+react-query@5.59.0_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QueryClientContext: () => (/* binding */ QueryClientContext),\n/* harmony export */   QueryClientProvider: () => (/* binding */ QueryClientProvider),\n/* harmony export */   useQueryClient: () => (/* binding */ useQueryClient)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/../node_modules/.pnpm/next@14.0.3_@babel+core@7.25.7_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/../node_modules/.pnpm/next@14.0.3_@babel+core@7.25.7_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ QueryClientContext,QueryClientProvider,useQueryClient auto */ // src/QueryClientProvider.tsx\n\n\nvar QueryClientContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);\nvar useQueryClient = (queryClient)=>{\n    const client = react__WEBPACK_IMPORTED_MODULE_0__.useContext(QueryClientContext);\n    if (queryClient) {\n        return queryClient;\n    }\n    if (!client) {\n        throw new Error(\"No QueryClient set, use QueryClientProvider to set one\");\n    }\n    return client;\n};\nvar QueryClientProvider = ({ client, children })=>{\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{\n        client.mount();\n        return ()=>{\n            client.unmount();\n        };\n    }, [\n        client\n    ]);\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(QueryClientContext.Provider, {\n        value: client,\n        children\n    });\n};\n //# sourceMappingURL=QueryClientProvider.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0B0YW5zdGFjaytyZWFjdC1xdWVyeUA1LjU5LjBfcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9AdGFuc3RhY2svcmVhY3QtcXVlcnkvYnVpbGQvbW9kZXJuL1F1ZXJ5Q2xpZW50UHJvdmlkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OzsyR0FFQSw4QkFBOEI7QUFDQztBQUNTO0FBQ3hDLElBQUlFLG1DQUFxQkYsZ0RBQW1CLENBQzFDLEtBQUs7QUFFUCxJQUFJSSxpQkFBaUIsQ0FBQ0M7SUFDcEIsTUFBTUMsU0FBU04sNkNBQWdCLENBQUNFO0lBQ2hDLElBQUlHLGFBQWE7UUFDZixPQUFPQTtJQUNUO0lBQ0EsSUFBSSxDQUFDQyxRQUFRO1FBQ1gsTUFBTSxJQUFJRSxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Y7QUFDVDtBQUNBLElBQUlHLHNCQUFzQixDQUFDLEVBQ3pCSCxNQUFNLEVBQ05JLFFBQVEsRUFDVDtJQUNDViw0Q0FBZSxDQUFDO1FBQ2RNLE9BQU9NLEtBQUs7UUFDWixPQUFPO1lBQ0xOLE9BQU9PLE9BQU87UUFDaEI7SUFDRixHQUFHO1FBQUNQO0tBQU87SUFDWCxPQUFPLGFBQWEsR0FBR0wsc0RBQUdBLENBQUNDLG1CQUFtQlksUUFBUSxFQUFFO1FBQUVDLE9BQU9UO1FBQVFJO0lBQVM7QUFDcEY7QUFLRSxDQUNGLCtDQUErQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWRvY3MvLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0B0YW5zdGFjaytyZWFjdC1xdWVyeUA1LjU5LjBfcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9AdGFuc3RhY2svcmVhY3QtcXVlcnkvYnVpbGQvbW9kZXJuL1F1ZXJ5Q2xpZW50UHJvdmlkZXIuanM/Mzc5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuLy8gc3JjL1F1ZXJ5Q2xpZW50UHJvdmlkZXIudHN4XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xudmFyIFF1ZXJ5Q2xpZW50Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoXG4gIHZvaWQgMFxuKTtcbnZhciB1c2VRdWVyeUNsaWVudCA9IChxdWVyeUNsaWVudCkgPT4ge1xuICBjb25zdCBjbGllbnQgPSBSZWFjdC51c2VDb250ZXh0KFF1ZXJ5Q2xpZW50Q29udGV4dCk7XG4gIGlmIChxdWVyeUNsaWVudCkge1xuICAgIHJldHVybiBxdWVyeUNsaWVudDtcbiAgfVxuICBpZiAoIWNsaWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIFF1ZXJ5Q2xpZW50IHNldCwgdXNlIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgdG8gc2V0IG9uZVwiKTtcbiAgfVxuICByZXR1cm4gY2xpZW50O1xufTtcbnZhciBRdWVyeUNsaWVudFByb3ZpZGVyID0gKHtcbiAgY2xpZW50LFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNsaWVudC5tb3VudCgpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGllbnQudW5tb3VudCgpO1xuICAgIH07XG4gIH0sIFtjbGllbnRdKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goUXVlcnlDbGllbnRDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjbGllbnQsIGNoaWxkcmVuIH0pO1xufTtcbmV4cG9ydCB7XG4gIFF1ZXJ5Q2xpZW50Q29udGV4dCxcbiAgUXVlcnlDbGllbnRQcm92aWRlcixcbiAgdXNlUXVlcnlDbGllbnRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1RdWVyeUNsaWVudFByb3ZpZGVyLmpzLm1hcCJdLCJuYW1lcyI6WyJSZWFjdCIsImpzeCIsIlF1ZXJ5Q2xpZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VRdWVyeUNsaWVudCIsInF1ZXJ5Q2xpZW50IiwiY2xpZW50IiwidXNlQ29udGV4dCIsIkVycm9yIiwiUXVlcnlDbGllbnRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlRWZmZWN0IiwibW91bnQiLCJ1bm1vdW50IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/.pnpm/@tanstack+react-query@5.59.0_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js\n");

/***/ })

};
;
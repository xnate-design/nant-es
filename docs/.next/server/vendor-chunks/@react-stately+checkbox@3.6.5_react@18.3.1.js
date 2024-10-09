"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@react-stately+checkbox@3.6.5_react@18.3.1";
exports.ids = ["vendor-chunks/@react-stately+checkbox@3.6.5_react@18.3.1"];
exports.modules = {

/***/ "(ssr)/../node_modules/.pnpm/@react-stately+checkbox@3.6.5_react@18.3.1/node_modules/@react-stately/checkbox/dist/useCheckboxGroupState.mjs":
/*!********************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@react-stately+checkbox@3.6.5_react@18.3.1/node_modules/@react-stately/checkbox/dist/useCheckboxGroupState.mjs ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCheckboxGroupState: () => (/* binding */ $587d3ad58be6d31f$export$daff6da51032a415)\n/* harmony export */ });\n/* harmony import */ var _react_stately_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-stately/form */ \"(ssr)/../node_modules/.pnpm/@react-stately+form@3.0.6_react@18.3.1/node_modules/@react-stately/form/dist/useFormValidationState.mjs\");\n/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-stately/utils */ \"(ssr)/../node_modules/.pnpm/@react-stately+utils@3.10.4_react@18.3.1/node_modules/@react-stately/utils/dist/useControlledState.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/../node_modules/.pnpm/next@14.0.3_@babel+core@7.25.7_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n/*\n * Copyright 2020 Adobe. All rights reserved.\n * This file is licensed to you under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License. You may obtain a copy\n * of the License at http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software distributed under\n * the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS\n * OF ANY KIND, either express or implied. See the License for the specific language\n * governing permissions and limitations under the License.\n */ function $587d3ad58be6d31f$export$daff6da51032a415(props = {}) {\n    let [selectedValues, setValue] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.useControlledState)(props.value, props.defaultValue || [], props.onChange);\n    let isRequired = !!props.isRequired && selectedValues.length === 0;\n    let invalidValues = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map());\n    let validation = (0, _react_stately_form__WEBPACK_IMPORTED_MODULE_2__.useFormValidationState)({\n        ...props,\n        value: selectedValues\n    });\n    let isInvalid = validation.displayValidation.isInvalid;\n    var _props_validationState;\n    const state = {\n        ...validation,\n        value: selectedValues,\n        setValue (value) {\n            if (props.isReadOnly || props.isDisabled) return;\n            setValue(value);\n        },\n        isDisabled: props.isDisabled || false,\n        isReadOnly: props.isReadOnly || false,\n        isSelected (value) {\n            return selectedValues.includes(value);\n        },\n        addValue (value) {\n            if (props.isReadOnly || props.isDisabled) return;\n            if (!selectedValues.includes(value)) setValue(selectedValues.concat(value));\n        },\n        removeValue (value) {\n            if (props.isReadOnly || props.isDisabled) return;\n            if (selectedValues.includes(value)) setValue(selectedValues.filter((existingValue)=>existingValue !== value));\n        },\n        toggleValue (value) {\n            if (props.isReadOnly || props.isDisabled) return;\n            if (selectedValues.includes(value)) setValue(selectedValues.filter((existingValue)=>existingValue !== value));\n            else setValue(selectedValues.concat(value));\n        },\n        setInvalid (value, v) {\n            let s = new Map(invalidValues.current);\n            if (v.isInvalid) s.set(value, v);\n            else s.delete(value);\n            invalidValues.current = s;\n            validation.updateValidation((0, _react_stately_form__WEBPACK_IMPORTED_MODULE_2__.mergeValidation)(...s.values()));\n        },\n        validationState: (_props_validationState = props.validationState) !== null && _props_validationState !== void 0 ? _props_validationState : isInvalid ? \"invalid\" : null,\n        isInvalid: isInvalid,\n        isRequired: isRequired\n    };\n    return state;\n}\n //# sourceMappingURL=useCheckboxGroupState.module.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1zdGF0ZWx5K2NoZWNrYm94QDMuNi41X3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvQHJlYWN0LXN0YXRlbHkvY2hlY2tib3gvZGlzdC91c2VDaGVja2JveEdyb3VwU3RhdGUubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVJO0FBQ2xEO0FBQ3ZDO0FBRTlDOzs7Ozs7Ozs7O0NBVUMsR0FHRCxTQUFTUSwwQ0FBMENDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELElBQUksQ0FBQ0MsZ0JBQWdCQyxTQUFTLEdBQUcsQ0FBQyxHQUFHTixvRUFBd0IsRUFBR0ksTUFBTUcsS0FBSyxFQUFFSCxNQUFNSSxZQUFZLElBQUksRUFBRSxFQUFFSixNQUFNSyxRQUFRO0lBQ3JILElBQUlDLGFBQWEsQ0FBQyxDQUFDTixNQUFNTSxVQUFVLElBQUlMLGVBQWVNLE1BQU0sS0FBSztJQUNqRSxJQUFJQyxnQkFBZ0IsQ0FBQyxHQUFHVix5Q0FBWSxFQUFHLElBQUlXO0lBQzNDLElBQUlDLGFBQWEsQ0FBQyxHQUFHbEIsdUVBQTRCLEVBQUc7UUFDaEQsR0FBR1EsS0FBSztRQUNSRyxPQUFPRjtJQUNYO0lBQ0EsSUFBSVUsWUFBWUQsV0FBV0UsaUJBQWlCLENBQUNELFNBQVM7SUFDdEQsSUFBSUU7SUFDSixNQUFNQyxRQUFRO1FBQ1YsR0FBR0osVUFBVTtRQUNiUCxPQUFPRjtRQUNQQyxVQUFVQyxLQUFLO1lBQ1gsSUFBSUgsTUFBTWUsVUFBVSxJQUFJZixNQUFNZ0IsVUFBVSxFQUFFO1lBQzFDZCxTQUFTQztRQUNiO1FBQ0FhLFlBQVloQixNQUFNZ0IsVUFBVSxJQUFJO1FBQ2hDRCxZQUFZZixNQUFNZSxVQUFVLElBQUk7UUFDaENFLFlBQVlkLEtBQUs7WUFDYixPQUFPRixlQUFlaUIsUUFBUSxDQUFDZjtRQUNuQztRQUNBZ0IsVUFBVWhCLEtBQUs7WUFDWCxJQUFJSCxNQUFNZSxVQUFVLElBQUlmLE1BQU1nQixVQUFVLEVBQUU7WUFDMUMsSUFBSSxDQUFDZixlQUFlaUIsUUFBUSxDQUFDZixRQUFRRCxTQUFTRCxlQUFlbUIsTUFBTSxDQUFDakI7UUFDeEU7UUFDQWtCLGFBQWFsQixLQUFLO1lBQ2QsSUFBSUgsTUFBTWUsVUFBVSxJQUFJZixNQUFNZ0IsVUFBVSxFQUFFO1lBQzFDLElBQUlmLGVBQWVpQixRQUFRLENBQUNmLFFBQVFELFNBQVNELGVBQWVxQixNQUFNLENBQUMsQ0FBQ0MsZ0JBQWdCQSxrQkFBa0JwQjtRQUMxRztRQUNBcUIsYUFBYXJCLEtBQUs7WUFDZCxJQUFJSCxNQUFNZSxVQUFVLElBQUlmLE1BQU1nQixVQUFVLEVBQUU7WUFDMUMsSUFBSWYsZUFBZWlCLFFBQVEsQ0FBQ2YsUUFBUUQsU0FBU0QsZUFBZXFCLE1BQU0sQ0FBQyxDQUFDQyxnQkFBZ0JBLGtCQUFrQnBCO2lCQUNqR0QsU0FBU0QsZUFBZW1CLE1BQU0sQ0FBQ2pCO1FBQ3hDO1FBQ0FzQixZQUFZdEIsS0FBSyxFQUFFdUIsQ0FBQztZQUNoQixJQUFJQyxJQUFJLElBQUlsQixJQUFJRCxjQUFjb0IsT0FBTztZQUNyQyxJQUFJRixFQUFFZixTQUFTLEVBQUVnQixFQUFFRSxHQUFHLENBQUMxQixPQUFPdUI7aUJBQ3pCQyxFQUFFRyxNQUFNLENBQUMzQjtZQUNkSyxjQUFjb0IsT0FBTyxHQUFHRDtZQUN4QmpCLFdBQVdxQixnQkFBZ0IsQ0FBQyxDQUFDLEdBQUdyQyxnRUFBcUIsS0FBTWlDLEVBQUVLLE1BQU07UUFDdkU7UUFDQUMsaUJBQWlCLENBQUNwQix5QkFBeUJiLE1BQU1pQyxlQUFlLE1BQU0sUUFBUXBCLDJCQUEyQixLQUFLLElBQUlBLHlCQUF5QkYsWUFBWSxZQUFZO1FBQ25LQSxXQUFXQTtRQUNYTCxZQUFZQTtJQUNoQjtJQUNBLE9BQU9RO0FBQ1g7QUFHNEUsQ0FDNUUsd0RBQXdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtZG9jcy8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LXN0YXRlbHkrY2hlY2tib3hAMy42LjVfcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9AcmVhY3Qtc3RhdGVseS9jaGVja2JveC9kaXN0L3VzZUNoZWNrYm94R3JvdXBTdGF0ZS5tanM/MjczZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUZvcm1WYWxpZGF0aW9uU3RhdGUgYXMgJDNPZjRBJHVzZUZvcm1WYWxpZGF0aW9uU3RhdGUsIG1lcmdlVmFsaWRhdGlvbiBhcyAkM09mNEEkbWVyZ2VWYWxpZGF0aW9ufSBmcm9tIFwiQHJlYWN0LXN0YXRlbHkvZm9ybVwiO1xuaW1wb3J0IHt1c2VDb250cm9sbGVkU3RhdGUgYXMgJDNPZjRBJHVzZUNvbnRyb2xsZWRTdGF0ZX0gZnJvbSBcIkByZWFjdC1zdGF0ZWx5L3V0aWxzXCI7XG5pbXBvcnQge3VzZVJlZiBhcyAkM09mNEEkdXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcblxuLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovIFxuXG5cbmZ1bmN0aW9uICQ1ODdkM2FkNThiZTZkMzFmJGV4cG9ydCRkYWZmNmRhNTEwMzJhNDE1KHByb3BzID0ge30pIHtcbiAgICBsZXQgW3NlbGVjdGVkVmFsdWVzLCBzZXRWYWx1ZV0gPSAoMCwgJDNPZjRBJHVzZUNvbnRyb2xsZWRTdGF0ZSkocHJvcHMudmFsdWUsIHByb3BzLmRlZmF1bHRWYWx1ZSB8fCBbXSwgcHJvcHMub25DaGFuZ2UpO1xuICAgIGxldCBpc1JlcXVpcmVkID0gISFwcm9wcy5pc1JlcXVpcmVkICYmIHNlbGVjdGVkVmFsdWVzLmxlbmd0aCA9PT0gMDtcbiAgICBsZXQgaW52YWxpZFZhbHVlcyA9ICgwLCAkM09mNEEkdXNlUmVmKShuZXcgTWFwKCkpO1xuICAgIGxldCB2YWxpZGF0aW9uID0gKDAsICQzT2Y0QSR1c2VGb3JtVmFsaWRhdGlvblN0YXRlKSh7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICB2YWx1ZTogc2VsZWN0ZWRWYWx1ZXNcbiAgICB9KTtcbiAgICBsZXQgaXNJbnZhbGlkID0gdmFsaWRhdGlvbi5kaXNwbGF5VmFsaWRhdGlvbi5pc0ludmFsaWQ7XG4gICAgdmFyIF9wcm9wc192YWxpZGF0aW9uU3RhdGU7XG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIC4uLnZhbGlkYXRpb24sXG4gICAgICAgIHZhbHVlOiBzZWxlY3RlZFZhbHVlcyxcbiAgICAgICAgc2V0VmFsdWUgKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaXNSZWFkT25seSB8fCBwcm9wcy5pc0Rpc2FibGVkKSByZXR1cm47XG4gICAgICAgICAgICBzZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGlzRGlzYWJsZWQ6IHByb3BzLmlzRGlzYWJsZWQgfHwgZmFsc2UsXG4gICAgICAgIGlzUmVhZE9ubHk6IHByb3BzLmlzUmVhZE9ubHkgfHwgZmFsc2UsXG4gICAgICAgIGlzU2VsZWN0ZWQgKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXModmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBhZGRWYWx1ZSAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5pc1JlYWRPbmx5IHx8IHByb3BzLmlzRGlzYWJsZWQpIHJldHVybjtcbiAgICAgICAgICAgIGlmICghc2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXModmFsdWUpKSBzZXRWYWx1ZShzZWxlY3RlZFZhbHVlcy5jb25jYXQodmFsdWUpKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlVmFsdWUgKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaXNSZWFkT25seSB8fCBwcm9wcy5pc0Rpc2FibGVkKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXModmFsdWUpKSBzZXRWYWx1ZShzZWxlY3RlZFZhbHVlcy5maWx0ZXIoKGV4aXN0aW5nVmFsdWUpPT5leGlzdGluZ1ZhbHVlICE9PSB2YWx1ZSkpO1xuICAgICAgICB9LFxuICAgICAgICB0b2dnbGVWYWx1ZSAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5pc1JlYWRPbmx5IHx8IHByb3BzLmlzRGlzYWJsZWQpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHNldFZhbHVlKHNlbGVjdGVkVmFsdWVzLmZpbHRlcigoZXhpc3RpbmdWYWx1ZSk9PmV4aXN0aW5nVmFsdWUgIT09IHZhbHVlKSk7XG4gICAgICAgICAgICBlbHNlIHNldFZhbHVlKHNlbGVjdGVkVmFsdWVzLmNvbmNhdCh2YWx1ZSkpO1xuICAgICAgICB9LFxuICAgICAgICBzZXRJbnZhbGlkICh2YWx1ZSwgdikge1xuICAgICAgICAgICAgbGV0IHMgPSBuZXcgTWFwKGludmFsaWRWYWx1ZXMuY3VycmVudCk7XG4gICAgICAgICAgICBpZiAodi5pc0ludmFsaWQpIHMuc2V0KHZhbHVlLCB2KTtcbiAgICAgICAgICAgIGVsc2Ugcy5kZWxldGUodmFsdWUpO1xuICAgICAgICAgICAgaW52YWxpZFZhbHVlcy5jdXJyZW50ID0gcztcbiAgICAgICAgICAgIHZhbGlkYXRpb24udXBkYXRlVmFsaWRhdGlvbigoMCwgJDNPZjRBJG1lcmdlVmFsaWRhdGlvbikoLi4ucy52YWx1ZXMoKSkpO1xuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0aW9uU3RhdGU6IChfcHJvcHNfdmFsaWRhdGlvblN0YXRlID0gcHJvcHMudmFsaWRhdGlvblN0YXRlKSAhPT0gbnVsbCAmJiBfcHJvcHNfdmFsaWRhdGlvblN0YXRlICE9PSB2b2lkIDAgPyBfcHJvcHNfdmFsaWRhdGlvblN0YXRlIDogaXNJbnZhbGlkID8gJ2ludmFsaWQnIDogbnVsbCxcbiAgICAgICAgaXNJbnZhbGlkOiBpc0ludmFsaWQsXG4gICAgICAgIGlzUmVxdWlyZWQ6IGlzUmVxdWlyZWRcbiAgICB9O1xuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuXG5leHBvcnQgeyQ1ODdkM2FkNThiZTZkMzFmJGV4cG9ydCRkYWZmNmRhNTEwMzJhNDE1IGFzIHVzZUNoZWNrYm94R3JvdXBTdGF0ZX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VDaGVja2JveEdyb3VwU3RhdGUubW9kdWxlLmpzLm1hcFxuIl0sIm5hbWVzIjpbInVzZUZvcm1WYWxpZGF0aW9uU3RhdGUiLCIkM09mNEEkdXNlRm9ybVZhbGlkYXRpb25TdGF0ZSIsIm1lcmdlVmFsaWRhdGlvbiIsIiQzT2Y0QSRtZXJnZVZhbGlkYXRpb24iLCJ1c2VDb250cm9sbGVkU3RhdGUiLCIkM09mNEEkdXNlQ29udHJvbGxlZFN0YXRlIiwidXNlUmVmIiwiJDNPZjRBJHVzZVJlZiIsIiQ1ODdkM2FkNThiZTZkMzFmJGV4cG9ydCRkYWZmNmRhNTEwMzJhNDE1IiwicHJvcHMiLCJzZWxlY3RlZFZhbHVlcyIsInNldFZhbHVlIiwidmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJvbkNoYW5nZSIsImlzUmVxdWlyZWQiLCJsZW5ndGgiLCJpbnZhbGlkVmFsdWVzIiwiTWFwIiwidmFsaWRhdGlvbiIsImlzSW52YWxpZCIsImRpc3BsYXlWYWxpZGF0aW9uIiwiX3Byb3BzX3ZhbGlkYXRpb25TdGF0ZSIsInN0YXRlIiwiaXNSZWFkT25seSIsImlzRGlzYWJsZWQiLCJpc1NlbGVjdGVkIiwiaW5jbHVkZXMiLCJhZGRWYWx1ZSIsImNvbmNhdCIsInJlbW92ZVZhbHVlIiwiZmlsdGVyIiwiZXhpc3RpbmdWYWx1ZSIsInRvZ2dsZVZhbHVlIiwic2V0SW52YWxpZCIsInYiLCJzIiwiY3VycmVudCIsInNldCIsImRlbGV0ZSIsInVwZGF0ZVZhbGlkYXRpb24iLCJ2YWx1ZXMiLCJ2YWxpZGF0aW9uU3RhdGUiLCJ1c2VDaGVja2JveEdyb3VwU3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/.pnpm/@react-stately+checkbox@3.6.5_react@18.3.1/node_modules/@react-stately/checkbox/dist/useCheckboxGroupState.mjs\n");

/***/ })

};
;
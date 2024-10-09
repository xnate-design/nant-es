"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@nextui-org+use-aria-link@2.0.19_react@18.3.1";
exports.ids = ["vendor-chunks/@nextui-org+use-aria-link@2.0.19_react@18.3.1"];
exports.modules = {

/***/ "(ssr)/../node_modules/.pnpm/@nextui-org+use-aria-link@2.0.19_react@18.3.1/node_modules/@nextui-org/use-aria-link/dist/index.mjs":
/*!*********************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@nextui-org+use-aria-link@2.0.19_react@18.3.1/node_modules/@nextui-org/use-aria-link/dist/index.mjs ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAriaLink: () => (/* binding */ useAriaLink)\n/* harmony export */ });\n/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/utils */ \"(ssr)/../node_modules/.pnpm/@react-aria+utils@3.24.1_react@18.3.1/node_modules/@react-aria/utils/dist/filterDOMProps.mjs\");\n/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-aria/utils */ \"(ssr)/../node_modules/.pnpm/@react-aria+utils@3.24.1_react@18.3.1/node_modules/@react-aria/utils/dist/mergeProps.mjs\");\n/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-aria/utils */ \"(ssr)/../node_modules/.pnpm/@react-aria+utils@3.24.1_react@18.3.1/node_modules/@react-aria/utils/dist/openLink.mjs\");\n/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-aria/focus */ \"(ssr)/../node_modules/.pnpm/@react-aria+focus@3.17.1_react@18.3.1/node_modules/@react-aria/focus/dist/useFocusable.mjs\");\n/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/interactions */ \"(ssr)/../node_modules/.pnpm/@react-aria+interactions@3.21.3_react@18.3.1/node_modules/@react-aria/interactions/dist/usePress.mjs\");\n// src/index.ts\n\n\n\nfunction useAriaLink(props, ref) {\n    let { elementType = \"a\", onPress, onPressStart, onPressEnd, onClick: deprecatedOnClick, isDisabled, ...otherProps } = props;\n    let linkProps = {};\n    if (elementType !== \"a\") {\n        linkProps = {\n            role: \"link\",\n            tabIndex: !isDisabled ? 0 : void 0\n        };\n    }\n    let { focusableProps } = (0,_react_aria_focus__WEBPACK_IMPORTED_MODULE_0__.useFocusable)(props, ref);\n    let { pressProps, isPressed } = (0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__.usePress)({\n        onPress,\n        onPressStart,\n        onPressEnd,\n        isDisabled,\n        ref\n    });\n    let domProps = (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.filterDOMProps)(otherProps, {\n        labelable: true,\n        isLink: elementType === \"a\"\n    });\n    let interactionHandlers = (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.mergeProps)(focusableProps, pressProps);\n    let router = (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    let routerLinkProps = (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_4__.useLinkProps)(props);\n    return {\n        isPressed,\n        linkProps: (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.mergeProps)(domProps, routerLinkProps, {\n            ...interactionHandlers,\n            ...linkProps,\n            \"aria-disabled\": isDisabled || void 0,\n            \"aria-current\": props[\"aria-current\"],\n            onClick: (e)=>{\n                var _a;\n                (_a = pressProps.onClick) == null ? void 0 : _a.call(pressProps, e);\n                if (deprecatedOnClick) {\n                    deprecatedOnClick(e);\n                }\n                if (!router.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_4__.shouldClientNavigate)(e.currentTarget, e) && props.href) {\n                    e.preventDefault();\n                    router.open(e.currentTarget, e, props.href, props.routerOptions);\n                }\n            }\n        })\n    };\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BuZXh0dWktb3JnK3VzZS1hcmlhLWxpbmtAMi4wLjE5X3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvQG5leHR1aS1vcmcvdXNlLWFyaWEtbGluay9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxlQUFlO0FBT1k7QUFDc0I7QUFDRztBQUNwRCxTQUFTTyxZQUFZQyxLQUFLLEVBQUVDLEdBQUc7SUFDN0IsSUFBSSxFQUNGQyxjQUFjLEdBQUcsRUFDakJDLE9BQU8sRUFDUEMsWUFBWSxFQUNaQyxVQUFVLEVBQ1ZDLFNBQVNDLGlCQUFpQixFQUMxQkMsVUFBVSxFQUNWLEdBQUdDLFlBQ0osR0FBR1Q7SUFDSixJQUFJVSxZQUFZLENBQUM7SUFDakIsSUFBSVIsZ0JBQWdCLEtBQUs7UUFDdkJRLFlBQVk7WUFDVkMsTUFBTTtZQUNOQyxVQUFVLENBQUNKLGFBQWEsSUFBSSxLQUFLO1FBQ25DO0lBQ0Y7SUFDQSxJQUFJLEVBQUVLLGNBQWMsRUFBRSxHQUFHaEIsK0RBQVlBLENBQUNHLE9BQU9DO0lBQzdDLElBQUksRUFBRWEsVUFBVSxFQUFFQyxTQUFTLEVBQUUsR0FBR2pCLGtFQUFRQSxDQUFDO1FBQUVLO1FBQVNDO1FBQWNDO1FBQVlHO1FBQVlQO0lBQUk7SUFDOUYsSUFBSWUsV0FBV3hCLGlFQUFjQSxDQUFDaUIsWUFBWTtRQUFFUSxXQUFXO1FBQU1DLFFBQVFoQixnQkFBZ0I7SUFBSTtJQUN6RixJQUFJaUIsc0JBQXNCMUIsNkRBQVVBLENBQUNvQixnQkFBZ0JDO0lBQ3JELElBQUlNLFNBQVMxQiw0REFBU0E7SUFDdEIsSUFBSTJCLGtCQUFrQnpCLCtEQUFZQSxDQUFDSTtJQUNuQyxPQUFPO1FBQ0xlO1FBQ0FMLFdBQVdqQiw2REFBVUEsQ0FBQ3VCLFVBQVVLLGlCQUFpQjtZQUMvQyxHQUFHRixtQkFBbUI7WUFDdEIsR0FBR1QsU0FBUztZQUNaLGlCQUFpQkYsY0FBYyxLQUFLO1lBQ3BDLGdCQUFnQlIsS0FBSyxDQUFDLGVBQWU7WUFDckNNLFNBQVMsQ0FBQ2dCO2dCQUNSLElBQUlDO2dCQUNIQSxDQUFBQSxLQUFLVCxXQUFXUixPQUFPLEtBQUssT0FBTyxLQUFLLElBQUlpQixHQUFHQyxJQUFJLENBQUNWLFlBQVlRO2dCQUNqRSxJQUFJZixtQkFBbUI7b0JBQ3JCQSxrQkFBa0JlO2dCQUNwQjtnQkFDQSxJQUFJLENBQUNGLE9BQU9LLFFBQVEsSUFBSUgsRUFBRUksYUFBYSxZQUFZQyxxQkFBcUJMLEVBQUVJLGFBQWEsQ0FBQ0UsSUFBSSxJQUFJLENBQUNOLEVBQUVPLGtCQUFrQixNQUFNbEMsdUVBQW9CQSxDQUFDMkIsRUFBRUksYUFBYSxFQUFFSixNQUFNdEIsTUFBTTRCLElBQUksRUFBRTtvQkFDakxOLEVBQUVRLGNBQWM7b0JBQ2hCVixPQUFPVyxJQUFJLENBQUNULEVBQUVJLGFBQWEsRUFBRUosR0FBR3RCLE1BQU00QixJQUFJLEVBQUU1QixNQUFNZ0MsYUFBYTtnQkFDakU7WUFDRjtRQUNGO0lBQ0Y7QUFDRjtBQUdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtZG9jcy8uLi9ub2RlX21vZHVsZXMvLnBucG0vQG5leHR1aS1vcmcrdXNlLWFyaWEtbGlua0AyLjAuMTlfcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9AbmV4dHVpLW9yZy91c2UtYXJpYS1saW5rL2Rpc3QvaW5kZXgubWpzPzNiMTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2luZGV4LnRzXG5pbXBvcnQge1xuICBmaWx0ZXJET01Qcm9wcyxcbiAgbWVyZ2VQcm9wcyxcbiAgdXNlUm91dGVyLFxuICBzaG91bGRDbGllbnROYXZpZ2F0ZSxcbiAgdXNlTGlua1Byb3BzXG59IGZyb20gXCJAcmVhY3QtYXJpYS91dGlsc1wiO1xuaW1wb3J0IHsgdXNlRm9jdXNhYmxlIH0gZnJvbSBcIkByZWFjdC1hcmlhL2ZvY3VzXCI7XG5pbXBvcnQgeyB1c2VQcmVzcyB9IGZyb20gXCJAcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnNcIjtcbmZ1bmN0aW9uIHVzZUFyaWFMaW5rKHByb3BzLCByZWYpIHtcbiAgbGV0IHtcbiAgICBlbGVtZW50VHlwZSA9IFwiYVwiLFxuICAgIG9uUHJlc3MsXG4gICAgb25QcmVzc1N0YXJ0LFxuICAgIG9uUHJlc3NFbmQsXG4gICAgb25DbGljazogZGVwcmVjYXRlZE9uQ2xpY2ssXG4gICAgaXNEaXNhYmxlZCxcbiAgICAuLi5vdGhlclByb3BzXG4gIH0gPSBwcm9wcztcbiAgbGV0IGxpbmtQcm9wcyA9IHt9O1xuICBpZiAoZWxlbWVudFR5cGUgIT09IFwiYVwiKSB7XG4gICAgbGlua1Byb3BzID0ge1xuICAgICAgcm9sZTogXCJsaW5rXCIsXG4gICAgICB0YWJJbmRleDogIWlzRGlzYWJsZWQgPyAwIDogdm9pZCAwXG4gICAgfTtcbiAgfVxuICBsZXQgeyBmb2N1c2FibGVQcm9wcyB9ID0gdXNlRm9jdXNhYmxlKHByb3BzLCByZWYpO1xuICBsZXQgeyBwcmVzc1Byb3BzLCBpc1ByZXNzZWQgfSA9IHVzZVByZXNzKHsgb25QcmVzcywgb25QcmVzc1N0YXJ0LCBvblByZXNzRW5kLCBpc0Rpc2FibGVkLCByZWYgfSk7XG4gIGxldCBkb21Qcm9wcyA9IGZpbHRlckRPTVByb3BzKG90aGVyUHJvcHMsIHsgbGFiZWxhYmxlOiB0cnVlLCBpc0xpbms6IGVsZW1lbnRUeXBlID09PSBcImFcIiB9KTtcbiAgbGV0IGludGVyYWN0aW9uSGFuZGxlcnMgPSBtZXJnZVByb3BzKGZvY3VzYWJsZVByb3BzLCBwcmVzc1Byb3BzKTtcbiAgbGV0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBsZXQgcm91dGVyTGlua1Byb3BzID0gdXNlTGlua1Byb3BzKHByb3BzKTtcbiAgcmV0dXJuIHtcbiAgICBpc1ByZXNzZWQsXG4gICAgbGlua1Byb3BzOiBtZXJnZVByb3BzKGRvbVByb3BzLCByb3V0ZXJMaW5rUHJvcHMsIHtcbiAgICAgIC4uLmludGVyYWN0aW9uSGFuZGxlcnMsXG4gICAgICAuLi5saW5rUHJvcHMsXG4gICAgICBcImFyaWEtZGlzYWJsZWRcIjogaXNEaXNhYmxlZCB8fCB2b2lkIDAsXG4gICAgICBcImFyaWEtY3VycmVudFwiOiBwcm9wc1tcImFyaWEtY3VycmVudFwiXSxcbiAgICAgIG9uQ2xpY2s6IChlKSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gcHJlc3NQcm9wcy5vbkNsaWNrKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbChwcmVzc1Byb3BzLCBlKTtcbiAgICAgICAgaWYgKGRlcHJlY2F0ZWRPbkNsaWNrKSB7XG4gICAgICAgICAgZGVwcmVjYXRlZE9uQ2xpY2soZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyb3V0ZXIuaXNOYXRpdmUgJiYgZS5jdXJyZW50VGFyZ2V0IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQgJiYgZS5jdXJyZW50VGFyZ2V0LmhyZWYgJiYgIWUuaXNEZWZhdWx0UHJldmVudGVkKCkgJiYgc2hvdWxkQ2xpZW50TmF2aWdhdGUoZS5jdXJyZW50VGFyZ2V0LCBlKSAmJiBwcm9wcy5ocmVmKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHJvdXRlci5vcGVuKGUuY3VycmVudFRhcmdldCwgZSwgcHJvcHMuaHJlZiwgcHJvcHMucm91dGVyT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9O1xufVxuZXhwb3J0IHtcbiAgdXNlQXJpYUxpbmtcbn07XG4iXSwibmFtZXMiOlsiZmlsdGVyRE9NUHJvcHMiLCJtZXJnZVByb3BzIiwidXNlUm91dGVyIiwic2hvdWxkQ2xpZW50TmF2aWdhdGUiLCJ1c2VMaW5rUHJvcHMiLCJ1c2VGb2N1c2FibGUiLCJ1c2VQcmVzcyIsInVzZUFyaWFMaW5rIiwicHJvcHMiLCJyZWYiLCJlbGVtZW50VHlwZSIsIm9uUHJlc3MiLCJvblByZXNzU3RhcnQiLCJvblByZXNzRW5kIiwib25DbGljayIsImRlcHJlY2F0ZWRPbkNsaWNrIiwiaXNEaXNhYmxlZCIsIm90aGVyUHJvcHMiLCJsaW5rUHJvcHMiLCJyb2xlIiwidGFiSW5kZXgiLCJmb2N1c2FibGVQcm9wcyIsInByZXNzUHJvcHMiLCJpc1ByZXNzZWQiLCJkb21Qcm9wcyIsImxhYmVsYWJsZSIsImlzTGluayIsImludGVyYWN0aW9uSGFuZGxlcnMiLCJyb3V0ZXIiLCJyb3V0ZXJMaW5rUHJvcHMiLCJlIiwiX2EiLCJjYWxsIiwiaXNOYXRpdmUiLCJjdXJyZW50VGFyZ2V0IiwiSFRNTEFuY2hvckVsZW1lbnQiLCJocmVmIiwiaXNEZWZhdWx0UHJldmVudGVkIiwicHJldmVudERlZmF1bHQiLCJvcGVuIiwicm91dGVyT3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/.pnpm/@nextui-org+use-aria-link@2.0.19_react@18.3.1/node_modules/@nextui-org/use-aria-link/dist/index.mjs\n");

/***/ })

};
;
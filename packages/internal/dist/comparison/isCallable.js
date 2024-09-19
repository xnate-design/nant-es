'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

// host environment eg. nodejs or browser
const documentAll = typeof document === "object" && document.all;
// IsHTMLDDA-internal-slot and IsLooselyEqual and ToBoolean
const IsHTMLDDA = typeof documentAll == "undefined" && documentAll === "undefined";
// https://tc39.es/ecma262/#sec-iscallable
function isCallable(argument) {
    if (IsHTMLDDA)
        return typeof argument === "function" || argument === documentAll;
    return typeof argument === "function";
}

exports.isCallable = isCallable;

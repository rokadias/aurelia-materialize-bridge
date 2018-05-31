define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getBooleanFromAttributeValue(value) {
        return (value === true || value === "true");
    }
    exports.getBooleanFromAttributeValue = getBooleanFromAttributeValue;
});

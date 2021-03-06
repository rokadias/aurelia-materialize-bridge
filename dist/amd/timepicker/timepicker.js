define(["require", "exports", "tslib", "aurelia-framework", "../common/attributes"], function (require, exports, tslib_1, aurelia_framework_1, attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import {fireEvent} from '../common/events';
    // Materialize doesn't present the full api.
    // See here for full api: https://github.com/weareoutman/clockpicker
    var MdTimePicker = /** @class */ (function () {
        function MdTimePicker(element) {
            this.twelveHour = false;
            this.element = element;
            this.updateFromElement = this.updateFromElement.bind(this);
        }
        MdTimePicker.prototype.bind = function () {
            this.twelveHour = attributes_1.getBooleanFromAttributeValue(this.twelveHour);
        };
        MdTimePicker.prototype.attached = function () {
            var options = {
                twelvehour: this.twelveHour
            };
            $(this.element).pickatime(options);
            this.element.value = this.value;
            $(this.element).on("change", this.updateFromElement);
        };
        MdTimePicker.prototype.detached = function () {
            $(this.element).off("change", this.updateFromElement);
            $(this.element).pickatime("remove");
        };
        MdTimePicker.prototype.updateFromElement = function () {
            this.value = this.element.value;
        };
        MdTimePicker.prototype.valueChanged = function (newValue) {
            this.element.value = newValue;
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Object)
        ], MdTimePicker.prototype, "twelveHour", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            tslib_1.__metadata("design:type", String)
        ], MdTimePicker.prototype, "value", void 0);
        MdTimePicker = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            aurelia_framework_1.customAttribute("md-timepicker"),
            tslib_1.__metadata("design:paramtypes", [Element])
        ], MdTimePicker);
        return MdTimePicker;
    }());
    exports.MdTimePicker = MdTimePicker;
});

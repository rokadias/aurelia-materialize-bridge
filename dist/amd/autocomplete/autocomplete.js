define(["require", "exports", "tslib", "aurelia-framework", "../common/events"], function (require, exports, tslib_1, aurelia_framework_1, events_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdAutoComplete = /** @class */ (function () {
        function MdAutoComplete(element) {
            this.element = element;
            this.input = null;
            this.limit = 20;
            this.minLength = 1;
            this.values = {};
        }
        MdAutoComplete.prototype.attached = function () {
            if (this.element.tagName.toLowerCase() === "input") {
                this.input = this.element;
            }
            else if (this.element.tagName.toLowerCase() === "md-input") {
                this.input = this.element.au.controller.viewModel.input;
            }
            else {
                throw new Error("md-autocomplete must be attached to either an input or md-input element");
            }
            this.refresh();
        };
        MdAutoComplete.prototype.detached = function () {
            // remove .autocomplete-content children
            $(this.input).siblings(".autocomplete-content").off("click");
            $(this.input).siblings(".autocomplete-content").remove();
        };
        MdAutoComplete.prototype.refresh = function () {
            var _this = this;
            this.detached();
            $(this.input).autocomplete({
                data: this.values,
                minLength: this.minLength,
                limit: this.limit,
                onAutocomplete: function () { return events_1.fireEvent(_this.input, "change"); }
            });
            $(this.input).siblings(".autocomplete-content").on("click", function () {
                events_1.fireEvent(_this.input, "change");
            });
        };
        MdAutoComplete.prototype.valuesChanged = function (newValue) {
            this.refresh();
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Number)
        ], MdAutoComplete.prototype, "limit", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Number)
        ], MdAutoComplete.prototype, "minLength", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Object)
        ], MdAutoComplete.prototype, "values", void 0);
        MdAutoComplete = tslib_1.__decorate([
            aurelia_framework_1.customAttribute("md-autocomplete"),
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], MdAutoComplete);
        return MdAutoComplete;
    }());
    exports.MdAutoComplete = MdAutoComplete;
});

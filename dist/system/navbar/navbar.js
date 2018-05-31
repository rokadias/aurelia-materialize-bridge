System.register(["tslib", "aurelia-framework", "../common/attributes", "../common/attributeManager"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, attributes_1, attributeManager_1, MdNavbar;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            },
            function (attributeManager_1_1) {
                attributeManager_1 = attributeManager_1_1;
            }
        ],
        execute: function () {
            MdNavbar = /** @class */ (function () {
                function MdNavbar(element) {
                    this.element = element;
                }
                MdNavbar.prototype.attached = function () {
                    this.fixedAttributeManager = new attributeManager_1.AttributeManager(this.fixedAnchor);
                    this.navAttributeManager = new attributeManager_1.AttributeManager(this.nav);
                    if (attributes_1.getBooleanFromAttributeValue(this.mdFixed)) {
                        this.fixedAttributeManager.addClasses("navbar-fixed");
                    }
                    if (attributes_1.getBooleanFromAttributeValue(this.mdAutoHeight)) {
                        this.navAttributeManager.addClasses("md-auto-height");
                    }
                    if (attributes_1.getBooleanFromAttributeValue(this.mdExtended)) {
                        this.navAttributeManager.addClasses("nav-extended");
                    }
                };
                MdNavbar.prototype.detached = function () {
                    if (attributes_1.getBooleanFromAttributeValue(this.mdFixed)) {
                        this.fixedAttributeManager.removeClasses("navbar-fixed");
                    }
                    if (attributes_1.getBooleanFromAttributeValue(this.mdAutoHeight)) {
                        this.navAttributeManager.removeClasses("md-auto-height");
                    }
                    if (attributes_1.getBooleanFromAttributeValue(this.mdExtended)) {
                        this.navAttributeManager.removeClasses("nav-extended");
                    }
                };
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Object)
                ], MdNavbar.prototype, "mdExtended", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Object)
                ], MdNavbar.prototype, "mdFixed", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Object)
                ], MdNavbar.prototype, "mdAutoHeight", void 0);
                MdNavbar = tslib_1.__decorate([
                    aurelia_framework_1.customElement("md-navbar"),
                    aurelia_framework_1.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdNavbar);
                return MdNavbar;
            }());
            exports_1("MdNavbar", MdNavbar);
        }
    };
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatExecutor = void 0;
var FormatExecutor = /** @class */ (function () {
    function FormatExecutor(formatter) {
        this.formatter = formatter;
    }
    FormatExecutor.prototype.PrintObject = function (object) {
        var objectFormatted = this.formatter.Format(object);
        console.log("Object formatted: ".concat(objectFormatted, " from => ").concat(object));
    };
    return FormatExecutor;
}());
exports.FormatExecutor = FormatExecutor;

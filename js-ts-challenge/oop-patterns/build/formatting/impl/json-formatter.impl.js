"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFormatter = void 0;
var JsonFormatter = /** @class */ (function () {
    function JsonFormatter() {
    }
    JsonFormatter.prototype.Format = function (value) {
        return JSON.stringify(value);
    };
    return JsonFormatter;
}());
exports.JsonFormatter = JsonFormatter;

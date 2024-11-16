"use strict";

var _partial2 = _interopRequireDefault(require("lodash/fp/partial.js"));

var _toUpper2 = _interopRequireDefault(require("lodash/toUpper.js"));

var _round2 = _interopRequireDefault(require("lodash/round.js"));

var _isString2 = _interopRequireDefault(require("lodash/isString.js"));

var _isNumber2 = _interopRequireDefault(require("lodash/isNumber.js"));

var _cond2 = _interopRequireDefault(require("lodash/cond.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _cond2.default)([[_isNumber2.default, _round2.default], [_isString2.default, _toUpper2.default]])(1.8);
(0, _partial2.default)(func)([_partial.placeholder, 2])(1);

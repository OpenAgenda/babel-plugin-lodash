"use strict";

var _reject2 = _interopRequireDefault(require("lodash-es/reject.js"));

var _take2 = _interopRequireDefault(require("lodash-es/take.js"));

var _add2 = _interopRequireDefault(require("lodash-es/add.js"));

var _map2 = _interopRequireDefault(require("lodash-es/map.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const result = (0, _map2.default)([], n => (0, _add2.default)(1, n));
(0, _take2.default)((0, _reject2.default)(result), 1);

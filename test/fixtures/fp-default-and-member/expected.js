"use strict";

var _reject2 = _interopRequireDefault(require("lodash/fp/reject.js"));

var _add2 = _interopRequireDefault(require("lodash/fp/add.js"));

var _take2 = _interopRequireDefault(require("lodash/fp/take.js"));

var _map2 = _interopRequireDefault(require("lodash/fp/map.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapper = (0, _map2.default)((0, _add2.default)(1));
const result = mapper([1, 2, 3]);
(0, _take2.default)(1, (0, _reject2.default)(Boolean, result));

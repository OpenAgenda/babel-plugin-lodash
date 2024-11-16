"use strict";

var _reject3 = _interopRequireDefault(require("lodash/fp/reject.js"));

var _add3 = _interopRequireDefault(require("lodash/fp/add.js"));

var _take3 = _interopRequireDefault(require("lodash/fp/take.js"));

var _map3 = _interopRequireDefault(require("lodash/fp/map.js"));

var _reject4 = _interopRequireDefault(require("lodash/reject.js"));

var _add4 = _interopRequireDefault(require("lodash/add.js"));

var _take4 = _interopRequireDefault(require("lodash/take.js"));

var _map4 = _interopRequireDefault(require("lodash/map.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapper = (0, _map3.default)((0, _add3.default)(1));
const result = mapper([]);
(0, _take3.default)(1, (0, _reject3.default)(Boolean, result));
const result2 = (0, _map4.default)([], n => (0, _add4.default)(1, n));
(0, _take4.default)((0, _reject4.default)(result2), 1);

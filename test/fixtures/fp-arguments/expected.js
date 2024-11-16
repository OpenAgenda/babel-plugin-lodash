"use strict";

var _map2 = _interopRequireDefault(require("lodash/fp/map.js"));

var _head2 = _interopRequireDefault(require("lodash/fp/head.js"));

var _compose2 = _interopRequireDefault(require("lodash/fp/compose.js"));

var _capitalize2 = _interopRequireDefault(require("lodash/fp/capitalize.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _compose2.default)((0, _map2.default)(_capitalize2.default), _head2.default)([]);

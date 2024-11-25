"use strict";

var _reject3 = _interopRequireDefault(require("ramda/src/reject.js"));

var _values2 = _interopRequireDefault(require("ramda/src/values.js"));

var _add3 = _interopRequireDefault(require("ramda/src/add.js"));

var _take3 = _interopRequireDefault(require("ramda/src/take.js"));

var _map3 = _interopRequireDefault(require("ramda/src/map.js"));

var _take4 = _interopRequireDefault(require("lodash-bound/take.js"));

var _reject4 = _interopRequireDefault(require("lodash-bound/reject.js"));

var _map4 = _interopRequireDefault(require("lodash-bound/map.js"));

var _add4 = _interopRequireDefault(require("lodash-bound/add.js"));

var _concat2 = _interopRequireDefault(require("async/concat.js"));

var _fs = _interopRequireDefault(require("fs"));

var _context2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const object = {
  'a': -1,
  'b': 0,
  'c': 1
};
(0, _concat2.default)(['a', 'b', 'c'], _fs.default.readdir, (error, files) => console.log(files));

const result = _map4.default.call(object, n => {
  var _context;

  return (_context = 1, _add4.default).call(_context, n);
});

(_context2 = _reject4.default.call(result), _take4.default).call(_context2, 1);
const mapper = (0, _map3.default)((0, _add3.default)(1));
const result2 = mapper(object);
(0, _take3.default)(1, (0, _values2.default)((0, _reject3.default)(Boolean, result2)));

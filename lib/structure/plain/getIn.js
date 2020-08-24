"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash.topath"));

var getIn = function getIn(state, field) {
  if (!state) {
    return state;
  }

  var path = (0, _lodash["default"])(field);
  var length = path.length;

  if (!length) {
    return undefined;
  }

  var result = state;

  for (var i = 0; i < length && result; ++i) {
    result = result[path[i]];
  }

  return result;
};

var _default = getIn;
exports["default"] = _default;
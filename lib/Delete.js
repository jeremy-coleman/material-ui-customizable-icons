"use strict";

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __assign = undefined && undefined.__assign || _assign2.default || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
/* tslint:disable:max-line-length */
var React = require("react");
var SvgIcon_1 = require("./SvgIcon");

var Delete = function (_SvgIcon_1$default) {
    (0, _inherits3.default)(Delete, _SvgIcon_1$default);

    function Delete() {
        (0, _classCallCheck3.default)(this, Delete);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Delete.__proto__ || (0, _getPrototypeOf2.default)(Delete)).apply(this, arguments));

        _this.displayName = 'Delete';
        return _this;
    }

    (0, _createClass3.default)(Delete, [{
        key: "group",
        value: function group(style) {
            return React.createElement("g", null, React.createElement("path", { d: "M 4 8, L 4 21, A 2 2, 0, 0, 0, 6 23, L 19 23, A 2 2, 0, 0, 0, 21 21, L 21 8, L 4 8", stroke: style.color, fill: style.fill, strokeWidth: "0" }), React.createElement("path", { d: "M 8 11, L 17 20", stroke: style.color, fill: "transparent", strokeWidth: "3" }), React.createElement("path", { d: "M 8 20, L 17 11", stroke: style.color, fill: "transparent", strokeWidth: "3" }), React.createElement("path", { d: "M 2 4, L 2 6, L 23 6, L 23 4, L 18 4, L 16 2, L 9 2, L 7 4, L 2 4", stroke: style.color, fill: style.fill, strokeWidth: "0" }));
        }
    }, {
        key: "render",
        value: function render() {
            var style = __assign({}, this.styles, this.context.muiTheme.icon, { fill: this.context.muiTheme.icon.color }, this.props.style);
            return this.svg(this.group(style), this.props.className, style, this.props.viewBox, this.props.transform);
        }
    }]);
    return Delete;
}(SvgIcon_1.default);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Delete;
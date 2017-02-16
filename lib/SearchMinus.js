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

var SearchMinus = function (_SvgIcon_1$default) {
    (0, _inherits3.default)(SearchMinus, _SvgIcon_1$default);

    function SearchMinus() {
        (0, _classCallCheck3.default)(this, SearchMinus);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SearchMinus.__proto__ || (0, _getPrototypeOf2.default)(SearchMinus)).apply(this, arguments));

        _this.displayName = 'SearchMinus';
        return _this;
    }

    (0, _createClass3.default)(SearchMinus, [{
        key: "group",
        value: function group(style) {
            return React.createElement("g", null, React.createElement("path", { d: "M 21 23, A 1 1, 0, 0, 0, 23 21, L 17 15, L 15 17, L 21 23", stroke: style.color, fill: style.fill, strokeWidth: "0" }), React.createElement("path", { d: "M 5 5, A 1 1, 0, 0, 0, 17 17, A 1 1, 0, 0, 0, 5 5", stroke: style.fill, fill: "transparent", strokeWidth: "3" }), React.createElement("path", { d: "M 5 11, L 17 11", stroke: style.fill, fill: "transparent", strokeWidth: "2" }));
        }
    }, {
        key: "render",
        value: function render() {
            var style = __assign({}, this.styles, this.context.muiTheme.icon, { fill: this.context.muiTheme.icon.color }, this.props.style);
            return this.svg(this.group(style), this.props.className, style, this.props.viewBox, this.props.transform);
        }
    }]);
    return SearchMinus;
}(SvgIcon_1.default);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchMinus;
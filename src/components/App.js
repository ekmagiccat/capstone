"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = __importDefault(require("./Header"));
const counter_1 = require("../redux/counter");
function App() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement(counter_1.Counter, null)));
}
exports.default = App;

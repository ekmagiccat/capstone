"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const chemex_jpg_1 = __importDefault(require("../src/img/chemex.jpg"));
function CoffeePot() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("img", { src: chemex_jpg_1.default, alt: "chemex pot" })));
}
exports.default = CoffeePot;

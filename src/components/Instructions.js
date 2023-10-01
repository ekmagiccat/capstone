"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Instructions = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Instructions:"),
        react_1.default.createElement("p", null,
            "What you need:",
            react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null, "8-CUP CHEMEX CHEMEX"),
                "FILTER GRINDER 42G (6 TABLESPOONS) OF COFFEE HOT WATER JUST OFF THE BOIL (ABOUT 205\u00B0F) SCALE TIMER STIR STICK MUG"))));
};
exports.default = Instructions;

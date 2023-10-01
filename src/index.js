"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
require("./index.css");
const App_1 = __importDefault(require("./components/App"));
const store_1 = require("./redux/store");
const react_redux_1 = require("react-redux");
require("bootstrap/dist/css/bootstrap.css");
react_dom_1.default.render(react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },
    react_1.default.createElement(App_1.default, null)), document.getElementById("root"));

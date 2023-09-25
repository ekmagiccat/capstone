"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import { ReactNode } from "react";
// interface Props {
//   children: ReactNode;
// }
// const Header = ({ children }: Props) => {
//   return <div className="alert alert-primary">{children}</div>;
// };
function Header() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", { className: "display-1" }, "Welcome!")));
}
exports.default = Header;

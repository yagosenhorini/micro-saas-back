"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = process.env.JWT_SECRET || "secret_key";
const login = (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "password") {
        const token = jsonwebtoken_1.default.sign({ username }, secretKey, { expiresIn: "1h" }); // Token expira em 1 hora
        return res.status(200).json({ token });
    }
    res.status(401).json({ error: "Credenciais inválidas" });
};
exports.login = login;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const emailRoutes_1 = __importDefault(require("./routes/emailRoutes"));
const authRoute_1 = __importDefault(require("./routes/authRoute"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(body_parser_1.default.json());
// Rotas
app.use("/auth", authRoute_1.default);
app.use("/emails", emailRoutes_1.default); // Rotas de gerenciamento de e-mails
app.get("/", (req, res) => {
    res.status(200).json({ message: "Bem-vindo ao Micro-SaaS de Email Marketing!" });
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Ocorreu um erro interno no servidor." });
});
// Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

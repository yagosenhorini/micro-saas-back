"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmails = exports.sendEmailController = void 0;
const emailService_1 = require("../services/emailService");
const sendEmailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { to, subject, body } = req.body;
    if (!to || !subject || !body) {
        return res.status(400).json({ error: "Parâmetros inválidos. 'to', 'subject' e 'body' são obrigatórios." });
    }
    try {
        const emailInfo = yield (0, emailService_1.sendEmail)(to, subject, body);
        res.status(200).json({ message: "Email enviado com sucesso", emailInfo });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.sendEmailController = sendEmailController;
const getEmails = (req, res) => {
    const emails = [
        { id: 1, to: "user1@example.com", subject: "Olá", body: "Mensagem 1" },
        { id: 2, to: "user2@example.com", subject: "Boas-vindas", body: "Mensagem 2" },
    ];
    res.status(200).json({ emails });
};
exports.getEmails = getEmails;

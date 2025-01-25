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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendEmail = (to, subject, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Configurar o transporte
        const transporter = nodemailer_1.default.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com", // Exemplo: Gmail
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false, // true para 465, false para outras portas
            auth: {
                user: process.env.SMTP_USER || "yagosenhorini@gmail.com", // Seu email
                pass: process.env.SMTP_PASS || "hnyq bxdb iaiu mkuc", // Sua senha ou app password
            },
        });
        // Opções do e-mail
        const mailOptions = {
            from: process.env.SMTP_FROM || '"Yago Senhorini" <yagosenhorini@gmail.com>', // Remetente
            to, // Destinatário
            subject, // Assunto
            text: body, // Corpo do email em texto simples
            html: `<p>${body}</p>`, // Corpo do email em HTML
        };
        const info = yield transporter.sendMail(mailOptions);
        console.log("E-mail enviado: %s", info.messageId);
        return info;
    }
    catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        throw new Error("Erro ao enviar o e-mail");
    }
});
exports.sendEmail = sendEmail;

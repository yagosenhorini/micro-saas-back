import nodemailer from "nodemailer";

export const sendEmail = async (to: string, subject: string, body: string) => {
	try {
		// Configurar o transporte
		const transporter = nodemailer.createTransport({
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

		const info = await transporter.sendMail(mailOptions);
		console.log("E-mail enviado: %s", info.messageId);

		return info;
	} catch (error) {
		console.error("Erro ao enviar e-mail:", error);
		throw new Error("Erro ao enviar o e-mail");
	}
};

import nodemailer from "nodemailer";

export const sendEmail = async (to: string, subject: string, body: string) => {
	try {
		// Configurar o transporte
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST, // Exemplo: Gmail
			port: Number(process.env.SMTP_PORT),
			secure: false, // true para 465, false para outras portas
			auth: {
				user: process.env.SMTP_USER, // Seu email
				pass: process.env.SMTP_PASS, // Sua senha ou app password
			},
		});

		// Opções do e-mail
		const mailOptions = {
			from: process.env.SMTP_FROM, // Remetente
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

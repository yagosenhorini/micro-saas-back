import { sendEmail } from "../services/emailService";

export const sendEmailController = async (req: any, res: any) => {
	const { to, subject, body } = req.body;

	if (!to || !subject || !body) {
		return res.status(400).json({ error: "Parâmetros inválidos. 'to', 'subject' e 'body' são obrigatórios." });
	}

	try {
		const emailInfo = await sendEmail(to, subject, body);
		res.status(200).json({ message: "Email enviado com sucesso", emailInfo });
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
};

export const getEmails = (req: any, res: any) => {
	const emails = [
		{ id: 1, to: "user1@example.com", subject: "Olá", body: "Mensagem 1" },
		{ id: 2, to: "user2@example.com", subject: "Boas-vindas", body: "Mensagem 2" },
	];

	res.status(200).json({ emails });
};

import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET || "secret_key";

export const login = (req: any, res: any) => {
	const { username, password } = req.body;

	if (username === "admin" && password === "password") {
		const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" }); // Token expira em 1 hora
		return res.status(200).json({ token });
	}

	res.status(401).json({ error: "Credenciais inválidas" });
};

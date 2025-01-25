import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET || "secret_key";

export const authenticateToken = (req: any, res: any, next: NextFunction) => {
	const authHeader = req.headers.authorization;

	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		return res.status(401).json({ error: "Token não fornecido ou inválido" });
	}

	const token = authHeader.split(" ")[1];

	try {
		const decoded = jwt.verify(token, secretKey);
		req.user = decoded;
		next();
	} catch (error) {
		res.status(403).json({ error: "Token inválido ou expirado" });
	}
};

import express from "express";
import bodyParser from "body-parser";
import emailRoutes from "./routes/emailRoutes";
import authRoute from "./routes/authRoute";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Rotas
app.use("/auth", authRoute);
app.use("/emails", emailRoutes); // Rotas de gerenciamento de e-mails

app.get("/", (req, res) => {
	res.status(200).json({ message: "Bem-vindo ao Micro-SaaS de Email Marketing!" });
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
	console.error(err.stack);
	res.status(500).json({ error: "Ocorreu um erro interno no servidor." });
});

// Servidor
app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});

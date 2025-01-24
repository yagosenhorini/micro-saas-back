import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();  // Carrega variáveis de ambiente do .env

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Exemplo de rota
app.get('/', (req: Request, res: Response) => {
	res.send('Micro-SaaS de Automação de Marketing!');
});

// Inicia o servidor
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`);
});

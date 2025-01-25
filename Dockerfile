# Etapa 1: Construção
FROM node:18-alpine AS builder

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar arquivos de dependências
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm install

# Copiar os arquivos do projeto
COPY tsconfig.json ./
COPY src ./src

# Compilar TypeScript para JavaScript
RUN npm run build

# Etapa 2: Execução
FROM node:18-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar dependências instaladas e o build da etapa de construção
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/dist ./dist

# Instalar apenas as dependências de produção
RUN npm install --production

# Variáveis de ambiente (opcional)
ENV NODE_ENV=production
ENV PORT=3000

# Porta exposta
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "dist/index.js"]

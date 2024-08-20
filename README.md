🎬 Harry Potter Quotes API
Uma API para gerenciar citações dos filmes de Harry Potter. 
Com funcionalidades para CRUD de citações, relatórios de usuários e integração com o MongoDB.

🚀 Início Rápido
Siga estes passos para configurar e rodar a API localmente.

Pré-requisitos
Node.js (versão 20 ou superior)
MongoDB (local ou MongoDB Atlas)
📦 Instalação
Clone o repositório:
```bash
git clone https://github.com/GiovaneVerbinnen/hp-quotes.git
```
Navegue até o diretório do projeto:
```bash
cd hp-quotes
```
Configure as variáveis de ambiente. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:
```bash
PORT=3000
HOST=localhost
MONGO_URI=mongodb://localhost:27017/nome-do-banco
```
Rode o servidor:
```bash
npm start
```
> O servidor estará disponível em http://localhost:3000.


📚 Endpoints
🌟 Citações
GET /quotes - Retorna todas as citações.
POST /quotes - Adiciona uma nova citação.
DELETE /quotes/:id - Remove uma citação pelo ID.
PUT /quotes/:id - Atualiza uma citação pelo ID.

📊 Relatórios
GET /report - Retorna um relatório com o total de usuários e seus dados.

🔄 Seed de Dados
GET /install - Popula o banco de dados com dados iniciais.
(Certifique-se de que não há dados importantes no banco de dados antes de executar este comando.)

🧩 Swagger Documentation
Para visualizar a documentação Swagger da API, acesse http://localhost:3000/docs após iniciar o servidor.

📜 Como Contribuir
Faça um fork do repositório.
Crie uma branch para suas alterações (git checkout -b feature/novo-recurso).
Faça as alterações e commit (git commit -am 'Adiciona novo recurso').
Faça um push para a branch (git push origin feature/novo-recurso).
Crie um Pull Request.
🔧 Ferramentas e Tecnologias
- Node.js
- Express
- Mongoose
- MongoDB
- Swagger UI
- 
📝 Licença
Distribuído sob a licença GNU 2.0. Veja LICENSE para mais informações.

import swaggerJsdoc from 'swagger-jsdoc';
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API documentation for my project',
    },
    servers: [
      {
        url: `http://${HOST}:${PORT}`, // URL do seu servidor
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Caminho para os arquivos que contêm as rotas da API
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;

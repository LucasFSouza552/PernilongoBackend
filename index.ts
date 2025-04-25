import cors from "cors";
import express from "express";
import swaggerUi from 'swagger-ui-express';
import router from './src/router/routes';
import swaggerSpec from './swagger';
const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middlewares
app.use(express.json());
app.use(cors());

// Rotas
app.use(router);

// Porta
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Pernilongo server running at http://localhost:${PORT}`);
  console.log("Server is running...");
});

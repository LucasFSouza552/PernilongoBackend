import express from "express";
import cors from "cors";
import router from './src/router/routes';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger_output.json';
const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


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

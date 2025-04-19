import express from "express";
import cors from "cors";
import router from './src/router/routes'
const app = express();

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

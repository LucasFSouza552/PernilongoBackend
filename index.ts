import express from "express";
import cors from "cors";
<<<<<<< HEAD
import router from './src/router/routes'
=======
import router from "./src/router/routes";

>>>>>>> 091ae7b8e9274db34c449c74592fd8fe6f9a553b
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

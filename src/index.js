import express from "express";
import logMiddleware from "./middleware/logger.js";
import { createUserService, getAllUsersService, getUserByIdService, updateUserService } from "./service/user.service.js";
import { deleteUserService } from "./service/user.service.js";

import mongoose from "mongoose";


const app = express();

const port = 3000;

app.use(express.json());
app.use(logMiddleware);

mongoose.connect("mongodb+srv://luiz_henrique_93:luiz123@cluster0.1wqfuzi.mongodb.net/DbLions"); // mudar para sua URI de conexão com o MongoDB

mongoose.connection.on("error", (error) => {
  console.error("Erro de conexão com o MongoDB:", error);
});

mongoose.connection.once("connected", () => {
  console.log("Conectado ao MongoDB");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.post("/contatos", async (req, res) => {
  try {
    console.log(" Dados do usuário: " + req.body);
    const newUser = await createUserService(req.body);
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});






app.get("/contatos", async (req, res) => {
  try {
    const users = await getAllUsersService();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
); 

app.put("/contatos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, telefones } = req.body;
    const updatedUser = await updateUserService(id, name, email, telefones);
    if (!updatedUser) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
);


app.delete("/contatos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUserService(id);
    if (!deletedUser) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    return res.status(200).json(deletedUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
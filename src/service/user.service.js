import { updateUser } from "../repository/update/user.repository.update.js";
import { createUser } from "../repository/write/user.repository.write.js";
import { getAllUsers, getUserById } from "../repository/read/user.repository.read.js";
import { deleteUser } from "../repository/delete/user.repository.delete.js";

export async function createUserService(user) {
  try {
    console.log(" Dados do usuário no service: " + user);
    if (!user.name || !user.email || !user.telefones) {
      throw new Error("Dados inválidos");
    }
    if (user.telefones.length === 0) {
      throw new Error("Telefones inválidos");
    }

    const newUser = await createUser(user);
    return newUser;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
}

export async function getAllUsersService() {
  // Implementação para obter todos os usuários

  try {
    const users = await getAllUsers();
    return users;
  }
  catch (error) {
    console.error("Erro ao obter usuários:", error);
    throw error;
  }
}

export async function getUserByIdService(id) {
  // Implementação para obter um usuário por ID

  try {
    if (!id) {
      throw new Error("ID do usuário é obrigatório");
    }
    const user = await getUserById(id);
    return user;
  }
  catch (error) {
    console.error("Erro ao buscar um usuário:", error);
    throw error;
  }
}

export async function updateUserService(id, name, email, telefones) {
  // Implementação para atualizar um usuário

  try {
    if (!id) {
      throw new Error("ID do usuário é obrigatório");
    }
    if (!name || !email || !telefones) {
      throw new Error("Dados inválidos");
    }
    if (telefones.length === 0) {
      throw new Error("Telefones inválidos");
    }

    const updatedUser = await updateUser(id, name, email, telefones);
    return updatedUser;
  }
  catch (error) {
    console.error("Erro ao atualizar um usuário:", error);
    throw error;
  }
}


export async function deleteUserService(id) {
  // Implementação para deletar um usuário

  try {
    if (!id) {
      throw new Error("ID do usuário é obrigatório");
    }
    const deletedUser = await deleteUser(id);
    return deletedUser;
  }
  catch (error) {
    console.error("Erro ao deletar um usuário:", error);
    throw error;
  }
}




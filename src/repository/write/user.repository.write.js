import MUser from "../../db/user.schema.js";

export async function createUser(user) {
    console.log(" Dados do usuário no repository: " + user);
    const newUser = await MUser.insertOne(user);
    return newUser;
}


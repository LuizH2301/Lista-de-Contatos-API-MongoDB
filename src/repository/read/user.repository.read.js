import MUser from "../../db/user.schema.js";

export async function getAllUsers() {
    const users = await MUser.find();
    console.log("=== debug users");
    console.table(users);
    return users;
}

export async function getUserById(id) {
    const user = await MUser.findById(id);
    return user;
}


import MUser from "../../db/user.schema.js";

export async function updateUser(id, name, email, telefones) {
    const updateUser = await MUser.findByIdAndUpdate(
        id, 
        {name, email, telefones},
        { new: true, runValidators: true }
    );



    return updateUser;
    }

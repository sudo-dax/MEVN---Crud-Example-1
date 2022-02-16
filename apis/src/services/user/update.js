import {User} from "../../models/user";

export const deleteById = async (id) => User.findByIdAndDelete(id)
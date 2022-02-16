import { User } from "../../models/user";

export const byId = async (id) => User.findByIdAndDelete(id)
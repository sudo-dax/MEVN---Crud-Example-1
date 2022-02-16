import { User } from "../../models/user";

export const create = async (user) => User.create(user) 
import {User} from "../../models/user"

export const byId = async (id, user) => await User.findByIdAndUpdate(id, user)

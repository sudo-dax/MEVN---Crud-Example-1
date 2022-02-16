import { User } from "../../models/user"

export const all = async () => {
    const user = await User.find({})
    console.log('Daxa', user)
    return user
}
export const byId = async (id) => await User.findById(id)

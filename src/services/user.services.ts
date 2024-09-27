import { createUser, findUserByEmail } from "../repositories/user.repository";

interface createUserDTO {
    name: string
    email: string
    password: string
}

export const createUserService = async (data: createUserDTO) => {
    const user = await findUserByEmail(data.email)

    if (user) throw new Error("Email já cadastrado!")

    return await createUser(data)
}
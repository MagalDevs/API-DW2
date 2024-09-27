import user from "../entities/user.entitiy";

interface createUserDTO {
    name: string
    email: string
    password: string
}

export const createUser = async (data: createUserDTO) => {
    return user.create({ data })
}

export const findUserByEmail = async (email: string) => {
    return user.findFirst({ where: { email } })
}
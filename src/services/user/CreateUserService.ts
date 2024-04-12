import prismaClient from "../../prisma"
import { hash } from "bcryptjs"

interface UserRequest {
    name: string,
    email: string,
    password: string,
}


class CreateUserService {
    async execute({ name, email, password }: UserRequest) {
        if (!email) {
            throw new Error("Email incorrect!")
        }

        //verifica se ja tem cadastrado
        const userAlreadyExist = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExist) {
            throw new Error("Email already exists!!")
        }

        //create user
        const passwordHash = await hash(password,8)

        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: passwordHash
            },
            select:{
                id:true,
                email:true,
                name:true
            }
        })


        return user;
    }
}

export { CreateUserService }
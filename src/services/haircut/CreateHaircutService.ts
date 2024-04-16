import prismaClient from "../../prisma";

interface HaircutRequest {
    user_id: string,
    name: string,
    price: number
}

class CreateHaircutService {
    async execute({ user_id, name, price }: HaircutRequest) {
        if (!name || !price) {
            throw new Error('Error')
        }

        //verifica quantos modelo tem cadastrados
        const myHaircuts = await prismaClient.haircut.count({
            where: {
                user_id: user_id
            }
        })

        const user = await prismaClient.user.findFirst({
            where:{
                id : user_id
            },
            include:{
                subscriptions:true
            }
        })

        //validacao verifica se premium ou não e verifica limites 
        if(myHaircuts >= 5 && user?.subscriptions?.status !== 'active'){
            throw new Error('Limite atingido, assine o premium!')
        }

        const haircut = prismaClient.haircut.create({
            data: {
                user_id: user_id,
                name: name,
                price: price
            }
        })

        return haircut;
    }
}
export { CreateHaircutService }
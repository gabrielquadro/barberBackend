import prismaClient from "../../prisma"

interface HaircutRequest {
    user_id: string;
    haircut_id: string;
    name: string;
    price: number;
    status: boolean | string;
}

class UpdateHaircutService {
    async execute({ user_id, status, haircut_id, name, price }: HaircutRequest) {
        const existingHaircut = await prismaClient.haircut.findUnique({
            where: {
                id: haircut_id,
            },
        });

        if (!existingHaircut) {
            throw new Error("Haircut not found");
        }


        const updatedHaircut = await prismaClient.haircut.update({
            where: {
                id: haircut_id,
            },
            data: {
                name: name,
                price: price,
                status: status === true ? true : false
            }
        });

        return updatedHaircut;

    }
}

export { UpdateHaircutService }
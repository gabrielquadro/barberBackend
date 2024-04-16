import prismaClient from "../../prisma"

interface HaircutRequest {
    haircut_id: string;
}

class DeleteHaircutService {
    async execute({ haircut_id }: HaircutRequest) {
        const existingHaircut = await prismaClient.haircut.findUnique({
            where: {
                id: haircut_id,
            },
        });

        if (!existingHaircut) {
            throw new Error("Haircut not found");
        }


        const deleteHaircut = await prismaClient.haircut.delete({
            where: {
                id: haircut_id,
            }
        });

        return deleteHaircut;

    }
}

export { DeleteHaircutService }
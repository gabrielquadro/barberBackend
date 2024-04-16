import prismaClient from "../../prisma";

interface Detailrequest {
    haircut_id: string,
}

class DetailHaircutService {
    async execute({ haircut_id }: Detailrequest) {

        const haircut = await prismaClient.haircut.findFirst({
            where: {
                id: haircut_id
            },
        })

        return { haircut }
    }
}

export { DetailHaircutService }
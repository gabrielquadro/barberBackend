import prismaClient from "../../prisma";

class ListScheduleService {
    async execute(user_id: string) {

        const schedules = await prismaClient.service.findMany({
            where: {
                user_id: user_id
            },
            select: {
                id: true,
                customer: true,
                haircut: true,
            }
        })

        return { schedules }
    }
}

export { ListScheduleService }
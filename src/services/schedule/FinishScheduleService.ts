import prismaClient from "../../prisma";

interface FinishScheduleRequest {
    schedule_id: string,
    user_id: string
}

class FinishScheduleService {
    async execute({ schedule_id, user_id }: FinishScheduleRequest) {

        if (schedule_id === '' || user_id === '') {
            throw new Error('Error!')
        }

        try {
            const belongsToUser = await prismaClient.service.findFirst({
                where: {
                    id: schedule_id,
                    user_id: user_id
                }
            })

            if (!belongsToUser) {
                throw new Error('Not authorized!')
            }


            await prismaClient.service.delete({
                where: {
                    id: schedule_id
                }
            })

            return { message: 'Deletado com sucesso' }
        } catch (err) {
            console.log(err)
            throw new Error('Error!')
        }


    }
}

export { FinishScheduleService }
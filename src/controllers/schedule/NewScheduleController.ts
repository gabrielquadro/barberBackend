import { Request, Response } from "express";
import { NewScheduleService } from "../../services/schedule/NewScheduleService";

class NewScheduleController {
    async handle(request: Request, response: Response) {
        const { customer, haircut_id } = request.body;
        const user_id = request.user_id;
        const newScheduleService = new NewScheduleService();

        const schedule = await newScheduleService.execute({
            user_id,
            haircut_id,
            customer
        })

        return response.json(schedule)
    }
}

export { NewScheduleController }
import { Request, Response } from "express";
import { ListScheduleService } from "../../services/schedule/ListScheduleService";

class ListScheduleController {
    async handle(request: Request, response: Response) {
        const user_id = request.user_id;
        
        const listHaircutsService = new ListScheduleService();

        const list = await listHaircutsService.execute(user_id);

        return response.json(list);
    }
}

export { ListScheduleController }
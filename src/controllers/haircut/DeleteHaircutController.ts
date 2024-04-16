import { Request, Response } from "express";
import { DeleteHaircutService } from "../../services/haircut/DeleteHaircutService";

class DeleteHaircutController {
    async handle(request: Request, response: Response) {
        const haircut_id = request.query.haircut_id as string; // Acessa diretamente o haircut_id dos parâmetros da consulta

        const deleteHaircutService = new DeleteHaircutService();
        
        try {
            const deletedHaircut = await deleteHaircutService.execute({
                haircut_id,
            });
            
            return response.json(deletedHaircut);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}

export { DeleteHaircutController };
import { Request,Response } from "express";
import { DeleteAchievementsService } from "../../Service/Achiviements/DeleteAchievementsService";

class DeleteAchievementsController {
    async handle(request: Request, response: Response){
        const deleteAchievementsService = new DeleteAchievementsService();
        const id = request.params.id;
        console.log("delete")
        const achiviements = await deleteAchievementsService.execute({id});

        return response.json(achiviements)
    }
}

export {DeleteAchievementsController}
import { Request, Response } from "express";
import { UpdateAchievements } from "../../Service/Achiviements/UpdateAchievementsService";

class UpdateAchievementsController {
    async handle(request: Request, response:Response){
        const {id,conquista, user} = request.body;
        const updateAchievementsService =  new UpdateAchievements();
        const achiviements = await updateAchievementsService.execute({
            id,
            conquista,
            user,
        });
        return response.json(achiviements);
    }
}

export { UpdateAchievementsController }
import { Request, Response } from "express";
import { CreateAchievements } from "../../Service/Achiviements/CreateAchievementsService";

class CreateAchievementsController {
    async handle (request:Request, response:Response){
        const {conquista, user} = request.body;
        const createAchievements = new CreateAchievements();
        const achievements = await createAchievements.execute({
            conquista,
            user
        });
        return response.json({achievements});
    }
}

export { CreateAchievementsController }
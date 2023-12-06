import { Request, Response } from "express";
import { ListAchievementsService } from "../../Service/Achiviements/ListAchievementsService";

class ListAchievementsController {
    async handle(request: Request, response: Response) {
        const listAchievementsService = new ListAchievementsService();

        const feed = await listAchievementsService.execute();

        return response.json(feed);
    }

    async handleOne(request: Request, response: Response) {
    
        const listAchievementsService = new ListAchievementsService();
        const id= request.params.id;
        console.log(id);
        const achievements = await listAchievementsService.load(id);
    
        return response.json(achievements);
    
      }
}

export { ListAchievementsController }
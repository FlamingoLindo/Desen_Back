import { Request, Response } from "express";
import { DeleteFeedService } from "../../Service/Feed/DeleteFeedService";

class DeleteFeedController {
    async handle(request: Request, response: Response) {
        const deleteFeedService = new DeleteFeedService();
        const id = request.params.id;
        const feed = await deleteFeedService.execute({id});
         
        return response.json(feed)
    }
}

export { DeleteFeedController }
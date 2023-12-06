import { Request, Response } from "express";
import { ListFeedService } from "../../Service/Feed/ListFeedService";

class ListFeedController {
    async handle(request: Request, response: Response) {
        const listFeedService = new ListFeedService();

        const feed = await listFeedService.execute();

        return response.json(feed);
    }

    async handleOne(request: Request, response: Response) {
    
        const listFeedService = new ListFeedService();
        const id= request.params.id;
        console.log(id);
        const feed = await listFeedService.load(id);
    
        return response.json(feed);
    
      }
}

export { ListFeedController }
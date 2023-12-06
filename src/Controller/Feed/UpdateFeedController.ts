import { Request, Response } from "express";
import { UpdateFeedService } from "../../Service/Feed/UpdateFeedService";

class UpdateFeedController {
    async handle(request: Request, response: Response) {
        const {id,artigoDeProdutividade,artigoDeBemEstar,conquistaAmigos,conquistaUsuario} = request.body;
        const updateFeedService = new UpdateFeedService();
        const feed = await updateFeedService.execute({
            id,
            artigoDeProdutividade,
            artigoDeBemEstar,
            conquistaAmigos,
            conquistaUsuario,
        });
        return response.json(feed);
    }
}

export { UpdateFeedController }
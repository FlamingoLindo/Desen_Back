import { Request, Response } from "express";
import { CreateFeedService } from "../../Service/Feed/CreateFeedService";

class CreateFeedController {
    async handle (request:Request, response:Response){
        const {artigoDeProdutividade,artigoDeBemEstar,conquistaAmigos,conquistaUsuario} = request.body;
        const createFeedService = new CreateFeedService();
        console.log("FOI")
        const feed = await createFeedService.execute({
            artigoDeProdutividade,
            artigoDeBemEstar,
            conquistaAmigos,
            conquistaUsuario,
        });
        return response.json({feed});
    }
}

export { CreateFeedController }


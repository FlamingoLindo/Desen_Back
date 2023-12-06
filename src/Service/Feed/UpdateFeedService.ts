import { getCustomRepository } from "typeorm";
import { FeedRepositories } from "../../Repositories/Feed/FeedRepositories";

interface IFeedRequest {
    id: string;
    artigoDeProdutividade: string;
    artigoDeBemEstar: string;
    conquistaAmigos: string;
    conquistaUsuario: string;
}

class UpdateFeedService {
    async execute({id,artigoDeProdutividade,artigoDeBemEstar,conquistaAmigos,conquistaUsuario} : IFeedRequest){
        const feedRepository = getCustomRepository(FeedRepositories);
        const feedAlreadyExists = await feedRepository.findOne({
            id,
        });
        if(!feedAlreadyExists){
            throw new Error("Feed does not exists!");
        }
        
        const a = {
            artigoDeProdutividade,
            artigoDeBemEstar,
            conquistaAmigos,
            conquistaUsuario,
        }

        const feed = await feedRepository.update(id, a);

        return feed;
    }
}

export { UpdateFeedService }
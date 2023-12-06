import { FeedRepositories } from "../../Repositories/Feed/FeedRepositories"; 
import { getCustomRepository } from "typeorm";

interface IFeedRequest {
    artigoDeProdutividade: string;
    artigoDeBemEstar: string;
    conquistaAmigos: string;
    conquistaUsuario: string;
}

class CreateFeedService {
    async execute({artigoDeProdutividade,artigoDeBemEstar,conquistaAmigos,conquistaUsuario} : IFeedRequest){
        const feedRepository = getCustomRepository(FeedRepositories);
        
        var vfeed = {
            id:1, artigoDeProdutividade:artigoDeProdutividade, artigoDeBemEstar:artigoDeBemEstar, conquistaAmigos:conquistaAmigos, conquistaUsuario:conquistaUsuario
        }

        const feed = feedRepository.create(
            {
                artigoDeProdutividade,
                artigoDeBemEstar,
                conquistaAmigos,
                conquistaUsuario,
            }
        );
        await feedRepository.save(feed);
        return feed;
    }
}

export { CreateFeedService }
import { getCustomRepository } from "typeorm";
import { FeedRepositories } from "../../Repositories/Feed/FeedRepositories";

interface IFeedDelete{
    id:string;
}

class DeleteFeedService{
    async execute({id} : IFeedDelete){
        const feedRepository = getCustomRepository(FeedRepositories);
        const feedAlreadyExists = await feedRepository.findOne({
            id,
        });

        if(!feedAlreadyExists){
            throw new Error("Feed does not exist!");
        }

        const ret = await feedRepository.delete(id);
        var messageDelete = { 
            message:"Registro deletado com sucesso!"
        }
        return messageDelete;
    }
}

export { DeleteFeedService }
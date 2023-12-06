import { getCustomRepository } from "typeorm";
import { Progressrepositories } from "../../Repositories/Progress/ProgressRepositories";

interface IProgressRequest {
    id: string;
    historico: string;
    user: string;
}

class UpdateProgressService {
    async execute({id, historico, user} : IProgressRequest){
        const progressRepository = getCustomRepository(Progressrepositories);
        const progressAlreadyExists = await progressRepository.findOne({
            id,
        });
        if(!progressAlreadyExists){
            throw new Error("Progress does not exist!")
        } 
        
        const a ={
            historico,
            user:{id:user}
        }

        const progress = await progressRepository.update(id,a);

        return progress;
    }
}

export { UpdateProgressService }
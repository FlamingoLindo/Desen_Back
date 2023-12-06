import { Progressrepositories } from "../../Repositories/Progress/ProgressRepositories";
import { getCustomRepository } from "typeorm";

interface IProgressRequest{
    historico: string;
    user:string;
}

class CreateProgressService {
    async execute({historico, user} : IProgressRequest ){
        const progressRepository = getCustomRepository(Progressrepositories);
        if(!historico){
            throw new Error("Histórico indisponivel!")
        }
        var vhistorico = {
            id:1, historico:historico, user:user
        }
        const progress = progressRepository.create(
            {
                historico,
                user:{id:user}
            }
        );
        await progressRepository.save(progress)
        return progress;
    }
}

export { CreateProgressService }
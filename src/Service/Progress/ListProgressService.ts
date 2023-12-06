import { getCustomRepository } from "typeorm";
import { Progressrepositories } from "../../Repositories/Progress/ProgressRepositories";
class ListProgressService {
    async execute() {
        const progressRepository = getCustomRepository(Progressrepositories)
        
        const progress = await progressRepository.createQueryBuilder("progress").leftJoinAndSelect("progress.user","user").getMany(); 

        return progress;
    }

    async load(id:any) {
        console.log(id);
        const progressRepositories = getCustomRepository(Progressrepositories);
    
        const progress = await progressRepositories
        .createQueryBuilder("progress")
        //.leftJoinAndSelect("progress.users","users")
        .where('progress.id = :id', { id })
        .getOne();
        return  progress;
    
      }
}

export{ListProgressService};
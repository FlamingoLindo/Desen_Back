import { getCustomRepository } from "typeorm";
import { AchievementsRepositories } from "../../Repositories/Achievements/AchiviementsRepositories";

interface IAchievementsDelete{
    id:string;
}

class DeleteAchievementsService{
    async execute ({id} : IAchievementsDelete){
        const achievementsRepository = getCustomRepository(AchievementsRepositories);
        const achievementsAlreadyExists = await achievementsRepository.findOne({
            id,            
        });
        console.log("delete2")
        if(!achievementsAlreadyExists){
            throw new Error("Achievements does not exist!");
        }

        const ret = await achievementsRepository.delete(id);
        var messageDelete = {
            message:"Registro deletado com sucesso!"
        }
        return messageDelete;    
    }
}

export { DeleteAchievementsService }
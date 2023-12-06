import { getCustomRepository } from "typeorm";
import { AchievementsRepositories } from "../../Repositories/Achievements/AchiviementsRepositories";
import { Achievements } from "../../Entities/Achievements";

interface IAchievementsRequest {
    id: string;
    conquista: string;
    user: string;
}

class UpdateAchievements {
     async execute({id, conquista, user} : IAchievementsRequest){
        const achievementsRepository = getCustomRepository(AchievementsRepositories);
        const achievementsAlreadyExists = await achievementsRepository.findOne(
            {
                id,
            }
        );

        if(!achievementsAlreadyExists){
            throw new Error ("Achievements does not exists!")
        }

        const a = {
            id,
            conquista,
            user:{id:user}
        }

        const achievements = await achievementsRepository.update(id, a);

        return achievements;
     }
}

export { UpdateAchievements }
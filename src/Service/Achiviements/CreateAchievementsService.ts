import { AchievementsRepositories } from "../../Repositories/Achievements/AchiviementsRepositories";
import { getCustomRepository } from "typeorm";

interface IAchievementsRequest {
    conquista: string;
    user: string;
}

class CreateAchievements {
    async execute({conquista, user} : IAchievementsRequest){
        const achievementsRepository = getCustomRepository(AchievementsRepositories)

        var vachievements = {
            id:1, conquista: conquista, user:user
        }

        const achievements = achievementsRepository.create(
            {
                conquista,
                user:{id:user}
            }
        );
            await achievementsRepository.save(achievements);
            return achievements;
    }
}

export { CreateAchievements }
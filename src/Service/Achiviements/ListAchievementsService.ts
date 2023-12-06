import { getCustomRepository } from "typeorm";
import { AchievementsRepositories } from "../../Repositories/Achievements/AchiviementsRepositories";

class ListAchievementsService{
    async execute() {
        const achievementsRepository = getCustomRepository(AchievementsRepositories);
        const achievements = await achievementsRepository.createQueryBuilder("achievements").leftJoinAndSelect("achievements.user","user").getMany();
                             
        return achievements
    }

    async load(id:any) {
        console.log(id);
        const achievementsRepositories = getCustomRepository(AchievementsRepositories);
    
        const achievement = await achievementsRepositories
        .createQueryBuilder("achievements")
        //.leftJoinAndSelect("achievements.users","users")
        .where('achievements.id = :id', { id })
        .getOne();
        return  achievement;
    
      }
}

export {ListAchievementsService}
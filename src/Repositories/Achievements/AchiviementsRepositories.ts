import { EntityRepository, Repository } from "typeorm"
import { Achievements } from "../../Entities/Achievements"

@EntityRepository(Achievements)
class AchievementsRepositories extends Repository<Achievements> {}

export { AchievementsRepositories }
import { EntityRepository, Repository } from "typeorm";
import { Progress } from "../../Entities/Progress";
@EntityRepository(Progress)
class Progressrepositories extends Repository<Progress> {}

export { Progressrepositories }
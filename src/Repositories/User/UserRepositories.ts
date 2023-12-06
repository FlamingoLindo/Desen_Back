import { EntityRepository, Repository } from "typeorm"
import { User } from "../../Entities/User"

@EntityRepository(User)
class UsersRepositories extends Repository<User> {}

export { UsersRepositories }
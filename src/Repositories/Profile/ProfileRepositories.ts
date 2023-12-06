import { EntityRepository, Repository } from "typeorm"
import { Profile } from "../../Entities/Profile"

@EntityRepository(Profile)
class ProfilesRepositories extends Repository<Profile> {}

export { ProfilesRepositories }
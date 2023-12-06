import { getCustomRepository } from "typeorm";
import { ProfilesRepositories } from "../../Repositories/Profile/ProfileRepositories";

class ListProfileService {
  async execute() {
    const profileRepository = getCustomRepository(ProfilesRepositories);

    const users = await profileRepository.find();

    return users;
  }
  async load(id:any) {
    console.log(id);
    const profileRepositories = getCustomRepository(ProfilesRepositories);

    const profile = await profileRepositories
    .createQueryBuilder("profiles").getOne();
    return  profile;

  }
}

export { ListProfileService };
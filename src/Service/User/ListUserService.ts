import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../Repositories/User/UserRepositories";
class ListUserService {
  async execute() {
    const usersRepository = getCustomRepository(UsersRepositories);

    const users = await usersRepository.createQueryBuilder("user").leftJoinAndSelect("user.profile","profile").getMany();

    return users;
  }

  async load(id:any) {
    console.log(id);
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.profile","profile")
    .where('user.id = :id', { id })
    .getOne();
    return  user;

  }
}

export { ListUserService };
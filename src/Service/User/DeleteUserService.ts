import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../Repositories/User/UserRepositories";

interface IUserDelete{
    id:string;
}

class DeleteUserService{
    async execute({id}:IUserDelete){
        const usersRepository = getCustomRepository(UsersRepositories);
        const userAlreadyExists = await usersRepository.findOne({
          id,
        });

        if(!userAlreadyExists){
            throw new Error("User does not exist");
        }

        const ret = await usersRepository.delete(id);
        var messageDelete = { 
            message:"Registro deletado com sucesso!"
        }
        return messageDelete;
    }
}
export {DeleteUserService};
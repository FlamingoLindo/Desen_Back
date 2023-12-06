import { getCustomRepository } from "typeorm";
import { ProfilesRepositories } from "../../Repositories/Profile/ProfileRepositories";
interface IProfileDelete{
    id:string;
}

class DeleteProfileService{
    async execute({id}:IProfileDelete){
        const profilerepository = getCustomRepository(ProfilesRepositories);
        const profileAlreadyExists = await profilerepository.findOne({
          id,
        });

        if(!profileAlreadyExists){
            throw new Error("Profile does not exist");
        }

        const ret = await profilerepository.delete(id);
        var messageDelete = { 
            message:"Registro deletado com sucesso!"
        }
        return messageDelete;
    }
}
export {DeleteProfileService};
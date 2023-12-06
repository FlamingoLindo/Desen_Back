import { getCustomRepository } from "typeorm";
import { ProfilesRepositories } from "../../Repositories/Profile/ProfileRepositories";

interface IProfileRequest {
    id: string;
    nome: string;
  }
  
  class UpdateProfileService {
    async execute({ id, nome }: IProfileRequest) {
      const profilesRepository = getCustomRepository( ProfilesRepositories);
      const  profileAlreadyExists = await  profilesRepository.findOne({
        id,
      });
      if(!profileAlreadyExists){
        throw new Error("Profile does not exists!")
      }
      
      const a = {
        nome
      }
      

      const profile = await  profilesRepository.update(id,a);

      return profile;
    }
  }
  
  export { UpdateProfileService };
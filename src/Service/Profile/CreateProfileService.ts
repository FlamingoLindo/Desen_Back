import { ProfilesRepositories } from "../../Repositories/Profile/ProfileRepositories";
import { getCustomRepository } from "typeorm";

interface IProfileRequest {
    nome: string;
}

class CreateProfileService {
    async execute({nome} : IProfileRequest){
        const profileRepository = getCustomRepository(ProfilesRepositories);
        if(!nome){
            throw new Error("Nome incorreto!");
        }
        var vprofile = {
            id:1, nome:nome,
        }
        const profile = profileRepository.create(
            {
                nome,
            }
        );
        await profileRepository.save(profile);
        return profile;
    }
}

export{ CreateProfileService }
import { hash } from "bcryptjs";
import { UsersRepositories } from "../../Repositories/User/UserRepositories";
import { getCustomRepository } from "typeorm";

interface IUserRequest {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    admin: boolean;
    dataNascimento: string;  
    profile: string;
}

class CreateUserService {
    async execute({nome, sobrenome, email, senha, admin, dataNascimento, profile} : IUserRequest){
        const usersRepository = getCustomRepository(UsersRepositories);
        if(!email){
            throw new Error("Email incorreto!");
        }
        var vuser = {
            id:1, nome:nome, sobrenome:sobrenome, email:email, senha:senha, admin:admin, dataNascimento:dataNascimento
        }
        const passwordHash = await hash(senha,8);
        console.log(passwordHash);
        const user = usersRepository.create(
            {
                nome,
                sobrenome,
                email,
                senha: passwordHash,
                admin,
                dataNascimento,
                profile:{id:profile}
            }
        );
        await usersRepository.save(user);
        return user;
    }
}

export{ CreateUserService }
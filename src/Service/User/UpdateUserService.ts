import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../Repositories/User/UserRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
    id: string;
    nome: string;
    sobrenome: string;
    email: string;
    senha: string
    admin?: boolean;
    dataNascimento: string;
    profile: string;
  }
  
  class UpdateUserService {
    async execute({ id, nome, sobrenome, email, senha, admin = false, dataNascimento, profile}: IUserRequest) {
      const usersRepository = getCustomRepository(UsersRepositories);
      const userAlreadyExists = await usersRepository.findOne({
        id,
      });
      
      if(!userAlreadyExists){
        throw new Error("User does not exists!")
      }
     
      const passwordHash = await hash(senha,8);

     const a= {
        nome,
        sobrenome,
        email,
        senha: passwordHash,
        admin,
        dataNascimento,
        profile:{id:profile}
    }

    /*
      userAlreadyExists.nome = nome;
      userAlreadyExists.sobrenome = sobrenome;
      userAlreadyExists.email = email;
      userAlreadyExists.dataNascimento = new Date(dataNascimento);
      userAlreadyExists.admin = admin;

      userAlreadyExists.profile.id=profile;
      userAlreadyExists.updated_at = new Date();
      userAlreadyExists.senha = passwordHash;*/
      
      const user = await usersRepository.update(id,a);

      return user;
    }
  }
  
  export { UpdateUserService };
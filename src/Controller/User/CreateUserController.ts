import { Request, Response } from "express";
import { CreateUserService } from "../../Service/User/CreateUserService";

class CreateUserController {
    async handle (request: Request, response: Response){
        const {nome, sobrenome, email, senha, dataNascimento, admin, profile} = request.body;
        console.log(nome)
        console.log(sobrenome)
        console.log(email)
        console.log(senha)
        console.log(dataNascimento)
        console.log(admin)
        console.log(profile)
        const user = {
            nome:nome,
            sobrenome:sobrenome,
            email:email,
            senha:senha,
            dataNascimento:dataNascimento,
            admin:admin,
            profile:profile
        }
        const createUserService = new CreateUserService();
        const ret = await createUserService.execute(user);
        return response.json(ret);
    }
}
export {CreateUserController}
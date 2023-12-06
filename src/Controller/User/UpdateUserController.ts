import { Request, Response } from "express";
import { UpdateUserService } from "../../Service/User/UpdateUserService";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id, nome, sobrenome, email, senha, admin, dataNascimento, profile } = request.body;

    const updateUserService = new UpdateUserService();
    
    const user = await updateUserService.execute({
      id,
      nome,
      sobrenome,
      email,
      senha,
      admin,
      dataNascimento,
      profile
    });
    return response.json(user);
  }
}

export { UpdateUserController };
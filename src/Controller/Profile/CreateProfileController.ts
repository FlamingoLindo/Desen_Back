import { Request, Response } from "express";
import { CreateProfileService } from "../../Service/Profile/CreateProfileService";

class CreateProfileController{
    async handle(request: Request, response:Response){
        const{nome} = request.body;
        console.log(nome)
        const profile = {
            nome:nome,
        };
        const createProfileService = new CreateProfileService();
        const ret = await createProfileService.execute(profile);
        return response.json(ret)
    }
}

export {CreateProfileController}
import { Request, Response } from "express";
import { UpdateProgressService } from "../../Service/Progress/UpdateProgressService";

class UpdateProgressController {
    async handle(request: Request, response:Response){
        const {id,historico,user} = request.body;
        const updateProgressService = new UpdateProgressService();
        const progress = await updateProgressService.execute({
            id,
            historico,
            user,
        });
        return response.json(progress);
    }
}

export { UpdateProgressController }
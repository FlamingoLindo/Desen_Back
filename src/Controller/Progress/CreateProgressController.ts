import { Request, Response } from "express";
import { CreateProgressService } from "../../Service/Progress/CreateProgressService";

class CreateProgressController {
    async handle (request:Request, response:Response){
        const {historico, user} = request.body;
        const progress = {
            historico: historico,
            user: user
        };
        const createProgressService = new CreateProgressService();
        const ret = await createProgressService.execute(progress);
        return response.json({progress});
    }
}
export { CreateProgressController }
import { Request, Response } from "express";
import { DeleteProgressService } from "../../Service/Progress/DeleteProgressService";
class DeleteProgressController {
    async handle(request:Request, response:Response){
        const deleteProgressService = new DeleteProgressService();
        const id = request.params.id;
        const tasks = await deleteProgressService.execute({id});

        return response.json(tasks);
    }
}

export { DeleteProgressController }
import { Request, Response } from "express";
import { DeleteTaskService } from "../../Service/Task/DeleteTaskService";
class DeleteTaskController {
    async handle(request:Request, response:Response){
        const deleteTaskService = new DeleteTaskService();
        const id = request.params.id;
        const tasks = await deleteTaskService.execute({id});

        return response.json(tasks);
    }
}

export { DeleteTaskController }
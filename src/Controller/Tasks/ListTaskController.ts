import { Request, Response } from "express";
import { ListTaskService } from "../../Service/Task/ListTaskService";
class ListTaskController{
    async handle(request: Request, response: Response){
        const listTaskService = new ListTaskService();

        const tasks = await listTaskService.execute();

        return response.json(tasks);
    }
    async handleOne(request: Request, response: Response) {
    
        const listTaskService = new ListTaskService();
        const id= request.params.id;
        const tasks = await listTaskService.load(id);
    
        return response.json(tasks);
    
      }
}

export { ListTaskController };
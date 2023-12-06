import { Request, Response } from "express";
import { ListProgressService } from "../../Service/Progress/ListProgressService";
class ListProgressController{
    async handle (request: Request, response: Response){
    const listProgressService = new ListProgressService();

    const  progress = await listProgressService.execute();

    return response.json(progress);
    }

    async handleOne(request: Request, response: Response) {
    
        const listProgressService = new ListProgressService();
        const id= request.params.id;
        const progress = await listProgressService.load(id);
    
        return response.json(progress);
    
      }
}

export { ListProgressController };
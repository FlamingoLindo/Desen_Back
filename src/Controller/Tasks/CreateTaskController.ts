import { Request, Response } from "express";
import { CreateTaskService } from "../../Service/Task/CreateTaskService";

class CreateTaskController {
    async handle (request:Request, response:Response){
        const {nomeTarefa,descricaoTarefa,iconeTarefa,corTarefa,reptirTarefa,frequenciaTarefa,dataEncerramento,lembrete, user} = request.body;
        const createTaskService = new CreateTaskService();
        const task = await createTaskService.execute({
            nomeTarefa,
            descricaoTarefa,
            iconeTarefa,
            corTarefa,
            reptirTarefa,
            frequenciaTarefa,
            dataEncerramento,
            lembrete,
            user
        });
        return response.json({task});
    }
}
export { CreateTaskController }
import { Request, Response } from "express";
import { UpdateTaskService } from "../../Service/Task/UpdateTaskService";

class UpdateTaskController {
    async handle(request: Request, response:Response){
        const {id,nomeTarefa,descricaoTarefa,iconeTarefa,corTarefa,reptirTarefa,frequenciaTarefa,dataEncerramento,lembrete, user} = request.body;
        const updateTaskService = new UpdateTaskService();
        const task = await updateTaskService.execute({
            id,
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
        return response.json(task);
    }
}

export { UpdateTaskController }
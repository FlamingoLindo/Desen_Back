import { getCustomRepository } from "typeorm";
import { TasksRepositories } from "../../Repositories/Task/TaskRepositories";

interface ITaskRequest {
    id: string;
    nomeTarefa: string;
    descricaoTarefa: string;
    iconeTarefa: string;
    corTarefa: string;
    reptirTarefa?: boolean;
    frequenciaTarefa: number;
    dataEncerramento: Date;
    lembrete: string;
    user: string;
}

class UpdateTaskService {
    async execute({id, nomeTarefa, descricaoTarefa, iconeTarefa, corTarefa, reptirTarefa, frequenciaTarefa, dataEncerramento, lembrete, user}: ITaskRequest){
        const taskRepository = getCustomRepository(TasksRepositories);
        const taskAlreadyExists = await taskRepository.findOne({
            id,
        });
        
        if(!taskAlreadyExists){
            throw new Error("Task does not exist!")
        }
        
        const a = {
            nomeTarefa,
            descricaoTarefa,
            iconeTarefa,
            corTarefa,
            reptirTarefa,
            frequenciaTarefa,
            dataEncerramento,
            lembrete,
            user:{id:user}
        }

        console.log("updateService")
        const task = await taskRepository.update(id,a)

        return task;
    }
}

export { UpdateTaskService }
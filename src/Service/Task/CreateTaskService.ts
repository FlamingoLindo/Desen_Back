import { TasksRepositories } from "../../Repositories/Task/TaskRepositories";
import { getCustomRepository } from "typeorm";

interface ITaskRequest {
    nomeTarefa: string;
    descricaoTarefa: string;
    iconeTarefa: string;
    corTarefa: string;
    reptirTarefa: boolean;
    frequenciaTarefa: number;
    dataEncerramento: string;
    lembrete: string;
    user: string;
}

class CreateTaskService {
    async execute({nomeTarefa, descricaoTarefa, iconeTarefa, corTarefa, reptirTarefa, frequenciaTarefa, dataEncerramento, lembrete, user} : ITaskRequest){
        const tasksRepository = getCustomRepository(TasksRepositories);
        if(!nomeTarefa){
            throw new Error("Nome de tarefa invalido!");
        }
        var vtask = {
            id:1, nomeTarefa:nomeTarefa, descricaoTarefa:descricaoTarefa, iconeTarefa:iconeTarefa, corTarefa:corTarefa, reptirTarefa:reptirTarefa, 
            frequenciaTarefa:frequenciaTarefa, dataEncerramento:dataEncerramento, lembrete:lembrete, user:user  
        }
        const task = tasksRepository.create(
            {
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
        );
        await tasksRepository.save(task);
        return task;
    }
}

export { CreateTaskService }
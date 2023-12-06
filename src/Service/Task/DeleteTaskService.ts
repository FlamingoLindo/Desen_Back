import { getCustomRepository } from "typeorm";
import { TasksRepositories } from "../../Repositories/Task/TaskRepositories";

interface ITaskDelete{
    id:string;
}
class DeleteTaskService{
    async execute({id}:ITaskDelete){
        const tasksRepository = getCustomRepository(TasksRepositories)
        const taskAlreadyExists = await tasksRepository.findOne({
            id,
        });

        if(!taskAlreadyExists){
            throw new Error("Task does not exist!");
        }

        const ret = await tasksRepository.delete(id);
        var messageDelete = {
            message:"Registro deletado com sucesso!"
        }
        return messageDelete;
    }
}
export { DeleteTaskService }
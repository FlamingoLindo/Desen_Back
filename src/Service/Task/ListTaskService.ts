import { getCustomRepository } from "typeorm";
import { TasksRepositories } from "../../Repositories/Task/TaskRepositories";
class ListTaskService {
    async execute() {
        const tasksRepository = getCustomRepository(TasksRepositories)

        const tasks = await tasksRepository.createQueryBuilder("task").leftJoinAndSelect("task.user","user").getMany();

        return tasks;
    }

    async load(id:any) {
        console.log("listService");
        const tasksRepositories = getCustomRepository(TasksRepositories);
    
        const task = await tasksRepositories
        .createQueryBuilder("task")
        //.leftJoinAndSelect("task.users","users")
        .where('task.id = :id', { id })
        .getOne();
        return  task;
    
      }
}

export { ListTaskService };
import { EntityRepository, Repository } from "typeorm";
import { Task } from "../../Entities/Tasks";

@EntityRepository(Task)
class TasksRepositories extends Repository<Task> {}

export { TasksRepositories }
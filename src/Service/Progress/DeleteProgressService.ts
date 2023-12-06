import { getCustomRepository } from "typeorm";
import { Progressrepositories } from "../../Repositories/Progress/ProgressRepositories";

interface IProgressDelete{
    id:string;
}
class DeleteProgressService{
    async execute({id}:IProgressDelete){
        const progressRepository = getCustomRepository(Progressrepositories)
        const progressAlreadyExists = await progressRepository.findOne({
            id,
        });

        if(!progressAlreadyExists){
            throw new Error("Progress does not exist!");
        }

        const ret = await progressRepository.delete(id);
        var messageDelete = {
            message:"Registro deletado com sucesso!"
        }
        return messageDelete;
    }
}
export { DeleteProgressService }
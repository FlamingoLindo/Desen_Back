import { getCustomRepository } from "typeorm";
import { FeedRepositories } from "../../Repositories/Feed/FeedRepositories";

class ListFeedService {
    async execute() {
        const feedRepository = getCustomRepository(FeedRepositories);

        const feed = await feedRepository.find();

        return feed;
    }

    async load(id:any) {
        console.log(id);
        const feedRepositories = getCustomRepository(FeedRepositories);
    
        const feed = await feedRepositories
        .createQueryBuilder("feed")
        //.leftJoinAndSelect("feed.users","users")
        .where('feed.id = :id', { id })
        .getOne();
        return  feed;
    
      }
}

export { ListFeedService }
import { EntityRepository, Repository } from "typeorm"
import { Feed } from "../../Entities/Feed"

@EntityRepository(Feed)
class FeedRepositories extends Repository<Feed> {}

export { FeedRepositories }
import { INews } from "@/api/news.service"

import GoodNewsIcon from '@/assets/GoodNewsIcon.svg'
import BadNewsIcon from '@/assets/BadNewsIcon.svg'
import DislikesIcon from '@/assets/DislikesIcon.svg'
import FavoriteIcon from '@/assets/FavoritesIcon.svg'
import CommentsIcon from '@/assets/CommentsIcons.svg'
import Reaction from "./Reaction"
import { CommentService } from "@/api/comments.service"

type ReactionsProps = {
    news: INews
}

const Reactions = async ({ news }: ReactionsProps) => {
    const countComments = await CommentService.getCommentsCount(news._id)

    return (
        <footer className="flex justify-between px-4 mt-6">
            <Reaction icon={GoodNewsIcon} count={news.good_news} />
            <Reaction icon={BadNewsIcon} count={news.bad_news} />
            <Reaction icon={DislikesIcon} count={news.dislikes} />
            <Reaction icon={CommentsIcon} count={countComments.count} />
            <Reaction icon={FavoriteIcon} count={news.favorites_count} />
    </footer>
    )
}

export default Reactions
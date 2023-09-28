import { INews } from "@/api/news.service"
import Link from "next/link"
import Reactions from "./Reactions"

type ReadMoreItemProps = {
    news: INews
}

const ReadMoreItem = ({ news }: ReadMoreItemProps) => {
    return (
        <div className="py-3 px-4 bg-[#F2F2F2] rounded-xl">
            <Link 
                href={`/category/${news.category._id}`} 
                className="inline-block px-2 py-1 text-white bg-[#FF6B00] rounded-full mr-1 min-w-[100px] text-center text-xs"
            >
                { news.category.title }
            </Link>
            <span className="text-xs text-[#838383]">{ new Date(news.createdAt).toLocaleString('ru-RU', { hour12: false }) }</span>
            <p className="mt-2">{news.title}</p>
            <Reactions news={news} />
        </div>
    )
}

export default ReadMoreItem
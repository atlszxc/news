import { INews } from "@/api/news.service"
import Image from 'next/image'
import HotNewsIcon from '@/assets/HotNewsIcon.svg'
import Link from "next/link"

type HotNewsItemProps = {
    news: INews
}

const HotNewsItem = ({ news }: HotNewsItemProps) => {
    return (
        <section className="flex items-start mb-3 last:mb-0">
            <Image
                src={HotNewsIcon}
                width={24}
                height={24}
                alt="Новая новость"
            />
            <section className="pl-2">
                <p>{ news.title }</p>
                <span className="text-sm text-[#838383]">{ new Date(news.createdAt).toLocaleTimeString() }</span>
                <Link 
                    href={`/category/${news.category._id}`} 
                    className="inline-block px-2 py-1 text-white bg-[#FF6B00] rounded-full ml-1 min-w-[100px] text-center text-xs"
                >
                    { news.category.title }
                </Link>
            </section>
        </section>
    )
}

export default HotNewsItem
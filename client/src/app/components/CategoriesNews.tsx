import { NewsService } from "@/api/news.service"
import Image from "next/image"
import Link from "next/link"
import Reactions from "./UI/Reactions"

const CategoriesNews = async () => {
    const gropedNews = await NewsService.getGroupedNews()
    
    return (
        <section className="py-7">
            {
                gropedNews.map(group => (
                    <section key={group.category._id} className="mb-8 last:mb-0">
                        <Link 
                            href={`/category/${group.category._id}`}
                            className="text-3xl ml-4"
                        >
                            { group.category.title } &gt;
                        </Link>
                        <section className="grid grid-cols-4 gap-3 mt-4 rounded-xl">
                            {
                                group.news.map(item => (
                                    <div key={item._id}>
                                        <div className="relative h-[165px]">
                                            <Image src={item.img} alt="" objectFit="cover" fill className="rounded" />
                                        </div>
                                        <div className="px-3 bg-white pb-3 rounded-b-xl">
                                            <span className="text-xs">{ new Date(item.createdAt).toLocaleString('ru-RU', { hour12: false }) }</span>
                                            <p className="pt-2 pb-4">
                                                {item.title}
                                            </p>
                                            <Reactions news={item} />
                                        </div>
                                    </div>
                                ))
                            }
                        </section>
                    </section>
                ))
            }
        </section>
    )
}

export default CategoriesNews
import { NewsService } from "@/api/news.service"
import BlockWrapper from "./UI/BlockWrapper"
import Link from "next/link"
import MarqueeItem from "./MarqueeItem"
import HotNewsItem from "./HotNewsItem"

const HotNews = async () => {
    const news = await NewsService.getLastNews(4)

    return (
       <>
         <BlockWrapper>
            <Link 
                href='/'
                className="text-[28px]"
            >
                Лента
            </Link>
            <section className="mt-7">
                {
                    news.map(item => <HotNewsItem news={item} key={item._id} />)
                }
            </section>
        </BlockWrapper>
        <marquee className={'bg-black rounded-b-xl text-white py-3'}>
           <div className="flex">
                <MarqueeItem />
                <MarqueeItem />
                <MarqueeItem />                
           </div>
        </marquee>
       </>
    )
}

export default HotNews
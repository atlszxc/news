import Link from "next/link"
import BlockWrapper from "./UI/BlockWrapper"
import { NewsService } from "@/api/news.service"
import ReadMoreItem from "./UI/ReadMoreItem"

const ReadMore = async () => {
    const news = await NewsService.getRandomNews()

    return (
        <div className="my-3">
            <BlockWrapper>
                <Link 
                    href='/'
                    className="text-[28px]"
                >
                    Читать также &gt;
                </Link>
                <section className="mt-7 grid grid-cols-4 gap-4">
                    {
                        news.map(item => <ReadMoreItem news={item} key={item._id} />)
                    }
                </section>
            </BlockWrapper>
        </div>
    )
}

export default ReadMore
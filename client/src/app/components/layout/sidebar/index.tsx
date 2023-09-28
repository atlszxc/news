import { CategoryService } from "@/api/category.service"
import Link from "next/link"

const Sidebar = async () => {
    const categories = await CategoryService.getCategories()

    return (
        <aside className="min-h-screen">
            <Link
                href='/'
                className={`block text-center duration-100 mb-4 last:mb-0`}
            >
               ЛЕНТА
            </Link>
            {
                categories.map(category => (
                    <Link
                        key={category._id} 
                        href={`/category/${category._id}`}
                        className={`block text-center duration-100 mb-4 last:mb-0 text-lg`}
                    >
                        { category.title.toUpperCase() }
                    </Link>
                ))
            }
        </aside>
    )
}

export default Sidebar
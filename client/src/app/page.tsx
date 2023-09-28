import Advertising from "./components/Advertising";
import CategoriesNews from "./components/CategoriesNews";
import HotNews from "./components/HotNews";
import ReadMore from "./components/ReadMore";

export default function Home() {
  return (
   <main>
    <section className="grid grid-cols-4 gap-3">
      <div className="col-span-3">
        <HotNews />
      </div>
      <Advertising />
    </section>
    <ReadMore />
    <CategoriesNews />
   </main>
  )
}



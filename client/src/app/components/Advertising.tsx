import BlockWrapper from "./UI/BlockWrapper"
import Image from "next/image"

const Advertising = () => {
    return (
        <BlockWrapper>
            <a href='https://google.com' target="_blank">
                <span>Реклама.com</span>
                <span>РЕКЛАМА</span>
            </a>
            <div className="relative h-[276px] mt-3 mb-4">
                <Image 
                    src='https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg?q=10&h=200'
                    alt="Advertising"
                    fill
                    objectFit="cover" 
                    className="rounded" 
                />
            </div>
            <p className="truncate w-full max-h-6">
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum. 
            </p>
        </BlockWrapper>
    )
}

export default Advertising
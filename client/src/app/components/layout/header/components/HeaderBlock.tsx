import HeaderBlockWrapper from "@/app/components/UI/HeaderBlockWrapper"
import Image from "next/image"

type HeaderBlockProps = {
    icon: string,
    text: string,
}

const HeaderBlock = ({ icon, text }: HeaderBlockProps) => {
    return (
        <HeaderBlockWrapper>
            <div className="flex items-center">
                <Image 
                    src={icon}
                    width={24}
                    height={24}
                    alt="Логотип"
                />
                <span className="text-sm">{ text }</span>
            </div>
        </HeaderBlockWrapper>
    )
}

export default HeaderBlock
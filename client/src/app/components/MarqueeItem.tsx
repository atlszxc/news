import Image from 'next/image'
import MarqueeIcon from '@/assets/MarqueeIcon.svg'

const MarqueeItem = () => {
    return (
        <>
            <Image
                className="ml-[20px]" 
                src={MarqueeIcon}
                alt="Очень важная новость"
                width={24}
                height={24}
            />
            <span className="ml-[20px]">ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</span>
        </>
    )
}

export default MarqueeItem
import Image from 'next/image'

type ReactionProp = {
    icon: string,
    count: number
}

const Reaction = ({ count, icon }: ReactionProp) => {
    return (
        <div className="flex items-center">
            <Image src={icon} width={14} height={14} alt="Реакция" />
            <span className="text-sm ml-1">{ count }</span>
        </div>
    )

}

export default Reaction
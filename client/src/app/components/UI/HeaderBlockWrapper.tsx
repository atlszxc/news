import { PropsWithChildren } from "react"

const HeaderBlockWrapper = ({ children }: PropsWithChildren) => {
    return (
        <div className="bg-[#F2F2F2] rounded-full p-3 ml-[20px] first:ml-0">
            { children }
        </div>
    )
}

export default HeaderBlockWrapper
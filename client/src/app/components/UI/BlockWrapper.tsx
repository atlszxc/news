import { PropsWithChildren } from "react"

const BlockWrapper = ({ children }: PropsWithChildren) => {
    return (
        <section className="p-8 bg-white rounded-xl">
            {children}
        </section>
    )
}

export default BlockWrapper
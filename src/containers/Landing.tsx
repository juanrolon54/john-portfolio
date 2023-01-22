import { CyclicDiv } from "../components"
import { Deflected } from "../components"

export default () => {
    return (
        <div className="relative grid place-items-center pt-64 md:grid-cols-3 dark:text-white">
            <Deflected.right className="p-8 pb-64 backdrop-blur-sm w-fit border-2 border-black dark:border-white col-span-2 dark:text-white -skew-y-6 rounded-lg" >
                <div className="text-5xl font-semibold leading-snug">Hello! My name is Juan Rolón
                </div>
                <div className="flex items-baseline gap-2 text-4xl">
                    I <p className="italic font-serif tracking-tight">design</p> and <p className="font-sans tracking-tight first-letter:underline font-semibold">develop</p><CyclicTitles />
                </div>
            </Deflected.right>
        </div>
    )
}

const CyclicTitles = () => <CyclicDiv duration={1666} className="w-fit rounded-full overflow-hidden font-bold bg-red-500 tracking-tight">
    <p className="p-2 px-8">websites</p>
    <p className="p-2 px-8">front_end</p>
    <p className="p-2 px-8">ux/ui</p>
    <p className="p-2 px-8">motion</p>
    <p className="p-2 px-8">back_end</p>
    <p className="p-2 px-8">things</p>
</CyclicDiv>
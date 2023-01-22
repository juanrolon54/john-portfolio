import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { useState } from 'react'
import { Deflected } from "../components"
import techstack, { tech } from "../assets/techstack"

export default () => {
    const [tech, setTech] = useState<null | tech>(null)
    const isSelected = tech !== null

    return (
        <Deflected.left className={`gap-8 dark:text-white grid grid-cols-1 md:grid-cols-2 md:grid-flow-row`}>
            <p className="text-4xl md:col-span-2">I present to you my <span className="font-mono font-semibold">technology</span> stack:</p>
            <AnimatePresence >
                <LayoutGroup >
                    {isSelected && <motion.div layout key={tech.name} layoutId={tech.name} className="aspect-square -surface 2xl:aspect-video inset-32 flex flex-col gap-4 overflow-y-auto ">
                        <div className="grid grid-cols-3">
                            <motion.span layoutId={tech.name + 'name'} className="col-span-2 text-6xl font-mono font-semibold p-2 z-10 select-none h-full flex flex-col pt-8">{tech.name}<a href={tech.website} target='_blank' className="text-xs tracking-tighter underline" onClick={(e) => { e.stopPropagation() }}>go to website</a></motion.span>
                            <motion.img layoutId={tech.name + 'img'} loading="lazy" src={tech.imgUrl} className="object-contain aspect-square col-start-3 png-white dark:png-black p-4" />
                        </div>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl p-4 col-span-3 leading-loose">{tech.article}</motion.p>
                    </motion.div>}
                    <motion.div className={`relative col-start-${isSelected ? '2' : '1'} col-span-${isSelected ? '1' : '2'}`} >
                        <div className={`grid grid-flow-row grid-cols-5 2xl:grid-cols-7 gap-4`}>
                            {techstack.map((t) => {
                                return <motion.div whileHover={{ x: -4, y: -4 }} animate={{ skewY: t.name === tech?.name ? -8 : 0 }} layoutId={t.name} onMouseDown={() => { setTech(t) }} key={t.name} className={`hover:cursor-pointer aspect-square surface`}>
                                    <motion.span layoutId={t.name + 'name'} className="absolute p-2 w-fit z-10 select-none text-xs 2xl:text-lg hidden sm:inline font-mono">{t.name}</motion.span>
                                    <motion.img layoutId={t.name + 'img'} loading="lazy" src={t.imgUrl} className={`object-contain h-full w-full aspect-square png-black dark:png-white absolute -z-10 inset-0 select-none p-2 2xl:p-4`} />
                                </motion.div>
                            })}
                        </div>
                    </motion.div >
                </LayoutGroup>
            </AnimatePresence>
        </Deflected.left>
    )
}
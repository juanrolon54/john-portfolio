import { useEffect, useState, Children } from 'react'
import type { ReactNode, HTMLAttributes } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { useTimeoutArrayCycle } from '../hooks'

type props = {
    duration?: number
    children: ReactNode
    className?: HTMLAttributes<HTMLDivElement>["className"]
}

// export default (props: props) => {
//     const [index, setIndex] = useState(0)
//     const [parent] = useAutoAnimate<HTMLDivElement>()


//     useEffect(() => {
//         setTimeout(() => { setIndex((index + 1) % items.length) }, props.duration || 1000)
//     }, [index])

//     const items = Children.toArray(props.children)
//     return <div ref={parent} className={props.className}>
//         {items[index]}
//     </div >
// }
export default (props: props) => {
    const [items, index] = useTimeoutArrayCycle(Children.toArray(props.children), props.duration || 1000)

    return <LayoutGroup>
        <motion.div layout className={props.className}>
            <AnimatePresence mode='wait'>
                <motion.div initial={{ y: "4rem" }} animate={{ y: 0 }} exit={{ y: "-4rem" }} transition={{ ease: 'circIn' }} key={index}>
                    {items[index]}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    </LayoutGroup>
}
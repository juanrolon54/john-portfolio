import type { ReactNode, HTMLAttributes, HtmlHTMLAttributes } from 'react'
import { MotionProps, motion, HTMLMotionProps } from 'framer-motion'

export default {
    right(props: HTMLMotionProps<'div'>) {
        return <motion.div {...props} transition={{ duration: 1, ease: 'anticipate' }} initial={{ skewY: -4, x: 0 }} />
    },
    left(props: HTMLMotionProps<'div'>) {
        return <motion.div {...props} transition={{ duration: 1, ease: 'anticipate' }} initial={{ skewY: 4, x: 0 }} />
    }
}
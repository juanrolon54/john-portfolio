import { useState } from 'react'
import { motion } from 'framer-motion'
import { Deflected } from "../components"

type project = {
    name: string
}

const work: project[] = [
    {
        name: 'SocialApp',
    },
    {
        name: 'Weather App',
    },
    {
        name: 'ChatGPT App',
    },
    {
        name: 'Todo App',
    },
    {
        name: 'ECommerce Website',
    },
]

export default () => {
    const [name, setName] = useState<string>('')
    const selected = work.find(item => item.name === name) || null
    const isSelected = selected !== null
    return <Deflected.right>
        <p className="text-4xl">Also, my <span className='font-serif'>work</span>:</p>
        <div className="relative grid grid-cols-3 grid-rows-3 gap-8 aspect-video">
            <motion.div key={'SocialApp'} layoutId={'SocialApp'} onClick={() => { setName('SocialApp') }} className={`surface p-4 hover:cursor-pointer col-span-2 row-span-2`}>'SocialApp</motion.div>
            <motion.div key={'Weather App'} layoutId={'Weather App'} onClick={() => { setName('Weather App') }} className={`surface p-4 hover:cursor-pointer col-span-1 row-span-1`}>Weather App</motion.div>
            <motion.div key={'ChatGPT App'} layoutId={'ChatGPT App'} onClick={() => { setName('ChatGPT App') }} className={`surface p-4 hover:cursor-pointer col-span-1 row-span-1`}>ChatGPT App</motion.div>
            <motion.div key={'Todo App'} layoutId={'Todo App'} onClick={() => { setName('Todo App') }} className={`surface p-4 hover:cursor-pointer col-span-1 row-span-1`}>Todo App</motion.div>
            <motion.div key={'ECommerce Website'} layoutId={'ECommerce Website'} onClick={() => { setName('ECommerce Website') }} className={`surface p-4 hover:cursor-pointer col-span-2 row-span-1`}>ECommerce Website</motion.div>
            {isSelected && <motion.div layoutId={selected.name} onClick={() => { setName('') }} className='absolute -surface p-4 inset-0 z-20'>{selected.name}</motion.div>}
        </div>
    </Deflected.right>
}
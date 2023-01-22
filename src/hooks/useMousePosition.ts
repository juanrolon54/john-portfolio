import { useEffect, useState } from 'react'

export default () => {
    const [clientX, setClientX] = useState(0)
    const [clientY, setClientY] = useState(0)

    useEffect(() => {
        const listenPointerMove = (e: PointerEvent) => {
            const { clientX: x, clientY: y } = e
            setClientX(x)
            setClientY(y)
        }
        window.addEventListener('pointermove', listenPointerMove)

        return () => { window.removeEventListener('pointermove', listenPointerMove) }
    }, [])

    const clientXProgress = clientX / window.innerWidth
    const clientYProgress = clientY / window.innerHeight
    return { clientX, clientY, clientXProgress, clientYProgress }
}
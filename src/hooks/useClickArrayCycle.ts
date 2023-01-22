import { useState, useEffect } from "react"

export default (array: any[]): [any[], number] => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const listenClick = (e: MouseEvent) => {
            setIndex((index + 1) % array.length)
        }
        window.addEventListener('click', listenClick)
        return () => {
            window.removeEventListener('click', listenClick)
        }
    }, [index])
    return [array, index]
}
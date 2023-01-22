import { useState, useEffect } from "react"

export default (array: any[], duration = 2000): [any[], number] => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setTimeout(() => { setIndex((index + 1) % array.length) }, duration)
    }, [index])
    return [array, index]
}
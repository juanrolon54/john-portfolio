import { useContext } from "../context";

export default () => {
    const { currentContainer, setCurrentContainer } = useContext()
    return [currentContainer, setCurrentContainer]
}
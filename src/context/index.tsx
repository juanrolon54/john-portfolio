import {
    ReactNode,
    createContext,
    useContext as useReactContext,
    useState
} from 'react'

export type contextValue = {
    currentContainer: string
    setCurrentContainer: (container: string) => void
}

const Context = createContext<contextValue | null>(null)

export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [currentContainer, setCurrentContainer] = useState('')

    return (<Context.Provider value={{ currentContainer, setCurrentContainer }}>
        {children}
    </Context.Provider>)
}

export const useContext = () => {
    const value = useReactContext(Context)
    return value as contextValue
}
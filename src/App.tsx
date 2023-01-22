import { Landing, Stack } from "./containers"
import { TorusKnot } from "./components"
import { useEffect, useLayoutEffect, useRef } from "react"


function App() {

  return (
    <div className="min-h-screen flex flex-col gap-32 p-8 overflow-hidden md:px-32">
      <div className="-z-50 fixed top-0 left-0 h-screen w-full bg-white dark:bg-black">
        <TorusKnot className='font-black bg-slate-400 dark:bg-gradient-to-l dark:from-pink-500 dark:to-blue-600 bg-clip-text text-transparent' />
      </div>
      <Landing />
      <Stack />
    </div >
  )
}

export default App

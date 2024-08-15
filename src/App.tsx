import { atom, useAtom } from 'jotai'
import { useEffect } from 'react'
import Button from './components/single/Button/Button'

const trackerAtom = atom(0)

// export function useProgressTracker(tracker: typeof trackerAtom) {

//     const [num, setNum] = useAtom(trackerAtom)

//     useEffect(() => {
//         const interval = setInterval(() => { setNum(prev => prev + 1); console.log(num) }, 1000)

//         return clearInterval(interval)

//     }, [num])

//     return { num }
// }

const Comp = () => {
    const [num, setNum] = useAtom(trackerAtom)

    useEffect(() => {
        const interval = setInterval(() => setNum(prev => prev + 1), 1000)

        return () => clearInterval(interval)

    }, [num])

    return (
        <>
            <div>num is: {num}</div>

            <Button className='px-4 py-2 rounded-2xl' size="md" variant="filled" onClick={() => setNum(prev => prev + 1)}>Increment</Button>
        </>
    )
}

function App() {



    return (
        <div className="App">
            <Comp />
        </div>
    )
}

export default App
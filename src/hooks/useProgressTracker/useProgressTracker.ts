import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const trackerAtom = atom(0)

interface A { }

interface C {}

function B() {
    const a = {} satisfies A;

    switch(a) {
        case a satisfies C: break;
        default: break
    }
}

export function useProgressTracker(tracker: typeof trackerAtom) {

    const [num, setNum] = useAtom(tracker)

    useEffect(() => {
        const interval = setInterval(() => { setNum(prev => prev + 1); console.log(num) }, 1000)

        return () => clearInterval(interval)

    }, [num])

    return { num }
}

function progress() { }
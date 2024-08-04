import { forwardRef, HtmlHTMLAttributes } from "react"
import { progressTheme } from "./Progress.theme"
import { cn } from "../../../utils/cn"

export interface ProgressProps extends HtmlHTMLAttributes<HTMLProgressElement> {
    min?: number,
    max?: number,
    value: number
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(({ min = 0, max = 100, value, className }, ref) => {
    const rootClassNames = {
        base: progressTheme.base
    }

    const rootCombinedClassName = cn(rootClassNames.base, className)

    function calculateProgress() {

        const maxminDiff = max - min;
        if (maxminDiff <= 0) return 0

        const minValue = value > min ? value - min : 0;

        const result = minValue < maxminDiff ? minValue/maxminDiff : 1;

        // console.log({ maxminDiff, minValue, result, value })

        return result * 100

        // if (value > max) return 100

        // const result = value / max

        // return result * 100

    }

    const width = calculateProgress();

    return (
        <div ref={ref} className={rootCombinedClassName} >
            <div style={{ width: `${width}%` }} className="bg-red-500 transition-[width] duration-500 border-e-slate-50">
                <div className="text-end font-medium px-2">{width.toPrecision(4) + "%"}</div>
            </div>
        </div>
    )
})

export default Progress
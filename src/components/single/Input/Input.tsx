import { forwardRef, InputHTMLAttributes } from "react";
import { InputSizeVariant, inputTheme, InputVariant } from "./Input.theme";
import { cn } from "../../../utils/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: keyof InputVariant
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, variant = "filled", ...props }, ref) => {
    const classNames = {
        base: inputTheme.base,
        variant: inputTheme.variant[variant]
    }

    const combinedClassName = cn(
        classNames.base,
        classNames.variant,
        className
    )

    return (
        <input {...props} ref={ref} className={combinedClassName} />
    )

})
Input.displayName = "Input O' Gami"

export default Input
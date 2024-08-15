import { forwardRef, ButtonHTMLAttributes } from "react";
import { ButtonSizeVarient, buttonTheme, ButtonVariant } from "./Button.theme";
import { cn } from "../../../utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: keyof ButtonSizeVarient
    variant?: keyof ButtonVariant
    fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        children,
        variant = "filled",
        size = "md",
        fullWidth,
        className,
        ...props
    }, ref) => {

        const classNames = {
            base: buttonTheme.base,
            variant: buttonTheme.variant[variant],
            size: buttonTheme.size[size],
            disabled: props.disabled ? buttonTheme.disabled : "",
            fullWidth: fullWidth ? buttonTheme.fullWidth : "",
        }

        const combinedClassName = cn(
            classNames.base,
            classNames.variant,
            classNames.size, 
            classNames.disabled,
            classNames.fullWidth,
            className
        )

        return (
            <button {...props} ref={ref} className={combinedClassName}>{children}</button>
        )
    })

Button.displayName = "Button O' Gami"

export default Button;
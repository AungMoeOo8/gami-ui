import { forwardRef, ButtonHTMLAttributes } from "react";
import { ButtonSizeVarient, buttonTheme, ButtonVariant } from "./Button.theme";
import { cn } from "../../../utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: keyof ButtonSizeVarient,
    variant?: keyof ButtonVariant
    fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, className, size = "md", variant = "filled", fullWidth, ...props }, ref) => {
        const classNames = {
            base: buttonTheme.base,
            size: buttonTheme.size[size],
            variant: buttonTheme.variant[variant],
            fullWidth: fullWidth ? buttonTheme.fullWidth : "",
            disabled: props.disabled ? buttonTheme.disabled : "",
        }

        const combinedClassName = cn(
            classNames.base,
            classNames.size,
            classNames.variant,
            classNames.fullWidth,
            classNames.disabled,
            className
        )

        return (
            <button {...props} ref={ref} className={combinedClassName}>{children}</button>
        )
    })

Button.displayName = "Button O' Gami"

export default Button;
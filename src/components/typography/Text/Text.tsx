import { forwardRef, HtmlHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import { TextSizeVariant, textTheme, TextWeightVariant } from "./Text.theme";

export interface TextProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
    size?: keyof TextSizeVariant,
    weight?: keyof TextWeightVariant
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(({ children, className, size = "sm", ...props }, ref) => {

    const classNames = {
        size: size satisfies keyof TextSizeVariant ? textTheme.size[size] : size
    }

    const combinedClassName = cn(classNames.size, className)
    return (
        <p {...props} ref={ref} className={combinedClassName}>{children}</p>
    )
})

export default Text;
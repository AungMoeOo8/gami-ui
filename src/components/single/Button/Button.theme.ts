export interface ButtonVariant {
    filled: string,
    outline: string,
    ghost: string
}

export interface ButtonSizeVarient {
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string,
}

interface ButtonTheme {
    base: string,
    size: ButtonSizeVarient,
    variant: ButtonVariant
    fullWidth: string,
    disabled: string
}

export const buttonTheme: ButtonTheme = {
    base: "btn",
    size: {
        xs: 'btn-xs',
        sm: 'btn-sm',
        md: 'btn-md',
        lg: 'btn-lg',
        xl: 'btn-xl',
    },
    variant: {
        filled: "btn-filled",
        outline: "btn-outline",
        ghost: "btn-ghost",
    },
    fullWidth: "w-full",
    disabled: "btn-disabled"
}
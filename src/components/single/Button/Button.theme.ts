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
    base: "px-4 py-2 rounded-[0.25rem] font-medium",
    size: {
        xs: 'text-[0.75rem]',
        sm: 'text-[0.875rem]',
        md: '',
        lg: 'text-[1.25rem]',
        xl: 'text-[1.5rem]',
    },
    variant: {
        filled: "bg-black text-white",
        outline: "border border-[#000]",
        ghost: "bg-[#e9e9e9] text-[#000]",
    },
    fullWidth: "w-full",
    disabled: "disabled:cursor-not-allowed disabled:text-[#a3a3a3] disabled:bg-[#e9e9e9] disabled:border-none"
}
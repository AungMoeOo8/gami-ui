export interface InputVariant {
    filled: string,
    outline: string
}

export interface InputSizeVariant {
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string
}

interface InputTheme {
    base: string,
    size: InputSizeVariant,
    variant: InputVariant
}

export const inputTheme: InputTheme = {
    base: "px-4 py-2 rounded-[0.25rem] opacity-80 focus:opacity-100 focus:outline focus:outline-blue-400 focus:border-0",
    size: {
        xs: "",
        sm: "",
        md: "",
        lg: "",
        xl: ""
    },
    variant: {
        filled: "bg-[#f1f3f5]",
        outline: "border border-[#c9c9c9]"
    }
}
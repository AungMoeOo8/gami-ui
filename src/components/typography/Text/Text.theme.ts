export interface TextSizeVariant {
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string
}

export interface TextWeightVariant {
    
}

interface TextTheme {
    size: TextSizeVariant
}

export const textTheme: TextTheme = {
    size: {
        xs: "text-[0.875rem]",
        sm: "",
        md: "text-[1.125rem]",
        lg: "text-[1.25rem]",
        xl: "text-[1.375rem]"
    }
}
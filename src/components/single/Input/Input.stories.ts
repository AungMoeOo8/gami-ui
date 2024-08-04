import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
    title: "UI/Input",
    component: Input,
    parameters: {
        layout: "centered"
    },
    argTypes: {
        variant: { control: "radio", options: ["filled", "outline"] }
    }
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Filled: Story = {
    args: {
        placeholder: "Try something",
        variant: "filled"
    }
}

export const Outline: Story = {
    args: {
        placeholder: "Try something",
        variant: "outline"
    }
}
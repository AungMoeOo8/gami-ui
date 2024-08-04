import { Meta, StoryObj } from "@storybook/react";
import Progress from "./Progress";

const meta = {
    title: "UI/Progress",
    component: Progress,
    parameters: {
        layout: "padded"
    },
    argTypes: {
        min: { control: "number" },
        max: { control: "number" },
        value: { control: "number" }
    }
} satisfies Meta<typeof Progress>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        min: 3,
        max: 6,
        value: 4
    }
}
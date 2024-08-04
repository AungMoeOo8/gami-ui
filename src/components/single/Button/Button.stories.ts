import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
    title: "UI/Button",
    component: Button,
    argTypes: {
        size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
        variant: { control: "select", options: ["filled", "outline", "ghost"] },
        fullWidth: { control: "boolean" },
        disabled: { control: "boolean" }
    },
    args: {
        children: "Button",
        size: "md",
        fullWidth: false,
        disabled: false
    }
} satisfies Meta<typeof Button>

export default meta;

type Story = StoryObj<typeof meta>

export const Filled: Story = {
    args: {
        variant: "filled",
    }
}

export const Outline: Story = {
    args: {
        variant: "outline",
    }
}

export const Ghost: Story = {
    args: {
        variant: "ghost",
    }
}

export const Disabled: Story = {
    args: {
        disabled: true
    }
}

export const FullWidth: Story = {
    parameters: {
        layout: "padded",
    },
    args: {
        variant: "filled",
        fullWidth: true
    }
};
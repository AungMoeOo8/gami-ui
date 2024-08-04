"use client"
import { Meta, StoryObj } from "@storybook/react";
import { atom } from "jotai";
import { useProgressTracker } from "./useProgressTracker";

const trackerAtom = atom(0)

const Comp = () => {
    const { num } = useProgressTracker(trackerAtom)
    return (
        <div>num is: {num}</div>
    )
}

const meta = {
    title: "Hooks/useProgressTracker",
    component: Comp,
} satisfies Meta<typeof Comp>

export default meta;

type Story = StoryObj<typeof Comp>

export const ProgressTracker: Story = {
    args: {}
}
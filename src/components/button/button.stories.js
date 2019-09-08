import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs"

import Button from "./button"

const variantOptions = {
    Primary: "primary",
    Secondary: "secondary",
    Success: "success",
    Danger: "danger",
    Warning: "warning",
    Info: "info",
    Light: "light",
    Dark: "dark",
    Link: "link"
}

const stories = storiesOf("Button", module)

stories.addDecorator(withKnobs)

stories.add("Default", () => <Button disabled={boolean("Disabled", false)}>{text("Label", "Default Button")}</Button>)
stories.add("Primary", () => (
    <Button variant={variantOptions.Primary} disabled={boolean("Disabled", false)}>
        {text("Label", "Primary Button")}
    </Button>
))
stories.add("Secondary", () => (
    <Button variant={variantOptions.Secondary} disabled={boolean("Disabled", false)}>
        {text("Label", "Secondary Button")}
    </Button>
))
stories.add("Success", () => (
    <Button variant={variantOptions.Success} disabled={boolean("Disabled", false)}>
        {text("Label", "Success Button")}
    </Button>
))
stories.add("Danger", () => (
    <Button variant={variantOptions.Danger} disabled={boolean("Disabled", false)}>
        {text("Label", "Danger Button")}
    </Button>
))
stories.add("Warning", () => (
    <Button variant={variantOptions.Warning} disabled={boolean("Disabled", false)}>
        {text("Label", "Warning Button")}
    </Button>
))
stories.add("Info", () => (
    <Button variant={variantOptions.Info} disabled={boolean("Disabled", false)}>
        {text("Label", "Info Button")}
    </Button>
))
stories.add("Light", () => (
    <Button variant={variantOptions.Light} disabled={boolean("Disabled", false)}>
        {text("Label", "Light Button")}
    </Button>
))
stories.add("Dark", () => (
    <Button variant={variantOptions.Dark} disabled={boolean("Disabled", false)}>
        {text("Label", "Dark Button")}
    </Button>
))
stories.add("Link", () => (
    <Button variant={variantOptions.Link} disabled={boolean("Disabled", false)}>
        {text("Label", "Link Button")}
    </Button>
))

stories.add("Disabled", () => (
    <Button disabled={true} variant={select("Variant", variantOptions, variantOptions.Primary)}>
        {text("Label", "Disabled Button")}
    </Button>
))

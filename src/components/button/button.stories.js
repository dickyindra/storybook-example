import React from "react"
import { storiesOf } from "@storybook/react"

import Button from "./button"

storiesOf("Button", module)
    .add("Primary", () => <Button>Primary Button</Button>)
    .add("Secondary", () => <Button variant='secondary'>Secondary Button</Button>)
    .add("Success", () => <Button variant='success'>Success Button</Button>)
    .add("Danger", () => <Button variant='danger'>Danger Button</Button>)
    .add("Warning", () => <Button variant='warning'>Warning Button</Button>)
    .add("Info", () => <Button variant='info'>Info Button</Button>)
    .add("Light", () => <Button variant='light'>Light Button</Button>)
    .add("Dark", () => <Button variant='dark'>Dark Button</Button>)
    .add("Link", () => <Button variant='link'>Link Button</Button>)

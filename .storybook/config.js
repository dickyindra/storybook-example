import { configure, addDecorator } from "@storybook/react"
import { addReadme } from "storybook-readme"
import "bootstrap/dist/css/bootstrap.min.css"

addDecorator(addReadme)

const req = require.context("../src/components", true, /\.stories\.js$/)

function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

### Usage

Buttons allow users to take actions, and make choices, with a single tap. Supports all default HTML Button properties. See Bootstrap Button for UI/UX information.

```js
import Button from "@components/button"

const ButtonWrapper = props => (
    <Button variant='primary' disabled={false} onClick={() => console.log("clicked")}>
        Label
    </Button>
)
```

<br/>

**Button Props**

| Name     | Required | type                                                                               | Default Value | Description            |
| -------- | -------- | ---------------------------------------------------------------------------------- | ------------- | ---------------------- |
| variant  | -        | **enum**<br/>primary, secondary, success, danger, warning, info, light, dark, link | primary       | Button variant         |
| disabled | -        | **bool**                                                                           | false         | Button disable state   |
| onClick  | -        | **func**                                                                           | -             | on click event handler |

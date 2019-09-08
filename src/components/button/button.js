import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const variant = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"]

const propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(variant)
}

const defaultProps = {
    type: "button",
    variant: "primary",
    disabled: false,
    onClick: () => {}
}

const Button = props => {
    const prefix = "btn"
    const classes = classNames(props.className, prefix, `${prefix}-${props.variant}`)

    return <button {...props} type={props.type} onClick={props.onClick} disabled={props.disabled} className={classes}></button>
}

Button.displayName = "Button"
Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button

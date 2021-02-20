import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import './Button.scss';

type ButtonProps = {
    children: React.ReactNode
}
const Button = (props: ButtonProps) => {
    return (
        <div className="button">
            {props.children}
        </div>
    )
}

export default Button;
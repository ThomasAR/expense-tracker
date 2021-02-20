import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import './Input.scss';

type InputProps = {
    type: string,
    options: Array<Object>
}
const Input = ({ type, options }: InputProps) => {
    
    return (
        type === "text" ?
        <input type="text" className="input" /> :
        type === "select" ?
        <select className="input">
            {options.map(option => <option>{"test"}</option>)}
        </select> : null
    )
}

export default Input;
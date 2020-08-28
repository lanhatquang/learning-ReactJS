import React from 'react';
import './Button.css';

const button = (props) => {
    let classes = ["Button"];
    classes.push(props.btnType);
    return (
        <button
            disabled={props.disabled}
            className={classes.join(' ')}
            onClick={props.clicked}
        >{props.children}</button>
    );
}

export default button;
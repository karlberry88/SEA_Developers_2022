import React from "react";
import PropTypes from 'prop-types';

const  ComponentWithProps = props => {
  return (
    <>
        <h1>{props.header}</h1>
        <p>{props.content}</p>
        <p>
            This is a number from props:
            {props.number}
        </p>
        <p>
            This is a display of a prop that doesn't exist: {props.nonexistent}
        </p>
    </>
    );
}

ComponentWithProps.propTypes = {
    header:  PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    number:  PropTypes.number.isRequired
};

ComponentWithProps.defaultProps = {
    header:  `Header from defaults`,
    content: `Content from defaults`,
    number:  10
};

export default ComponentWithProps;
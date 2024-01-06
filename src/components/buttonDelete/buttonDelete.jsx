import React from "react";

import PropTypes from "prop-types";

// const ButtonDelete = ({typeObject, id, onClick}) => {
const ButtonDelete = ({onClick}) => {

    return (
        <button onClick={onClick}>Del</button>
    );

}


ButtonDelete.propTypes = {
    // typeObject:PropTypes.string,
    // id:PropTypes.number,
    onClick:PropTypes.func,
} 


export default ButtonDelete;

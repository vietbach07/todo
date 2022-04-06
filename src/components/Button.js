import React, { useState, useEffect, useCallback } from "react";
import { COLOR } from "../utils/constants";

const Button = props => {
    const { children, type, ...rest } = props

    return <button
        style={{
            ...styles.button,
            backgroundColor: COLOR[type]
        }}
        {...rest}>
        {children}
    </button>
}

export default Button

const styles = {
    button: {
        fontSize: 15,
        border: '#BDBDBD solid 1px',
        width: '100%',
        padding: 8,
        borderRadius: 5,
        color: 'white',
        minWidth: 100,
    },
}
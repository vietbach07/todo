import React, { useState, useEffect, useCallback } from "react";

const Input = props => {

    return <div style={{ marginRight: 20 }}>
        <input style={styles.input} {...props} />
    </div>
}

export default Input

const styles = {
    input: {
        border: '#BDBDBD solid 1px',
        width: '100%',
        padding: 10,
        borderRadius: 5,
    },
}
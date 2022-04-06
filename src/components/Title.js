import React, { useState, useEffect, useCallback } from "react";

const Title = props => {
    const { children, ...rest } = props
    return <p style={styles.title} {...rest}>{children}</p>
}

export default Title

const styles = {
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
}
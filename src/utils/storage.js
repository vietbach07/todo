const getItem = (key) => {
    return localStorage.getItem(key)
}

const setItem = (key, value) => {
    return localStorage.setItem(key, value)
}

export {
    getItem,
    setItem,
}
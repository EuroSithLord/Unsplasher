export const addKeyword = (keyword) => {
    return {
        type: 'ADD_KEYWORD',
        payload: keyword
    }
}

export const removeKeyword = (keyword) => {
    return {
        type: 'REMOVE_KEYWORD',
        payload: keyword
    }
}
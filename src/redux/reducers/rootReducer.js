const initialState = {
    keywords: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case('ADD_KEYWORD'):{
            return {
                ...state, 
                keywords: [...state.keywords, action.payload]
            }
        }
        case('REMOVE_KEYWORD'):{
            let newKeywords = state.keywords.filter((keyword) => {
                return keyword != action.payload;
            });
            return {
                ...state, 
                keywords: newKeywords
            }
        }
        default: return state;
    }
}

export default rootReducer;
const initState = {
    data: [],
    typedNames:[],
    savedHistory: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOADING_DATA':
            return {
                ...state,
                data: action.payload
            }
        case "SET_NAME":
            return {
                ...state,
                typedNames: [...state.typedNames, action.payload]
            }
        case 'HISTORY_DATA_SET':
            return {
                ...state,
                savedHistory: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
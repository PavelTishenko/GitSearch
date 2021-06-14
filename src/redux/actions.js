export const LOADING_DATA = 'LOADING_DATA';
export const SET_NAME = 'SET_NAME';
export const HISTORY_DATA_SET = 'HISTORY_DATA_SET';

export const loadData = (data) => {
    return { 
        type: LOADING_DATA,
        payload: data
    }
}

export const writeName = (name) => {
    return {
        type: SET_NAME,
        payload: name
    }
}

export const setHistoryData = (data) => {
    return {
        type: HISTORY_DATA_SET,
        payload: data
    }
}
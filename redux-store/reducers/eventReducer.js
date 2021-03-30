import * as types from '../type'


const initialState ={
    events:null,
    event:null,
    isLoading:false,
    error:null
}



export const eventReducer = (state = initialState,action) => {
    switch(action.type){
        case types.GET_EVENTS:
            return {...state, events:action.payload}
        default:
            return state
    }
}

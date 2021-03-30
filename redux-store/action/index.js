import * as type from '../type'

//find event for router
export const findEventHandler = (year,month,callback) =>{
    callback(`/events/list/${year}/${month}`)
} 


//Example
// export const getEventsData= () => async dispatch => {
//     const res = await getEventsData()
//     dispatch({type:type.GET_EVENTS, payload:res.data})
// }    
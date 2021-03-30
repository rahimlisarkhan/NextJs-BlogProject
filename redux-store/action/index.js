import { getEventsData } from "../../api/event"
import * as type from '../type'

//find event for router
export const findEventHandler = (year,month,callback) =>{
    callback(`/events/list/${year}/${month}`)
} 


export const getEvents= () => async dispatch => {
 
    const res = await getEventsData()

    const events = [];

    for(const key in res.data){
        events.push({
            id:key,
            ...res.data[key]}
            )}

    dispatch({type:type.GET_EVENTS, payload:events})
    
}    
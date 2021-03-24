import EventItem from "./event-item"


let Eventlist = (props) => {

    const {items} = props

    return (
        <ul>
            {items.map(item => <EventItem/> )}
        </ul>
    )
}


export default Eventlist
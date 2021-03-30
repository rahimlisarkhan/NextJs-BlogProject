import EventItem from "./event-item"


let Eventlist = (props) => {

    const {items} = props

    return (
        <ul className='event-list'>
            {items && items.map(item => <EventItem key={item.id} item={item} /> )}
        </ul>
    )
}


export default Eventlist
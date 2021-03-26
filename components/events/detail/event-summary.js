

const EventSummary = (props) => {

    const  { title } = props

    return (
        <section className="event-details__title">
            <h1>{title}</h1>
        </section>
    )
}


export default EventSummary
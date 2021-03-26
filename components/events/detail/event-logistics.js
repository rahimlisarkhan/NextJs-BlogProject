import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdDateRange } from 'react-icons/md'
import LogisticsItem from './logistics-item'


const EventLogistics = (props) => {

   const {event} = props

   const humanDate = new Date(event.date).toLocaleString('en-Us',{
        day:'numeric',
        month:'long',
        year:'numeric' 
 })
   
   const addressText =  event.location.replace(',', '\n');

   return(
        <section className="event-details__info">

                <div className="event-details__info__img">
                     <img src={`/${event.image}`} alt={event.title}/>
                </div>  

                <div className="event-details__info__desc">
                    <ul>
                        <LogisticsItem icon={MdDateRange}>
                            <time>{humanDate}</time>
                        </LogisticsItem>

                        <LogisticsItem icon={HiOutlineLocationMarker}>
                            <time>{addressText}</time>
                        </LogisticsItem>
                    </ul>
                </div>

       </section>
   )
}

export default EventLogistics
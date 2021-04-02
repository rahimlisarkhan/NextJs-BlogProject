import Image from 'next/image'
import Button from '../ui/button'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdDateRange } from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'






let EventItem = (props) => {

    const { item } = props
          
    const humanDate = new Date(item.date).toLocaleString('en-Us',{
             day:'numeric',
             month:'long',
             year:'numeric' 
          })
    const formatAdress = item.location.replace(',', '\n')

    return(
        <li className='event-list__item'>
            <Image src={`/${item.image}`} alt='event' width={300} height={300} />
            
            <div className='event-list__item__info'>
                <div className='event-list__item__info__desc'>
                        <h2>{item.title}</h2>
                        <time><MdDateRange/>{humanDate}</time>
                        <address><HiOutlineLocationMarker/> {formatAdress}</address>
                </div>

                <div className='event-list__item__info__action'>
                    <Button link={`/events/list/${item.id}`}> Explore Event</Button>
                    <BsArrowRight/>
                </div>
            </div>
        </li>
    )
}


export default EventItem
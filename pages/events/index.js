import {useRouter} from 'next/router'
import {findEventHandler} from '../../redux-store/action'
import { initializeStore } from '../../redux-store/store'
import * as actionTypes from '../../redux-store/type'


//components
import Head from 'next/head'
import Layout from '../../components/layout/layout';
import Eventlist from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';
import { getEventsData } from '../../api/event';



let EventsPage = (props) => {

  const router = useRouter(),
        {eventPage} = props.initialReduxState

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="give a short or mid description about the content keywords of your website"
        />
        <meta
          name="description"
          content="give a short or mid description about the contents of your website"
        />
        <meta
          name="author"
          content="write the name of the author of the webpage"
        />
        {/* <meta name="refresh" content="50"/> */}
        <meta
          http-equi="refresh"
          content="5; url='write the url of your website'"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Layout>
          <EventSearch findEventHandler={(year,month) => findEventHandler(year,month,router.push)}/>
          <Eventlist items={eventPage.isFeatured} />
      </Layout>
      
    </>
  )
}


export async function getServerSideProps() {
  const reduxStore = initializeStore(),
       { dispatch } = reduxStore

  const res = await getEventsData()
  const events = [];
  for(const key in res.data){
    events.push({
      id:key,
      ...res.data[key]}
      )}
      
  const isFeatured =  events.filter(event => event.isFeatured)
  dispatch({type:actionTypes.IS_FEATURED, payload:isFeatured})  
  


  return { props: { initialReduxState: reduxStore.getState() } }
}

export default EventsPage
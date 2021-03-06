import {useRouter} from 'next/router'
import {findEventHandler} from '../../../redux-store/action'
import { initializeStore } from '../../../redux-store/store'
import { getEventsData } from '../../../api/event'
import * as actionTypes from '../../../redux-store/type'

import Head from 'next/head'
import Eventlist from '../../../components/events/event-list'
import EventSearch from '../../../components/events/event-search'
import Layout from '../../../components/layout/layout'


let EventsListPage = (props) => {

    const router = useRouter()

    const {eventPage} = props.initialReduxState

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
                <Eventlist items={eventPage.events} />
            </Layout>
        </>
    )
}



export async function getStaticProps() {
    const reduxStore = initializeStore(),
         { dispatch } = reduxStore
  
    const data = await getEventsData()
    dispatch({type:actionTypes.GET_EVENTS, payload:data})  

    return { props: { initialReduxState: reduxStore.getState() },revalidate:60 }
  }
  

export default EventsListPage
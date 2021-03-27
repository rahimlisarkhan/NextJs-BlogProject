import {useRouter} from 'next/router'
import {getAllEvents} from '../../../data/dummy-data'
import {findEventHandler} from '../../../action'

import Head from 'next/head'
import Eventlist from '../../../components/events/event-list'
import EventSearch from '../../../components/events/event-search'
import Layout from '../../../components/layout/layout'


let EventsListPage = () => {

    const allEvents = getAllEvents()
    const router = useRouter()
  
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
                <Eventlist items={allEvents} />
            </Layout>
        </>
    )
}

export default EventsListPage
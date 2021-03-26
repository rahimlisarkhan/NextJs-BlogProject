import Head from 'next/head'
import {useRouter} from 'next/router'
import Eventlist from '../../components/events/event-list';
import { getFeaturedEvents } from '../../data/dummy-data'
import Layout from '../../components/layout/layout';
import EventSearch from '../../components/events/event-search';



let EventsPage = () => {

  const featuredEvents = getFeaturedEvents()
  const router = useRouter()

  const findEventHandler = (year,month)=> {
    router.push(`/events/list/${year}/${month}`)

  }

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
          <EventSearch findEventHandler={findEventHandler}/>
          <Eventlist items={featuredEvents} />
      </Layout>
      
    </>
  );
};


export default EventsPage
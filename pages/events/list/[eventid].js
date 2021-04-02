import Head from "next/head";
import { getEventsData } from "../../../api/event";
import EventContent from "../../../components/events/detail/event-content";
import EventLogistics from "../../../components/events/detail/event-logistics";
import EventSummary from "../../../components/events/detail/event-summary";
import Layout from "../../../components/layout/layout";
import { getEventById } from "../../../data/dummy-data";
import { initializeStore } from "../../../redux-store/store";
import * as actionTypes from '../../../redux-store/type'

let EventDetailPage = (props) => {


  const {events} = props.initialReduxState.eventPage
  console.log(props);

  if (!events) {
    return <p>No event found!</p>;
  }

  return (
    <>
    <Head>

        <meta charset="UTF-8" />
        <meta
          name="name"
          content={events.description}
        />
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
        <title>{events.title}</title>
      </Head>
    <Layout>
        <div className="event-details">
            <EventSummary title={events.title} />
            <EventLogistics event={events} />
            <EventContent><p>{events.description}</p></EventContent>
        </div>
    </Layout>
    </>
);
};

export async function getStaticProps(context){
  const {params} = context

  const reduxStore = initializeStore(),
        {dispatch} = reduxStore

        const res = await getEventById(params.eventid)
        dispatch({type:actionTypes.GET_EVENTS, payload:res})  
        
      
        return { props: { initialReduxState: reduxStore.getState() },revalidate:30 }
}


export async function getStaticPaths(){
  const events = await getEventsData()

  const path = events.map(event =>({params:{eventid:event.id}}))

  return { 
    paths:path,
    fallback:'blocking'
  }

}


export default EventDetailPage;

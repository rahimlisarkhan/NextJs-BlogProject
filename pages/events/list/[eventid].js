import Head from "next/head";
import { useRouter } from "next/router";
import EventContent from "../../../components/events/detail/event-content";
import EventLogistics from "../../../components/events/detail/event-logistics";
import EventSummary from "../../../components/events/detail/event-summary";
import Layout from "../../../components/layout/layout";
import { getEventById } from "../../../data/dummy-data";

let EventDetailPage = () => {
  const router = useRouter();

  const event = getEventById(router.query.eventid);


  if (!event) {
    return <p>No event found!</p>;
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
        <div className="event-details">
            <EventSummary title={event.title} />
            <EventLogistics event={event} />
            <EventContent><p>{event.description}</p></EventContent>
        </div>
    </Layout>
    </>
);
};

export default EventDetailPage;

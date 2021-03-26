import { useRouter } from "next/router";
import {getFilteredEvents} from '../../../data/dummy-data'
import {findEventHandler} from '../../../action/'
import Loading from "../../../components/ui/loading";
import Eventlist from "../../../components/events/event-list";
import EventSearch from '../../../components/events/event-search'
import Layout from "../../../components/layout/layout";
import ErrorAlert from "../../../components/ui/error-alert";

let FilteredEventsPage = () => {
  const router = useRouter();

  if (!router.query.slug) { return <Loading />}

  const year = +router.query.slug[0],
        month = +router.query.slug[1],
        filterData = getFilteredEvents({year,month})
  
 
  if (!filterData || filterData.length === 0) { 
      return(
        <Layout>
            <EventSearch findEventHandler={(year,month) => findEventHandler(year,month,router.push)}/>
            <ErrorAlert><p>No events found</p></ErrorAlert>
        </Layout>
      )}

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) 
  { return( 
        <Layout>
            <EventSearch findEventHandler={(year,month) => findEventHandler(year,month,router.push)}/>
            <ErrorAlert>Invalid filter value </ErrorAlert>
        </Layout>
  )}


  return (
        <Layout>
            <EventSearch findEventHandler={(year,month) => findEventHandler(year,month,router.push)}/>
            <Eventlist items={filterData} />
        </Layout>
  );
};

export default FilteredEventsPage;

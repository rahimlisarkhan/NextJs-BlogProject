import { useRouter } from "next/router";
import {findEventHandler} from '../../../action/'
import Loading from "../../../components/ui/loading";
import Eventlist from "../../../components/events/event-list";
import EventSearch from '../../../components/events/event-search'
import Layout from "../../../components/layout/layout";
import ErrorAlert from "../../../components/ui/error-alert";
import { initializeStore } from "../../../redux-store/store";
import { getEventsData } from "../../../api/event";
import * as actionTypes from '../../../redux-store/type'


const FilteredEventsPage = (props) => {
  const router = useRouter();

  console.log(props);

  if (!router.query.slug) { return <Loading />}

  const year = +router.query.slug[0],
        month = +router.query.slug[1],
  
 
  // if (!filterData || filterData.length === 0) { 
  //     return(
  //       <Layout>
  //           <EventSearch findEventHandler={(year,month) => findEventHandler(year,month,router.push)}/>
  //           <ErrorAlert><p>No events found</p></ErrorAlert>
  //       </Layout>
  //     )}

  // if (
  //   isNaN(year) ||
  //   isNaN(month) ||
  //   year > 2030 ||
  //   year < 2021 ||
  //   month < 1 ||
  //   month > 12
  // ) 
  // { return( 
  //       <Layout>
  //           <EventSearch findEventHandler={(year,month) => findEventHandler(year,month,router.push)}/>
  //           <ErrorAlert>Invalid filter value </ErrorAlert>
  //       </Layout>
  // )}


  return (
        <Layout>
          <p>sdas</p>
            {/* <EventSearch findEventHandler={(year,month) => findEventHandler(year,month,router.push)}/> */}
            {/* <Eventlist items={filterData} /> */}
        </Layout>
  );
};



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

  let filteredEvents = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
      });
      
  dispatch({type:actionTypes.GET_EVENTS, payload:filteredEvents})  
  

  return { props: { initialReduxState: reduxStore.getState() } }
}




export default FilteredEventsPage;

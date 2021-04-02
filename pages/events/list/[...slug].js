import { useRouter } from "next/router";
import {findEventHandler} from '../../../redux-store/action'
import Loading from "../../../components/ui/loading";
import useSWR from "swr";
import Eventlist from "../../../components/events/event-list";
import ErrorAlert from "../../../components/ui/error-alert";
import EventSearch from '../../../components/events/event-search'
import Layout from "../../../components/layout/layout";
import { initializeStore } from "../../../redux-store/store";
import * as actionTypes from '../../../redux-store/type'
import { getFilteredEvents } from "../../../data/dummy-data";
import Head from "next/head";
// import { useEffect, useState } from "react";
// import { URL } from "../../../api/event";


// const { data, error } = useSWR(`${URL}/event.json`)
// const [loadedEvent, setLoadedEvents] = useState()


// useEffect(()=>{
//   const events = [];

//   for(const key in data){
//     events.push({
//       id:key,
//       ...res.data[key]}
//       )}

//       setLoadedEvents(events)
// },[data])



const FilteredEventsPage = (props) => {
  const router = useRouter(),
        {events} = props.initialReduxState.eventPage


  if (!events) { return <Loading />}

  //data not found
  if (!events || events.length === 0) { 
      return(
        <>
        <Head>  
          <meta name='description' content={`All events for ${router.query.slug[0]}`}/>
          <title>Filtered Events</title>
        </Head>
        <Layout>
            <EventSearch findEventHandler={(year,month) => findEventHandler(year,month,router.push)}/>
            <ErrorAlert><p>No events found</p></ErrorAlert>
        </Layout>
      </>
      )}

  //error message
  if (props.hasError){ 
    return( 
        <Layout>
            <EventSearch findEventHandler={(year,month) => findEventHandler(year,month,router.push)}/>
            <ErrorAlert>Invalid filter value </ErrorAlert>
        </Layout>
  )}


  return (
        <Layout>
            <EventSearch findEventHandler={(year,month) => findEventHandler(year,month,router.push)}/>
            <Eventlist items={events} />
        </Layout>
  );
};



  
export async function getServerSideProps(context){

  const {params} = context

  const reduxStore = initializeStore(),
        {dispatch} = reduxStore;
      
  const year = +params.slug[0],
        month = +params.slug[1];

  const filterData = getFilteredEvents({year, month})
  dispatch({type:actionTypes.GET_EVENTS, payload:filterData})  


  if (isNaN(year) ||
      isNaN(month) ||
      year > 2030 ||
      year < 2021 ||
      month < 1 ||
      month > 12){ 
      return{ 
      props:{hasError:true}}}

    //reduxstore
    return { props: { initialReduxState: reduxStore.getState() } }

}


export default FilteredEventsPage;

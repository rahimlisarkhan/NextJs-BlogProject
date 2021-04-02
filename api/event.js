import axios from "axios"


export const URL = 'https://nextjs-blog-79d6b-default-rtdb.firebaseio.com/'
// export const getEventsData = () => axios.get('https://nextjs-blog-79d6b-default-rtdb.firebaseio.com/events.json')

export async function getEventsData(){
 
  const res = await axios.get('https://nextjs-blog-79d6b-default-rtdb.firebaseio.com/events.json')
  
  const events = [];

  for(const key in res.data){
    events.push({
      id:key,
      ...res.data[key]}
      )}

      return events
}  

 export async function getFeaturedEvents(){

  const allEvents = await getEventsData()
  allEvents.filter(event => event.isFeatured);
} 
   
export async function getEventById(id){

  const allEvents = await getEventsData()
  allEvents.find((event) => event.id === id);

}
  

export async function getFilteredEvents(dateFilter){
  const allEvents = await getEventsData()
  const { year, month } = dateFilter;

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}

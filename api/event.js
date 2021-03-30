import axios from "axios"


export const getEventsData = () => axios.get('https://nextjs-blog-79d6b-default-rtdb.firebaseio.com/events.json')
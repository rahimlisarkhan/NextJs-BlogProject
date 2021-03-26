//Action
//find event for router
export const findEventHandler = (year,month,callback) =>{
    console.log('action' + year + ' ' + month); 
    console.log('action' + callback); 

    callback(`/events/list/${year}/${month}`)

} 

// callback(`/events/list/${year}/${month}`)
  
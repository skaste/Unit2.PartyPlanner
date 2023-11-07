// console.log(`Party test`)
//user is able to find the name of events happening
//a delete button is added next to each event that removes it from the list
//user can submit a new event to the site
//user observes their party added to the list of event

const getAllEvents = async () => {
  const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/events`);
  const eventSchedule = await response.json();
  const eventListiing = eventSchedule.results;
  renderAllEvents(eventListing);
  
};

const renderAllEvents = (listOfEvents) => {
  
}
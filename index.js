// // console.log(`Party test`)
// //user is able to find the name of events happening
// //a delete button is added next to each event that removes it from the list
// //user can submit a new event to the site
// //user observes their party added to the list of event
// const state={
//  allEvents =[];
// };

// const getAllEvents = async () => {
//   const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/events`);
//   const eventSchedule = await response.json();
//   const eventListing = eventSchedule.results;
//   renderAllEvents(eventListing);
//   console.log(getAllEvents);
// }

// const renderAllEvents = (listOfEvents) => {
//   const main = documents.querySelector(`main`);
//   const h2 = document.createElement (`h2`);
//   h2.innerText = `Event Listing`;
//   main.appendChild(h2);


// //   const eventListingElements = listOfEvents.map((singleEvent) =>{
// //     return `<li>${singleEvent.event}</li>`;
// //     });

// //   const ul = document.querySelector(`ul`);
// //     ul.innerHTML = eventListingElements.join(``);
// //     main.appendChild(ul);
// // };

// getAllEvents();

//---------------------------------walk through---------------------------//
const apiBaseURL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/`

const state = {
  allEvents: [], //would replace const events = jsonResponse.data for faster response--works like RAM in computer
  
}

const main = document.querySelector(`main`);

const getAllEvents = async () => {
  const response =  await fetch(apiBaseURL + "events");
  const jsonResponse =  await response.json();
  // const events = jsonResponse.data;    --replaced by state
  state.allEvents = jsonResponse.data;

  renderAllEvents();
}

const getEventDetails = async (id) => {
  const response = await fetch(`${apiBaseURL}/events/${id}`);
  const responseJson = await response.json();
  const eventDetails = responseJson.data
  renderDetails(eventDetails);
}

const renderDetails = (detailsOfEvent) => {//create a name for parameter detailsOfEvent |------this is where it broke------|
  const html =`
  <h2>${detailsOfEvent.name}</h2> 
  <p>${detailsOfEvent.description}</p>
  <button id="back-button">go Back To List</button>
  `;
  main.innerHTML = html;

  const backButton = document.querySelector(`#back-button`);
  console.log(backButton);
  backButton.addEventListener(`click`, () => {//go to state where back button can go back to the state
    renderAllEvents();
  });
 
}

//------------below shows on page--------------//

const renderAllEvents = () => {
  const partyNames = state.allEvents.map((singleParty) => {
      return `<li id="${singleParty.id}">${singleParty.name}</li>`//returns the .name from state.allEvents
  });
  console.log(partyNames);
 //[`<li>NameofParty</li>`]


 //---------------adds li to the ol in main---------//
 const ol = document.createElement(`ol`);
 ol.innerHTML = partyNames.join('');
//  const main = document.querySelector(`main`);  Move to global to use elsewhere
 main.replaceChildren(ol); //had to get rid of appendChild to replaceChildren so the back button will return only the ol and not all the details with it
 console.log(ol);

//------------------create listener-----------------//
 const listItems = document.querySelectorAll(`li`);
//------------create loop to add event listener to each li-----------//
listItems.forEach((partyListItem) => {
partyListItem.addEventListener(`click`, (event) => {
  console.log(event.target.id);
  getEventDetails(event.target.id);
});
});
}
getAllEvents();



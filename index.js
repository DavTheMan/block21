
const APIURL= `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2309-FTB-ET-WEB-PT/`;
const partyContainer = document.getElementById('all-parties-container');
const newPartyFormContainer = document.getElementById('new-party-form');
const states = {
    recipes: [],
    //parties: [],
    artists: [],
    events: [],
    guests: [],
    rsvps: [],
}
const partyList = document.querySelector("#partyList");
const partyForm = document.querySelector("#addParty");
//partyForm.addEventListener("submit", addParty);

/*async function init(){
    //const parties = await getEvents();
    //await getRecipes();
    //await getArtists();
    await getEvents();
    await getGuests();
    await getRsvps();
    renderAllParties(parties);
    addNewParty(parties);
}
init();*/


//init();

const getRecipes = async () => {
    try {
        const response = await fetch(APIURL + "recipes");
        const json = await response.json();
        return json.data.recipes;
    } catch (err) {
        console.error('Uh oh, trouble finding recipes!', err);
    }
};
const getArtists = async () => {
    try {
        const response = await fetch(APIURL + "artists");
        const json = await response.json();
        return json.data.artists;
    } catch (err) {
        console.error('Uh oh, trouble finding artists!', err);
    }
};
const getEvents = async () => {
    try {
        const response = await fetch(APIURL + "events");
        const json = await response.json();
        return json.data.events;
    } catch (err) {
        console.error('Uh oh, trouble finding events!', err);
    }
};
const getGuests = async () => {
    try {
        const response = await fetch(APIURL + "guests");
        const json = await response.json();
        return json.data.guests;
    } catch (err) {
        console.error('Uh oh, trouble finding guests!', err);
    }
};
const getRsvps = async () => {
    try {
        const response = await fetch(APIURL + "rsvps");
        const json = await response.json();
        return json.data.rsvps;
    } catch (err) {
        console.error('Uh oh, trouble finding rsvps!', err);
    }
};
/*const addParty = async (event) => {
    event.preventDefault();
    try{
        const 
    }
};*/
//partyForm.addEventListener("submit",addNewParty);
const addNewParty = async (partyObj) => {
    //event.preventDefault();
    try {
        const response = await fetch(APIURL + "events", 
            {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({  
                name: partyObj.name,
                description: partyObj.description,
                date: partyObj.date,
                location: partyObj.location
            }),
          });
        init();
    } catch (err) {
        console.error('Oops, something went wrong with adding that party!', err);
    }
};
//partyForm.addEventListener("submit",addNewParty);
/*const addNewParty = async () => {
    .preventDefault();
    try {
        const response = await fetch(APIURLEVENTS);
        const json = await response.json();
        return json.data.parties;
    } catch (err) {
        console.error('Oops, something went wrong with adding that party!', err);
    }
};*/
const addNewRecipe = async (recipeObj) => {
    try {
        const response = await fetch(APIURLGUESTS, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({  Recipe: recipeObj.name}),
          });
        init();
    } catch (err) {
        console.error('Oops, something went wrong with adding that recipe!', err);
    }
};
const addNewArtist = async (artistObj) => {
    try {
        const response = await fetch(APIURL + "guests", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({  Artist: artistObj.name}),
          });
        init();
    } catch (err) {
        console.error('Oops, something went wrong with adding that artist!', err);
    }
};
const addNewGuest = async (event, partyId) => {
    try {
        const response = await fetch(APIURL + "guests", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({  Name: event.target[0].value,
              Email: event.target[1].value,
              Phone: event.target[2].value,
            }),
          });
        addNewRSVP(states,guest[states.guests.length -1].id, partyId);
        init();
    } catch (err) {
        console.error('Oops, something went wrong with adding that guest!', err);
    }
};
const addNewRSVP = async (guestId, eventId) => {
    try {
        const response = await fetch(APIURL + "rsvps", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({  guestId: guestId,
              eventId: eventId
            }),
          });
        init();
    } catch (err) {
        console.error('Oops, something went wrong with adding that rsvp!', err);
    }
};
let loneParty;
const renderAllParties = async (partyList) => {
    
    try {
        /*if (loneParty){
            const lonePartyObj = await getEvents(loneParty);
            const importantParty = document.createElement("div");
            importantParty.setAttribute("id", "importantParty");
            importantParty.innerHTML = `<br>
            <h1>Great Party: ${lonePartyObj.party.name}</h1>
            <br> 
            <p>Date: ${lonePartyObj.party.status}<p>
            <br>
            <p>Date: ${lonePartyObj.party.status}<p>
            <br>
            <p>Location: ${lonePartyObj.party.status}<p>
            <br>
            <br>`;
            const backButton = document.createElement("button");
            backButton.innerText = "Return to all Parties";
            importantParty.append(backButton);
            backButton.addEventListener("click", () => {
                loneParty = undefined;
                init();
            });
            partyContainer.replaceChild(importantParty);
            //playerContainer.style.justifyContent = "flex-start";
        }
        if (!partyList){
            partyContainer.innerHTML = "<p>No partiest to be had.<p>"
        }*/
        //else{
            const partiesCard = partyList.map((party) => {
                let rsvpNum = 0;
                states.rsvps.forEach((rsvp) => {
                    if(rsvp.eventId === party.id){
                        rsvpNum++;
                    }
                });
                const card = document.createElement("div");
                card.setAttribute("class", "card");
                card.innerHTML = `<br>
                    <h1>Great Party: ${party.name}</h1>
                    <br>
                    <p>Description: ${lonePartyObj.party.status}<p>
                    <br>
                    <p>Date: ${lonePartyObj.party.status}<p>
                    <br>
                    <p>Location: ${lonePartyObj.party.status}<p>
                    <br>
                    <p>RSVP: ${rsvpNum}<p>
                    <br>`;
                const br = document.createElement("p");
                br.innerHTML = `<br>`;
                card.append(br);
                const deleteButton = document.createElement("button");
                deleteButton.setAttribute("class", "deleteButton");
                deleteButton.innerText = "Delete this party";
                card.append(deleteButton);
                deleteButton.addEventListener("click", () => {removeParty(party.id)});
                
                return card;
            })
            partyContainer.replaceChildren(...partyCards);
            partyContainer.style.justifyContent = "flex-start";
        //}
    } catch (err) {
        console.error('Uh oh, trouble rendering parties!', err);
    }
};
const renderNewPartyForm = () => {
    try {
        const form = document.createElement("form");
        form.setAttribute("id", "newPartyForm");
        form.innerHTML = `<br>
            <label>
                Party Name
                <input type="text" name="name" />
            </label>
            <label>
                Party Description
                <input type="text" name="description" />
            </label>
            <label>
                Date
                <input type="text" name="date" />
            </label>
            <label>
                Location
                <input type="text" name="location"/>
            </label>
            <button>Add Party</button>`;
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formObj = {
                //id: event.target[0].value,
                name: event.target[0].value,
                description: event.target[1].value,
                date: event.target[2].value,
                location: event.target[3].value,
            }
            addNewParty(formObj);
        });
        newPartyFormContainer.replaceChildren(form);
    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
}
const init = async () => {
    const parties = await getEvents();
    //await getGuests();
    //await getRsvps();
    renderAllParties(parties);

    renderNewPartyForm();
}
init();
/*const init = async () => {
    const parties = await getEvents();
    await getRecipes();
    await getArtists();
    //await getEvents();
    await getGuests();
    await getRsvps();
    renderAllParties(parties);
    addNewParty();
}

init();
/*function getArtists(){}
function getEvents(){}
function getGuests(){}
function getRsvps(){}
function deleteParty(){}
function parties(){}*/
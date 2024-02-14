
const APIURL= `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2309-FTB-ET-WEB-PT/`;
const partyContainer = document.getElementById('all-parties-container');
const newPartyFormContainer = document.getElementById('new-party-form');
const states = {
    //recipes: [],
    //parties: [],
    //artists: [],
    events: [],
    guests: [],
    //rsvps: [],
}

//const partyForm = document.querySelector("#addParty");
const partyList = document.querySelector('#partyList');
//partyForm.addEventListener("submit", addParty);



const getEvents = async () => {
    try {
        const response = await fetch(APIURL + "events");
        const json = await response.json();
        states.events = json.data;
        //return json.data.events;
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
//let loneParty;
const removeParty = async (partyId) => {
    try {
        const response = await fetch(`${APIURL}events/${partyId}`, {
            method: 'DELETE',
          });
        init();
    } catch (err) {
        console.error(
            `Whoops, trouble removing party #${partyId} from the roster!`,
            err
        );
    }
};
function renderAllParties () {
    try {
        
        if (!states.events.length){
            partyContainer.innerHTML = "<p>No partiest to be had.<p>"
            return;
        }
        else{
            const partiesCard = states.events.map((party) => {
                //const cardOne = document.createElement("li");
                const card = document.createElement("div");
                card.setAttribute("class", "card");
                card.innerHTML = `<br>
                    <h1>${party.name}</h1>
                    <br>
                    <p>${party.description}<p>
                    <br>
                    <p>${party.date}<p>
                    <br>
                    <p>${party.location}<p>
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

            partyContainer.replaceChildren(...partiesCard);
            partyContainer.style.justifyContent = "flex-start";
        }
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
                <input type="text" name="name" autocomplete="name"/>
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
async function init () {
    await getEvents();
    //await getGuests();
    //await getRsvps();
    renderAllParties();

    renderNewPartyForm();
}
init();

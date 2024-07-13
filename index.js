const prcieSpan = document.querySelector("#avg-price");
const freelancerList = document.querySelector("#freelancers");

/* State */
//Here, we define variables for the data that our program needs to remember. 
//We call this data "state" because it represents the state of our program. 

const freelancers = [
    { name: "Dr. Slice", price: 25, occumpation: "gardener" },
    { name: "Dr. Pressure", prcie: 51, occumpation: "programmer" },
    { name: "Prof. Possibility", proce: 43, occumpation: "teacher" },
];

const names = ["Waldo", "Tony", "Hubert"];
const occupations = ["ML Engineer", "Lawyer", "Electrician"];
const prices = [100, 200, 300];
// const limit = 10;

// remove the interval after 10 added - see the colors project 
// 'setInterval' will call 'addFreelancer' every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later. 
//Calling 'clearInterval(addShaepIntervalId)' will stop the interval. 
const addFreeLancerIntervalId =  setInterval(addFreelancers, 3000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state. 
 * The term "render" is often used to describe this process. 
 */
function render() {
    const listings = freelancers.map((person) => {
        const newListing = document.createElement("li");
        newListing.innerText = "Name: ${person.name} Occupation: ${person.occupation} Price: $${person.price}";
        return newListing;
    });
    freelancerList.replaceChildren(...listings);
}

/** 
 * Add random
 */

function addFreelancers() {
    // TOD0: Create arrays for names, occupations and prices
     
        const name = names[Math.floor(Math.random() * names.length)];
        const occupation = occupations[Math.floor(Math.random() * occupations.length)];
        const price = prices[Math.floor(Math.random() * prices.length)];
        const newFreelancer = {name, occupation, price};
    freelancers.push(newFreelancer);
    const averageRate = freelancers.reduce((total, currentItem) => total += currentItem.price, 
    0
) / freelancers.length;
prcieSpan.innerText = averageRate.toFixed(2)
    render();
}

console.log("hi!");

const getCountryByName = async (countryName) => {
    // prints to the console
    // const countryResponse = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    // const jsonData = await countryResponse.json();
    // const showResponse = console.log(jsonData);

    // diplay country on webpage
    const countryResponse = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const jsonData = await countryResponse.json();
    // grabbing section tag by its id
    const countrySection = document.querySelector("#countryCollection");
    // creating a new element to be added into the section
    const newElement = document.createElement("p");
    // giving p element text property, which is the name of the inputted country from the json data
    newElement.textContent = "Name: " + jsonData[0].name.common + "." + " Population: " + jsonData[0].population; 

    // Creating a h2 help with formatting
    const heading2 = document.createElement("h2");
    heading2.textContent = "Chosen Country Information:";
    countrySection.appendChild(heading2);

   // add the new element with the country's name to the section tag.
    countrySection.appendChild(newElement);

    // document.getElementById("countryCollection").innerHTML = "";

 
    

    // fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    // .then((response) => {
    //     return response.json()
    //     .then((jsonData) => {
    //         console.log(jsonData);
    //     })
    // })

    // const heading3 = document.createElement("h2");
    // heading3.textContent = "Information of All Countries:";
    // countrySection.appendChild(heading3);

}


getCountryByName("Portugal");

const getAllCountries = async (event) => {
    
        // display all countries on webpage with their name and population
        const allCountriesResponse = await fetch(" https://restcountries.com/v3.1/all");
        const dataJson = await allCountriesResponse.json();
        const countrySection = document.querySelector("#countryCollection");
        dataJson.map((country) => {
            const newElement3 = document.createElement("p");
            newElement3.textContent = "Name: " + country.name.common + "." +  " Population: " + country.population;
            countrySection.appendChild(newElement3);

            document.getElementById("countryCollection").innerHTML = "";
        });

}
getAllCountries();

// Form
const countryForm = async (event) => {

    event.preventDefault();

    const inputCountryResponse = await fetch(" https://restcountries.com/v3.1/all");
    const jsonData = await inputCountryResponse.json();

    const countries = document.querySelector("#countryForm");
    
    const countryItem = document.createElement("p");
    countryItem.textContent = getCountryByName(event.target.country.value);

    countries.appendChild(countryItem);
}

const countries = document.getElementById("countryForm");

countries.addEventListener("submit", countryForm); 












// const countryForm = async (event) => {
//     // prevents defauly behaviour
//     event.preventDefault();
//      const inputCountryResponse = await fetch(" https://restcountries.com/v3.1/all");
//     const jsonData = await inputCountryResponse.json();
//     const countries = document.querySelector("#countryForm");
    
//     const countryItem = document.createElement("p");
//     countryItem.textContent = getCountryByName(event.target.inputCountry.value);

//     countries.appendChild(countryItem);

// }

// const countries = document.getElementById("countryForm");

// countries.addEventListener("submit", countryForm);    


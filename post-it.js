let usernameElement = document.getElementById("Name");
let companyElement = document.getElementById("Company");
let infoElement = document.getElementById("info")

let button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

// // Set database object here
const database = firebase.database().ref()


/**
 * Updates the database with the username and message.
 */

function updateDB(event){
    event.preventDefault();

    const username        = usernameElement.value;
    const info            = infoElement.value;
    const company         = companyElement.value;

    console.log("Name:" + username + "Company:" + company+ "Info" + info);

    //Update database here
    const value = {
        NAME : username,
        COMPANY:company,
        MESSAGE: info,
    }

    database.push(value);

    usernameElement.value = "";
    infoElement.value  = "";
    companyElement.value = "";
}

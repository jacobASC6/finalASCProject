
// // Set database object here
const database = firebase.database().ref()


////////////////////////////////////////////////////////////////

// This is for the home page
// Set database "child_added" event listener here
database.on("child_added" , addMessagesToBoard);





function addMessagesToBoard(rowData){
    const row = rowData.val();
    const name = row.NAME;
    const company = row.COMPANY;
    const info = row.MESSAGE;
    let interest = false;

    let divMessages  = document.querySelector(".allMessages");

    let nombreElement=document.createElement('p');
    let compElement = document.createElement('p');
    let informationElement = document.createElement('p');
    let pElement = document.createElement('p');
    

    nombreElement.innerText=`Name: ${name}`
    nombreElement.style.textAlign = 'Center';

    compElement.innerText= `Company: ${company}`
    compElement.style.textAlign = 'Center';

    informationElement.innerText = `Info: ${info}`;
    informationElement.style.textAlign = 'Center';
    informationElement.style.width = 'auto';
    
    pElement.appendChild(nombreElement);
    pElement.appendChild(compElement);
    pElement.appendChild(informationElement);

    pElement.style.display = 'flex';
    pElement.style.flexDirection = 'column';
    pElement.style.width = '290px';
    pElement.style.height = '350px';
    pElement.style.border='3px solid purple';
    pElement.style.margin='0px';
    pElement.style.padding ='5px';
    
    let sexyDiv = document.createElement('div');
    sexyDiv.style.border='6px solid black';
    sexyDiv.style.borderRight='7px solid black';
    sexyDiv.style.width='305px';
    sexyDiv.style.height='365px';
    sexyDiv.style.justifyContent='center';
    sexyDiv.style.marginRight='50px';
    sexyDiv.style.marginTop= '50px';
    sexyDiv.style.backgroundColor= 'white';
 
    sexyDiv.appendChild(pElement);
    

    divMessages.appendChild(sexyDiv);

    divMessages.style.display= 'flex';
    divMessages.style.flexDirection = 'row-reverse'; 
    divMessages.style.flexWrap= 'wrap-reverse';
    

    function markAsApplied(){
        interest = true;
        if(interest==true){
            let appliedBanner = document.createElement('p');
            appliedBanner.style.display='flex';
            appliedBanner.innerText= `${company} knows you are interested!`;
            appliedBanner.style.color = 'rgba(0,175,0)';
            appliedBanner.style.justifyContent ='center'
            pElement.appendChild(appliedBanner);
            interest=false;
        }
        console.log(interest);
        sexyDiv.removeEventListener('click',markAsApplied);
    }

    sexyDiv.addEventListener('click',markAsApplied);
}




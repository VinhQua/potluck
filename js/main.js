const addGuestBtn = document.querySelector(".add-guest .invite");
const guestName = document.querySelector(".add-guest #invite");
const guestList = document.querySelector(".guest-list-container .guest-list");
const guestCount = document.querySelector(".guest-list-container .attendees .attendance");
const guestLabel = document.querySelector(".add-guest label");
const guestFull = document.querySelector(".add-guest .alert");
const footer = document.querySelector("footer");

guestName.addEventListener("keydown",function(e){
    if (e.key === "Enter"){
        const guest = guestName.value;
        addToList(guest);
        updateGuestNum();
        clearInput();        
    }
});

addGuestBtn.addEventListener('click',function(){
    const guest = guestName.value;
    addToList(guest);
    updateGuestNum();
    clearInput();
});

const addToList=  function(guest){
    if (guest !== ""){
        let guestListItem = document.createElement("li");
        guestListItem.innerText = guest;
        guestList.append(guestListItem); 
    }
};

const updateGuestNum = function(){
    let allGuest = document.querySelectorAll(".guest-list-container .guest-list li").length;
    if (allGuest > 0){
        guestCount.innerText = allGuest;
        if (allGuest >= 8){
          addGuestBtn.classList.add("hide");
          guestLabel.classList.add("hide");
          guestName.classList.add("hide");
          guestFull.classList.remove("hide");
          footer.classList.remove("hide");
        //guestCount.innerText = "GUEST LIST IS FULL!";  
        } 
    } 
};
const clearInput = function(){
    guestName.value = "";
};
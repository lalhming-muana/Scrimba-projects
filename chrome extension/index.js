let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
    renderLeads();
    inputEl.value = "";
})

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
function renderLeads(){
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
     // Wrap the lead in an anchor tag (<a>) inside the <li>
     // Can you make the link open in a new tab?
    // listItems += "<li><a href='"+ myLeads[i] +"'target='_blank'>" + myLeads[i] +"</a></li>" ;
    listItems += `<li>
                    <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a>
                </li>` ;
}
// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems;
}



// template strings/literals
const recipient = "James"
const sender = "Alvin"

// Refactor the email string to use template strings
const email = `Hey ${recipient}!
               How is it going? 
               Cheers, 
               ${sender}`

console.log(email)


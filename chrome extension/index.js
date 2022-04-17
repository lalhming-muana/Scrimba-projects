let myLeads =[];
const inputElem = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el");


inputBtn.addEventListener("click", function(){

    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"

    myLeads.push(inputElem.value);
    console.log(myLeads);
})

// Log out the items in the myLeads array using a for loop 
for(let i=0; i<myLeads.length; i++){
    ulEl.innerHTML +="<li>"+ myLeads[i] + "</li>";
    
}
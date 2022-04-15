let myLeads =[];
const inputElem = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn")


inputBtn.addEventListener("click", function(){
    myLeads.push("www.awesomelead.com");
    console.log(myLeads);
})
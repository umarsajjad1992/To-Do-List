var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputValue(){
    return input.value
}
function addItem(){
    var li = document.createElement("li");
    var button = document.createElement("button")
    button.appendChild(document.createTextNode("Delete"));
    li.appendChild(button);
    li.appendChild(document.createTextNode(" "+input.value));
    ul.appendChild(li);
    button.addEventListener('click',deleteItem);
    ul.addEventListener("click",checkItem);
    input.value="";
}
function addItemAfterClick(){
    if (inputValue()!==""){
        addItem();
    }
}
function addItemAfterEnter(event){
    if (inputValue()!=="" && event.which === 13){
        addItem();
    }
}
function checkItem(event){
    if(event.target.tagName==="LI"){
        event.target.classList.toggle("done");
    }
}
function deleteItem(event){
    this.parentNode.parentNode.removeChild(this.parentNode);
}
button.addEventListener("click", addItemAfterClick);
input.addEventListener("keypress", addItemAfterEnter);

const input = document.getElementById("todolist");
const list = document.getElementById("list");

function addtask(){
    if(input.value === ''){
        alert("You must write something !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value ="";
}

list.addEventListener("click", function(e){
 if(e.target.targetName === "LI"){
    e.target.classList.toggle("checked");
 }
 else if(e.target.targetName === "SPAN"){
    e.target.parentElement.remove();
 }
}, false);
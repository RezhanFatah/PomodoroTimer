const startEl = document.getElementById("start");
const pauseEl = document.getElementById("pause");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("Time");

let interval;
let timeLeft = 1500;

function updateTimer(){    
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, '0')}:
    ${seconds.toString().padStart(2, '0')}`;
    timerEl.innerHTML = formattedTime;
}
function start(){
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time is Up!");
            timeLeft=1500;
            updateTimer();
        }
    }, 1000);
    console.log("start");

}
function pause(){
    clearInterval(interval);
}
function reset(){
    clearInterval(interval);
    console.log("reset");
    timeLeft = 1500;
    updateTimer();
}
function addTask(e){
    e.preventDefault();
    if(inputBox.value ===""){
        alert("DO SOMETHING! GET TO WORK!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // Fixed typo from innerHTLM to innerHTML
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();
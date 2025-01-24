const mainCountdown = document.getElementById('mainCountdown');
const closeCountdown = document.getElementById('closeCountdown');

const mainDate = new Date(2025, 0, 26, 16, 0, 0).getTime();
let closeDate = new Date();
closeDate.setHours(23, 55, 0);
closeDate = closeDate.getTime();

function getTimeFormat(element, distance){
    if (distance < 0) return "S'ha acabat!";

    var hours = Math.floor(distance / (1000 * 60 * 60)).toString();
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
    var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString();

    if (hours.length == 1) hours = '0' + hours;
    if (minutes.length == 1) minutes = '0' + minutes;
    if (seconds.length == 1) seconds = '0' + seconds;

    if (hours == 0 && !element.classList.contains("alerting")) {
        element.classList.add("alerting");
    }

    return hours + ":" + minutes + ":" + seconds;
    
}

setInterval(function(){

    let now = new Date().getTime();

    let mainDist = mainDate - now;

    let closeDist = closeDate - now;

    mainCountdown.innerText = getTimeFormat(mainCountdown, mainDist);
    closeCountdown.innerText = getTimeFormat(closeCountdown, closeDist);


}, 1000);




// store hourse minute and seconds by 0

let [seconds, minutes, hourse] = [0, 0, 0];

// target the ids and classes
const displaytime = document.getElementById('displaytime');

// create one let varitable timer is null
let timer = null


// create one function for stop watch
function stopwatch() {
    // increase seconds
    seconds++;
    // second are equal to 60
    if (seconds == 60) {
        // then seconds is 0
        seconds = 0;
        // increase minute by 1
        minutes++;
        // also minuter equal to 60
        if (minutes == 60) {
            // then minute is 0
            minutes = 0;
            // increase hourse by 1
            hourse++;
            // if hourse is equal to 24
            if (hourse == 24) {
                // then hourse is 0
                hourse = 0
            }
        }
    }

    // this statement check if h,m,s is less then 10 the nadding 1 0 in the start
    let h = hourse < 10 ? '0' + hourse : hourse;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;

    // display that argument in the displaytime 
    displaytime.innerHTML = h + ":" + m + ":" + s;
}


// start watch function
function watchstart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    // define the speed of the stopwatch
    timer = setInterval(stopwatch, 1000);
}


// stop watch function
function watchstop() {
    clearInterval(timer);
}
// watch reset function
function watchreset() {
    clearInterval(timer);
    // reset the seconds time and hourse
    let [seconds, minutes, hourse] = [0, 0, 0];
    // display the defalut argument
    displaytime.innerHTML = "00:00:00";
}
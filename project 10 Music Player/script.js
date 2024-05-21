


// define ids and classes 
let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');


// after onload the data it will go to the function and check the program of the song
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

// this is the play post function added to the cong controls
function playPause() {
    // if this class name is available the song will be pause
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        // then user can click that icon it will remove and change the icon and control
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");

    } else {
        song.play();
        // then user can click that icon it will remove and change the icon and control
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

// progress bar will be match the song speed and timing using set interval function
if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

// if songs are play the user can click any where in the progress bar then song are start that position
progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}
"use strict";

const kick = document.getElementById("kick")
,clap = document.getElementById("clap")
,hat = document.getElementById("hat")
,snare = document.getElementById("snare");


document.addEventListener("keydown", (event)=>{
    if(event.key.toLowerCase() === "d"){
        kick.classList.add("active");
        const kickAudio = new Audio("src/kick.wav");
        kickAudio.play();
    }
});
kick.addEventListener("click", ()=>{
    const kickAudio = new Audio("src/kick.wav");
    kickAudio.play();
})
document.addEventListener("keyup", (event) => {
    if(event.key.toLowerCase() === "d"){
        kick.classList.remove("active");
    }
});

// clap

document.addEventListener("keydown", (event)=>{
    if(event.key.toLowerCase() === "f"){
        clap.classList.add("active");
        const clapAudio = new Audio("src/clap.wav");
        clapAudio.play();
    }
});
clap.addEventListener("click", ()=>{
    const clapAudio = new Audio("src/clap.wav");
    clapAudio.play();
})
document.addEventListener("keyup", (event) => {
    if(event.key.toLowerCase() === "f"){
        clap.classList.remove("active");
    }
});

// hat

document.addEventListener("keydown", (event)=>{
    if(event.key.toLowerCase() === "j"){
        hat.classList.add("active");
        const hatAudio = new Audio("src/hihat.wav");
        hatAudio.play();
    }
});
hat.addEventListener("click", ()=>{
    const hatAudio = new Audio("src/hihat.wav");
    hatAudio.play();
})
document.addEventListener("keyup", (event) => {
    if(event.key.toLowerCase() === "j"){
        hat.classList.remove("active");
    }
});

// snare

document.addEventListener("keydown", (event)=>{
    if(event.key.toLowerCase() === "k"){
        snare.classList.add("active");
        const snareAudio = new Audio("src/snare.wav");
        snareAudio.play();
    }
});
snare.addEventListener("click", ()=>{
    const snareAudio = new Audio("src/snare.wav");
    snareAudio.play();
})
document.addEventListener("keyup", (event) => {
    if(event.key.toLowerCase() === "k"){
        snare.classList.remove("active");
    }
});
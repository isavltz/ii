// JavaScript Document
console.log("Harley Quinn");

const image1 = document.getElementById("myImage1");
const image2 = document.getElementById("myImage2");
const image3 = document.getElementById("myImage3");
const image4 = document.getElementById("myImage4");
const image5 = document.getElementById("myImage5");
const image6 = document.getElementById("myImage6");


const text1 = document.getElementById("imageText1");
const text2 = document.getElementById("imageText2");
const text3 = document.getElementById("imageText3");
const text4 = document.getElementById("imageText4");
const text5 = document.getElementById("imageText5");
const text6 = document.getElementById("imageText6");

var audio = document.querySelector("audio");
var audioButton = document.getElementById("audioButton");

var disappearingElement = document.getElementById("disappearingElement");
var header = document.querySelector ("header")

var informationBackground = document.querySelector("section:nth-of-type(2)");

disappearingElement.addEventListener("click", function() {
    header.style.display = "none";
});

audioButton.addEventListener("click", function() {
    audio.play();
});
audioButton.addEventListener("dblclick", function() {
    audio.pause();
});



image1.addEventListener("click", function() {
    if(text1.classList.contains("hide")){
        informationBackground.classList.add("informationBackground");
        text1.style.display = "block";
        text2.style.display = "none";
        text3.style.display = "none";
        text4.style.display = "none";
        text5.style.display = "none";
        text6.style.display = "none";
    } else {
        text1.style.display = "none";
    }

});


image2.addEventListener("click", function() {
    if (text2.classList.contains("hide")) {
        informationBackground.classList.add("informationBackground");
        text2.style.display = "block";
        text1.style.display = "none";
        text3.style.display = "none";
        text4.style.display = "none";
        text5.style.display = "none";
        text6.style.display = "none";
    } else {
        text2.style.display = "none";
    }
});

image3.addEventListener("click", function() {
    if (text3.classList.contains("hide")) {
        informationBackground.classList.add("informationBackground");
        text3.style.display = "block";
        text1.style.display = "none";
        text2.style.display = "none";
        text4.style.display = "none";
        text5.style.display = "none";
        text6.style.display = "none";
    } else {
        text3.style.display = "none";
    }
});

image4.addEventListener("click", function() {
    if (text4.classList.contains("hide")) {
        informationBackground.classList.add("informationBackground");
        text4.style.display = "block";
        text1.style.display = "none";
        text2.style.display = "none";
        text3.style.display = "none";
        text5.style.display = "none";
        text6.style.display = "none";
    } else {
        text4.style.display = "none";
    }
});

image5.addEventListener("click", function() {
    if (text5.classList.contains("hide")) {
        informationBackground.classList.add("informationBackground");
        text5.style.display = "block";
        text1.style.display = "none";
        text2.style.display = "none";
        text3.style.display = "none";
        text4.style.display = "none";
        text6.style.display = "none";
    } else {
        text5.style.display = "none";
    }
});

image6.addEventListener("click", function() {
    if (text6.classList.contains("hide")) {
        informationBackground.classList.add("informationBackground");
        text6.style.display = "block";
        text1.style.display = "none";
        text2.style.display = "none";
        text3.style.display = "none";
        text4.style.display = "none";
        text5.style.display = "none";
    } else {
        text6.style.display = "none";
    }
});
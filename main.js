//TODO-> Code Refactoring 🙄
//TODO-> Improve Site Functionality 🙄

var compNet = document.getElementById("computerNetworks"); // Computer Networks Node
var aiNode = document.getElementById("artificialIntelligence"); //AI Node
var webNode = document.getElementById("webDev"); // Web Development Node
var pythonNode = document.getElementById("python") // Python Node
var defaultNode = document.getElementById("default") // Default Node
var dronesNode = document.getElementById("uav-operations") // Drones Node
var mainHeader = document.getElementById("main-header") // principal header
var documentFooter = document.getElementById("portfolioFooter") // portfolio footer
var droneAudio = document.getElementById("techDroneAudio") // background audio used in drone Node
var aiAudio = document.getElementById("aiAudio") // background audio used in the Artificial Intelligence Node

//^ Portfolio Document Main Components
var sidebar = document.getElementById("sidebar");
var hamburguer = document.getElementById("sidebar-hamburguer");     
var main_header = document.getElementById("main-header");
var main_content = document.getElementById("principal-content");

function closeNav()
{
    //& Close sidebar menu
    sidebar.style.width ="0px";
    hamburguer.style.visibility = "visible";
    main_header.style.width = "100%";
    main_content.style.marginLeft = "0px";
}

function openNav()
{
    sidebar.style.width = "160px";
    hamburguer.style.visibility = "hidden";
    main_content.style.marginLeft = "155px";
}

function displayNet()
{
    //& Display computer network content

    closeNav()
    pauseDroneAudio()
    pauseAI()

    compNet.style.display = "block";
    aiNode.style.display = "none";
    webNode.style.display = "none";
    pythonNode.style.display = "none";
    defaultNode.style.display = "none";
    dronesNode.style.display = "none";
    mainHeader.innerHTML = "Computer Network 📡";

}

function displayAI()
{
    //& Display Artificial Intelligence content

    compNet.style.display = "none";
    aiNode.style.display = "block";
    webNode.style.display = "none";
    pythonNode.style.display = "none";
    defaultNode.style.display = "none";
    dronesNode.style.display = "none";
    mainHeader.innerHTML = "Artificial Intelligence 🤖";
    aiAudio.volume = 0.5;
    aiAudio.play();
    droneAudio.pause();
    droneAudio.loop = "true";

    closeNav() //^ Calling the closing sidebar method
    pauseDroneAudio()
}

function displayWeb()
{
    compNet.style.display = "none";
    defaultNode.style.display = "none";
    aiNode.style.display = "none";
    webNode.style.display = "block";
    pythonNode.style.display = "none";
    dronesNode.style.display = "none";
    mainHeader.innerHTML = "Web Development";

    closeNav()
    pauseDroneAudio()
    pauseAI()

}

function displayPython()
{
    closeNav() //^ Calling the closing sidebar method

    compNet.style.display = "none";
    aiNode.style.display = "none";
    webNode.style.display = "none";
    pythonNode.style.display = "block";
    defaultNode.style.display = "none";
    dronesNode.style.display = "none";
    main_header.innerHTML = "Python";
    documentFooter.style.display = "none";
    droneAudio.pause();
    aiAudio.pause();
}

//! Drones Section

let slideIndex = [1,1];
let slideId = ["ruralArea1"]
showSlides(1,0);

function plusSlides(n,no)
{
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n,no)
{
    let i;
    let x = document.getElementsByClassName(slideId[no]);

    if(n > x.length)
    {
        slideIndex[no] = 1
    }
    if(n <1)
    {
        slideIndex[no] = x.length
    }

    for(i = 0; i < x.length; i++)
    {
        x[i].style.display = "none";
    }
    x[slideIndex[no]-1.].style.display = "block";
}

 function displayIoT()
 {
    //& Displaying IoT related content 👇🏻

    closeNav() //Close the sidebar navigation.
    pauseAI() //Pause AI audio

    compNet.style.display = "none";
    aiNode.style.display = "none";
    webNode.style.display = "none";
    pythonNode.style.display = "none";
    defaultNode.style.display = "none";
    dronesNode.style.display = "block";

    mainHeader.innerHTML = "Internet of Things";
    documentFooter.style.display = "block";
    droneAudio.volume = 0.5; // 50% audio volume
    droneAudio.play(); // play background audio.
    droneAudio.loop = true; // always playing audio at 50% volume
 }

 setTimeout(offerServices,60000)

 function offerServices()
 {
    //& Function triguered after 60 seconds time event of user engagement.

    alert("Available for employment, business, and/or freelance services 💼");
 }

 function pauseDroneAudio()
 {
    //! Drone Background Audio is paused
    droneAudio.pause();
 }
 function pauseAI()
 {
    //! AI Background Audio is paused
    aiAudio.pause();
 }

 function playDroneAudio()
 {
    //! Drone Background Audio is played
    droneAudio.play();
 }
 function playAI()
 {
    //! AI Background Audio is played
    aiAudio.play();
 }
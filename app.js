const PlayButton = document.getElementById("play")
const MyVideo = document.querySelector("video")

let isVideoPlaying = false;

function playVideo() {
    //playing the video
    isVideoPlaying = true
    PlayButton.classList.replace("fa-play", "fa-pause")
    MyVideo.play()
}


function pauseVideo() {
    //pause the video
    isVideoPlaying = false
    PlayButton.classList.replace("fa-pause", "fa-play")

    MyVideo.pause()
}

function controlVideo() {
    //logic to play the video and pause the video
    if (isVideoPlaying) {
        pauseVideo()
    }
    else {
        playVideo()
    }

}


const MyProgressBar = document.getElementById("progress-bar")
const Duration = document.getElementById("duration")
const CurrentTime = document.getElementById("current-time")


PlayButton.addEventListener("click", controlVideo)


// ASSIGNMENT
// Create a reusable function that reduces the length of the code written for currentTime and duration. 
// ======================
// SOLUTION
// ======================
// Calculate display time format
// function displayTime(time) {
//     const minutes = Math.floor(time / 60);
//     let seconds = Math.floor(time % 60);
//     seconds < 10 ? seconds = `0${seconds}` : seconds;
//     return `${minutes}:${seconds}`;
//   }
  
//   // Update progress bar as video plays
//   function updateProgress() {
//     MyProgressBar.style.width = `${(MyVideo.currentTime / MyVideo.duration) * 100}%`;
//     CurrentTime.textContent = displayTime(MyVideo.currentTime);
//     Duration.textContent = displayTime(MyVideo.duration);
// }







MyVideo.addEventListener("timeupdate", function (event) {

    // console.log(event)
    //logic currenttime & Duration 
    let MyCurrentTime = MyVideo.currentTime
    let MyDuration = MyVideo.duration
    console.log(MyCurrentTime, MyDuration)

    let progressPercentage = (MyCurrentTime / MyDuration) * 100 //gives the total percentage of the video already played
    console.log(progressPercentage)
    MyProgressBar.style.width = `${progressPercentage}%`

    //logic for duration(80.14) --->Minutes(1),second(20)

    const durationInMinutes = Math.floor(MyDuration / 60)
    console.log(durationInMinutes)

    let durationInSeconds = Math.floor(MyDuration % 60)
    console.log(durationInSeconds)


    if (durationInSeconds <= 9) {
        durationInSeconds = `0${durationInSeconds}`
    }

    Duration.innerText = `${durationInMinutes}:${durationInSeconds}`


    // **************************************************************************



    const currentTimeInMinutes = Math.floor(MyCurrentTime / 60)
    console.log(currentTimeInMinutes)

    let currentTimeInSeconds = Math.floor(MyCurrentTime % 60)
    console.log(currentTimeInSeconds)


    if (currentTimeInSeconds <= 9) {
        currentTimeInSeconds = `0${currentTimeInSeconds}`
    }

    CurrentTime.innerText = `${currentTimeInMinutes}:${currentTimeInSeconds}`
})


const ProgressRange = document.getElementById("progress-range")
ProgressRange.addEventListener("click", function (event) {
    //logic to move the orange color bar to that location
    // console.log(event)

    // totalWidth = "720px"//after console log event we can get the offset width(total width )
    //offsetx=187px //after console log event in the inspect we can see offsetx


    //total distance of the black color bar --->500px,distance from where clicked 100px

    const totalWidth = event.srcElement.offsetWidth
    // console.log(totalWidth)

    const totalWidthFromStart = event.offsetX
    // console.log(totalWidthFromStart)

    const totalWidthFromEnd = event.offsetY
    // console.log(totalWidthFromEnd)



    let ClickPercentage = (totalWidthFromStart / totalWidth) * 100
    console.log(ClickPercentage)

    MyProgressBar.style.width = `${ClickPercentage}%`


    //console.log(totalWidthFromStart / totalWidth) * MyVideo.duration
    MyVideo.currentTime = (totalWidthFromStart / totalWidth) * MyVideo.duration
})

const VolumeRange = document.getElementById("volume-range")
const VolumeBar = document.getElementById("volume-bar")
VolumeRange.addEventListener("click", function (event) {
    console.log(event)

    //logic to control the volume of video
    const totalWidth = event.srcElement.offsetWidth
    const totalWidthFromStart = event.offsetX
    console.log(totalWidthFromStart / totalWidth)
    let volumeBarPercentage = ((totalWidthFromStart / totalWidth) * 100)
    VolumeBar.style.width = `${volumeBarPercentage}%`

    let VolumeInfo = totalWidthFromStart / totalWidth //data present b/w 0 -1

    if(VolumeInfo < 0.5)
    {
        MyVideo.volume = 0.2 // 0--->No Sound & 1----> Max sound
    }
    else{
        MyVideo.volume = 1
    }
})

const Volume = document.getElementById("volume")

let isMuted = false

function mute()
{
    isMuted = true
//logic to make video sound = 0.replace volume button to mute button
MyVideo.volume = 0
Volume.classList.replace("fa-volume-up","fa-volume-mute")
VolumeBar.style.width = `${0}%`

}

function unmute()
{
isMuted = false
//logic to make the sound work,replce mute button with actual volume button
const totalWidth = event.srcElement.offsetWidth
const totalWidthFromStart = event.offsetX
let volumeBarPercentage = ((totalWidthFromStart / totalWidth) * 100)
    VolumeBar.style.width = `${volumeBarPercentage}%`

    let VolumeInfo = totalWidthFromStart / totalWidth //data present b/w 0 -1

    if(VolumeInfo < 0.5)
    {
        MyVideo.volume = 0.2 // 0--->No Sound & 1----> Max sound
    }
    else{
        MyVideo.volume = 1
    }
Volume.classList.replace("fa-volume-mute","fa-volume-up")
}


Volume.addEventListener("click",function()
{
if(isMuted)
{
unmute()
}
else
{
mute()
}
})

const Speed = document.getElementById("speed")

Speed.addEventListener("change",function()
{
//console.log(Speed.value)

MyVideo.playbackRate = Speed.value
})


const FullScreen = document.getElementById("fullscreen")
const PlayerContainer = document.getElementById("player-container")
let fullscreen = false

function displayFullscreen(container)
{
//logic to display the screen in full screen mode 
if(container.requestFullscreen)
{
    container.requestFullscreen()
}

}

function closeFullscreen(container)
{
//logic to close the video whic is all ready fullscreen

if(container.exitFullscreen)
{
    container.exitFullscreen()
}
}




FullScreen.addEventListener("click",function(){

//logic to expand the fullscreen
if(!fullscreen)
{
    displayFullscreen(PlayerContainer)
}
else{
    closeFullscreen(PlayerContainer)
}


})
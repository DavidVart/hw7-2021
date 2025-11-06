let video = document.querySelector("#player1")

window.addEventListener('load', function() {
	console.log("Page loaded");
	video.autoplay = false;
	video.loop = false;
});

function play(){
	console.log("In play")
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
}
document.querySelector("#play").addEventListener("click", play);


function pause(){
	console.log("In pause")
	video.pause()
}
document.querySelector("#pause").addEventListener("click", pause);

function slower(){
	console.log("In slower")
	console.log("Current speed is ", video.playbackRate)
	video.playbackRate = video.playbackRate * 0.9
	console.log("New speed is ", video.playbackRate)
}
document.querySelector("#slower").addEventListener("click", slower);

function faster(){
	console.log("In faster")
	console.log("Current speed is ", video.playbackRate)
	video.playbackRate = video.playbackRate / 0.9
	console.log("New speed is ", video.playbackRate)
}
document.querySelector("#faster").addEventListener("click", faster);

function skip(){
	console.log("In skip")
	console.log("The duration is", video.duration)
	console.log("Current location is ", video.currentTime)
	if(video.currentTime + 10 > video.duration){
		video.currentTime = 0
	} else {
		video.currentTime = video.currentTime + 10
	}
	console.log("New location is ", video.currentTime)
}
document.querySelector("#skip").addEventListener("click", skip);

function mute(){
	if(video.muted){
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
		console.log("Unmuted")
	} else {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
		console.log("Muted")
	}
}
document.querySelector("#mute").addEventListener("click", mute);

function oldSchool(){
	console.log("Old School")
	video.classList.add("oldSchool")
}
document.querySelector("#vintage").addEventListener("click", oldSchool);

function orig(){
	console.log("Original")
	video.classList.remove("oldSchool")
}
document.querySelector("#orig").addEventListener("click", orig);

function volume(){
	video.volume = slider.value / 100
	document.querySelector("#volume").innerHTML = slider.value + "%"
	console.log("Volume is ", video.volume)
}
document.querySelector("#slider").addEventListener("input", volume);
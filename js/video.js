var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

});

/*Pause Button: Pause the video.*/

document.querySelector("#pause").addEventListener
("click", function() {
	console.log("Pause Video");
	video.pause();
});


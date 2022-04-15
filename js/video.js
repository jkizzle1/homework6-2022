var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

/*Play Button: Play the video and update the volume information. */
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

/*Slow Down: Slow the current video speed by 5% each time 
the button is clicked and log the new speed to the console.  */





var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

/* Play Button: Play the video and update the volume information.
NOT FINISHED */ 
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

});

/* Pause Button: Pause the video.*/

document.querySelector("#pause").addEventListener
("click", function() {
	console.log("Pause Video");
	video.pause();
});

/* Slow Down: Slow the current video speed by 5% each time 
the button is clicked and log the new speed to the console.  */

document.querySelector("#slower").addEventListener
("click", function() {
	video.playbackRate *= 0.95;
	console.log("The new speed is " + video.playbackRate);
});

/* Speed Up: Increase the current video speed each time the button is clicked 
and log the new speed to the console.  Change it by an amount 
proportional to the slow down. CHECK THIS!!  If you slow down 
three times and then speed up three times you should be within 
5 digits of 100% again.*/



/* Skip Ahead: Advance the current video by 15 seconds.  If the video length 
has been exceeded go back to the start of the video - no farther. 
Log the current location of the video.*/



/* Mute: Mute/unmute the video and update the text in the button.*/


/* Volume Slider:Change the volume based on the slider and update the volume information.*/

document.querySelector("#slider").addEventListener
("change", function() {
	var val = document.getElementById("slider").value;
	video.volume = val / 100;
	document.querySelector("#volume").innerHTML = val + "%";
});


/* Styled: Utilize the existing oldSchool class on the video element*/




/*Original: Remove the oldSchool class from the video.*/





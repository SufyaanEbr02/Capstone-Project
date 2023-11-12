$(document).ready(function() {
    function fadeLoop() {
        //Fade out the image over 3 seconds, then fade it in over 3 seconds
        $("#fadeImage").fadeOut(6000, function() {
            $("#fadeImage").fadeIn(6000, fadeLoop);
        });
    }

    //Start the fade in/out loop
    fadeLoop();
});


$(document).ready(function() {
    function pulse() {
        //Animate the element with the ID 'pulseImage'
        $("#pulseImage").animate({ 
            opacity: 0.3,
        }, 1000, function() {
            $(this).animate({
                opacity: 1,
            }, 1000);
        });
    }

    //Start the pulse animation when the page loads
    setInterval(pulse, 2000);
});

//Fading the body in and out over a period of 3 seconds
$(document).ready(function() {
    $("body")
        .fadeOut(1000)
        .fadeIn(1000);
});

$(document).ready(function () {
    let rotationAngle = 0;
    //Function to rotate the image repeatedly
    function rotateImage() {
        rotationAngle += 5; 
        $("#rotateImage").css({
            transform: `rotate(${rotationAngle}deg)`,
            transition: "transform 0.5s linear"
        });
    }

    //Start the rotation animation when the page loads
    setInterval(rotateImage, 50); //Adjust the interval for smoother or faster rotation
});
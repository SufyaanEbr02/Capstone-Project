//Fading the body in and out over a period of 3 seconds
$(document).ready(function() {
    $("body")
        .fadeOut(1000)
        .fadeIn(1000);
});
//Waiting for the document to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
    //Getting all elements with the "like-button" and "save-button" classes
    const likeButtons = document.querySelectorAll(".like-button");
    const saveButtons = document.querySelectorAll(".save-button");
    const savedItems = [];
    //Adding click event listeners to the "Like" buttons
    likeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            //Getting the product associated with the button
            const product = this.getAttribute("data-product");
            if (button.textContent === "Like") {
                button.textContent = "Liked";
                button.style.backgroundColor = "red";
            } else {

                button.textContent = "Like";
                button.style.backgroundColor = "aqua";
            }
        });
    });
     //Adding click event listeners to the "Save for Later" buttons
    saveButtons.forEach((button) => {
        button.addEventListener("click", function () {
            //Getting the product and image associated with the button
            const product = this.getAttribute("data-product");
            const image = this.getAttribute("data-image");

            if (!savedItems.some((item) => item.product === product)) {
                savedItems.push({ product, image });
                //Displaying an alert with the number of items saved for later
                alert(`Added ${savedItems.length} item${savedItems.length > 1 ? 's' : ''} to be saved for later.`);
            }

            //Storing saved items in session storage
            sessionStorage.setItem("savedItems", JSON.stringify(savedItems));
        });
    });
});
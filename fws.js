//Toggle the "show" class of the dropdown content when clicking the button
function myFunction() {
    document.getElementById("dropdown-content").classList.toggle("show");
}
//Close the dropdown if the user clicks outside the button
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//Add a class to the image when hovered
$('.description img').hover(function () {
    //Add the 'shake' class to the image
    $(this).addClass('shake');
}, function () {
    //Remove the 'shake' class when the hover ends
    $(this).removeClass('shake');
});

//Fading the body in and out over a period of 3 seconds
$(document).ready(function() {
    $("body")
        .fadeOut(1000)
        .fadeIn(1000);
});

function saveItemForLater(type, elementId) {
    //Get the count of saved items from sessionStorage or initialize it to 0
    let savedItemCount = parseInt(sessionStorage.getItem("savedItemCount")) || 0;

    //Increment the count
    savedItemCount++;

    //Update the count in sessionStorage
    sessionStorage.setItem("savedItemCount", savedItemCount);

    //Display an alert with the updated count
    alert(`Number of items saved items = ${savedItemCount}`);

    //Save the item based on its type with a unique key
    if (type === 'table') {
        const tableHTML = document.querySelector('.my-fitness table').outerHTML;
        const headingHTML = document.querySelector('.my-fitness h1').outerHTML;
        let savedTables = JSON.parse(sessionStorage.getItem("savedTables")) || [];
        savedTables.push(headingHTML + tableHTML);
        sessionStorage.setItem("savedTables", JSON.stringify(savedTables));
    } else if (type === 'image' && elementId) {
        const imageElement = document.getElementById(elementId);
        const imageURL = imageElement.src;
        let savedImages = JSON.parse(sessionStorage.getItem("savedImages")) || [];
        savedImages.push(imageURL);
        sessionStorage.setItem("savedImages", JSON.stringify(savedImages));
    }
}

//Defining an event listener for all like forms with the "like-form" class
document.querySelectorAll(".like-form").forEach(function(likeForm) {
    likeForm.addEventListener("submit", function (e) {
        //Preventing the default form submission
        e.preventDefault();

        //Getting the item type from the data attribute
        const item = likeForm.dataset.itemType;
        //Getting the unique item identifier
        const itemId = likeForm.dataset.itemId;

        //Constructing a key for the item using the item type and item ID
        const itemKey = `${item}-${itemId}`;

        //Checking if the item is already liked
        const isLiked = sessionStorage.getItem(itemKey) === "true";

        //Displaying alerts when the user likes it and if they've already liked it
        if (!isLiked) {
            sessionStorage.setItem(itemKey, "true");
            alert("You've liked this item!");
        } else {
            alert("You've already liked this item.");
        }
    });
});
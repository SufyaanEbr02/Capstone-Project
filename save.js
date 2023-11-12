//Waiting for the document to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
    //Getting the show saved items button and the container for saved items
    const savedItemsButton = document.getElementById("showSavedItems");
    const savedItemsDiv = document.getElementById("saved-items");
    let isSavedItemsVisible = false;

     //Adding a click event listener to the button to show items
    savedItemsButton.addEventListener("click", function () {
        if (!isSavedItemsVisible) {
            //Retrieve saved items from session storage and display them
            const savedItems = JSON.parse(sessionStorage.getItem("savedItems")) || [];

            savedItemsDiv.innerHTML = `<ul>${savedItems.map(
                (item) => `<li><img src="${item.image}" alt="${item.product}">${item.product}</li>`
            )}</ul>`;
            savedItemsDiv.style.display = "block";
        } else {
            //Hide the saved items container
            savedItemsDiv.style.display = "none";
        }
         //Toggle the visibility of saved items
        isSavedItemsVisible = !isSavedItemsVisible;
    });
});

//Adding a submit event listener to the "Comment Form"
document.getElementById("comment-form").addEventListener("submit", function (e) {
    e.preventDefault();

    //Get the input values
    const name = document.getElementById("comment-name").value;
    const message = document.getElementById("comment-message").value;

    //Clear the input fields
    document.getElementById("comment-name").value = "";
    document.getElementById("comment-message").value = "";

    //Show a "Thank You" alert
    alert(`Thank you for your comment, ${name}!`);
});
//Adding a submit event listener to the "Contact Form"
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    //Get the input values
    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const message = document.getElementById("contact-message").value;

    //Clear the input fields
    document.getElementById("contact-name").value = "";
    document.getElementById("contact-email").value = "";
    document.getElementById("contact-message").value = "";

    //Show a "Thank You" alert
    alert(`Thank you for contacting us, ${name}!, we'll reach out to you in 24 to 48 hours!`);
});
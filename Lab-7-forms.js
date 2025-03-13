window.onload = domReady;

function domReady() {
    // Step 1: Get references to all HTML elements we need
var form = document.forms['form_ship']; // Reference the form by its name
var nameField = document.getElementById("in_Name"); // Name input
var postalCodeField = document.getElementById("in_pc"); // Postal Code input
var thanksMessage = document.getElementById("thanks_msg"); // Thank you message
var thanksCustomer = document.getElementById("thanksCustomer"); // Name in the thank you message
var thanksPC = document.getElementById("thanksPC"); // Postal code in the thank you message
var submitButton = form.querySelector("input[type='submit']"); // Reference the submit button

    // Step 2: Ensure the thank you message is hidden initially
    thanksMessage.style.display = "none";

    // Step 3: Attach event listener to the submit button's click event
    submitButton.addEventListener('click', function(event) {
        // Prevent form submission (keep the page from reloading)
        event.preventDefault();

        // Step 4: Get the values of the input fields
        var name = nameField.value;
        var postalCode = postalCodeField.value;

        // Step 5: Validate Name
        if (name === "") {
            alert("Name must be filled out");
            return false;
        }

        // Step 6: Validate Postal Code
        if (postalCode === "") {
            alert("Postal code must be filled out");
            return false;
        }

        // Step 7: Hide the form after successful validation
        form.style.display = "none";

        // Step 8: Customize the thank you message
        thanksCustomer.innerHTML = name;
        thanksPC.innerHTML = postalCode;

        // Step 9: Show the thank you message
        thanksMessage.style.display = "block";

        // Return false to prevent form submission and keep the page from reloading
        return false;
    });
}






/* LAB 7 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
	name: "",
	pc: "",
	speed: "",
	cost: 0
};

//==== CREATE YOUR PSEUDOCODE COMMENTS FIRST

//WAIT FOR THE PAGE TO LOAD



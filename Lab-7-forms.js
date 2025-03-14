window.onload = domReady;

function domReady() {

    //when the page finishes loading, get the form and all associated elements 
    var form = document.forms['form_ship']; 
    var nameField = document.getElementById("in_Name");
    var postalCodeField = document.getElementById("in_pc");
    var thanksMessage = document.getElementById("thanks_msg"); 
    var submitButton = form.querySelector("input[type='submit']"); 


    // Hide the thank you message initially
    thanksMessage.style.display = "none";

    // Attach event listener to the submit button's click event
    submitButton.addEventListener('click', function(event) {

        // Prevent form submission (keep the page from reloading)
        event.preventDefault();

        // Get the values of the input fields
        var name = nameField.value.trim();
        var postalCode = postalCodeField.value.trim();

        // Check fields in order and focus on the first empty one
        if (name === "") {
            nameField.style.backgroundColor = "red";
            nameField.focus();
            return; // Stop further execution
        }

        if (postalCode === "") {
            postalCodeField.style.backgroundColor = "red";
            postalCodeField.focus();
            return; // Stop further execution
        }

        // Hide the form after successful validation
        form.style.display = "none";

        // Store the values in variables
        var customerName = `${name}`;
        var customerPostalCode = `${postalCode}`;

        // Update the thank you message using getElementById
        document.getElementById("thanksCustomer").innerHTML = customerName;
        document.getElementById("thanksPC").innerHTML = customerPostalCode;

        // Show the thank you message
        thanksMessage.style.display = "block";
    });

}

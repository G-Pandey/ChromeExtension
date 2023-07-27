// Add event listener to listen for mouseover events on password fields
document.addEventListener("click", function (event) {
    const element = event.target;

    // Check if the element is a password input field
    if (element.type === "password") {
        element.type = "text";

        document.addEventListener("mouseout", () => {
            element.type = "password";
        })
    }
  });
  
  
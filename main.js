// Selecting the main container from HTML
const container = document.querySelector('.container');

// Creating a function to create a div an appending it in the container
function divCreation() {
    const addDiv = document.createElement("div");
    addDiv.classList.add("grid-item");
    container.appendChild(addDiv);
}

// Looping through the function
for (let j = 1; j <= 256; j++) {
    divCreation();
}
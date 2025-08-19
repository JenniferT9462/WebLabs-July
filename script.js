// Connected to HTML
console.log("Hello from script.js!");

// JS has access to HTML via document object
console.log(document);

// Get elements from HTML w/ JS
// Updating main title
const mainTitle = document.getElementById("main-title");
// innerText updates text content
mainTitle.innerText = "Updated with JS";
// Updating style - text color
mainTitle.style.color = "#7FFFD4";

// Updating main content
const mainContent = document.querySelector(".main-content");
// Updating style - background color
mainContent.style.background = "#8B008B";

// Updating sidebar
const sideBar = document.querySelector(".sidebar");

// innerText updates text content
sideBar.innerText = "This is a Sidebar, Updated with JS!";
// Updating style - text color
sideBar.style.color = "#7FFFD4";

// Updating form title
const formTitle = document.getElementById("form-title");

formTitle.style.color = "#7FFFD4";

// Updating text in the footer
const footer = document.querySelector(".footer");

footer.innerText = "This is a Footer!";
footer.style.color = "#7FFFD4";
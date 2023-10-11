// 1. Accessing Window Dimensions
console.log("Window Width:", window.innerWidth);
console.log("Window Height:", window.innerHeight);

// 2. Alert, Prompt, and Confirm Dialogs
window.alert("This is an alert!");
const user = window.prompt("What's your name?");
const proceed = window.confirm("Do you want to proceed?");

if (proceed) {
    console.log(`Welcome, ${user}`);
} else {
    console.log("Operation canceled.");
}

// 3. Timing Functions
let counter = 0;
const intervalID = window.setInterval(() => {
    console.log(`Interval Count: ${++counter}`);
    if (counter >= 5) {
        window.clearInterval(intervalID);
    }
}, 1000);

const timeoutID = window.setTimeout(() => {
    console.log("This will show after 3 seconds");
}, 3000);

// Clearing the timeout before it runs
// window.clearTimeout(timeoutID);

// 4. Accessing and Modifying DOM Elements
console.log(window.document.title);
window.document.title = "New Title";

// 5. Window Location Information
console.log(window.location.href);

// Navigate to a new web page
// window.location.href = "https://www.example.com";

// 6. Local and Session Storage
window.localStorage.setItem("username", "John");
console.log(window.localStorage.getItem("username"));

window.sessionStorage.setItem("sessionValue", "123");
console.log(window.sessionStorage.getItem("sessionValue"));

// 7. Event Listener
window.addEventListener("resize", () => {
    console.log("Window resized!");
    console.log("New Width:", window.innerWidth);
    console.log("New Height:", window.innerHeight);
});

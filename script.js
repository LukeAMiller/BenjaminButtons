// In your HTML, create three header elements (and h1, an h2, and an h3) and give them each a unique id
// In your JavaScript file, select each element by its id.
// Log each element to the console to make sure you selected it correctly.
const h1 =document.querySelector("#header1")
console.log(h1)
const h2 =document.querySelector("#header2")

console.log(h2)
const h3 =document.querySelector("#header3")
console.log(h3)
h3.innerHTML ="write in the html inside script"
h3.classList.add("blue-text")
const darkModeButton = document.querySelector("#dark-mode")
console.log(darkModeButton)
darkModeButton.addEventListener("click", function(){
    console.log("clicked")
    document.querySelector("body").classList.toggle("dark-mode")
})
h1.addEventListener("click", function(){
    console.log("you've clicked on h1, you've won nothing!!!")
    h1.classList.toggle("Red")
})
h2.addEventListener("click", function(){
    console.log("you've clicked on h2, you've won nothing!!!")
    h2.classList.toggle("Blue")
})
// Add a click event listener to each heading element you just created.
// Inside the event listener's callback function, you should log a string about which element they clicked on to the console
// Create a CSS file and link it to your HTML file
// Inside the event listener for your h1 element, add a line of code that will change the text color of the h1 element to red when you click on it
// Add a textarea element and a button with the text "Submit" to your HTML file
// Give the button an id
// Add a click event listener to the submit button
// When clicked, it should log the value of the textarea to the console
const textAreaInput = document.querySelector("#TextArea")

document.querySelector("#button").addEventListener("click",
function(){
    const textareaValue = textAreaInput.value;
console.log(textareaValue)
}

)
// Create an input field in your DOM. Give it an id of message.

// Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
// Give each article a different border color.
// Write an event listener that listens for the keyup event on the input field.
const input =document.querySelector("#message")
console.log(input)
const article1 = document.querySelector("#article1")
console.log(article1)
const article2 = document.querySelector("#article2")
console.log(article2)


function eventHandler(){
    
    article1.innerHTML = input.value;
    article2.innerHTML = input.value;
  }
input.addEventListener("keyup",eventHandler)
// The event handler function should update the textContent property of both sections.
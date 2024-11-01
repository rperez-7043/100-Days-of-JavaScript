const mainContainer = document.getElementById("main-container");
const counter = document.getElementById("counter");

mainContainer.addEventListener("click", (event) => {
    const textContent = event.target.textContent;

    if (textContent == "Add") {
        counter.innerHTML++;
    } else if (textContent == "Reset") {
        counter.innerHTML = 0;
    } else if (textContent == "Subtract") {
        counter.innerHTML--;
    }
}, false);

/*
addEventListener() syntax:
element.addEventListener(event, function, useCapture)

- event. Required.
    The name of the event.
- function. Required
    The function to run when the event occurs.
- useCapture. Optional (default = false).
    false - The handler is executed in the bubbling phase.
    true - The handler is executed in the capturing phase. 
*/
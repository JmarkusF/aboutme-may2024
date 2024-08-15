window.console.log("I am 6'2");
const clickMeButtonElement = window.document.querySelector("#click-me-button");

if (clickMeButtonElement) {
   clickMeButtonElement.addEventListener("click", function() {
    window.alert("You clicked me!");
   });
}
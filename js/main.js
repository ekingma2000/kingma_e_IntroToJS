// this i a self-ivoking anon function
//also called an IIFE {
// also called a modual (its a pattern)

(() => {
  console.log('hello from JS!');

  let toggleButton = document.querySelector(".switch-text"),
    myHeading = document.querySelector('h1'),
    svgImg = document.querySelector("#badge");

  function changeText() {
    myHeading.textContent = "What is up? I am Script!"
  }
  function logSVG(){
    console.log(this.id);
  }
  toggleButton.addEventListener("click", changeText);
  svgImg.addEventListener("mouseover", logSVG);
  //document.querySelector('h1').textContent = "What is up? I am Script!"

})();

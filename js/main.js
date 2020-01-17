// this i a self-ivoking anon function
//also called an IIFE {
// also called a modual (its a pattern)

(() => {
  console.log('hello from JS!');
//find the elements in the document
  let toggleButton = document.querySelector(".switch-text"),
    myHeading = document.querySelector('h1'),
    //svgImg = document.querySelector("#badge"),
    allSVGs = document.querySelectorAll(".svg");
//this function should change the heading text
  function changeText() {
    myHeading.textContent = "What is up? I am Script!";
  }
  // this function should log the id for each svg to the console
  function logSVG(){
    console.log(this.id);
  }
  //things a user can do to make things happen on the page
  toggleButton.addEventListener("click", changeText);

  //svgImg.addEventListener("click", logSVG);
  //svgImg2.addEventListener("click", logSVG);

  allSVGs.forEach(item => item.addEventListener("click", logSVG));
  //document.querySelector('h1').textContent = "What is up? I am Script!"

})();

(() => {
// this is a module pattern, also called iife
  const mySpan = document.querySelector('main span'),
        theSVG = document.querySelector('.svg-image');

function toggleSelected() {
//we want some kind of indecator
//that someone has selected an icon

  //debugger;
  this.classList.toggle('selected');
  //this.style.color - "green"; (THIS IS BAD)
}


//set up our triggers here
mySpan.addEventListener('click', toggleSelected);
theSVG.addEventListener('click', toggleSelected);
})();

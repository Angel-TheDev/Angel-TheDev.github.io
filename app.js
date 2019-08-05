
var index = 1;
slides(index);

function next_Prev(n) {
  slides(index += n);
}

function frontSlide(n) {
  slides(index = n);
}

function slides(n) {
    var i;
    var slide = document.getElementsByClassName("project");
  if (n > slide.length) {index = 1} 
  if (n < 1) {index = slide.length}
  for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none"; 
  }

  slide[index-1].style.display = "block"; 

}
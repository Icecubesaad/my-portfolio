let number_html = document.getElementById("numbers");
let about = document.getElementById("about");
let numbers1 = document.getElementById("numbers1")
let btn = document.getElementById("muwah");
let sidebar = document.getElementById("side-bar");
let close_btn = document.getElementById("close");
let items = document.getElementById("menu-s")
btn.addEventListener("click", function(){
  sidebar.style.width = "250px";
  close_btn.style.display = "block"
  items.style.display = "block";
})
close_btn.addEventListener("click", function(){
  sidebar.style.width = "0px";
  close_btn.style.display = "none"
  items.style.display = "none";
})
for (let numbers = 1; numbers <= 20; numbers++) {
	number_html.innerHTML = numbers;
}
for (let numberse = 1; numberse <= 10; numberse++) {
	numbers1.innerHTML = numberse;
}
var speed = 10;

/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function incEltNbr(number_html) {
  endNbr = Number(number_html.innerHTML);
  incNbrRec(0, endNbr, number_html);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, number_html) {
  if (i <= endNbr) {
    number_html.innerHTML = i + "+";
    setTimeout(function() {//Delay a bit before calling the function again.
      incNbrRec(i + 1, endNbr, number_html);
    }, 100);
  }
}

/*Function called on button click*/
function incNbr(){
  incEltNbr("nbr");
}

incEltNbr(number_html); /*Call this funtion with the ID-name for that element to increase the number within*/

function incEltNbr1(numbers1) {
  endNbr1 = Number(numbers1.innerHTML);
  incNbrRec1(0, endNbr1, numbers1);
}

/*A recursive function to increase the number.*/
function incNbrRec1(i, endNbr1, numbers1) {
  if (i <= endNbr1) {
    numbers1.innerHTML = i + "+";
    setTimeout(function() {//Delay a bit before calling the function again.
      incNbrRec1(i + 1, endNbr1, numbers1);
    }, 100);
  }
}

/*Function called on button click*/
function incNbr(){
  incEltNbr1("nbr");
}

incEltNbr1(numbers1); /*Call this funtion with the ID-name for that element to increase the number within*/

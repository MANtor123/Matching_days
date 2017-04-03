var date1 = document.querySelector('#date1');
var date2 = document.querySelector('#date2');
var button = document.getElementById('button');
var weekday = document.querySelectorAll('.table');

//weekday.classList.add('color1','color2','color3');

button.addEventListener('click', function(){
  clear();
var first = new Date(date1.value);
var second = new Date(date2.value);
var input1 = first.getDay();
var input2 = second.getDay();
if (input1 === input2) {
  weekday[input1].classList.add('color1');
}else {
  weekday[input1].classList.add('color2');
  weekday[input2].classList.add('color3');
}

/*for(var i=0; i < weekday.length; i++){
 weekday[i]
if (date1.value === date2.value){
  return weekday[i] + color1;
}

else if (! date1.value === date2.vale) {
}


}*/
});

var clear = function() {
for (var i = 0; i < weekday.length; i++) {
  weekday[i].classList.remove('color1');
  weekday[i].classList.remove('color2');
  weekday[i].classList.remove('color3');

}
}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function myfunction() {
    var popup = document.getElementById("popUp");
    popup.classList.toggle("sho");
}


function my2function() {
    var popup = document.getElementById("popingUp");
    popup.classList.toggle("shoi");
}

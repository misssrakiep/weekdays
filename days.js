var arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var div = document.getElementsByTagName("div");

var date1 = document.getElementById('first');
var date2 = document.getElementById('second');

 date1.addEventListener("change", function(){
dayPicker();
 });
 date2.addEventListener("change", function(){
dayPicker();
 });


function dayPicker(){
for (var i = 0; i < arr.length; i++) {
  var d1 = new Date(date1.value);
  var d2 = new Date(date2.value);

  var whichDay = d1.getDay();
  var whichDay2 = d2.getDay();

if(arr[whichDay] === arr[whichDay2] && arr[whichDay] && arr[whichDay2]  === arr[i]){
    div[i].style.backgroundColor = "green";
}
else if(arr[whichDay] === arr[i]) {
  div[i].style.backgroundColor = "#FF1493";
}
else if (arr[whichDay2] === arr[i]) {
  div[i].style.backgroundColor = "#FF8C00";
}
else if(arr[whichDay] !== arr[whichDay2] && arr[whichDay] && arr[whichDay2]  !== arr[i]){
    div[i].style.backgroundColor = "white";
}
else if(arr[whichDay] !== arr[i]) {
  div[i].style.backgroundColor = "white";
}
else if (arr[whichDay2] !== arr[i]) {
  div[i].style.backgroundColor = "white";
}
}
}

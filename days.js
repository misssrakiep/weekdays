var arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var div = document.getElementsByTagName("div");

var date1 = document.getElementById('first');
var date2 = document.getElementById('second');

date1.addEventListener("change", function() {
  dayPicker();
});
date2.addEventListener("change", function() {
  dayPicker();
});

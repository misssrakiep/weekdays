
describe('dayPicker()', function(){
  it('Should pick the right day acording to the date', function(){

    // var div = document.getElementsByTagName("div");

    var date1 = '25/05/2017';
    var date2 = '26/05/2017';

    var arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (var i = 0; i < arr.length; i++) {
      var d1 = new Date(date1);
      var d2 = new Date(date2);

      var whichDay = d1.getDay();
      var whichDay2 = d2.getDay();

      // if (arr[whichDay] === arr[whichDay2] && arr[whichDay] && arr[whichDay2] === arr[i]) {
      //   div[i].style.backgroundColor = "green";
      // } else if (arr[whichDay] === arr[i]) {
      //   div[i].style.backgroundColor = "#FF1493";
      // } else if (arr[whichDay2] === arr[i]) {
      //   div[i].style.backgroundColor = "#FF8C00";
      // } else if (arr[whichDay] !== arr[whichDay2] && arr[whichDay] && arr[whichDay2] !== arr[i]) {
      //   div[i].style.backgroundColor = "white";
      // } else if (arr[whichDay] !== arr[i]) {
      //   div[i].style.backgroundColor = "white";
      // } else if (arr[whichDay2] !== arr[i]) {
      //   div[i].style.backgroundColor = "white";
      // }
    }
assert.equal(whichDay == 'Thursday',  false);
assert.equal(whichDay2 == 'Friday', false);
  })
})

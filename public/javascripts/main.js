function rollInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {
  var bgArray = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'bg6.jpg', 'bg7.jpg', 'bg8.jpg', 'bg9.jpg',];
  var index = rollInteger(0,bgArray.length - 1);
  console.log(index);
  var bg = bgArray[index];
  var path = 'images/';
  console.log(path + bg);
  $('#letter').css('background', 'url(' + path + bg + ')');
  $('#letter').css('background-size', 'cover');
});

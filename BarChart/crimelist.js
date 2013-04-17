$(function() {
  console.log(crimes)

  var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

  var i = 0;
  while(i < crimes.data.length) {
    var crime = crimes.data[i];

    // What ever I do each time
    var code = crime[41];
    var name = crime[42];
    var x = parseInt(crime[34],10);
    var y = parseInt(crime[35],10);

    if(x < minX) { minX = x; }
    if(x > maxX) { maxX = x; }

    if(y < minY) { minY = y; }
    if(y > maxY) { maxY = y; }
    i = i + 1;
  }

  console.log([ minX, maxY, minY, maxY ]);
  
  var i = 0;
  while(i < crimes.data.length) {
    var crime = crimes.data[i];

    // What ever I do each time
    var code = crime[41];
    var name = crime[42];
    var neighborhood = crime[22];
    var x = parseInt(crime[34],10);
    var y = parseInt(crime[35],10);

    var diffX = maxX - minX;
    var screenX =  (x - minX) / diffX * 500;

    var diffY = maxY - minY;
    var screenY =  500 - (y - minY) / diffY * 500;


    $("<div>").css({ width: 8, height: 8, backgroundColor:"red", position:"absolute",
                     left: screenX, top: screenY, opacity:0.2 })
              .attr("title",neighborhood) 
              .appendTo("body");

    i = i + 1;
  }



});

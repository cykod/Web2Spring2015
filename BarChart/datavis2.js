$(function() {

  var i = 0;
  while(i < data.length) {
    var person = data[i];

    // What ever I do each time
    var name = person[8];
    var salary = person[11];

    var div = $("<div>").text(name + " " + salary);
    
    $("body").append(div);

    //
    
    i = i + 1;
  }

});

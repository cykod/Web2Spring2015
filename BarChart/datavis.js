$(function() {

  var i = 0;
  while(i < data.length) {
    var person = data[i];

    // What ever I do each time
    var name = person[8];
    var salary = parseInt(person[11],10);

    var maxSalary = 266750;
    
    // Fraction between 0-1
    var fraction = salary / maxSalary; 
    var salaryWidth = fraction * 500;



    var row = $("<div>").addClass("row");

    var nameDiv = $("<div>").addClass("name").text(name)
                   .appendTo(row);

    var salaryDiv = $("<div>").addClass("salary")
                    .css({ width: salaryWidth})
                    .appendTo(row);

/*    var div = $("<div>").text(name + " " + salary)
                        .css({ width: salaryWidth,
                               backgroundColor: "blue" });
                               */  
    $("body").append(row);

    i = i + 1;
  }

});

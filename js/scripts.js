// var leapYear = function(year) {
//   return false;
// };

// var leapYear = function(year) {
//   if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// var leapYear = function(year) {
//   if (year % 100 === 0) {
//     return false;
//   } else if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 != 0)) {
    return true;
  } else {
    return false;
  }
};

// jQuery User Interface
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});

// get the current time
var currentHour = moment().hour(13);
console.log(moment().hour());

// check current time to each timeblock
var timeOfDay = function() {
  // loop through timeblocks
  for (var i = 0; i < 9; i++) {
    // grab row
    var timeBlock = document.getElementById(i);
    console.log(timeBlock);
    // grab first child
    var firstChild = timeBlock.children[0];
    console.log(firstChild);
    // grab time attribute
    var firstChildHour = firstChild.getAttribute("time");
    
    // make it a number
    var firstChildNum = parseInt(firstChildHour);
    
    // make it a moment
    var timeBlockMoment = moment().hour(firstChildNum);
    console.log(timeBlockMoment);

    // grab first child text
    var firstText = firstChild.innerHTML.split(" ")[0];
    
    // make it a number
    var firstNum = parseInt(firstText);
    
    // grab second child
    var secondChild = timeBlock.children[1];
    
    console.log(timeBlockMoment.diff(currentHour, 'hours'));
    // check against current time
    if (timeBlockMoment.isBefore(currentHour)) {
      // if in the past
      secondChild.classList.add("bg-light");
    } else if (timeBlockMoment.diff(currentHour, 'hours') < 1) {
      // if this hour
      secondChild.classList.add("bg-danger");
    } else {
      // if in future
      secondChild.classList.add("bg-success");
    }
  }
};


// var timeBlockText = $("#0").text().split("")[0];
// var scheduleHour = parseInt(timeBlockText);
// scheduleHour = $(scheduleHour).val().split(" ")[0];
// console.log(currentHour);
// console.log(scheduleHour);
// compare the current time to each timeblock and color code 


timeOfDay();
// all jquery should go in the document.ready so that it doesn't load until
// the html has loaded
$(document).ready(function() {
  
  $("#currentDay").text(moment().format('dddd, MMM D'));

});

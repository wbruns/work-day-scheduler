// get the current time
var currentHour = moment().hour(13);
// for storing events
var events = {};

// check current time to each timeblock
var timeOfDay = function() {
  // loop through timeblocks
  for (var i = 0; i < 9; i++) {
    // grab row
    var timeBlock = document.getElementById(i);
    // grab first child
    var firstChild = timeBlock.children[0];
    // grab time attribute
    var firstChildHour = firstChild.getAttribute("time");
    // make it a number
    var firstChildNum = parseInt(firstChildHour);
    // make it a moment
    var timeBlockMoment = moment().hour(firstChildNum);
    // grab first child text
    var firstText = firstChild.innerHTML.split(" ")[0];
    // make it a number
    var firstNum = parseInt(firstText);
    // grab second child
    var secondChild = timeBlock.children[1];
    
    // check against current time
    if (timeBlockMoment.isBefore(currentHour)) {
      // if in the past
      secondChild.classList.add("past");
    } else if (timeBlockMoment.diff(currentHour, 'hours') < 1) {
      // if this hour
      secondChild.classList.add("present");
    } else {
      // if in future
      secondChild.classList.add("future");
    }
  }
};

// load saved events
var loadEvents = function() {
  events = JSON.parse(localStorage.getItem("events"));
  console.log(events);
  // if there is nothing saved, create a new object to track events
  if (!events) {
    events = {
      event9: [],
      event10: [],
      event11: [],
      event12: [],
      event13: [],
      event14: [],
      event15: [],
      event16: [],
      event17: []
    };
  }

  
};

// save events in localStorage
var saveEvents = function() {
  localStorage.setItem("events", JSON.stringify(events));
  console.log(events);
};

timeOfDay();

loadEvents();
// all jquery should go in the document.ready so that it doesn't load until
// the html has loaded
$(document).ready(function() {
  
  $("#currentDay").text(moment().format('dddd, MMM D'));

  // save button clicked
  $(".saveBtn").click(function() {
    // get the timeblock by id
    var event = $(this).prev().find("textarea").attr("name");
    
    // get the textarea value
    var text = $(this).prev().find("textarea").val();

    // send text into events object with key of 'event'
    events[event] = text;
    
    saveEvents();
  });

});

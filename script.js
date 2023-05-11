// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveBtnEl = $('.saveBtn');

;
$(function () {


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  /* made a var for the button class then added a click event to take whatever was
in the text area associated with this button and put into a new variable */
saveBtnEl.on('click', function () {
var userInput = $.trim($(this).parent().children('textarea').val());
// made a var for the id of our section and logged them into the localstorage

var rowKey= $(this).parent().attr("id")
localStorage.setItem(rowKey,userInput);
$(this).parent().children('textarea').append(localStorage.getItem(rowKey));
});
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // I refernenced the id and used parseint to pull the number from its text
  let blockHour = parseInt($('#hour-9').text());
  let pastIndex = dayjs().isBefore(dayjs().hour(blockHour));
  var currentHour = dayjs().format("ha");
console.log(blockHour);
  if (pastIndex) {
  $('#hour-9').attr('class','row time-block future');
  }

  // pulled the ids and converted them to numbers. then made an if statement for each condition
  $(".row").each(function(){
    var blockID = parseInt(($(this).attr("id")).substr(5));
    if (dayjs().isBefore(dayjs().hour(blockID))) {
      $(this).attr('class','row time-block future')
    } else if (dayjs().isAfter(dayjs().hour(blockID))){
      $(this).attr('class','row time-block past')
    } else {
      $(this).attr('class','row time-block present')
    }
  console.log(blockID);
});


// let blockID = $("#hou-9").attr("id");
// console.log(blockID);
//   console.log(blockArray);
// var currentHour = dayjs().hour();
console.log(currentHour);
console.log(dayjs().isBefore(dayjs().hour(blockHour)));
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
 
// TODO: Add code to display the current date in the header of the page.
/*used the id in the last p element of the header as areference to change the text 
to my presentDate variable. thqat varable uses formatted day.js code to display
the current date */
  var presentDate = dayjs().format("dddd-MMM-D")
$('#currentDay').text(presentDate);
});

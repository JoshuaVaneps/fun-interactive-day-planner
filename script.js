// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveBtnEl = $('.saveBtn');
$('#hour-9').children('textarea').val(localStorage.getItem('hour-9'));
$('#hour-10').children('textarea').val(localStorage.getItem('hour-10'));
$('#hour-11').children('textarea').val(localStorage.getItem('hour-11'));
$('#hour-12').children('textarea').val(localStorage.getItem('hour-12'));
$('#hour-13').children('textarea').val(localStorage.getItem('hour-13'));
$('#hour-14').children('textarea').val(localStorage.getItem('hour-14'));
$('#hour-15').children('textarea').val(localStorage.getItem('hour-15'));
$('#hour-16').children('textarea').val(localStorage.getItem('hour-16'));
$('#hour-17').children('textarea').val(localStorage.getItem('hour-17'));

$(function () {
  /* made a var for the button class then added a click event to take whatever was
in the text area associated with this button and put into a new variable */
saveBtnEl.on('click', function () {
var userInput = $.trim($(this).parent().children('textarea').val());
// made a var for the id of our section and logged them into the localstorage
var rowKey= $(this).parent().attr("id")
localStorage.setItem(rowKey,userInput);
});

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


console.log(currentHour);
console.log(dayjs().isBefore(dayjs().hour(blockHour)));

  var presentDate = dayjs().format("dddd-MMM-D")
$('#currentDay').text(presentDate);
});

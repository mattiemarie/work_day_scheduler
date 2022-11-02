
//Current Day Display
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd MMMM Do, YYYY"));


//Past, Present, or Future?
var currentHour = moment().hours();

function timeBlockColor() {

    $(".hour, .event").each(function() {
        var eventTime = parseInt($(this).parent().attr("id"));

        //Future Elements = Light Cool Green
        if (eventTime > currentHour) {
            $(this).addClass("future");

        //Present Elements = Light Warm Green
        } else if (eventTime === currentHour) {
            $(this).removeClass("future");
            $(this).addClass("present");

        //If eventTime < currentHour
        //Past Elements = Dark Warm Green
        } else {
            $(this).removeClass("present");
            $(this).addClass("past");
        }
    })
};

var saveButton = $('.save-btn');

//Adding User Input for Events
$(".save-btn").on('click', function () {
    var event = $(this).siblings('.event').val();
    var timeOfEvent = $(this).parent().attr("id");
    console.log(timeOfEvent,event);
    
localStorage.setItem(timeOfEvent, event);
});

//Getting User Input from Local Storage
$('#9 .event').val(localStorage.getItem('9'));
$('#10 .event').val(localStorage.getItem('10'));
$('#11 .event').val(localStorage.getItem('11'));
$('#12 .event').val(localStorage.getItem('12'));
$('#13 .event').val(localStorage.getItem('13'));
$('#14 .event').val(localStorage.getItem('14'));
$('#15 .event').val(localStorage.getItem('15'));
$('#16 .event').val(localStorage.getItem('16'));
$('#17 .event').val(localStorage.getItem('17'));

timeBlockColor();
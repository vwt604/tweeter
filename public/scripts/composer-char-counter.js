$(document).ready(function() {

  // Countdown of maximum characters as user types
  $('textarea#tweet-text').on('input',function() { 
    const counter = $(this).closest(".new-tweet").find(".counter");
    const maxLength = 140;
    const length = $(this).val().length; 
    const remaining = maxLength - length;

    counter.text(remaining);
    if(remaining < 0) {
      counter.text(remaining).css({ color: "red" });
    } else {
      counter.text(remaining).css({ color: "#545149"})
    }
  });

});
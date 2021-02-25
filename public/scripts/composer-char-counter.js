console.log("LINKINNN PARKED")

//runs a callback when the DOM is ready to be manipulated with jQuery.
$(document).ready(function() {

  console.log('this is from char-composer js');

  // $('main').hover((event) => {
  //   console.log('i was hovered');
  // });

  // $('textarea').click((event) => {
  //   console.log('i was clicked');
  // });

  $('textarea#tweet-text').on('input',function() { 
    const counter = $(this).closest(".new-tweet").find(".counter");
    const maxLength = 140;
    const length = $(this).val().length; //grabs text-area input length
    const remaining = maxLength - length;

    counter.text(remaining);
    if(remaining < 0) {
      counter.text(remaining).css({ color: "red" });
    } else {
      counter.text(remaining).css({ color: "#545149"})
    }
  });

  





});
/* 
TO DO: 
[x] Fix post 400 request bad 
[x] Refetch tweets on submission
[x] Reorder tweets functionality
[x] XSS prevention
[x] Implement "Write a new tweet" button
[x] Add footer or body length
[x] Fix timestamp 
[x] Fix auto reload positioning
[x] Fix overflow textbox
[x] icons show only on hover

[] Responsive nav and header
[] Style error messages

*/

$(document).ready(function() {
  const renderTweets = function(tweets) {
    for (tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $("#tweet-container").prepend($tweet);
    }
  }

  //Escape function to prevent XSS vulnerability
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //Creates HTML element for tweets
  const createTweetElement = function(tweet) {
    //Retrieves posting time
    //Time adjustment added to match time delay possibly caused by vagrant
    const date = moment(tweet.created_at).add(15, 'minutes').fromNow()
  
    let $tweet = 
      `<article class="tweet">
      <header class="tweet-header">
        <div class="tweet-header-left">
          <img class="logo" src="${tweet.user.avatars}">
          <h2 class="full-name">${tweet.user.name}</h2>
        </div>
        <div class="tweet-header-right">
          <h3 class="user-handle">${tweet.user.handle}</h3>
        </div>
      </header>
        <p class="tweet-content">${escape(tweet.content.text)}</p>
      <footer class="tweet-footer">
        <div class="tweet-footer-left">
          <p class="date-stamp">${date}</p>
        </div>
        <div class="tweet-footer-right">
          <img class="icon" src='images/love.png'>
          <img class="icon" src='images/retweet.png'>
          <img class="icon" src='images/flag.png'>
        </div>
      </footer>
    </article>`
  
    return $tweet;
  }

  $('form').submit(function (event) {
    tweetData = $(this).serialize();
    event.preventDefault();
    let tweet = $("textarea").val();
    if (!tweet.length) {
      $("#warning-empty").slideToggle("fast");
    } else if (tweet.length > 140) {
      $("#warning-maximum").slideToggle("fast");
    } else {
      $(".tweet").remove()
      createNewTweet();
    }
  });


  //Toggle compose element

  $(".nav-arrow").click(function(){
    $(".new-tweet").toggle();
    
  });



  //sorry about this variable scoping..
  let tweetData;
  
  //Form submission validation
  $('form').submit(function (event) {
    tweetData = $(this).serialize();
    event.preventDefault();
    let tweet = $("textarea").val();
    if (!tweet.length) {
      $("#warning-empty").slideToggle("fast");
    } else if (tweet.length > 140) {
      $("#warning-maximum").slideToggle("fast");
    } else {
      $(".tweet").remove()
      createNewTweet();
    }
  });

  // ----- AJAX functions to GET and POST tweets ----- //

  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: "GET",  
      success: function(data) {
        renderTweets(data);
      }
    })
  };
  loadTweets();
  
  const createNewTweet = function() {
    $.ajax({
      url: '/tweets',
      method: "POST",
      data: tweetData, 
      success: function() {
        loadTweets()
        location.reload()
      }
    })
  }

});  
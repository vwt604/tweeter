/* 
TO DO: 
[] Fix post 400 request bad 
[x] Reorder tweets functionality
[] Refetch tweets on submission
[x] XSS prevention
[] Fix timestamp 


[] Fix overflow textbox
[] Style error messages
*/

$(document).ready(function() {
  const renderTweets = function(tweets) {
    for (tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $("#tweet-container").prepend($tweet);
    }
  }

  //Escape function for XSS prevention
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //Creates HTML element for tweets
  const createTweetElement = function(tweet) {
    const tweetDate = moment(tweet.created_at);
    const now = moment();
    const hoursAgo = now.diff(tweetDate, "hours")
  
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
          <p class="date-stamp">${hoursAgo} hours ago</p>
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
  
  //Form submission validation
  $('form').submit(function (event) {
    event.preventDefault();
    let tweet = $("textarea").val();
    if (!tweet.length) {
      $("#warning-empty").slideToggle("fast");
    } else if (tweet.length > 140) {
      $("#warning-maximum").slideToggle("fast");
    } else {
      let tweetURL = $(this).serialize();
      createNewTweet(tweetURL);
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
    let tweetData = $(this).serialize();
    $.ajax({
      url: '/tweets',
      method: "POST",
      data: tweetData, 
      success: function(data) {
        loadTweets()
        // console.log('this is from POST', data)
      }
    })
  }

});  
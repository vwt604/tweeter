
$(document).ready(function() {
  const renderTweets = function(tweets) {
    for (tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $("#tweet-container").prepend($tweet);
    }
  };

  //Prevent XSS with Esaping
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweet) {
    // The function commented below is used to fix a time inaccuracy experienced on a different machine  
    // const time = moment(tweet.created_at).add(15, 'minutes').fromNow()
    const time = moment(tweet.created_at).fromNow();
  
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
          <p class="date-stamp">${time}</p>
        </div>
        <div class="tweet-footer-right">
          <img class="icon" src="images/love.png">
          <img class="icon" src="images/retweet.png">
          <img class="icon" src="images/flag.png">
        </div>
      </footer>
    </article>`;
  
    return $tweet;
  };

  
  //Button reveals tweet submissiom form on click
  $(".nav-arrow").click(function() {
    $(".new-tweet").toggle();
  });
  
  
  $("form").submit(function(event) {
    tweetData = $(this).serialize();
    event.preventDefault();
    let tweet = $("textarea").val();
    if (!tweet.length) {
      $("#warning-empty").slideToggle("fast");
    } else if (tweet.length > 140) {
      $("#warning-maximum").slideToggle("fast");
    } else {
      $(".tweet").remove();
      createNewTweet();
    }
  });

  //sorry about this variable scoping..!
  let tweetData;

  const loadTweets = function() {
    $.ajax({
      url: "/tweets",
      method: "GET",
      success: function(data) {
        renderTweets(data);
      }
    });
  };
  loadTweets();
  
  const createNewTweet = function() {
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: tweetData,
      success: function() {
        location.reload();
        loadTweets();
      }
    });
  };

});


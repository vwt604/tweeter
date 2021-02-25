/* 
TO DO: 
[] Post request bad 
[] Fix overflow textbox
[] Style error messages
[] reordertweets
[] Fix tweet loading issues
*/

$(document).ready(function() {
  const renderTweets = function(tweets) {
    // loops through tweets
    for (tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
      $("#tweet-container").prepend($tweet);
    }
  }

  const createTweetElement = function(tweet) {
    const tweetDate = moment(tweet.created_at);
    const now = moment();
    const daysAgo = now.diff(tweetDate, "days")
  
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
        <p class="tweet-content">${tweet.content.text}</p>
      <footer class="tweet-footer">
        <div class="tweet-footer-left">
          <p class="date-stamp">${daysAgo} days ago</p>
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
    console.log('loading the tweets')
    $.ajax({
      url: '/tweets',
      method: "GET",  
    })
    .then((tweets)=>{
      console.log(tweets);
      renderTweets(tweets);
    })
  };
  loadTweets();
  
  const createNewTweet = function(tweet) {
    const tweetData = $(this).serialize();
    $.ajax({
      url: '/tweets',
      method: "POST",
      data: tweetData
    })
      .then(loadTweets())
      .then(console.log(tweetData))

  }

});  











// /// LECTURE NOTES ///

// app.get('/', (req, res) => {
//   // const post = createPost(posts[1])
//   // res.send(post)

//   res.json(posts)
// })

// app.post('/', (req, res) => {
//   // const { title, content } = req.body
//   // const id = Object.keys(posts).length + 1

//   // const postObject = {
//   //   id,
//   //   title,
//   //   content,
//   //   comments: []
//   // }

//   // posts[id] = postObject

//   res.send('ok')
// })
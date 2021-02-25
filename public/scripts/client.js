// document.addEventListener("dblclick", (event) => {
//   console.log(event);
// });

// document.addEventListener("input", (event) => {
//   console.log('This is input');
// });

// document.addEventListener("mouseLeave", (event) => {
//   console.log('This is mouseLeave');
// });

// document.addEventListener("select", (event) => {
//   console.log('This is select');
// });

// document.addEventListener("blur", (event) => {
//   console.log('This is blur');
// });
// document.addEventListener("exit", (event) => {
//   console.log('This is exit');
// });
// document.addEventListener("focus", (event) => {
//   console.log('This is mouseenter');
// });
// document.addEventListener("above", (event) => {
//   console.log('This is above');
// });
// document.addEventListener("mouseover", (event) => {
//   console.log('This is mouseover');
// });
// document.addEventListener("hover", (event) => {
//   console.log('This is hover');
// });


//hard coded tweet data


// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ]



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

  $('form').submit(function (event) {
    event.preventDefault();
    const tweetData = $(this).serialize();
    $.ajax({
      url: '/tweets',
      method: "POST",
      data: tweetData
    })
  });

  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: "GET",  
    })
    .then((tweets)=>{
      renderTweets(tweets);
    })
  };
  loadTweets();

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
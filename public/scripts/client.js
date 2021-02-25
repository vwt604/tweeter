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


const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
  // loops through tweets
  for (tweet of tweets) {
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    $("#tweet-container").prepend(createTweetElement(tweet));
  }
}

const createTweetElement = function(tweetData) {
  const tweetDate = moment(tweetData.created_at);
  const now = moment();
  const daysAgo = now.diff(tweetDate, "days")

  let $tweet = 
    `<article class="tweet">
    <header class="tweet-header">
      <div class="tweet-header-left">
        <img class="logo" src="${tweetData.user.avatars}">
        <h2 class="full-name">${tweetData.user.name}</h2>
      </div>
      <div class="tweet-header-right">
        <h3 class="user-handle">${tweetData.user.handle}</h3>
      </div>
    </header>
      <p class="tweet-content">${tweetData.content.text}</p>
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

$(document).ready(function() {
  renderTweets(data);


  $('form').submit(function(event) {
    event.preventDefault();
    let newTweet =$("#tweet-text").serialize();
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: newTweet
    }).then((result) => {
      $.ajax({
        url: "/tweets", 
        method: "GET", 
      }).then((result) => {
        renderTweets(result)
      })
    })
  })
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
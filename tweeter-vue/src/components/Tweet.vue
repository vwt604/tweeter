<script setup lang="ts"></script>

<template>
  <article class="tweet">
    <header class="tweet-header">
      <div class="tweet-header-left">
        <img class="logo" src="" />
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
        <img class="icon" src="../assets/images/love.png" />
        <img class="icon" src="../assets/images/retweet.png" />
        <img class="icon" src="../assets/images/flag.png" />
      </div>
    </footer>
  </article>
</template>

<style scoped>
article {
  border: 3px solid #545149;
  background-color: #ffffff;
  margin-top: 5%;
  overflow-wrap: break-word;
  min-width: 260px;
}

.tweet-header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
}

.tweet-header-left {
  display: flex;
}

.full-name {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  font-weight: 700;
  margin: 5px 80px 0 0;
  width: 60%;
}

.logo {
  border-radius: 5px;
  height: 50px;
  margin: 10px;
  max-height: 100%;
  max-width: 100%;
  width: 50px;
}

article:hover h3 {
  opacity: 1;
  font-size: 1em;
  margin-right: 10px;
}

article:hover {
  box-shadow: 5px 5px 5px lightgrey;
}

h3 {
  opacity: 0;
  color: #545149;
}

.tweet-content {
  margin: 30px 0;
  padding: 0 30px;
}

.tweet-footer {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 30px;
  border-top: 3px solid #545149;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: #fff3e0;
}

.tweet-footer .right {
  display: flex;
}

.icon {
  height: 16px;
  width: 16px;
  margin: 5px;
  opacity: 0;
  color: #545149;
}

article:hover img.icon {
  opacity: 1;
  font-size: 1em;
  margin-right: 10px;
}
</style>

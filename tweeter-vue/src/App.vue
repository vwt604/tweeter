<script setup lang="ts">
import User from './components/User.vue'
import Header from './components/Header.vue'
import Tweet from './components/Tweet.vue'
import TweetComposer from './components/TweetComposer.vue'
import { ref, onMounted } from 'vue'

const tweets = ref([])
const isLoading = ref(true)
const hasError = ref(false)

const user = {
  name: 'Moira Rose',
  image: '../assets/images/profile-hex.png',
}

const loadTweets = async () => {
  try {
    const response = await fetch('/api/tweets')
    if (!response.ok) throw new Error('Failed to fetch tweets')
    const data = await response.json()
    tweets.value = data
  } catch (error) {
    hasError.value = true
    console.error('Error fetching tweets:', error)
  } finally {
    isLoading.value = false
  }
}

const submitTweet = async (text) => {
  try {
    const response = await fetch('/api/tweets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
      }),
    })
    if (!response.ok) throw new Error('Failed to post tweet')
    await loadTweets()
  } catch (error) {
    console.error('Error posting tweet:', error)
  }
}

onMounted(loadTweets)
</script>

<template>
  <Header />
  <main>
    <User :user="user" />
    <TweetComposer @submit-tweet="submitTweet" />
    <Tweet :tweets="tweets" />
  </main>
</template>

<style scoped>
#app {
  margin: 0 auto;
}
</style>

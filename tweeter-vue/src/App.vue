<script setup lang="ts">
import { ref, onMounted } from 'vue'
import User from './components/User.vue'
import Header from './components/Header.vue'
import Tweets from './components/Tweets.vue'
import TweetComposer from './components/TweetComposer.vue'

interface Tweet {
  user: {
    name: string
    avatars: string
    handle: string
  }
  content: {
    text: string
  }
  created_at: number
}

const tweets = ref<Tweet[]>([])
const isLoading = ref<boolean>(false)
const hasError = ref<boolean>(false)
const errorMessage = ref<string>('')
const tweetText = ref<string>('')
const showComposer = ref<boolean>(false)

const user = {
  name: 'Yeung Money',
  image: '/assets/images/profile-hex.png',
}

const loadTweets = async () => {
  try {
    isLoading.value = true
    hasError.value = false
    errorMessage.value = ''

    const response = await fetch('/api/tweets')
    if (!response.ok) throw new Error('Failed to fetch tweets')
    const data = await response.json()
    // Sort by created_at descending (most recent first)
    tweets.value = data.sort((a, b) => b.created_at - a.created_at)
  } catch (error) {
    hasError.value = true
    errorMessage.value = 'Unable to load tweets. Please try again later.'
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
    tweetText.value = ''
  } catch (error) {
    console.error('Error posting tweet:', error)
  }
}

function toggleForm() {
  showComposer.value = !showComposer.value
}

onMounted(loadTweets)
</script>

<template>
  <Header @toggle-form="toggleForm" />
  <main>
    <User :user="user" />
    <TweetComposer
      v-model="tweetText"
      @submit-tweet="submitTweet"
      v-if="showComposer"
    />
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="hasError">{{ errorMessage }}</div>
    <Tweets v-else :tweets="tweets" />
  </main>
</template>

<style scoped>
main {
  margin: 0 auto;
}
</style>

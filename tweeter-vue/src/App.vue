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
  image: '/images/profile-hex.png',
}

onMounted(async () => {
  try {
    const response = await fetch('/api/tweets')
    if (!response.ok) throw new Error('Network response was not ok')
    const data = await response.json()
    console.log('🚀 ~ data:', data)

    tweets.value = await response.json()
  } catch (error) {
    hasError.value = true
    console.error('Failed to fetch tweets:', error)
  } finally {
    isLoading.value = false
  }
})

console.log('Tweets', tweets)
</script>

<template>
  <Header />
  <main>
    <User :user="user" />
    <TweetComposer />
    <Tweet />
  </main>
</template>

<style scoped>
#app {
  margin: 0 auto;
}
</style>

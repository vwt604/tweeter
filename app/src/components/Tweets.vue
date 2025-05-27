<script setup lang="ts">
import moment from 'moment'

defineProps<{
  tweets: Array<{
    user: {
      name: string
      avatars: string
      handle: string
    }
    content: {
      text: string
    }
    created_at: number
  }>
}>()

function formatDate(timestamp: number): string {
  return moment(timestamp).fromNow()
}
</script>

<template>
  <section class="container mx-auto max-w-5xl">
    <article
      v-for="tweet in tweets"
      class="bg-white border-gray-600 border-3 mb-6 hover:shadow-md"
    >
      <header class="flex justify-between p-4 items-center">
        <div class="flex gap-3 items-center">
          <img
            class="w-12 h-12"
            :src="tweet.user.avatars"
            :alt="`${tweet.user.name}'s avatar`"
          />
          <h2 class="font-semibold text-lg">{{ tweet.user.name }}</h2>
        </div>
        <h3>{{ tweet.user.handle }}</h3>
      </header>
      <p class="p-4 mb-6">{{ tweet.content.text }}</p>
      <footer class="flex justify-between bg-orange-50 p-4">
        <p class="text-xs uppercase tracking-widest">
          {{ formatDate(tweet.created_at) }}
        </p>
        <div class="flex gap-3">
          <img class="icon w-3.5 h-3.5" src="../assets/images/love.png" />
          <img class="icon w-3.5 h-3.5" src="../assets/images/retweet.png" />
          <img class="icon w-3.5 h-3.5" src="../assets/images/flag.png" />
        </div>
      </footer>
    </article>
  </section>
</template>

<style scoped>
article:hover h3,
article:hover img.icon {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

h3,
img.icon {
  opacity: 0;
}
</style>

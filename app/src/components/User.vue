<script setup lang="ts">
defineProps<{
  user: {
    name: string
    image: string
  }
}>()
</script>

<template>
  <section class="flex bg-[var(--bg-secondary)] p-6">
    <div class="max-w-5xl mx-auto flex flex-col gap-2 items-center text-center">
      <img
        class="w-32 h-32"
        :src="user.image"
        :alt="`Profile picture of ${user.name}`"
      />

      <h4 class="text-white text-lg font-semibold">{{ user.name }}</h4>
    </div>
  </section>
</template>

<style scoped>
section {
  background-image: url('https://www.transparenttextures.com/patterns/absurdity.png');
}
</style>

<script setup>
const emit = defineEmits(['toggle-form'])

function toggleForm() {
  emit('toggle-form')
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-[var(--accent)] text-white">
    <div class="flex gap-2 justify-between items-center py-3 max-w-5xl mx-auto">
      <div class="flex-1"></div>
      <h1 class="flex-1 text-5xl text-center">Tweeter</h1>
      <div class="flex-1 flex justify-end">
        <button
          @click="toggleForm"
          type="button"
          class="flex flex-col items-center justify-center bg-transparent border border-transparent outline-none rounded py-2 px-4 hover:border hover:border-dashed hover:border-white"
          aria-label="Write a new tweet"
        >
          <span class="font-semibold text-md">New Tweet</span>
          <span class="text-yellow-200 text-2xl" aria-hidden="true"
            >&#8964;</span
          >
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
h1 {
  font-family: 'Pacifico', cursive;
}
</style>

<script setup>
const emit = defineEmits(['toggle-form'])

function toggleForm() {
  emit('toggle-form')
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-[var(--accent)] text-white">
    <div class="max-w-5xl mx-auto flex justify-between items-center py-3 px-4">
      <div class="w-1/6"></div>
      <div class="flex items-center">
        <!-- TODO: Fix fonts -->
        <span class="font-cursive text-5xl">Tweeter</span>
      </div>
      <div class="w-1/6 flex justify-end">
        <button
          @click="toggleForm"
          type="button"
          class="flex flex-col items-center p-2 bg-transparent border border-transparent outline-none rounded hover:border hover:border-dashed hover:border-white"
          aria-label="Write a new tweet"
        >
          <span class="font-semibold"><strong>Write</strong> a new tweet</span>
          <span class="text-yellow-200 text-2xl">&#8964;</span>
        </button>
      </div>
    </div>
  </header>
</template>

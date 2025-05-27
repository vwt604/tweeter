<script setup lang="ts">
import { computed, reactive } from 'vue'

const MAX_CHARACTERS = 140
const props = defineProps<{ modelValue: string }>()
const emit = defineEmits(['update:modelValue', 'submit-tweet'])

const charsLeft = computed(() => MAX_CHARACTERS - props.modelValue?.length)
const isOverLimit = computed(() => charsLeft.value < 0)

const error = reactive({
  message: '',
})

function validate() {
  if (isOverLimit.value) {
    error.message = 'Oops, your tweet is too long'
    return false
  }
  if (!props.modelValue?.trim()) {
    error.message = 'Oops, your tweet is empty'
    return false
  }
  return true
}

function submitTweet() {
  if (!validate()) return
  emit('submit-tweet', props.modelValue)
}
</script>

<template>
  <section class="max-w-5xl mx-auto">
    <h2 class="text-2xl font-semibold">Compose Tweet</h2>
    <form @submit.prevent="submitTweet">
      <textarea
        name="text"
        type="text"
        id="tweet-text"
        placeholder="What are you humming about?"
        :value="props.modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        class="w-full border-b-gray-600 border-b-2 my-3 h-12"
      ></textarea>
      <div class="flex justify-between mb-3">
        <button type="submit" class="p-2 bg-[var(--bg-secondary)]">
          Tweet
        </button>
        <output name="counter" for="tweet-text">{{ charsLeft }}</output>
      </div>
      <div
        v-if="error.message"
        class="text-red-500 text-xs uppercase tracking-wider"
      >
        {{ error.message }}
      </div>
    </form>
  </section>
</template>

<style scoped>
output,
button {
  font-family: 'Bungee', sans-serif;
}
</style>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
const props = defineProps<{ modelValue: string }>()
const emit = defineEmits(['update:modelValue', 'submit-tweet'])

function submitTweet() {
  emit('submit-tweet', props.modelValue)
}
</script>

<template>
  <section class="new-tweet container">
    <h2>Compose Tweet</h2>
    <form @submit.prevent="submitTweet">
      <textarea
        name="text"
        type="text"
        id="tweet-text"
        placeholder="What are you humming about?"
        :value="props.modelValue"
        @input="emit('update:modelValue', $event.target.value)"
      ></textarea>
      <div class="form-bottom">
        <button type="submit" class="btn-submit">Tweet</button>
      </div>
    </form>
  </section>
</template>

<style scoped>
/* "Compose tweet" container with form. Visibility is toggled on button click */

textarea#tweet-text {
  width: 100%;
  border: none;
  border-bottom: 3px solid darkslategrey;
  height: 40px;
  background: none;
  outline: none;
}

section.new-tweet {
  margin-bottom: 5%;
  min-width: 270px;
}

.form-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2%;
  font-family: 'Bungee', cursive;
}

/* Button for submitting new tweets */

button {
  padding: 6px;
  background-color: #5f7ea0;
  color: white;
  font-size: 16px;
}

output {
  font-family: 'Bungee', cursive;
  font-size: 18px;
}

/* Error messages. Displays when there is error on form submission */

#warning-empty {
  margin-top: 2%;
  color: red;
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 1px;
}

#warning-maximum {
  margin-top: 2%;
  color: red;
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { ref, onMounted } from "vue";

const tweets = ref([]);
const isLoading = ref(true);
const hasError = ref(false);

onMounted(async () => {
  try {
    const response = await fetch("/api/tweets");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    console.log("🚀 ~ data:", data);

    tweets.value = await response.json();
  } catch (error) {
    hasError.value = true;
    console.error("Failed to fetch tweets:", error);
  } finally {
    isLoading.value = false;
  }
});

console.log("Tweets", tweets);
</script>

<template>
  <HelloWorld msg="Hello World" />
</template>

<style scoped></style>

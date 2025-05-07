<script setup lang="ts">
defineProps<{
  user: {
    name: string
    image: string
  }
}>()
</script>

<template>
  <section class="profile">
    <div class="profile-img">
      <img :src="user.image" />
    </div>
    <div class="profile-name">
      <h4>{{ user.name }}</h4>
    </div>
  </section>
</template>

<style scoped>
.profile {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5f7ea0;
  background-image: url('https://www.transparenttextures.com/patterns/absurdity.png');
  color: white;
}

.profile img {
  height: 100px;
  width: 100px;
}
</style>

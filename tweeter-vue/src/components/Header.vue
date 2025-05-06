<script setup lang="ts">
defineProps<{
  msg: string
  user: {
    name: string
    image: string
  }
}>()
</script>

<template>
  <header class="header">
    <div class="profile-img">
      <img :src="user.name" />
    </div>
    <br />
    <div class="profile-name">
      <h4>{{ user.name }}</h4>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 8%;
  padding-bottom: 5;
  background-color: #5f7ea0;
  background-image: url('https://www.transparenttextures.com/patterns/absurdity.png');
  color: white;
}

.header img {
  height: 100px;
  width: 100px;
  margin-top: 20px;
}
</style>

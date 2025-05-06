<script setup lang="ts">

</script>

<template>
  <header class = "header">
    <div class=header-left>
    </div>
    <div class ="header-mid">
      <div class="header-logo">
        Tweeter
      </div>
    </div>
    <div class="header-right">
      <button class="header-btn">
        <div class="header-text">
          <strong>Write</strong> a new tweet 
        </div>
        <div class="header-arrow">&#8964</div>
      </button>
    </div>
  </header>
</template>

<style scoped>

.header {
  height: 110px;
  width: 100%;
  min-width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1.5em 0.5em 1.5em;
  color: #FFFFFF;
  background-color: #5f9ea0;
  position: sticky;
  top: 0; 
}

.header-mid {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.33vw;
  font-family: 'Pacifico', cursive;
  font-size: 3em;
}

.header-left {
  width: 33.33vw;
}

.header-right {
  width: 33.33vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.75em;
  color: #FFFFFF;
}

.header-btn {
  background:none;
  border: none;
  outline: none;
  color:#FFFFFF
}

button.header-btn:hover {
  opacity: 75%;
  border: dashed 0.5px;
}

.header-arrow {
  color: #F6E481;
  font-size: 1.5em;
}

</style>

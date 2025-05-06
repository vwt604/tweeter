<script setup lang="ts">

</script>

<template>
    <nav class = "nav">
      <div class=nav-left>
      </div>
      <div class ="nav-mid">
        <div class="nav-logo">
          Tweeter
        </div>
      </div>
      <div class="nav-right">
        <button class="nav-btn">
          <div class="nav-text">
            <strong>Write</strong> a new tweet 
          </div>
          <div class="nav-arrow">&#8964</div>
        </button>
      </div>
    </nav>
</template>

<style scoped>

.nav {
  height: 110px;
  width: 100%;
  min-width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1.5em 0.5em 1.5em;
  color: #FFFFFF;
  background-color: #5f9ea0;
  position: fixed;
  top: 0; 
}

.nav-mid {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.33vw;
  font-family: 'Pacifico', cursive;
  font-size: 3em;
}

.nav-left {
  width: 33.33vw;
}

.nav-right {
  width: 33.33vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.75em;
  color: #FFFFFF;
}

.nav-btn {
  background:none;
  border: none;
  outline: none;
  color:#FFFFFF
}

button.nav-btn:hover {
  opacity: 75%;
  border: dashed 0.5px;
}

.nav-arrow {
  color: #F6E481;
  font-size: 1.5em;
}

</style>

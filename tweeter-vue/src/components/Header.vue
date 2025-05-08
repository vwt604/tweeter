<script setup>
const emit = defineEmits(['toggle-form'])

function toggleForm() {
  emit('toggle-form')
}
</script>

<template>
  <header class="header">
    <div class="header-content container">
       <div class=header-left>
       </div>
       <div class ="header-mid">
         <div class="header-logo">
           Tweeter
         </div>
       </div>
       <div class="header-right">
         <button class="header-btn" @click="toggleForm">
           <div class="header-text">
             <strong>Write</strong> a new tweet 
           </div>
           <div class="header-arrow">&#8964</div>
         </button>
       </div>
      </div>
  </header>
</template>

<style>

.header {
  min-height: 72px;
  width: 100%;
  color: #FFFFFF;
  background-color: #5f9ea0;
  position: sticky;
  top: 0; 
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;

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
  color:#FFFFFF;
  padding: var(--space-xs) var(--space-sm);
}

button.header-btn:hover {
  border: dashed 0.5px;
  border-radius: var(--border-radius);
}

.header-arrow {
  color: #F6E481;
  font-size: 1.5em;
}

</style>

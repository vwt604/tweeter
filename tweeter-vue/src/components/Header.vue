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
         <button class="header-btn">
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
/* headerigation bar */

.header {
  height: 100px;
  width: 100%;
  padding: 0.5em 1.5em 0.5em 1.5em;
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

/* "Write a new tweet" button */

.header-btn {
  background:none;
  border: none;
  outline: none;
  color:#FFFFFF
}

button.header-btn:hover {
  border: dashed 0.5px;
}

.header-arrow {
  color: #F6E481;
  font-size: 1.5em;
}


</style>

<!-- <template>
  <header class="header" role="banner">
    <div class="header__wrapper container">
      <div class="header__front"></div>
      <div class="header__logo">Tweeter</div>
      <div class="header__end">
        <button
          class="header__write-btn"
          aria-label="Write a new tweet"
          type="button"
        >
          <span>Write a new tweet</span>
          <span class="header__arrow" aria-hidden="true">&#8964;</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  height: 110px;
  color: #fff;
  background-color: #5f9ea0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.header__front {
  flex: 1 1 0;
}

.header__logo {
  flex: 0 1 auto;
  font-family: 'Pacifico', cursive;
  font-size: 3em;
  letter-spacing: 1px;
  text-align: center;
}

.header__end {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #fff;
  font-family: 'Source Sans Pro', sans-serif;
}

.header__write-btn {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5em 1em;
  font-size: 0.75em;
  background: none;
  border: none;
  outline: none;
  align-items: center;
}

.header__arrow {
  color: #f6e481;
  font-size: 1.5em;
  margin-left: 0.5em;
}

.header__write-btn:hover,
.header__write-btn:focus {
  border: 1px dashed #fff;
}

/* @media (max-width: 600px) {
  .header {
    height: auto;
    padding: 0.5em;
  }
  .header__logo {
    font-size: 2em;
  }
  .header__write-btn {
    font-size: 1em;
    padding: 0.25em 0.5em;
  }
} */
</style> -->

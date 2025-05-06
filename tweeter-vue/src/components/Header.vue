<template>
  <header class="header" role="banner">
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
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  color: #fff;
  background-color: #5f9ea0;
  position: sticky;
  top: 0;
  z-index: 100;
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
</style>

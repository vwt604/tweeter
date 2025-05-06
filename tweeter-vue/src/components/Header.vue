<template>
  <header class="header" role="banner">
    <nav class="header__nav" aria-label="Main navigation">
      <div class="header__side"></div>
      <div class="header__logo">Tweeter</div>
      <button
        class="header__write-btn"
        aria-label="Write a new tweet"
        type="button"
      >
        <span>Write a new tweet</span>
        <span class="header__arrow" aria-hidden="true">&#8964;</span>
      </button>
    </nav>
  </header>
</template>

<style scoped>
.header {
  height: 110px;
  width: 100%;
  padding: 0.5em 1.5em;
  color: #fff;
  background-color: #5f9ea0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.header__side {
  flex: 1 1 0;
}

.header__logo {
  flex: 0 1 auto;
  font-family: 'Pacifico', cursive;
  font-size: 3em;
  letter-spacing: 1px;
  text-align: center;
}

.header__write-btn {
  flex: 1 1 0;
  justify-content: flex-end;
  display: flex;
  font-size: 0.75em;
  background: none;
  border: none;
  outline: none;
  align-items: center;
  color: #fff;
  font-family: 'Source Sans Pro', sans-serif;
  cursor: pointer;
  padding: 0.5em 1em;
}

.header__arrow {
  color: #f6e481;
  font-size: 1.5em;
  margin-left: 0.5em;
}

.header__write-btn:hover,
.header__write-btn:focus {
  opacity: 0.75;
  border: 1px dashed #fff;
}

@media (max-width: 600px) {
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
}
</style>

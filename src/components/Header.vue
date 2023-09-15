<template>
  <header class="header">
    <div class="left">
      <img class="logo" src="@/assets/logo.png" width="45px" alt="Logo" />
    </div>
    <div class="center">
      <nav class="nav-menu">
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </nav>
    </div>
    <div class="right">
      <button class="get-press-button">Get PressOne</button>
    </div>

    <button class="hamburger-button" @click="toggleMenu">
      <div class="hamburger-icon"></div>
      <div class="hamburger-icon"></div>
      <div class="hamburger-icon"></div>
    </button>
    <nav class="mobile-menu" v-if="isMenuOpen">
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Support</a></li>
        <button class="get-press-button">Get PressOne</button>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  width: calc(100% - 220px);
  margin: 0 110px;
  background-color: transparent;
  font-family: "Urbanist", sans-serif;
}

.left {
  flex: 1;
  display: flex;
  align-items: center;
}

.logo {
  max-width: 100%;
}

.center {
  display: flex;
  justify-content: center;
}

.nav-menu ul,
.mobile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-menu li,
.mobile-menu li {
  margin-right: 20px;
}

.nav-menu a,
.mobile-menu a {
  color: #616c74;
  font-size: 14.5px;
  letter-spacing: 0.75px;
  font-weight: 600;
  padding: 16px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.mobile-menu a {
  padding: 0;
}

.nav-menu a:hover,
.mobile-menu a:hover {
  color: #0e99d2;
}

.right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.get-press-button {
  background-color: transparent;
  color: #0e99d2;
  border: 1px solid #0e99d2;
  padding: 13.5px 27px;
  font-weight: 600;
  font-size: 12.5px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.get-press-button:hover {
  background-color: #0e99d2;
  color: white;
}

.hamburger-button {
  display: none;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
}

.hamburger-icon {
  width: 25px;
  height: 3px;
  background-color: #616c74;
  margin: 4px 0;
  transition: 0.2s;
  border-radius: 2px;
}
.mobile-menu {
  display: none;
}

@media screen and (max-width: 1024px) {
  .header {
    width: calc(100% - 100px);
    margin: 0px 50px;
  }
}

@media screen and (max-width: 768px) {
  .header .center,
  .header .right {
    display: none;
  }

  .hamburger-button {
    display: block;
  }

  .hamburger-button:hover .hamburger-icon {
    background-color: #0e99d2;
  }

  .mobile-menu {
    flex-direction: column;
    background-color: white;
    display: block;
    position: absolute;
    border-radius: 0 0 10px 10px;
    top: 60px;
    right: -25px;
    padding: 10px 20px;
    z-index: 100;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .scrolled .mobile-menu {
    right: 25px;
  }

  .mobile-menu ul {
    flex-direction: column;
    list-style-type: none;
    align-items: flex-end;
  }

  .mobile-menu a {
    text-decoration: none;
    text-align: right !important;
  }

  .mobile-menu li {
    margin: 5px 0px;
  }

  .mobile-menu button {
    margin: 5px 0;
  }

  .mobile-menu.show-menu {
    display: flex;
  }
}

@media screen and (max-width: 425px) {
  .header {
    width: calc(100% - 40px);
    margin: 0px 20px;
  }

  .mobile-menu {
    right: -10px;
  }

  .scrolled .mobile-menu {
    right: 10px;
  }
}
</style>

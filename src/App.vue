<template>
  <div v-show="menuOpen" class="w-screen overflow-hidden h-screen bg-black opacity-60 fixed z-1 hidden sm:block b-0"></div>
  <div class="h-screen bg-white fixed py-16 px-11 hidden sm:block w-80 right-0 b-0 z-20 slide transition-all" v-show="menuOpen">
    <button @click="closeMenu" class="block ml-auto">
      <img src="@/assets/images/icon-menu-close.svg" 
           class="animate-spin-entrance" 
           alt="menu icon">
    </button>
    <ul class="flex flex-col gap-6 transition-colors mt-20">
      <li class="text-xl lg:text-lg hover:text-yellow-600 txt-black"><a href="#">Home</a></li>
      <li class="text-xl lg:text-lg hover:text-yellow-600"><a href="#">New</a></li>
      <li class="text-xl lg:text-lg hover:text-yellow-600"><a href="#">Popular</a></li>
      <li class="text-xl lg:text-lg hover:text-yellow-600"><a href="#">Trending</a></li>
      <li class="text-xl lg:text-lg hover:text-yellow-600"><a href="#">Categories</a></li>
    </ul>
  </div>
  <div class="p-9 px-32 w-100 sm:px-10">
    <header-component @openMenu="openNav" ref="headerRef"/>
    <div class="grid mb-9 lg:flex lg:flex-col">
      <hero-component class="grid-1 max-w-6xl"/>
      <sidebar-component class="grid-2"/>
    </div>
    <list-component />
  </div>
</template>

<script setup>
import HeaderComponent from "./components/HeaderComponent.vue"
import HeroComponent from "./components/HeroComponent.vue"
import SidebarComponent from "./components/SidebarComponent.vue"
import ListComponent from "./components/ListComponent.vue"
import { ref } from "vue"

const headerRef = ref(null)

const menuOpen = ref(false)

const openNav = (bool) => {
  menuOpen.value = bool.value
}

const closeMenu = () => {
  headerRef.value.toggleMenu()
}
</script>

<style lang="scss">
#app {
  font-family: "Inter";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.grid {
  grid-template-areas: 
  "grid-1 grid-1 grid-2";
}
.grid-1 {
  grid-area: grid-1;
}
.grid-2 {
  grid-area: grid-2;
}
</style>

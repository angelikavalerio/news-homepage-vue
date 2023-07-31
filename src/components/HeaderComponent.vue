<template>
  <div class="flex flex-row justify-between items-center py-6">
    <img src="@/assets/images/logo.svg" alt="logos" class="max-w-xs">
    <ul class="flex flex-row gap-6 sm:hidden transition-colors">
      <li class="text-xl lg:text-lg hover:text-yellow-600"><a href="#">Home</a></li>
      <li class="text-xl lg:text-lg hover:text-yellow-600"><a href="#">New</a></li>
      <li class="text-xl lg:text-lg hover:text-yellow-600"><a href="#">Popular</a></li>
      <li class="text-xl lg:text-lg hover:text-yellow-600"><a href="#">Trending</a></li>
      <li class="text-xl lg:text-lg hover:text-yellow-600"><a href="#">Categories</a></li>
    </ul>
    <button @click="toggleMenu" class="hidden sm:block">
      <img :src="menuIcon" 
           :class="{'animate-spin-entrance' : menuOpen === true}" 
           alt="menu icon">
    </button>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineExpose } from "vue"
import IconMenu from "@/assets/images/icon-menu.svg"
import IconMenuClose from "@/assets/images/icon-menu-close.svg"

const menuIcon = ref(IconMenu)
const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  menuIcon.value = menuOpen.value ? IconMenuClose : IconMenu
  emit('openMenu', menuOpen)
}

const emit = defineEmits([
  'openMenu'
])

defineExpose({
  toggleMenu
})
</script>
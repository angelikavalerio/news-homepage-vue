<template>
    <div class="flex flex-col">
        <img src="@/assets/images/image-web-3-desktop.jpg" alt="hero img" class="max-h-60 object-cover mb-9 sm:hidden">
        <img src="@/assets/images/image-web-3-mobile.jpg" alt="hero img" class="mb-9 max-h-100 hidden sm:block">
        <div class="flex flex-row items-center lg:flex-col lg:items-start">
            <h1 class="text-7xl font-extrabold text-black text-left lg:text-6xl lg:mb-5">The Bright Future of Web 3.0?</h1>
            <div class="ml-5 lg:ml-0 lg:mb-9">
                <p class="text-justify mb-7 text-xl lg:text-lg">We dive into the next evolution of the web that 
                claims to put the power of the platforms back into 
                the hands of the people. But is it really fulfilling 
                its promise?</p>
                <button-component text="Read More" />
            </div>
        </div>
    </div>
</template>
<script setup>
import ButtonComponent from "@/components/elements/ButtonComponent.vue"

</script>

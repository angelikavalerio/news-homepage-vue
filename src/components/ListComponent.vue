<template>
    <div class="grid grid-cols-3 gap-5 lg:flex lg:flex-col">
        <div v-for="article in articles" :key="article.id" class="flex flex-row">
            <img :src="require(`@/assets/images/${ article.img }`)" alt="article img" class="mr-5" />
            <div class="flex flex-col justify-center text-left">
                <span class="text-gray-400 text-6xl lg:text-4xl font-extrabold">{{ article.id }}</span>
                <h5 class="text-black text-xl lg:text-lg font-bold">{{ article.title }}</h5>
                <p class="text-gray-600 text-xl lg:text-lg">{{ article.desc }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive } from "vue"

const articles = reactive([
    {
        id: '01',
        title: 'Reviving Retro PCs',
        desc: 'What happens when old PCs are given modern upgrades?',
        img: 'image-retro-pcs.jpg'
    },
    {
        id: '02',
        title: 'Top 10 Laptops of 2022',
        desc: 'Our best picks for various needs and budgets.',
        img: 'image-top-laptops.jpg'
    },
    {
        id: '03',
        title: 'The Growth of Gaming',
        desc: 'How the pandemic has sparked fresh opportunities.',
        img: 'image-gaming-growth.jpg'
    }
])

</script>

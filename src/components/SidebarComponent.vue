<template>
    <div class="bg-gray-900 ml-9 p-9 text-left lg:ml-0">
        <h2 class="font-extrabold text-yellow-600 text-4xl">New</h2>
        <div v-for="value in sideContents" :key="value.title" class="text-gray-50 border-b py-5 last:border-b-0 last:pb-0">
            <h4 class="font-bold text-xl lg:text-lg">{{value.title}}</h4>
            <p class="text-gray-400 text-xl lg:text-lg">{{value.desc}}</p>
        </div>
    </div>
</template>
<script setup>
import { reactive } from "vue"

const sideContents = reactive([
    {
        title: 'Hydrogen VS Electric Cars',
        desc: 'Will hydrogen-fueled cars ever catch up to EVs?'
    },
    {
        title: 'The Downsides of AI Artistry',
        desc: 'What are the possible adverse effects of on-demand AI image generation?'
    },
    {
        title: 'Is VS Funding Drying Up?',
        desc: 'Private funding by VS firms is down 50% YOY. We take a look at what that means.'
    }
    ])
</script>

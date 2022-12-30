<script setup lang="ts">

import { cards } from './cards'
import { links } from './links'
import { skills } from './links'
import Programming from '../assets/svg/Programming.svg'

const colorMode = useColorMode()

</script>
<template>
  <div class="font-text">
    <article class="min-h-screen gap-5 flex flex-col items-center justify-center" id="home">
      <h1 class="text-48px">Hello, my name is Martin Černoch</h1>
      <div>
        <p class="leading-8 text-32px text-center">
          A passionate Front End developer using
          <span class="block mt-1">TypeScript / Vue.js / Nuxt.js / WindiCSS</span>
        </p>
      </div>
      <div class="flex gap-2">
        <div v-for="item in links" :key="item.image" class="transform duration-400 hover:(scale-115)">
          <NuxtLink :to="item.link" target="_blank">
            <img :src="item.image" />
          </NuxtLink>
        </div>
      </div>
    </article>
    <section name="container" class="px-10">
      <article class="flex items-center max-w-320 mx-auto min-h-screen" id="skills">
        <div class="w-1/3">
          <h2 class="text-32px">What are my skills?</h2>
          <div class="mt-4">
            <p class="text-24px leading-8"> I love developing and learning Front End development using
              Vue.js, Nuxt.js and WindiCSS, also knowing
              a little bit of Back End with the use of Python.
            </p>
          </div>
          <div class="flex gap-2 my-8">
            <div v-for="item in skills" class="transform duration-400 hover:(scale-115)">
              <NuxtLink :to="item.link" target="_blank">
                <img :src="item.image" />
              </NuxtLink>
            </div>
          </div>
          <div class="mt-4 pl-12 uppercase">
            <p class="text-20px leading-6">
              Q: What's most important to <span class="block"> me when building
                a brand <span class="block">new website?</span></span>
              <span class="block pt-4">
                A: Making a thorough plan.
                <span class="block">Not allowing myself to miss</span>
                any detail. Finishing the
                project until the end.</span>
            </p>
          </div>
        </div>
        <div class="w-2/3">
          <Programming />
        </div>
      </article>
    </section>
    <article class="pt-30 text-center min-h-screen" id="projects">
      <h2 class="text-32px">Projects I've been working on</h2>
      <div class="flex gap-25 mt-14 justify-center">
        <Card v-for="item in cards" :key="item.header" v-bind="item" />
      </div>
    </article>

    <section name="container" class="px-10 max-w-320 mx-auto">
      <article class="min-h-screen pt-30" id="about">
        <div class="flex gap-20 items-center">
          <div class="min-w-1/3">
            <img src="assets/images/martin.png" />
          </div>
          <div class="flex flex-col gap-4 max-w-2/3">
            <h2 class="text-36px">About me</h2>
            <p class="text-24px leading-8 mt-4">
              I'm a high school IT student and Microsoft Student Trainee Center student working @ Srovnejto as a Junior
              Front End developer. I've previously worked @ Cloud4com as a Software tester, testing and documenting a
              cloud environment. Having the biggest interest in Front End development and Cloud development. My main
              skills are building websites using JavaScript frameworks Vue.js and Nuxt.js with the CSS framework
              WindiCSS.
              <span class="pt-6 block">I'd love to learn more about Cloud in the future, mostly
                with the use of Microsoft Azure.
              </span>
            </p>
            <NuxtLink to="mailto:martas.cernoch@gmail.com?subject=Contact via Website" class="transform duration-500 hover:(scale-115 !bg-blue-500) cursor-pointer text-20px w-50 h-15 text-center !bg-purple-600 text-white pt-4.5
              rounded-2xl">
              CONTACT ME
            </NuxtLink>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

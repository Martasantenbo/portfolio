<script setup lang="ts">

import { cards } from './cards'
import { links } from './links'
import { skills } from './links'
import Programming from '../assets/svg/Programming.svg'

</script>
<template>
  <div class="font-text">
    <div class="bg-gray-100">
      <article class="min-h-screen gap-5 flex flex-col items-center justify-center" id="home">
        <h1 class="text-48px">Hello, my name is Martin Černoch</h1>
        <div class="text-primary">
          <p class="leading-8 text-32px text-center">
            A passionate Front End developer using
            <span class="block mt-1">TypeScript / Vue.js / Nuxt.js / WindiCSS</span>
          </p>
        </div>
        <div class="flex gap-2">
          <div v-for="item in links" :key="item.image" class="transform duration-400 hover:(scale-115)">
            <a href="item.link" target="_blank">
              <img :src="item.image" />
            </a>
          </div>
        </div>
      </article>
      <section name="container" class="bg-white px-10">
        <article class="flex items-center max-w-320 mx-auto min-h-screen" id="skills">
          <div class="w-1/3">
            <h2 class="text-32px">What are my skills?</h2>
            <div class="text-primary mt-4">
              <p class="text-24px leading-8"> I love developing and studying Front End using
                Vue.js, Nuxt.js, TypeScript and WindiCSS, but I also know
                a little bit of Back End with the use of Python.
              </p>
            </div>
            <div class="flex gap-2 my-8">
              <div v-for="item in skills" class="transform duration-400 hover:(scale-115)">
                <a href="item.link" target="_blank">
                  <img :src="item.image" />
                </a>
              </div>
            </div>
            <div class="text-primary mt-4 pl-12 uppercase">
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
      <div class="bg-white">
        <section name="container" class="px-10 max-w-320 mx-auto">
          <article class="min-h-screen pt-30" id="about">
            <div class="flex gap-20 items-center">
              <div class="min-w-1/3">
                <img src="assets/images/martin.png" />
              </div>
              <div class="flex flex-col gap-4 max-w-2/3">
                <h2 class="text-36px">About me</h2>
                <p class="text-24px text-primary leading-8 mt-4">
                  I'm a 18 year old IT student interested in Front End development
                  and Graphic Design. I found a Developer team MJ Square
                  in september 2022, in which we make websites using Nuxt.js and .NET. As for my
                  hobbies, I recently found interest in calligraphy, exercising is an ongoing hobby of mine and my
                  most
                  favourite one
                  is definitely drawing, I especially love to draw people, it helps me
                  relax my mind and let out my artistic ideas.
                  <span class="pt-6 block">I'd really love to program in the future, working as a Front End developer
                    and continue working with my small developer team MJ square and make it into something big. Until
                    that
                    time, there's a long way to
                    go, but I'm sure, that if we put our creativity into it, we're going to make it.</span>
                  <span class="pt-6 block">TEAMWORK IS EVERYTHING.</span>
                </p>
                <div class="transform duration-500 hover:(scale-115 bg-blue-500) cursor-pointer text-20px w-50 h-15 text-center bg-purple-600 text-white pt-4.5
              rounded-2xl">
                  <a href="mailto:martas.cernoch@gmail.com?subject=Contact via Website">
                    CONTACT ME
                  </a>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang setup="ts">
const colorMode = useColorMode()

</script>
<template>
  <nav class="flex items-center gap-18 justify-end pr-30 font-text min-h-20 fixed min-w-full shadow z-10">
    <a href="#home" class="text-24px hover:(pb-2.5 duration-500 text-blue-500)">home
    </a>
    <a href="#skills" class="text-24px hover:(pb-2.5 duration-500 text-blue-500)">skills
    </a>
    <a href="#projects" class="text-24px hover:(pb-2.5 duration-500 text-blue-500)">projects
    </a>
    <a href="#about" class="text-24px hover:(pb-2.5 duration-500 text-blue-500)">about me
    </a>
    <i class="fa-solid fa-display text-28px cursor-pointer hover:(pb-2.5 duration-500 text-blue-500)"
      @click="$colorMode.preference = 'system'"></i>
    <i class="fa-sharp fa-solid fa-moon text-28px cursor-pointer hover:(pb-2.5 duration-500 text-blue-500)"
      @click="$colorMode.preference = 'dark'"></i>
    <i class="fa-sharp fa-solid fa-sun text-28px cursor-pointer hover:(pb-2.5 duration-500 text-blue-500)"
      @click="$colorMode.preference = 'light'"></i>
    <i class="fa-solid fa-mug-hot text-28px cursor-pointer hover:(pb-2.5 duration-500 text-blue-500)"
      @click="$colorMode.preference = 'coffee'"></i>
  </nav>
</template>
<style>
* {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}

.dark-mode * {
  background-color: #091a28;
  color: #fff;
}

.coffee-mode * {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
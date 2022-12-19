<script lang setup="ts">
const { isDarkMode, toggleDarkMode } = useDarkMode()

const colorMode = useColorMode()
</script>

<template>
  <nav
    class="flex items-center gap-18 justify-end pr-30 font-text text-primary min-h-20 fixed bg-white min-w-full shadow z-10"
    :style="isDarkMode ? { backgroundColor: '#242424', color: 'white' } : null">
    <a href="#home" class="text-24px hover:opacity-50 duration-500">home
    </a>
    <a href="#skills" class="text-24px hover:opacity-50 duration-500">skills
    </a>
    <a href="#projects" class="text-24px hover:opacity-50 duration-500">projects
    </a>
    <a href="#about" class="text-24px hover:opacity-50 duration-500">about me
    </a>
    <div @click="toggleDarkMode" class="text-24px flex gap-4 items-center cursor-pointer">colour mode
      <div :style="isDarkMode ? { backgroundColor: 'white' } : { backgroundColor: '#242424' }"
        class="w-5 h-5 rounded-full duration-2000 mt-0.75">
      </div>
    </div>
    <h1>Color mode: {{ $colorMode.value }}</h1> <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="coffee">Coffee</option>
    </select>
  </nav>
</template>
<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}

.coffee-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
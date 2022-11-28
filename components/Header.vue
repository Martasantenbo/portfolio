<script lang setup="ts">
const { isDarkMode, toggleDarkMode } = useDarkMode()
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
  </nav>
</template>
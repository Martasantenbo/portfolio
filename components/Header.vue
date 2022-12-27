<script lang setup="ts">
const colorMode = useColorMode()

</script>

<template>
  <nav class="flex items-center gap-18 justify-end pr-30 font-text min-h-20 fixed min-w-full shadow z-10">
    <a href="#home" class="text-24px hover:opacity-50 duration-500">home
    </a>
    <a href="#skills" class="text-24px hover:opacity-50 duration-500">skills
    </a>
    <a href="#projects" class="text-24px hover:opacity-50 duration-500">projects
    </a>
    <a href="#about" class="text-24px hover:opacity-50 duration-500">about me
    </a>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="coffee">Coffee</option>
    </select>
    <i class="fa-sharp fa-solid fa-moon"></i>
    <i class="fa-sharp fa-solid fa-sun"></i>
    <i class="fa-solid fa-mug-hot"></i>
  </nav>
</template>
<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
  background-color: #091a28;
  color: #000000;
}

.coffee-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
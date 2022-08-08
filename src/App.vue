<template>
  <div class="min-h-full font-Poppins box-border">
    <NavigationBar />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<script setup>
import NavigationBar from "@/components/NavigationBar";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");
</style>

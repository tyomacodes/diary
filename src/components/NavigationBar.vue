<template>
  <header class="bg-gradient-to-l from-teal-200 to-teal-600 text-white">
    <nav
      class="container py-5 px-4 flex flex-column gap-4 items-center sm:flex-row"
    >
      <div class="flex items-center gap-x-4">
        <img class="w-14" src="../assets/images/dumbbell-light.png" alt="" />
        <h1 class="text-lg">Workout Tracker</h1>
      </div>
      <ul class="flex flex-1 justify-end gap-x-10">
        <li>
          <router-link to="/workouts">Workouts</router-link>
        </li>
        <li>
          <router-link to="/exercises">Exercises</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
        <li class="cursor-pointer">Logout</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<script setup></script>

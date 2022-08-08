<script>
export default {
  name: "ExerciseList",
};
</script>

<script setup>
import { ref, computed } from "vue";

const exercises = ref([
  {
    id: 1,
    name: "Жим штанги лёжа",
    type: "strength",
  },
  {
    id: 2,
    name: "Подтягивания",
    type: "strength",
  },
  {
    id: 3,
    name: "Становая тяга",
    type: "strength",
  },
  {
    id: 4,
    name: "Велотренажёр",
    type: "cardio",
  },
  {
    id: 5,
    name: "Беговая дорожка",
    type: "cardio",
  },
]);

const strengthExercises = computed(function () {
  return exercises.value.filter((exercise) => exercise.type === "strength");
});
</script>

<template>
  <select class="p-2 w-full text-gray-500 focus:outline-none">
    <option disabled selected>Choose an exercise</option>
    <option v-for="exercise in strengthExercises" :key="exercise.id">
      {{ exercise.name }}
    </option>
  </select>
</template>

<template>
  <select
    class="p-2 w-full text-gray-500 focus:outline-none"
    v-model="selectedExercise"
  >
    <option v-for="exercise in filteredExercises" :key="exercise.id">
      {{ exercise.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "ExerciseList",
};
</script>

<script setup>
import { ref, computed, defineProps } from "vue";

const selectedExercise = ref("");

const props = defineProps({ workoutType: String });

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

const filteredExercises = computed(function () {
  return exercises.value.filter(
    (exercise) => exercise.type === props.workoutType
  );
});
</script>

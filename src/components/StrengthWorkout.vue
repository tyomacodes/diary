<template>
  <div
    class="flex flex-col gap-x-6 gap-y-2 relative"
    v-for="(item, index) in exercises"
    :key="index"
  >
    <div class="flex flex-col">
      <label for="exercise-name" class="mb-1 text-sm text-at-light-green"
        >Exercise
      </label>
      <ExerciseList
        id="exercise-name"
        :workout-type="workoutType"
        @exercise-selected="onExerciseSelected"
      />
    </div>
    <img
      @click="addSets"
      src="@/assets/images/plus-icon.png"
      class="h-4 w-auto -left-5 -bottom-1 absolute cursor-pointer"
      alt=""
    />
    <div
      class="flex flex-row gap-x-6 gap-y-2 relative md:flex-row"
      v-for="(item, index) in exercises"
      :key="index"
    >
      <div class="flex flex-col flex-1">
        <label for="reps" class="mb-1 text-sm text-at-light-green">Reps</label>
        <input
          id="reps"
          required
          type="text"
          class="p-2 w-full text-gray-500 focus:outline-none"
          v-model="item.sets.reps"
        />
      </div>
      <div class="flex flex-col flex-1">
        <label for="weight" class="mb-1 text-sm text-at-light-green"
          >Weight, kg
        </label>
        <input
          id="weight"
          required
          type="text"
          class="p-2 w-full text-gray-500 focus:outline-none"
          v-model="item.sets.weight"
        />
      </div>
    </div>
    <img
      @click="deleteExercise(item.id)"
      src="@/assets/images/trash-light-green.png"
      class="h-4 w-auto absolute -left-5 cursor-pointer"
      alt=""
    />
  </div>
  <ButtonComponent
    @click="addExercise"
    :btn-name="btnNameAction"
    type="button"
  />
</template>

<script setup>
import { ref } from "vue";
import { uid } from "uid";

const exercises = ref([]);

// Add exercise
const addExercise = () => {
  if (workoutType.value === "strength") {
    exercises.value.push({
      id: uid(),
      exercise: "",
      sets: {
        setId: 1,
        reps: "",
        weight: "",
      },
    });
    // sets.value.push({
    //   setId: "1",
    //   exerciseName: "",
    //   reps: "",
    //   weight: "",
    // });
    return;
  }
};

// Delete exercise
const deleteExercise = (id) => {
  if (exercises.value.length > 1) {
    exercises.value = exercises.value.filter((exercise) => exercise.id !== id);
    return;
  }
  errorMsg.value =
    "Error: Cannot remove, need to have at least have one exercise";
  setTimeout(() => {
    errorMsg.value = false;
  }, 5000);
};
</script>

<script>
export default {
  name: "StrengthWorkout",
};
</script>

<style scoped></style>

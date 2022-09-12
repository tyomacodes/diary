<template>
  <div
    class="flex flex-col gap-x-6 gap-y-2 relative"
    v-for="(exercise, index) in exercises"
    :key="index"
  >
    <div class="flex flex-col">
      <label for="exercise-name" class="mb-1 text-sm text-at-light-green"
        >Exercise
      </label>
      <ExerciseList
        id="exercise-name"
        :workout-type="workoutType"
        v-model="exercise.name"
      />
    </div>
    <img
      @click="exercise.sets.push({ id: uid(), reps: 0, weight: 0 })"
      src="@/assets/images/plus-icon.png"
      class="h-4 w-auto -left-5 -bottom-1 absolute cursor-pointer"
      alt=""
    />
    <div
      class="flex flex-row gap-x-6 gap-y-2 relative md:flex-row"
      v-for="(set, index2) in exercise.sets"
      :key="index2"
    >
      <div class="flex flex-col flex-1">
        <InputComponent
          v-model="set.reps"
          label="Reps"
          type="type"
          class="p-2 w-full text-gray-500 focus:outline-none"
        />
      </div>
      <div class="flex flex-col flex-1">
        <label for="weight" class="mb-1 text-sm text-at-light-green"
          >Weight, kg
        </label>
        <input
          id="weight"
          required
          type="number"
          class="p-2 w-full text-gray-500 focus:outline-none"
          v-model="set.weight"
        />
      </div>
      <div class="flex flex-col flex-1">
        <label for="weight" class="mb-1 text-sm text-at-light-green"
          >Time under tension, secs
        </label>
        <input
          id="timeUnderTension"
          required
          type="number"
          class="p-2 w-full text-gray-500 focus:outline-none"
          v-model="set.timeUnderTension"
        />
      </div>
      <img
        @click="exercise.sets.splice(index2, 1)"
        src="@/assets/images/trash-light-green.png"
        class="h-4 w-auto absolute -right-5 cursor-pointer"
        alt=""
      />
    </div>
    <img
      @click="deleteExercise(exercise.id)"
      src="@/assets/images/trash-light-green.png"
      class="h-4 w-auto absolute -left-5 cursor-pointer"
      alt=""
    />
  </div>
  <ButtonComponent
    @click="addExercise"
    :btn-name="'Add Exercise'"
    type="button"
  />
</template>

<script setup>
import { ref } from "vue";
import { uid } from "uid";
import ExerciseList from "@/components/ExerciseList";
import InputComponent from "@/components/InputComponent";
import ButtonComponent from "@/components/ButtonComponent";

// const clientApi =
//   getCurrentInstance().appContext.config.globalProperties.$clientApi;
// let exercises = null;
// console.log("kek");
// clientApi.get("/exercise/all").then((response) => {
//   exercises = ref(response.data);
// });
// console.log("kek");
const workoutType = "strength";
const exercises = ref([]);
// const sets = ref([]);
// const errorMsg = ref(null);

// Add exercise
const addExercise = () => {
  exercises.value.push({
    id: uid(),
    name: "",
    type: workoutType,
    subtype: "",
    sets: [{ id: uid(), reps: 0, weight: 0, timeUnderTension: 0 }],
  });
  return;
};

// Delete exercise
const deleteExercise = (id) => {
  if (exercises.value.length > 1) {
    exercises.value = exercises.value.filter((exercise) => exercise.id !== id);
    return;
  }
  console.log("del");
  // errorMsg.value =
  //   "Error: Cannot remove, need to have at least have one exercise";
  // setTimeout(() => {
  //   errorMsg.value = false;
  // }, 5000);
};
</script>

<script>
export default {
  name: "StrengthWorkout",
};
</script>

<style scoped></style>

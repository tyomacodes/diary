<template>
  <div class="max-w-screen-md mx-auto px-4 py-10">
    <!-- Status Message -->
    <div
      v-if="statusMsg || errorMsg"
      class="mb-10 p-4 bg-light-grey rounded-md shadow-lg"
    >
      <p class="text-at-light-green">
        {{ statusMsg }}
      </p>
      <p class="text-red-500">{{ errorMsg }}</p>
    </div>

    <div class="p-8 flex items-start bg-light-grey rounded-md shadow-lg">
      <!-- Form -->
      <form
        @submit.prevent="createWorkout"
        class="flex flex-col gap-y-5 w-full"
      >
        <h1 class="text-2xl text-at-light-green">Record Workout</h1>
        <div class="flex flex-col">
          <InputComponent
            v-model="workoutName"
            label="Workout Name"
            type="type"
            class="p-2 text-gray-500 focus:outline-none"
          />
        </div>
        <!-- Workout Type -->
        <div class="flex flex-col">
          <SelectComponent
            :options="workoutTypeOptions"
            v-model="workoutType"
            label="Workout Type"
          />
        </div>

        <!-- Strength Workout-->
        <div v-if="workoutType === 'Strength'" class="flex flex-col gap-y-4">
          <StrengthWorkout />
        </div>
        <!-- Cardio Workout-->
        <div v-if="workoutType === 'Cardio'" class="flex flex-col gap-y-4">
          <CardioWorkout />
        </div>
        <ButtonComponent :btn-name="'Record Workout'" type="submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkoutCreate",
};
</script>

<script setup>
import { ref } from "vue";
import InputComponent from "@/components/InputComponent";
import SelectComponent from "@/components/SelectComponent";
import StrengthWorkout from "@/components/StrengthWorkout";
import CardioWorkout from "@/components/CardioWorkout";
import ButtonComponent from "@/components/ButtonComponent";

// Create data
const workoutName = ref("");
const workoutTypeOptions = ref(["Strength", "Cardio"]);
const workoutType = ref("");
// const exercises = ref([]);

const statusMsg = ref(null);
// const errorMsg = ref(null);

// // Listens for changing of workout type input
// const workoutChange = () => {
//   exercises.value = [];
//   addExercise();
// };
</script>

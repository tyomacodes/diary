<template>
  <div class="max-w-screen-md mx-auto px-4 py-10">
    Status Message
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

        <!-- Workout Name -->
        <div class="flex flex-col">
          <label for="workout-name" class="mb-1 text-sm text-at-light-green"
            >Workout Name</label
          >
          <input
            type="text"
            required
            class="p-2 text-gray-500 focus:outline-none"
            id="workout-name"
            v-model="workoutName"
          />
        </div>

        <!-- Workout Type -->
        <div class="flex flex-col">
          <label for="workout-type" class="mb-1 text-sm text-at-light-green"
            >Workout Type</label
          >
          <select
            id="workout-type"
            class="p-2 text-gray-500 focus:outline-none"
            required
            @change="workoutChange"
            v-model="workoutType"
          >
            <option value="select-workout-type">Select Workout</option>
            <option value="strength">Strength Training</option>
            <option value="cardio">Cardio</option>
          </select>
        </div>

        <!-- Strength Training Inputs -->
        <div v-if="workoutType === 'strength'" class="flex flex-col gap-y-4">
          <StrengthWorkout ref="strengthWorkout" />
        </div>

        <!-- Cardio Training Inputs -->
        <div v-if="workoutType === 'cardio'" class="flex flex-col gap-y-4">
          <CardioWorkout />
        </div>
        <SubmitButton :btn-name="btnName" />
      </form>
    </div>
  </div>
</template>

<script>
import StrengthWorkout from "@/components/StrengthWorkout";
import CardioWorkout from "@/components/CardioWorkout";
import SubmitButton from "@/components/SubmitButton";
import { ref } from "vue";
// import { uid } from "uid";
// import { supabase } from "../supabase/init";

export default {
  name: "WorkoutCreate",
  components: {
    StrengthWorkout,
    CardioWorkout,
    SubmitButton,
  },
  data() {
    return {
      btnName: "Add Workout",
    };
  },
  setup() {
    const workoutName = ref("");
    const workoutType = ref("select-workout-type");
    const exercises = ref([]);
    const statusMsg = ref(null);
    const errorMsg = ref(null);

    return {
      workoutName,
      workoutType,
      exercises,
      statusMsg,
      errorMsg,
    };
  },
};
</script>

<style scoped></style>

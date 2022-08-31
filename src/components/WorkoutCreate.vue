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
            <option value="select-workout">Select Workout</option>
            <option value="strength">Strength Training</option>
            <option value="cardio">Cardio</option>
          </select>
        </div>

        <!-- Strength Training Inputs -->
        <div v-if="workoutType === 'strength'" class="flex flex-col gap-y-4">
          <div
            class="flex flex-col gap-x-6 gap-y-2 relative"
            v-for="(item, index) in exercises"
            :key="index"
          >
            <div class="flex flex-col">
              <label
                for="exercise-name"
                class="mb-1 text-sm text-at-light-green"
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
                <label for="reps" class="mb-1 text-sm text-at-light-green"
                  >Reps</label
                >
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
        </div>
        <ButtonComponent :btn-name="btnNameSubmit" type="submit" />
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
import { uid } from "uid";
import InputComponent from "@/components/InputComponent";
import ExerciseList from "@/components/ExerciseList";
import ButtonComponent from "@/components/ButtonComponent";

// Create data
const btnNameAction = ref("Add exercise");
const btnNameSubmit = ref("Record Workout");

const workoutName = ref("");
const workoutType = ref("select-workout");
const exercises = ref([]);

const statusMsg = ref(null);
const errorMsg = ref(null);

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
  exercises.value.push({
    id: uid(),
    cardioType: "",
    distance: "",
    duration: "",
    level: "",
    pace: "",
  });
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

// onExerciseSelected log exercise name
const onExerciseSelected = (selectedExercise) => {
  exercises.value["exercise"] = selectedExercise;
  console.log(exercises.value["exercise"]);
  // addSets()
};

//Add sets
const addSets = () => {
  // sets.value.push({
  //   setId: setId++,
  //   exerciseName: exercise,
  //   reps: "",
  //   weight: "",
  // });
  console.log(exercises.value);
};

// Listens for changing of workout type input
const workoutChange = () => {
  exercises.value = [];
  addExercise();
};
</script>

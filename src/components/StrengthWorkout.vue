<template>
  <div
    class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row"
    v-for="(item, index) in exercises"
    :key="index"
  >
    <div class="flex flex-col md:w-1/3">
      <label for="exercise-name" class="mb-1 text-sm text-at-light-green"
        >Exercise
      </label>
      <ExerciseList />
      <!--      <input-->
      <!--        required-->
      <!--        type="text"-->
      <!--        class="p-2 w-full text-gray-500 focus:outline-none"-->
      <!--        v-model="item.exercise"-->
      <!--      />-->
    </div>
    <div class="flex flex-col flex-1">
      <label for="sets" class="mb-1 text-sm text-at-light-green">Sets</label>
      <input
        required
        type="text"
        class="p-2 w-full text-gray-500 focus:outline-none"
        v-model="item.sets"
      />
    </div>
    <div class="flex flex-col flex-1">
      <label for="reps" class="mb-1 text-sm text-at-light-green">Reps</label>
      <input
        required
        type="text"
        class="p-2 w-full text-gray-500 focus:outline-none"
        v-model="item.reps"
      />
    </div>
    <div class="flex flex-col flex-1">
      <label for="weight" class="mb-1 text-sm text-at-light-green"
        >Weight (LB's)
      </label>
      <input
        required
        type="text"
        class="p-2 w-full text-gray-500 focus:outline-none"
        v-model="item.weight"
      />
    </div>
    <img
      @click="deleteExercise(item.id)"
      src="@/assets/images/trash-light-green.png"
      class="h-4 w-auto absolute -left-5 cursor-pointer"
      alt=""
    />
  </div>
  <ActionButton :btn-name="btnName" @click="addExercise"></ActionButton>
</template>

<script>
import ExerciseList from "@/components/ExerciseList";
import ActionButton from "@/components/ActionButton";
import { ref } from "vue";
import { uid } from "uid";
// import { supabase } from "../supabase/init";

export default {
  name: "StrengthWorkout",
  data() {
    return {
      btnName: "Add Exercise",
    };
  },
  components: {
    ExerciseList,
    ActionButton,
  },
  setup() {
    // Create data
    const exercises = ref([]);
    const errorMsg = ref(null);

    // Add exercise
    const addExercise = () => {
      exercises.value.push({
        id: uid(),
        exercise: "",
        sets: "",
        reps: "",
        weight: "",
      });
      return;
    };

    // Delete exercise
    const deleteExercise = (id) => {
      if (exercises.value.length > 1) {
        exercises.value = exercises.value.filter(
          (exercise) => exercise.id !== id
        );
        return;
      }
      errorMsg.value =
        "Error: Cannot remove, need to at least have one exercise";
      setTimeout(() => {
        errorMsg.value = false;
      }, 5000);
    };

    return {
      exercises,
      errorMsg,
      addExercise,
      deleteExercise,
    };
  },
};
</script>

<style scoped></style>

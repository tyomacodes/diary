<template>
  <ExerciseList />
  <div class="exerciseView row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="exercise_name" type="text" class="validate" />
          <label for="exercise_name">Exercise</label>
        </div>
      </div>
    </form>
  </div>
  <SubmitButton :btn-name="btnName" />
</template>

<script>
import SubmitButton from "@/components/SubmitButton";

export default {
  name: "ExerciseView",
  components: {
    SubmitButton,
  },
  data() {
    return {
      btnName: "Add Exercise",
    };
  },
};
</script>

<style scoped></style>

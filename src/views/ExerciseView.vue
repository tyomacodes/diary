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
  <ButtonComponent :btn-name="btnName" />
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent";

export default {
  name: "ExerciseView",
  components: {
    ButtonComponent,
  },
  data() {
    return {
      btnName: "Add Exercise",
    };
  },
};
</script>

<style scoped></style>

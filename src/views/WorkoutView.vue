<template>
  <div class="row">
    <div class="col s6">
      <WorkoutCreate />
    </div>
    <div class="col s6">
      <WorkoutList />
    </div>
  </div>
</template>

<script>
import WorkoutCreate from "@/components/WorkoutCreate";
import WorkoutList from "@/components/WorkoutList";

export default {
  name: "WorkoutView",
  components: {
    WorkoutCreate,
    WorkoutList,
  },
};
</script>

<style scoped></style>

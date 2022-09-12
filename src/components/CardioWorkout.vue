<template>
  <ButtonComponent :btn-name="'Add exercise'" type="button" />
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent";

export default {
  name: "CardioWorkout",
  components: { ButtonComponent },
};
</script>

<style scoped></style>

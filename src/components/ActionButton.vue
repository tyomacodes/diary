<template>
  <button
    type="button"
    class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"
  >
    {{ btnName }}
  </button>
</template>

<script setup>
const props = defineProps({ btnName: { required: true, type: String } });
</script>

<script>
export default {
  name: "ActionButton",
};
</script>

<style scoped></style>

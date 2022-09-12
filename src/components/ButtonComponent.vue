<template>
  <button
    v-bind="$attrs"
    class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"
  >
    {{ btnName }}
  </button>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  btnName: { default: "Button", type: String },
});
</script>

<script>
export default {
  name: "ButtonComponent",
};
</script>

<style scoped></style>

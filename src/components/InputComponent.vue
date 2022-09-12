<template>
  <label class="mb-1 text-sm text-at-light-green">{{ label }}</label>
  <input
    v-bind="$attrs"
    :placeholder="label"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  label: { default: "", type: String },
  modelValue: { default: "", type: [String, Number] },
});
</script>

<script>
export default {
  name: "InputComponent",
};
</script>

<style scoped></style>

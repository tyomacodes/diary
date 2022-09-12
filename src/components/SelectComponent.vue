<template>
  <label v-if="label" class="mb-1 text-sm text-at-light-green">{{
    label
  }}</label>
  <select
    v-bind="{
      ...$attrs,
      onChange: (event) => {
        $emit('update:modelValue', event.target.value);
      },
    }"
    :value="modelValue"
    class="p-2 w-full text-gray-500 focus:outline-none"
  >
    <option
      v-for="option in options"
      :key="option"
      :value="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  label: { default: "", type: String },
  modelValue: { default: "", type: [String, Number] },
  options: { required: true, type: Array },
});
</script>

<script>
export default {
  name: "SelectComponent",
};
</script>

<style scoped></style>

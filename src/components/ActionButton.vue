<template>
  <!--  <button class="btn waves-effect waves-light" type="submit" name="action">-->
  <!--    {{ "Save " + btnName }}-->
  <!--    <i class="material-icons right">send</i>-->
  <!--  </button>-->
  <button
    type="button"
    class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"
  >
    {{ btnName }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    btnName: String,
  },
};
</script>

<style scoped></style>

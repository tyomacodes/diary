<template>
  <div class="max-w-screen-md mx-auto px-4 py-10">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Date</th>
          <th>Exercise</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>x</td>
          <td>x</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "WorkoutList",
  props: {
    exerIds: Array,
    exerDurations: Array,
    exerNames: Array,
  },
};
</script>

<style scoped></style>

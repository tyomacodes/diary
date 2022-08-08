<template>
  <div
    class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row"
    v-for="(item, index) in exercises"
    :key="index"
  >
    <div class="flex flex-col md:w-1/3">
      <label for="cardio-type" class="mb-1 text-sm text-at-light-green"
        >Type
      </label>
      <select
        id="cardio-type"
        class="p-2 w-full text-gray-500 focus:outline-none"
        v-model="item.cardioType"
      >
        <option value="#">Select Type</option>
        <option value="run">Runs</option>
        <option value="walk">Walk</option>
      </select>
    </div>
    <div class="flex flex-col flex-1">
      <label for="distance" class="mb-1 text-sm text-at-light-green"
        >Distance
      </label>
      <input
        required
        type="text"
        class="p-2 w-full text-gray-500 focus:outline-none"
        v-model="item.distance"
      />
    </div>
    <div class="flex flex-col flex-1">
      <label for="duration" class="mb-1 text-sm text-at-light-green"
        >Duration
      </label>
      <input
        required
        type="text"
        class="p-2 w-full text-gray-500 focus:outline-none"
        v-model="item.duration"
      />
    </div>
    <div class="flex flex-col flex-1">
      <label for="pace" class="mb-1 text-sm text-at-light-green">Pace </label>
      <input
        required
        type="text"
        class="p-2 w-full text-gray-500 focus:outline-none"
        v-model="item.pace"
      />
    </div>
    <img
      @click="deleteExercise(item.id)"
      src="@/assets/images/trash-light-green.png"
      class="h-4 w-auto absolute -left-5 cursor-pointer"
      alt=""
    />
  </div>
  <button
    @click="addExercise"
    type="button"
    class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"
  >
    Add Exercise
  </button>
</template>

<script>
export default {
  name: "CardioWorkout",
};
</script>

<style scoped></style>

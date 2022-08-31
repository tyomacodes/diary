<template>
  <div class="max-w-screen-sm mx-auto px-4 py-10">
    <!-- Error Handling -->

    <!-- Register -->
    <form
      @submit.prevent="register"
      class="p-8 flex flex-col bg-light-grey rounded-md shadow-lg"
    >
      <h1 class="text-3xl text-at-light-green mb-4">Register</h1>

      <div class="flex flex-col mb-2">
        <label for="username" class="mb-1 text-sm text-at-light-green"
          >Username</label
        >
        <input
          type="text"
          required
          class="p-2 text-gray-500 focus:outline-none"
          id="username"
          v-model="username"
        />
      </div>

      <div class="flex flex-col mb-2">
        <label for="password" class="mb-1 text-sm text-at-light-green"
          >Password</label
        >
        <input
          type="password"
          required
          class="p-2 text-gray-500 focus:outline-none"
          id="password"
          v-model="password"
        />
      </div>

      <div class="flex flex-col mb-2">
        <label for="confirmPassword" class="mb-1 text-sm text-at-light-green"
          >Confirm Password</label
        >
        <input
          type="password"
          required
          class="p-2 text-gray-500 focus:outline-none"
          id="confirmPassword"
          v-model="confirmPassword"
        />
      </div>
      <ButtonComponent :btn-name="btnName" type="submit" />
      <router-link class="text-sm mt-6 text-center" to="/login">
        Already have an account? <span class="text-at-light-green">Login</span>
      </router-link>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import ButtonComponent from "@/components/ButtonComponent";
// import { supabase } from "../supabase/init";
// import { useRouter } from "vue-router";

export default {
  name: "RegisterView",
  data() {
    return {
      btnName: "Register",
    };
  },
  components: {
    ButtonComponent,
  },
  setup() {
    // Create data / vars
    //const router = useRouter();
    const username = ref(null);
    const password = ref(null);
    const confirmPassword = ref(null);
    const errorMsg = ref(null);

    // Register function
    const register = async () => {
      // if (password.value === confirmPassword.value) {
      //   try {
      //     const { error } = await supabase.auth.signUp({
      //       email: email.value,
      //       password: password.value,
      //     });
      //     if (error) throw error;
      //     router.push({ name: "Login" });
      //   } catch (error) {
      //     errorMsg.value = error.message;
      //     setTimeout(() => {
      //       errorMsg.value = null;
      //     }, 5000);
      //   }
      //   return;
      // }
      // errorMsg.value = "Error: Passwords do not match";
      // setTimeout(() => {
      //   errorMsg.value = null;
      // }, 5000);
    };

    return { username, password, confirmPassword, errorMsg, register };
  },
};
</script>

<style scoped></style>

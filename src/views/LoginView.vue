<template>
  <div class="max-w-screen-sm mx-auto px-4 py-10">
    <!-- Error Handling -->

    <!-- Login -->
    <form
      @submit.prevent="login"
      class="p-8 flex flex-col bg-light-grey rounded-md shadow-lg"
    >
      <h1 class="text-3xl text-at-light-green mb-4">Login</h1>

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
      <SubmitButton :btn-name="btnName" />
      <router-link class="text-sm mt-6 text-center" to="/register">
        Don't have an account? <span class="text-at-light-green">Register</span>
      </router-link>
    </form>
  </div>
  <div>
    <h1>{{ username }}</h1>
    <h2>{{ password }}</h2>
  </div>
</template>

<script>
import SubmitButton from "@/components/SubmitButton";
import { ref } from "vue";
// import { supabase } from "../supabase/init";
// import { useRouter } from "vue-router";

export default {
  name: "LoginView",
  data() {
    return {
      btnName: "Login",
    };
  },
  components: {
    SubmitButton,
  },
  setup() {
    // Create data / vars
    // const router = useRouter();
    const username = ref(null);
    const password = ref(null);
    const errorMsg = ref(null);

    // Login function
    const login = async () => {
      // try {
      //   const { error } = await supabase.auth.signIn({
      //     email: email.value,
      //     password: password.value,
      //   });
      //   if (error) throw error;
      //   router.push({ name: "Home" });
      // } catch (error) {
      //   errorMsg.value = `Error: ${error.message}`;
      //   setTimeout(() => {
      //     errorMsg.value = null;
      //   }, 5000);
      // }
    };

    return { username, password, errorMsg, login };
  },
};
</script>

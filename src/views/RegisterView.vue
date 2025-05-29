<template>
  <AuthLayout>
    <div class="flex justify-center items-center w-full">
      <!-- Left: Image -->
      <div class="w-1/2 h-screen hidden lg:block">
        <img src="../assets/LoginLeftPanel.jpg" alt="Login Left Panel" class="object-cover w-full h-full">
      </div>
      <!-- Right: Register Form -->
      <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 class="text-2xl font-semibold mb-4">Registro</h1>
        <form action="#" method="POST">
          <!-- Username Input -->
          <div class="mb-4">
            <label for="username" class="block text-gray-600">Usuario</label>
            <input type="text" id="username" name="username" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off">
          </div>
          <!-- Email Input -->
          <div class="mb-4">
            <label for="email" class="block text-gray-600">Correo electrónico</label>
            <input type="email" id="email" name="email" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off">
          </div>
          <!-- Password Input -->
          <div class="mb-4">
            <label for="password" class="block text-gray-600">Contraseña</label>
            <input type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off">
          </div>
          <!-- Register Button -->
          <button type="button" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full" @click="onRegister">Registrarse</button>
        </form>
        <!-- Login Link -->
        <div class="mt-6 text-blue-500 text-center">
          <router-link to="/login" class="hover:underline">¿Ya tienes cuenta? Inicia sesión</router-link>
        </div>
      </div>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import AuthLayout from "../layouts/AuthLayout.vue"; // Using AuthLayout for styling.

const router = useRouter()

/**
 * Handles the registration process.
 * Currently, it includes a placeholder comment and redirects to the home page.
 * In a real application, this would involve API calls for user registration.
 */
function onRegister() {
  // "Aquí iría la lógica de registro" means "Registration logic would go here"
  console.log("Register button clicked"); // Placeholder for actual registration logic
  // Redirect to the home page after successful registration (or placeholder action)
    router.replace('/')
}
</script> 
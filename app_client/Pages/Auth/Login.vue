<template>
  <x-guest-layout>
    <x-auth-card>
      <template #logo>
        <x-link href="/">
          <x-application-logo class="w-20 h-20 fill-current text-gray-500" />
        </x-link>
      </template>

      <!-- Session Status -->
      <x-auth-session-status class="mb-4" :status="status" />

      <!-- Validation Errors -->
      <x-auth-validation-errors class="mb-4" :errors="errors" />

      <form method="POST" :action="loginPath">
        <!-- Email Address -->
        <div>
          <x-label for="email" :value="__('Email')" />

          <x-input
            id="email"
            class="block mt-1 w-full"
            type="email"
            name="email"
            required
            autofocus
          />
          <!-- :value="old('email')" -->
        </div>

        <!-- Password -->
        <div class="mt-4">
          <x-label for="password" :value="__('Password')" />

          <x-input
            id="password"
            class="block mt-1 w-full"
            type="password"
            name="password"
            required
            autocomplete="current-password"
          />
        </div>

        <!-- Remember Me -->
        <div class="block mt-4">
          <label for="remember_me" class="inline-flex items-center">
            <input
              id="remember_me"
              type="checkbox"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              name="remember"
            />
            <span class="ml-2 text-sm text-gray-600">{{
              __("Remember me")
            }}</span>
          </label>
        </div>

        <div class="flex items-center justify-end mt-4">
          <x-link
            class="underline text-sm text-gray-600 hover:text-gray-900"
            :href="registerPath"
          >
            {{ __("Don't have an account?") }}
          </x-link>
          <x-link
            v-if="passwordRequestPath"
            class="underline text-sm text-gray-600 hover:text-gray-900"
            :href="passwordRequestPath"
          >
            {{ __("Forgot your password?") }}
          </x-link>

          <x-button class="ml-3">
            {{ __("Login") }}
          </x-button>
        </div>
      </form>
    </x-auth-card>
  </x-guest-layout>
</template>

<script>
import XGuestLayout from "../../Layouts/XGuestLayout.vue";
import XAuthCard from "../../Apex/Auth/XAuthCard.vue";
import XApplicationLogo from "../../Apex/Application/XApplicationLogo.vue";
import XAuthSessionStatus from "../../Apex/Auth/XAuthSessionStatus.vue";
import XAuthValidationErrors from "../../Apex/Auth/XAuthValidationErrors.vue";
import XLabel from "../../Apex/Forms/XLabel.vue";
import XInput from "../../Apex/Forms/XInput.vue";
import XLink from "../../Apex/Buttons/XLink.vue";
import XButton from "../../Apex/Buttons/XButton.vue";

export default {
  name: "AuthLogin",
  components: {
    XGuestLayout,
    XAuthCard,
    XApplicationLogo,
    XAuthSessionStatus,
    XAuthValidationErrors,
    XLabel,
    XInput,
    XLink,
    XButton,
  },
  props: {
    status: {
      type: String,
      default: "",
    },
    loginPath: {
      type: String,
      required: true,
    },
    registerPath: {
      type: String,
      default: "",
    },
    passwordRequestPath: {
      type: String,
      default: "",
    },
    errors: {
      type: Array,
    },
  },
};
</script>

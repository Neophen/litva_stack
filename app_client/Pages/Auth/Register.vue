<template>
  <x-guest-layout>
    <x-auth-card>
      <template #logo>
        <x-link href="/">
          <x-application-logo class="w-20 h-20 fill-current text-gray-500" />
        </x-link>
      </template>

      <!-- Validation Errors -->
      <x-auth-validation-errors class="mb-4" :errors="errors" />

      <form method="POST" :action="registerPath">
        <!-- Name -->
        <div>
          <x-label for="name" :value="__('Name')" />

          <x-input
            id="name"
            class="block mt-1 w-full"
            type="text"
            name="name"
            required
            autofocus
          />
        </div>

        <!-- Email Address -->
        <div class="mt-4">
          <x-label for="email" :value="__('Email')" />

          <x-input
            id="email"
            class="block mt-1 w-full"
            type="email"
            name="email"
            required
          />
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
            autocomplete="new-password"
          />
        </div>

        <!-- Confirm Password -->
        <div class="mt-4">
          <x-label
            for="password_confirmation"
            :value="__('Confirm Password')"
          />

          <x-input
            id="password_confirmation"
            class="block mt-1 w-full"
            type="password"
            name="password_confirmation"
            required
          />
        </div>

        <div class="flex items-center justify-end mt-4">
          <x-link
            class="underline text-sm text-gray-600 hover:text-gray-900"
            :href="loginPath"
          >
            {{ __("Already registered?") }}
          </x-link>

          <x-button class="ml-4">
            {{ __("Register") }}
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
  name: "AuthRegister",
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
    errors: {
      type: Array,
    },
  },
};
</script>

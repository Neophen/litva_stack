<template>
  <x-guest-layout>
    <x-auth-card>
      <template #logo>
        <x-link href="/">
          <x-application-logo class="w-20 h-20 fill-current text-gray-500" />
        </x-link>
      </template>

      <div class="mb-4 text-sm text-gray-600">
        {{ __(message) }}
      </div>

      <!-- Session Status -->
      <x-auth-session-status class="mb-4" :status="status" />

      <!-- Validation Errors -->
      <x-auth-validation-errors class="mb-4" :errors="errors" />

      <form method="POST" :action="passwordEmailPath">
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
        </div>

        <div class="flex items-center justify-end mt-4">
          <x-button>
            {{ __("Email Password Reset Link") }}
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
  name: "AuthForgotPassword",
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
    passwordEmailPath: {
      type: String,
      required: true,
    },
    errors: {
      type: Array,
    },
    message: {
      type: String,
      default:
        "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.",
    },
  },
};
</script>

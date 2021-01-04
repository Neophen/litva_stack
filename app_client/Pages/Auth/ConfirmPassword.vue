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

      <!-- Validation Errors -->
      <x-auth-validation-errors class="mb-4" :errors="errors" />

      <form method="POST" :action="passwordConfirmPath">
        <!-- Password -->
        <div>
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

        <div class="flex justify-end mt-4">
          <x-button>
            {{ __("Confirm") }}
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
  name: "AuthConfirmPassword",
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
    passwordConfirmPath: {
      type: String,
      default: "",
    },
    errors: {
      type: Array,
    },
    message: {
      type: String,
      default:
        "This is a secure area of the application. Please confirm your password before continuing.",
    },
  },
};
</script>

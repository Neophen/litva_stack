<template>
  <x-guest-layout>
    <x-auth-card>
      <template #logo>
        <x-link href="/">
          <x-application-logo class="w-20 h-20 fill-current text-gray-500" />
        </x-link>
      </template>

      <div class="mb-4 text-sm text-gray-600">
        {{
          __(
            "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."
          )
        }}
      </div>

      <!-- Session Status -->
      <x-auth-session-status
        v-if="status === 'verification-link-sent'"
        :status="status"
        class="mb-4"
      >
        {{
          __(
            "A new verification link has been sent to the email address you provided during registration."
          )
        }}
      </x-auth-session-status>

      <!-- Validation Errors -->
      <x-auth-validation-errors class="mb-4" :errors="errors" />

      <div class="mt-4 flex items-center justify-between">
        <form method="POST" :action="verificationSendPath">
          <div>
            <x-button>
              {{ __("Resend Verification Email") }}
            </x-button>
          </div>
        </form>

        <form method="POST" :action="logoutPath">
          <button
            type="submit"
            class="underline text-sm text-gray-600 hover:text-gray-900"
          >
            {{ __("Logout") }}
          </button>
        </form>
      </div>
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
    verificationSendPath: {
      type: String,
      required: true,
    },
    logoutPath: {
      type: String,
      required: true,
    },
    errors: {
      type: Array,
    },
  },
};
</script>

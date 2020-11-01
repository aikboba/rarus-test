<template>
  <div class="frame-block frame-body">
    <slot />
    <button
        v-if="currentStep !== stepperData.length - 1"
        class="abtn next-step-abtn" :class="{'active-abtn': allowNext}"
        :disabled="!allowNext"
        @click="$emit('next-step')"
    >
      Перейти к следующему шагу
    </button>
  </div>
</template>

<script>
export default {
  name: "frame-body",
  props: {
    stepperData: {
      type: Array,
      default: () => [],
      required: true
    },
    currentStep: {
      type: Number,
      default: 0,
      required: true
    },
    allowNext: {
      type: Boolean,
      default: false,
      required: true
    }
  }
}
</script>
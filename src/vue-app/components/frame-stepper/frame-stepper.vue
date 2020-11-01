<template>
  <div v-if="stepperData.length">
    <frame-header
        :stepperData="stepperData" :currentStep="currentStep"
        v-on:prev-step="currentStep--"
    />
    <frame-body
        :allowNext="allowNext" :currentStep="currentStep" :stepperData="stepperData"
        v-on:next-step="currentStep++"
    >
      <slot />
    </frame-body>
  </div>
</template>

<script>
import frameHeader from '@app/components/frame-stepper/frame-header'
import frameBody from '@app/components/frame-stepper/frame-body'

export default {
  name: "frame-stepper",
  data: () => ({
    currentStep: 0
  }),
  components: {
    frameHeader,
    frameBody,
  },
  props: {
    stepperData: {
      type: Array,
      default: () => [],
    },
    allowNext: {
      type: Boolean,
      default: false,
      required: true
    },
    stepperStep: {
      type: Number,
      default: 0,
    }
  },
  computed: {
    contentLoading() {
      return !this.stepperData[this.currentStep].stepContent;
    }
  },
  created() {
    this.currentStep = this.stepperStep;
  },
  watch: {
    currentStep(newStep) {
      this.$emit('step-change', newStep);
    }
  }
}
</script>
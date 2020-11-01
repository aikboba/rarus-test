<template>
  <header class="frame-block frame-header">
    <div>
      <button
          v-if="currentStep !== 0"
          class="abtn header-back-lnk"
          @click="$emit('prev-step')"
      >
        <span>{{backLinkTitle}}</span>
      </button>
    </div>
    <h1 class="header-text">{{stepTitle}}</h1>
  </header>
</template>

<script>
export default {
  name: "frame-header",
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
    }
  },
  computed: {
    stepTitle() {
      return this.stepperData[this.currentStep].hasOwnProperty('stepTitle') ?
          (this.currentStep + 1) + '/' + this.stepperData.length + ' ' + this.stepperData[this.currentStep].stepTitle :
            'Шаг ' + (this.currentStep + 1) + '/' + this.stepperData.length;
    },
    backLinkTitle() {
      return this.stepperData[this.currentStep - 1].hasOwnProperty('backLinkTitle') ?
          this.stepperData[this.currentStep - 1].backLinkTitle : 'Назад';
    }
  }
}
</script>
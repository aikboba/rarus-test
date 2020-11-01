<template>
  <frame-stepper
      :stepperData="stepperData" :allowNext="stepperAllowNext" :stepperStep="stepperStep"
      v-on:step-change="stepChange"
  >
    <atc-list
        v-if="stepperStep === 0"
        v-on:atc-selected="stepperAllowNext = true"
    />
    <atc-single v-else />
  </frame-stepper>
</template>

<script>
  import frameStepper from '@app/components/frame-stepper/frame-stepper'
  import atcList from '@app/components/atc/atc-list'
  import atcSingle from '@app/components/atc/atc-single'

  export default {
    data: () => ({
      stepperData: [
        {
          stepTitle: 'Какая у вас АТС?',
          backLinkTitle: 'Подходящие решения',
        },
        {
          stepTitle: 'Вы получите следующие функции',
        }
      ],
      stepperAllowNext: false,
      stepperStep: 0
    }),
    components: {
      frameStepper,
      atcList,
      atcSingle
    },
    methods: {
      stepChange(step) {
        this.stepperStep = step;
      }
    }
  }
</script>

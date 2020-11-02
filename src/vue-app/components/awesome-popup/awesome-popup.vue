<template>
  <div class="awesome-popup-wrap" :class="{'opened': isOpened}">
    <button class="abtn as-text" @click="openHandle">{{asText}}</button>
    <div class="frame-block rounder triangled shadow awesome-popup">
      <slot />
    </div>
  </div>

</template>

<script>
export default {
  name: "awesome-popup",
  data: () => ({
    isOpened: false
  }),
  props: {
    asText: {
      type: String,
      default: 'Текст',
      required: true
    },
    asPopupIsOpened: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    openHandle() {
      this.isOpened = !this.isOpened;
      this.$emit('open-handle', this.isOpened)
    }
  },
  created() {
    this.isOpened = this.asPopupIsOpened;
  },
  watch: {
    asPopupIsOpened(newVal) {
      this.isOpened = newVal;
    }
  }
}
</script>
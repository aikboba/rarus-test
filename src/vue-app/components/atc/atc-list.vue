<template>
  <div class="atc-list-wrap" :class="{'d-flex align-items-center justify-content-center': !atcList}">
    <ul v-if="atcList" class="atc-list no-list" :class="{'compact': isCompact}">
      <li class="list-item list-item-title text-fail">У меня нет АТС</li>
      <template v-for="(atcGroup, key) in atcList">
        <li class="list-item list-item-title">{{key}}</li>
        <li
            v-for="atcItem in atcGroup" class="list-item"
            :class="{'selected': atcItem.id === selectedItemId}"
            @click="selectItem(atcItem.id)"
        >
          <div class="list-item-inner">
            <span class="list-item-name">{{atcItem.name}}</span>
          </div>
        </li>
      </template>
    </ul>
    <moon-loader v-else color="#002B7E" :loading="true" :size="50" sizeUnit="px"></moon-loader>
  </div>
</template>

<script>
export default {
  name: "atc-list",
  data: () => ({
    atcList: null,
    selectedItemId: null
  }),
  props: {
    isCompact: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    selectItem(id) {
      this.selectedItemId = id;
      localStorage.setItem('atc-selected', this.selectedItemId);
      this.$emit('atc-selected', this.selectedItemId);
    },
    getItems() {
      let _this = this;

      this.axios({
        method: 'get',
        url: '/data/atc-group.json',
      })
          .then(function (response) {
            _this.atcList = response.data;
          })
          .catch(function () {
            return false;
          });
    }
  },
  created() {
    let _this = this;

    if (localStorage.getItem('atc-selected')) {
      this.selectedItemId = +localStorage.getItem('atc-selected');
      this.$emit('atc-selected', this.selectedItemId);
    }

    setTimeout(() => _this.getItems(), 1000);//Fake delay
  }
}
</script>
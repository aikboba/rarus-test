<template>
  <div class="atc-list-wrap" :class="{'d-flex align-items-center justify-content-center': !atcList}">
    <ul v-if="atcList" class="atc-list no-list">
      <template v-for="(atcGroup, key) in atcList">
        <li class="list-item list-item-title">{{key}}</li>
        <li
            v-for="atcItem in atcGroup" class="list-item"
            :class="{'selected': atcItem.id === selectedItemId}"
            @click="selectItem(atcItem.id)"
        >
          <span class="list-item-name">{{atcItem.name}}</span>
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
  methods: {
    selectItem(id) {
      this.selectedItemId = id;
      localStorage.setItem('atc-selected', this.selectedItemId);
      this.$emit('atc-selected', this.selectedItemId);
    }
  },
  created() {
    let _this = this;

    if (localStorage.getItem('atc-selected')) {
      this.selectedItemId = +localStorage.getItem('atc-selected');
      this.$emit('atc-selected', this.selectedItemId);
    }

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
}
</script>
<template>
  <div class="single-frame" :class="{'d-flex align-items-center justify-content-center': !atcObject}">
    <template v-if="atcObject">
      <section class="frame-section">
        <ul class="no-list prop-val-list">
          <li class="list-item">
            <span class="prop">Модель АТС:</span>
            <span class="val">{{atcObject['name']}}</span>
          </li>
          <li class="list-item">
            <span class="prop">Программа 1С:</span>
            <span class="val">{{atcObject['1c_program']}}</span>
          </li>
          <li class="list-item">
            <span class="prop">Подходящие решения:</span>
            <span class="val">{{atcObject['solutions']}}</span>
          </li>
        </ul>
      </section>
      <section class="frame-section">
        <div class="feature-separator">{{atcObject['solutions']}}</div>
      </section>
      <section class="frame-section grid-2-columns">
        <div class="candy-list-wrap success">
          <h2 class="list-title">Поддерживаемые функции:</h2>
          <ul class="no-list candy-list">
            <li
                v-for="item in atcObject['supported']"
                class="list-item iconized active-icon"
            >
              {{item}}
            </li>
          </ul>
        </div>
        <div class="candy-list-wrap fail">
          <h2 class="list-title">Неподдерживаемые функции:</h2>
          <ul class="no-list candy-list">
            <li
                v-for="item in atcObject['unsupported']"
                class="list-item iconized inactive-icon"
            >
              {{item}}
            </li>
          </ul>
        </div>
      </section>
      <section class="frame-section">
        <div class="thin-separator"></div>
      </section>
      <section class="frame-section">
        <div class="candy-list-wrap links">
          <h2 class="list-title">Ссылки на инструкции:</h2>
          <ul class="no-list candy-list">
            <li
                v-for="item in atcObject['links']"
                class="list-item"
            >
              <a :href="item['link']" class="item-link" target="_blank">{{item['name']}}</a>
            </li>
          </ul>
        </div>
      </section>
    </template>
    <moon-loader v-else color="#002B7E" :loading="true" :size="50" sizeUnit="px"></moon-loader>
  </div>
</template>

<script>
export default {
  name: "atc-single",
  data: () => ({
    atcObject: null
  }),
  created() {
    let _this = this;

    this.axios({
      method: 'get',
      url: '/data/atc-list.json',
    })
        .then(function (response) {
          _this.atcObject = response.data.atc.find(x => x.id === +localStorage.getItem('atc-selected'));
        })
        .catch(function () {
          return false;
        });
  }
}
</script>
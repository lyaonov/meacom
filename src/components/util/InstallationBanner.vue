<script setup>
import {useCartStore} from "../../stores/store.js";
import {computed} from "vue";
import IconInstruments from "../icons/IconInstruments.vue";

const cartStore = useCartStore();
const needInstallation = computed(() => cartStore.needInstallation)

function updateInstallationStatus(e) {
  cartStore.setNeedInstallation(e.target.checked)
}
</script>

<template>
  <div class="installation-banner">
    <input class="installation-banner__container__checkbox" type="checkbox" :checked="needInstallation" @change="updateInstallationStatus"/>
    <div class="installation-banner__container__icon">
      <IconInstruments />
    </div>
    <div class="installation-banner__content">
      <div class="installation-banner__content__title">
        Установка
      </div>
      <div class="installation-banner__content__message">
        Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.
      </div>
    </div>
  </div>
</template>

<style scoped>
.installation-banner {
  background: #F6F8FA;
  border-radius: 5px;
  padding: 26px 25px;

  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}

.installation-banner__container__checkbox {
  margin-right: 18px;
  width: 20px;
  height: 20px;
}

.installation-banner__container__icon {
  padding: 10px;
  background: #FFFFFF;
  border-radius: 4px;
  margin-right: 21px;
}

.installation-banner__content__title {
  font-weight: 600;
  font-size: 16px;
}

.installation-banner__content__message {
  line-height: 150%;
  color: #797B86;
}
</style>

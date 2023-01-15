<script setup>
import {computed} from "vue";
import {formatPriceRange, formatPriceRangeTwoPlaces} from "../../lib/utils.js";
import Button from "../common/Button.vue";

const props = defineProps({
  item: Object,
})

const priceRangeRuStr = computed(() => formatPriceRange(props.item.priceRangeRub, "₽"))
const priceRangeEuroStr = computed(() => formatPriceRangeTwoPlaces(props.item.priceRangeEuro, "€"))
</script>

<template>
  <div class="history-item">
    <div class="history-item__image">
      <img :alt="props.item.name" :src="props.item.imageSrc"/>
    </div>
    <div class="history-item__name">
      {{ props.item.name }}
    </div>
    <div class="history-item__description">
      {{ props.item.description }}
    </div>
    <div class="history-item__price-ru">
      {{ priceRangeRuStr }}
    </div>
    <div class="history-item__price-euro">
      {{ priceRangeEuroStr }}
    </div>
    <Button class="history-item__button-details" primary>Подробнее</Button>
  </div>
</template>

<style scoped>
.history-item {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: stretch;
  position: relative;
  width: 305px;
  height: 563px;
  box-sizing: border-box;
  padding: 25px;
  background: #F6F8FA;
  border-radius: 5px;
}

.history-item__image {
  margin-bottom: 7px;
}

.history-item__image, .history-item__image > img {
  width: 245px;
  height: 245px;
}

.history-item__name {
  font-weight: 700;
  font-size: 22px;
  line-height: 120.52%;
  color: #1F2432;
  margin-bottom: 10px;
}

.history-item__description {
  /*margin-bottom: 59px;*/
  flex-grow: 1;
}

.history-item__price-ru {
  font-family: 'Roboto', serif;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  letter-spacing: 0.005em;
  color: #1F2432;
  margin-bottom: 3px;
}

.history-item__price-euro {
  font-size: 16px;
  color: #797B86;
  margin-bottom: 20px;
}

.history-item__button-details {
  width: 100%;
}
</style>

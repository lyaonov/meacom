<script setup>
import {computed} from "vue";
import Counter from '../common/Counter.vue'
import { formatPrice } from "../../lib/utils.js";
import IconCross from "../icons/IconCross.vue";

const props = defineProps({
  item: Object,
})

const priceStr = computed(() => formatPrice(props.item.price))
const totalPriceStr = computed(() => formatPrice(props.item.price * props.item.count))

const emit = defineEmits(['updateCount', 'remove']);

function emitPriceUpdate(newPrice) {
  emit('updateCount', newPrice)
}
</script>

<template>
  <div class="cart-item">
    <div class="cart-item__image">
      <img :src="props.item.imageSrc" :alt="props.item.name" />
    </div>
    <div class="cart-item__content">
      <div class="cart-item__content__name">
        {{props.item.name}}
      </div>
      <div class="cart-item__content__description" v-html="props.item.description"></div>
      <div class="cart-item__content__vendor">
        Артикул: {{props.item.vendorCode}}
      </div>
    </div>
    <div class="cart-item__count prevent-select">
      <Counter class="cart-item__count__counter" :value="props.item.count" @update="emitPriceUpdate" />
      <Transition>
        <div class="cart-item__count__price" v-if="item.count > 1">{{priceStr}} ₽/шт.</div>
      </Transition>
    </div>
    <div class="cart-item__total-price prevent-select">
      {{totalPriceStr}} ₽
    </div>
    <div class="cart-item__remove prevent-select" @click="emit('remove')">
      <IconCross />
    </div>
  </div>
</template>

<style scoped>
.cart-item {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  position: relative;
}
.cart-item__content {
  width: 265px;
  margin-right: 78px;
}
.cart-item__image {
  margin-right: 30px;
  margin-left: 15px;
}
.cart-item__image,.cart-item__image > img {
  width: 100px;
  height: 100px;
}
.cart-item__content__name {
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 6px;
}
.cart-item__content__description {
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 7px;
}
.cart-item__content__vendor {
  line-height: 150%;
  color: #797B86;
}
.cart-item__count {
  width: 102px;
  text-align: center;
  margin-right: 84px;
  position: relative;
  top: 5px;
}
.cart-item__count > span {
  font-size: 12px;
}
.cart-item__count__counter {
  margin-bottom: 8px;
}
.cart-item__count__price {
  position: absolute;
  top: 39px;
  font-size: 12px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.cart-item__total-price {
  font-family: 'Roboto', serif;
  font-weight: 500;
  font-size: 18px;
  text-align: right;
}
.cart-item__remove {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 6px;
}
</style>

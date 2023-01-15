<script setup>
import {computed} from "vue";
import {useCartStore} from "../../stores/store.js";
import {formatPrice, formatItemCount} from "../../lib/utils.js";
import IconCart from "../icons/IconCart.vue";

const cartStore = useCartStore();
const totalPriceStr = computed(() => formatPrice(cartStore.totalPrice))
const cartLengthStr = computed(() => formatItemCount(cartStore.cartLength))
</script>

<template>
  <div class="cart-button prevent-select">
    <IconCart/>
    <div class="cart-button__details">
      <div class="cart-button__details__title">Ваша корзина</div>
      <div class="cart-button__details__count">{{ cartLengthStr }}</div>
      <div class="cart-button__details__price">{{ totalPriceStr }} ₽</div>
    </div>
  </div>
</template>

<style scoped>
.cart-button {
  height: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.cart-button__details {
  text-align: left;
  margin-left: 12px;
  line-height: 18px;
}

.cart-button__details__count {
  font-size: 12px;
  line-height: 145%;
  color: #797B86;
}

.cart-button__details__price {
  font-size: 12px;
}

.cart-button__details > * {
  margin: 0;
  padding: 0;
}
</style>

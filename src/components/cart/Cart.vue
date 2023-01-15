<script setup>
import {computed} from "vue";
import {useCartStore} from "../../stores/store.js";
import CartItem from './CartItem.vue'
import {formatItemCount} from "../../lib/utils.js";
import Delimiter from "../common/Delimiter.vue";

const cartStore = useCartStore();
const itemCountStr = computed(() => formatItemCount(cartStore.itemCount))
const items = computed(() => cartStore.items);
</script>

<template>
  <div class="cart">
    <div class="cart__header">
      <div class="cart__header__title">
        Ваша корзина
      </div>
      <div class="cart__header__count">
        {{ itemCountStr }}
      </div>
      <a href="javascript:void(0)" class="cart__header__clear" @click="cartStore.clear">
        Очистить корзину
      </a>
    </div>
    <div class="cart__items">
      <template v-for="(item, index) in items">
        <CartItem
          :item="item"
          @updateCount="(newCount) => cartStore.setItemCount(index, newCount)"
          @remove="cartStore.removeItem(index)"/>
        <Delimiter class="cart__items__delimiter" v-if="index !== items.length - 1"/>
      </template>
    </div>
  </div>
</template>

<style scoped>
.cart__header {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

.cart__header__title {
  font-weight: 700;
  font-size: 44px;
  line-height: 120.52%;
  margin-right: 22px;
}

.cart__header__count {
  margin-right: 243px;
  font-weight: 400;
  font-size: 18px;
  line-height: 145%;
  color: #797B86;
  width: 130px;
}

.cart__header__clear {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: right;
  text-decoration-line: underline;
  color: #797B86;
}

.cart__items {
  margin-top: 50px;
}

.cart__items__delimiter {
  margin: 20px 0 25px 0;
}
</style>

<script setup>
import {useCartStore} from "../../stores/store.js";
import {computed} from "vue";
import {formatPrice, postOrder} from "../../lib/utils.js";
import Delimiter from "../common/Delimiter.vue";
import Button from "../common/Button.vue";
import {useToast} from "vue-toastification";

const toast = useToast();
const cartStore = useCartStore();
const itemCount = computed(() => cartStore.itemCount)
const totalPriceStr = computed(() => formatPrice(cartStore.totalPrice))
const needInstallationStr = computed(() => cartStore.needInstallation ? "Есть" : "Нет")

function sendOrder() {
  postOrder(cartStore.items, cartStore.needInstallation).then(() => {
    toast.success("Order created!");
  }).catch((e) => {
    toast.error("Failed to create order!");
  })
}
</script>

<template>
  <div class="cart-results">
    <div class="cart-results__header">
      Итого
    </div>
    <div class="cart-results__entry">
      <div>
        Сумма заказа
      </div>
      <div>{{ totalPriceStr }} ₽</div>
    </div>
    <div class="cart-results__entry">
      <div>
        Количество
      </div>
      <div>{{ itemCount }} шт</div>
    </div>
    <div class="cart-results__entry">
      <div>
        Установка
      </div>
      <div>{{ needInstallationStr }}</div>
    </div>
    <Delimiter class="cart-results__delimiter"/>
    <div class="cart-results__total">
      <div class="cart-results__total__text">
        Стоимость товаров
      </div>
      <div class="cart-results__total__price">{{ totalPriceStr }} ₽</div>
    </div>
    <Button class="cart-results__button" primary big-font @click="sendOrder">Оформить заказ</Button>
    <Button class="cart-results__button" big-font @click="sendOrder">Купить в 1 клик</Button>
  </div>
</template>

<style scoped>
.cart-results {
  background: #F6F8FA;
  border-radius: 5px;
  padding: 35px 30px;
  width: 425px;
  height: 458px;
  box-sizing: border-box;
}

.cart-results__header {
  font-weight: 600;
  font-size: 24px;
  line-height: 120.52%;
  margin-bottom: 29px;
}

.cart-results__entry {
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  margin-bottom: 17px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.cart-results__total {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.cart-results__total__text {
  font-weight: 600;
  font-size: 18px;
  line-height: 145%;
}

.cart-results__total__price {
  font-family: 'Roboto', serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 130%;
  text-align: right;
  letter-spacing: 0.005em;
}

.cart-results__delimiter {
  margin-top: 29px;
  margin-bottom: 11px;
}

.cart-results__button {
  width: 100%;
  margin-bottom: 12px;
}
</style>

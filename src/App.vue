<script setup>
import CartButton from './components/cart/CartButton.vue'
import Cart from './components/cart/Cart.vue'
import Breadcrumb from "./components/common/Breadcrumb.vue";
import InstallationBanner from "./components/util/InstallationBanner.vue";
import CartResults from "./components/cart/CartResults.vue";
import History from "./components/history/History.vue";
</script>

<template>
  <div class="root">
    <header>
      <CartButton class="root__header__cart-button" />
    </header>
    <nav>
      <Breadcrumb class="root__nav__breadcrumb" :title-array="['Главная', 'Корзина']"></Breadcrumb>
    </nav>
    <main>
      <section>
        <Cart class="root__main__section__cart" />
        <InstallationBanner />
      </section>
      <aside>
        <CartResults class="root__main__aside__cart-results" />
      </aside>
    </main>
    <footer>
      <History class="root__footer__history" />
    </footer>
  </div>
</template>

<style scoped>
.root {
  margin: 0 auto;
  width: 1280px;
  padding: 0 80px 166px 80px;
}
.root__nav__breadcrumb {
  margin-top: 57px;
}
main {
  width: 100%;
  display: flex;
  flex-direction: row;
}
main > section {
  width: 800px;
}
header {
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: 64px;
}
main {
  margin-top: 60px;
}
.root__header__cart-button {
  margin-right: 3px;
}
.root__main__section__cart {
  margin-bottom: 41px;
}
.root__main__aside__cart-results {
  margin-top: 90px;
  margin-left: 55px;
}
.root__footer__history {
  margin-top: 84px;
}
</style>

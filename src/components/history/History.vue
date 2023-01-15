<script setup>
import {computed, ref} from "vue";
import {useHistoryStore} from "../../stores/store.js";
import Pagination from "../common/Pagination.vue";
import HistoryItem from "./HistoryItem.vue";

const PAGE_SIZE = 4;

const historyStore = useHistoryStore();

const curPage = ref(1);
const curPageItems = computed(() => historyStore.items.slice(PAGE_SIZE * (curPage.value - 1), Math.min(PAGE_SIZE * curPage.value, historyStore.items.length)));
const maxPages = computed(() => Math.ceil(historyStore.items.length / PAGE_SIZE));

function changePage(newPage) {
  curPage.value = newPage;
}
</script>

<template>
  <div class="history">
    <div class="history__header">
      <div class="history__header__title">
        Просмотренные товары
      </div>
      <div class="history__header__pagination">
        <Pagination @changePage="changePage" :cur-page="curPage" :max-pages="maxPages"/>
      </div>
    </div>
    <div class="history__items">
      <HistoryItem class="history__items__item" v-for="item in curPageItems" :item="item" />
    </div>
  </div>
</template>

<style scoped>
.history__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}

.history__header__title {
  font-weight: 600;
  font-size: 30px;
  line-height: 120.52%;
}

.history__header__pagination {
  position: relative;
  top: 8px;
  right: 1px;
}

.history__items {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 20px;
}
</style>

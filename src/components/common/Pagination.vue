<script setup>

import IconPreviousEllipse from "../icons/IconPreviousEllipse.vue";
import IconNextEllipse from "../icons/IconNextEllipse.vue";

const props = defineProps({
  curPage: Number,
  maxPages: Number,
})

const emit = defineEmits(['changePage']);

function gotoPrevPage() {
  if (props.curPage > 1) {
    emit('changePage', props.curPage - 1)
  }
}

function gotoNextPage() {
  if (props.curPage < props.maxPages) {
    emit('changePage', props.curPage + 1)
  }
}
</script>

<template>
  <div class="pagination prevent-select">
    <div class="pagination__prev" @click="gotoPrevPage">
      <IconPreviousEllipse/>
    </div>
    <div class="pagination__value">
      <span class="pagination__value__cur">{{ props.curPage }}&nbsp;</span>
      <span class="pagination__value__total">&#8725 {{ props.maxPages }}</span>
    </div>
    <div class="pagination__next" @click="gotoNextPage">
      <IconNextEllipse/>
    </div>
  </div>
</template>

<style scoped>
.pagination {
  border-radius: 4px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.counter > * {
  width: 32px;
  height: 32px;
  background: #F6F8FA;
  line-height: 32px;
}

.pagination__prev, .pagination__next {
  cursor: pointer;
}

.pagination__value {
  margin: 0 15px 0 20px;
  position: relative;
  bottom: 2px;
}

.pagination__value__cur {
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
}

.pagination__value__total {
  font-weight: 400;
  font-size: 18px;
  color: #797B86;
}
</style>

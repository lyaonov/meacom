<script setup>

import IconMinus from "../icons/IconMinus.vue";
import IconPlus from "../icons/IconPlus.vue";

const props = defineProps({
  value: Number
})

const emit = defineEmits(['update']);

function decrementCount() {
  if (props.value > 1) {
    emit('update', props.value - 1)
  }
}

function incrementCount() {
  if (props.value < 99) {
    emit('update', props.value + 1)
  }
}
</script>

<template>
  <div class="counter">
    <div class="counter__dec" @click="decrementCount">
      <IconMinus />
    </div>
    <div class="counter__value">
      {{props.value}}
    </div>
    <div class="counter__inc" @click="incrementCount">
      <IconPlus />
    </div>
  </div>
</template>

<style scoped>
.counter {
  border-radius: 4px;
  text-align: center;
  display: flex;
  flex-direction: row;
}
.counter > * {
  width: 32px;
  height: 32px;
  background: #F6F8FA;
  line-height: 32px;
}
.counter__dec,.counter__inc {
  cursor: pointer;
}
.counter__value {
  margin: 0 2px;
}
</style>

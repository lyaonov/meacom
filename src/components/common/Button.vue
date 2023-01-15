<script setup>

const props = defineProps({
  primary: Boolean,
  bigFont: Boolean
})
</script>

<template>
  <button :class="{primary: props.primary, 'big-font': bigFont}">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
  border: 1px solid #0069B4;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 40px;
  gap: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 145%;
  background: #FFFFFF;
  color: #0069B4;
}

button.big-font {
  font-size: 18px;
}

button.primary {
  background: #0069B4;
  color: #FFFFFF;
  border: none;
}
</style>

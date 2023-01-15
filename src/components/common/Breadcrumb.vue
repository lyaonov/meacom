<script setup>

import IconBreadcrumb from "../icons/IconBreadcrumb.vue";

const props = defineProps({
  titleArray: Array
})
</script>

<template>
  <div class="breadcrumb prevent-select">
    <template v-for="(title, index) in props.titleArray">
      <span>{{title}}</span>
      <IconBreadcrumb v-if="index !== props.titleArray.length - 1"/>
    </template>
  </div>
</template>

<style scoped>
.breadcrumb {
  line-height: 21px;
}
.breadcrumb > svg {
  margin: 0 10px 0 10px;
}
.breadcrumb > span:not(:nth-child(1)) {
  color: #797B86;
}
</style>

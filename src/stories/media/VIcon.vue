<template>
  <div class="v-icon" v-if="src" :key="src">
    <img :src="src" :style="{width: size + 'px'}" onload="src.slice(-3) == 'svg' ? SVGInject(this) : null">
  </div>
</template>
<script setup>
/* eslint-disable */
import { SVGInject } from '@iconfu/svg-inject'

const props = defineProps({
  src: String,
  size: Number,
})

</script>
<style>
.icon {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
svg {
  display: block;
  height: auto;
}
</style>
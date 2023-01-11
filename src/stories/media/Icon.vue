<template>
  <div v-if="src" :key="src">
    <img :src="src" :style="{width: size + 'px'}" onload="SVGInject(this)">
  </div>
</template>
<script setup>
/* eslint-disable */
import { SVGInject } from '@iconfu/svg-inject'

const props = defineProps({
  src: String,
  size: Number
})
</script>
<style>
svg {
  display: block;
  height: auto;
}
</style>
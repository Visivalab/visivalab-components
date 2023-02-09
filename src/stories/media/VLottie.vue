<template>
  <div class="v-lottie" ref="animation"></div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import lottie from 'lottie-web'

const animation = ref(null)
const lot = ref(null);

const props = defineProps({
  loop: { type: Boolean, default: false },
  autoplay: { type: Boolean, default: false },
  src: { type: Object },
  path: { type: String },
})

onMounted(() => {
  console.log(props.src)
  lot.value = lottie.loadAnimation({
    container: animation.value,
    renderer: 'svg',
    loop: props.loop,
    autoplay: props.autoplay,
    animationData: props.src,
    path: props.path
  });
})

const play = () => {
  lot.value.play()
}
const stop = () => {
  lot.value.stop()
}
const pause = () => {
  lot.value.pause()
}
const destroy = () => {
  lot.value.destroy()
}
const playSegments = (segment, forceFlag) => {
  lot.value.playSegments(segment, forceFlag)
}
const setSpeed = (speed) => {
  lot.value.setSpeed(speed)
}
const goToAndStop = (value, isFrame) => {
  lot.value.goToAndStop(value, isFrame)
}
const goToAndPlay = (value, isFrame) => {
  lot.value.goToAndPlay(value, isFrame)
}
const setDirection = (direction) => {
  lot.value.setDirection(direction)
}

onUnmounted(() => {
  destroy()
})

defineExpose({ play, stop, pause, destroy, playSegments, setSpeed, goToAndStop, goToAndPlay, setDirection })
</script>
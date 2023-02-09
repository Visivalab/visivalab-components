<template>
  <div class="v-button" :class="classes">
    <div v-if="color" class="color-code" :style="{ 'background-color': color }"></div>
    <VIcon v-if="icon" :size="iconSize" :src="icon" />
    <span v-if="label" class="label">{{ label }}</span>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import VIcon from "../media/VIcon.vue";

export default {
  props: {
    label: { type: String },
    icon: { type: String },
    iconSize: { type: Number },
    color: { type: String },
    reverse: { type: Boolean, default: false },
  },
  // props: ['label', 'icon', 'color', 'iconSize', 'reverse'],
  components: { VIcon },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "reverse": props.reverse,
        "only-icon": props.icon && !props.label,
      })),
    };
  },
};
</script>

<style>
.v-button {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.v-button.reverse {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.v-button .color-code {
  height: 9px;
  width: 9px;
  border-radius: 2px;
}
</style>

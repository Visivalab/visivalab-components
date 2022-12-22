<template>
  <div :class="classes" @click="onClick">
    <img v-if="icon && !swapSide" :style="{width: iconSize + 'px'}" :src="icon" />
    <span v-if="label">{{ label }}</span>
    <img v-if="icon && swapSide" :style="{width: iconSize + 'px'}" :src="icon" />
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  name: "icon-button",
  props: {
    icon: {
      type: String,
    },
    iconSize: {
      type: Number
    },
    label: {
      type: String,
    },
    swapSide: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "plain-button": true,
        "plain-button--primary": props.primary,
        "plain-button--secondary": !props.primary && props.border,
        // [`button--${props.size || "medium"}`]: true,
      })),
      onClick() {
        emit("click");
      },
    };
  },
};
</script>

<style>
.plain-button {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  font-family: var(--font-family);
  text-transform: uppercase;
  color: var(--button--text-color);
  cursor: pointer;
  border: none;
  user-select: none;
}

.plain-button img {
  -webkit-user-drag: none;
}
</style>
<template>
  <div :class="classes" @click="onClick">
    <div
      v-if="categoryColor"
      class="category-code"
      :style="{ 'background-color': categoryColor }"
    ></div>
    <img v-if="icon" :style="{width: iconSize + 'px'}" :src="icon" />
    <span v-if="label">{{ label }}</span>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  name: "icon-button",
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    categoryColor: {
      type: String,
    },
    icon: {
      type: String,
    },
    iconSize: {
      type: Number
    },
    label: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
    },
  },
  emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "icon-button": true,
        "icon-button--primary": props.primary,
        "icon-button--secondary": !props.primary,
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
.icon-button {
  font-family: var(--font-family);
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--button--text-color);
  gap: 10px;
  text-transform: uppercase;
  border: var(--button--border);
  padding: 25px 18px;
}

.icon-button span {
  width: 120px;
}

.icon-button--primary {
  color: var(--theme--secondary-color);
  background-color: transparent;
}

.icon-button--secondary {
  color: var(--theme--primary-color);
  background-color: var(--theme--secondary-color);
}

.category-code {
  height: 9px;
  width: 9px;
  border-radius: 2px;
}

/* .icon-button--small {
  font-size: 12px;
  padding: 10px 16px;
}

.icon-button--medium {
  font-size: 13px;
  letter-spacing: 0.22em;
  padding: 22px 25px;
}

.icon-button--large {
  font-size: 14px;
  letter-spacing: 0.125em;
  padding: 23px 35px;
} */
</style>
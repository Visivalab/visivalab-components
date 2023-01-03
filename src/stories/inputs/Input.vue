<template>
  <div class="input" :style="{ width: width, height: height + 'px' }">
    <input :type="type" @input="$emit('update:modelValue', $event.target.value)" :class="classes" :placeholder="placeholder" :maxlength="maxlen"
      :required="required" />
    <!-- [ ]: los iconos están guarados en la base de datos? -->
    <img v-if="icon" :src="icon" @click="onClick(text)" :style="{
  background: iconBackground,
  width: iconSize + 'px',
  height: iconSize + 'px',
  padding: ((height - iconSize) / 2) + 'px',
}" :class="iconClass" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  props: {
    mode: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
    },
    maxlen: {
      type: Number,
    },
    icon: {
      type: String,
    },
    iconBackground: {
      type: String,
    },
    iconSize: {
      type: Number,
      default: 23,
    },
    width: {
      type: String,
      default: "320px",
    },
    height: {
      type: Number,
      default: 72,
    },
    modelValue: {
      type: String,
    }
  },
  emits: ["iconClick", "update:modelValue"],
  setup(props, { emit }) {
    const type = ref(null);
    if (props.mode == "search") {
      type.value = "text";
    } else {
      type.value = props.mode;
    }

    return {
      type,
      classes: computed(() => ({
        "input-with-icon": props.icon,
        "input-no-icon": !props.icon,
        // [`button--${props.size || "medium"}`]: true,
      })),
      iconClass: computed(() => ({
        "icon-bg": props.iconBackground,
      })),
      onClick() {
        if (props.mode == 'password') {
          if (type.value == 'password') type.value = 'text';
          else type.value = 'password'
        } else {
          emit("iconClick");
        }
      },
    };
  },
};
</script>

<style>
.input {
  display: flex;
  border: var(--button--border);
  min-width: 320px;
  box-sizing: content-box;
}

.input-with-icon {
  padding: 15px 5px 15px 24px;
}

.input-no-icon {
  padding: 15px 24px;
}

.input input {
  outline: none;
  border: none;
  background: none;
  font-size: 13px;
  font-weight: 300;
  font-family: var(--font-family);
  letter-spacing: 0.22em;
  color: var(--theme--secondary-color);
  width: 100%;
}

.input img {
  object-fit: contain;
  box-sizing: content-box;
}
</style>
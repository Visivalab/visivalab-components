<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'btn',
  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'button': true,
        'button--primary': props.primary,
        'button--secondary': !props.primary,
        [`button--${props.size || 'medium'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>

<style>
.button {
  font-family: var(--font-family);
  font-weight: 500;
  letter-spacing: 0.125em;
  cursor: pointer;
  display: inline-block;
  line-height: 20px;
  text-transform: uppercase;
  border: var(--button--border);
}
.button:hover {
  background-color: var(--theme--hover-color);
}
.button--primary {
  color: var(--theme--secondary-color);
  background-color: transparent;
}
.button--secondary {
  color: var(--theme--primary-color);
  background-color: var(--theme--secondary-color);
}
.button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.button--medium {
  font-size: 13px;
  letter-spacing: 0.22em;
  padding: 23px 40px;
}
.button--large {
  font-size: 14px;
  letter-spacing: 0.125em;
  padding: 23px 35px;
}

</style>

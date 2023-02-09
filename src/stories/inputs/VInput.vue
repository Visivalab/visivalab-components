<template>
  <div class="v-input">
    <input :type="type" @input="$emit('update:modelValue', $event.target.value)" :value="modelValue" :class="classes"
      :placeholder="placeholder" :maxlength="maxlength" :min="min" :max="max" :required="required"
      :autocomplete="autocomplete" />
    <div v-if="icon" @click="onIconClick()" class="icon-box">
      <VIcon v-if="icon" :src="icon" :size="iconSize" />
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import VIcon from '../media/VIcon.vue'

export default {
  props: {
    type: { type: String, required: true },
    icon: { type: String },
    iconSize: { type: Number },
    modelValue: { type: String },
    placeholder: { type: String },
    maxlength: { type: Number },
    min: { type: Number },
    max: { type: Number },
    autocomplete: { type: String },
    required: { type: Boolean, default: false },
  },
  components: { VIcon },
  emits: ["iconClick", "update:modelValue"],
  setup(props, { emit }) {
    return {
      classes: computed(() => ({
        "with-icon": props.icon,
      })),
      onIconClick() {
        emit("iconClick");
      },
    };
  },
};
</script>

<style>
.v-input {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.v-input input {
  border: none;
  outline: none;
  width: 100%;
}

.v-input .icon-box {
  -o-object-fit: contain;
     object-fit: contain;
  box-sizing: content-box;
  cursor: pointer;
}
</style>
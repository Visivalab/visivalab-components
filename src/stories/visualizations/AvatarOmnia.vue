<template>
  <div class="avatar">
    <img :src="icon" @error="$event.target.src='https://ionicframework.com/docs/img/demos/avatar.svg'" />
    <div class="avatar-text">
      <h4>{{ name }}</h4>
      <h5 v-if="role">{{ role }}</h5>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  name: "avatar-omnia",
  props: {
    icon: {
      type: String,
      default: 'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
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
.avatar {
  display: flex;
  gap: 20px;
  align-items: center;
}
.avatar img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: var(--button--border);
  object-fit: cover;
}

.avatar-text {
  display: flex;
  flex-direction: column;
  color: var(--theme--secondary-color);
  text-transform: capitalize;
  white-space: nowrap;
}

.avatar-text h4,
.avatar-text h5 {
  margin: 1px 0;
}

.avatar-text h4 {
  font-family: var(--font-family);
  letter-spacing: 0.05em;
  font-weight: 500;
  font-size: 16px;
}

.avatar-text h5 {
  font-family: var(--font-familt-alt);
  font-weight: 100;
  font-size: 12px;
}
</style>
<template>
    <div @click="() => $emit('click')" :class="classes">
        <img v-if="icon" :style="{ width: iconSize + 'px' }" :src="icon" />
        <span v-if="label">{{ label }}</span>
    </div>
</template>

<script>

export default {
    name: "icon-button",
    props: {
        primary: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
        },
        iconSize: {
            type: Number
        },
        label: {
            type: String,
        },
        backgroundColor: {
            type: String,
        },
    },
    computed: {
        classes() {
            return {
                "round-button": true,
                'round-button--primary': this.primary,
                'round-button--secondary': !this.primary,
                'round-button--onlyicon': this.icon && !this.label
            }
        }
    },
    emits: ["click"],
    setup() {
    },
};
</script>

<style>
.round-button {
    font-family: var(--font-family);
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.22em;
    height: 19px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--button--primary-color);
    color: var(--button--text-color);
    padding: 10px 27px;
    gap: 10px;
    border: var(--button--border);
    border-radius: 30px;
    text-transform: uppercase;
    user-select: none;
    box-sizing: content-box;
}

.round-button img {
    -webkit-user-drag: none;
}

.round-button--secondary {
    color: var(--theme--primary-color);
    background-color: var(--theme--secondary-color);
}

.round-button--primary {
    color: var(--theme--secondary-color);
    background-color: transparent;
}

.round-button--onlyicon {
    padding: 10px;
}
</style>
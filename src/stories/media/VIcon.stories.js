import VIcon from "./VIcon.vue";

export default {
  title: "Media/VIcon",
  component: VIcon,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  components: { VIcon },
  setup() {
    return { args };
  },
  template: '<VIcon v-bind="args" />',
});

export const SVG = Template.bind({});
SVG.args = {
  src: "/show/476984/fall.svg"
}

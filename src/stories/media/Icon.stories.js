import Icon from "./Icon.vue";

export default {
  title: "Media/Icon",
  component: Icon,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  components: { Icon },
  setup() {
    return { args };
  },
  template: '<Icon v-bind="args" />',
});

export const SVG = Template.bind({});
SVG.args = {
  src: "/show/476984/fall.svg"
}

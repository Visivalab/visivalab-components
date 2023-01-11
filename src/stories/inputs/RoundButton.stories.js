import RoundButton from "./RoundButton.vue";

export default {
  title: "Inputs/RoundButton",
  component: RoundButton,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: {},
  },
};

const Template = (args) => ({
  components: { RoundButton },
  setup() {
    return { args };
  },
  template: '<RoundButton v-bind="args" />',
});

export const Icon = Template.bind({});
Icon.args = {
  iconSize: 18,
  icon: "/show/478925/menu-2.svg"
}
Icon.decorators = [() => ({ template: '<story :primary="true" /><story :primary="false" />' })];

export const Text = Template.bind({});
Text.args = {
  label: 'Area archeologica'
};
Text.decorators = [() => ({ template: '<story :primary="true" /><story :primary="false" />' })];

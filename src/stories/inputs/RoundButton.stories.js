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
  iconSize: 20,
}
Icon.decorators = [() => ({ template: '<story icon="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/FFFFFF/external-menu-multimedia-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto-2.png" :primary="true" /><story icon="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/000000/external-menu-multimedia-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto-2.png" :primary="false" />' })];

export const Text = Template.bind({});
Text.args = {
  label: 'Area archeologica'
};
Text.decorators = [() => ({ template: '<story :primary="true" /><story :primary="false" />' })];

import PlainButton from "./PlainButton.vue";

export default {
  title: "Inputs/PlainButton",
  component: PlainButton,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  components: { PlainButton },
  setup() {
    return { args };
  },
  template: '<PlainButton v-bind="args" />',
});

export const Full = Template.bind({});
Full.args = {
  label: "Ricerca avanzata",
  icon: "/show/471876/settings-04.svg",
  iconSize: 30
};

export const Text = Template.bind({});
Text.args = {
  label: "Ricerca avanzata"
}

export const Icon = Template.bind({});
Icon.args = {
  icon: "/show/471876/settings-04.svg",
  iconSize: 30
};
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
  icon: "https://img.icons8.com/ios/50/FFFFFF/sorting-options--v1.png",
  iconSize: 30
};

export const Text = Template.bind({});
Text.args = {
  label: "Ricerca avanzata"
}

export const Icon = Template.bind({});
Icon.args = {
  icon: "https://img.icons8.com/sf-regular-filled/48/FFFFFF/bulleted-list.png",
  iconSize: 30
};
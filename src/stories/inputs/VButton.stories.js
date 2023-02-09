import VButton from "./VButton.vue";

export default {
  title: "Inputs/VButton",
  component: VButton,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light'}
  },
};


const Template = (args) => ({
  components: { VButton },
  setup() {
    return { args };
  },
  template: '<VButton v-bind="args" />',
});


export const Text = Template.bind({});
Text.args = {
  label: "Colonna di traiano",
};

export const IconText = Template.bind({});
IconText.args = {
  label: "Accesso palladium",
  icon: '/ios-glyphs/30/networking-manager.png'
};

export const Full = Template.bind({});
Full.args = {
  color: "#9C2A31",
  label: "Monumenti",
  iconSize: 30,
  icon: "/show/211821/monument-temple.svg"
};
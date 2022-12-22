import IconButton from "./IconButton.vue";

export default {
  title: "Inputs/IconButton",
  component: IconButton,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    primary: { control: 'boolean'},
    categoryColor: { control: { type: 'color', presetColors: ['#FBD77B', '#8A9F5E', '#3A98B6', '#FB8155', '#9C2A31', '#858F92', '#CE9AF8']} },
    backgroundColor: { control: "color" },
    onClick: {},
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

const Template = (args) => ({
  components: { IconButton },
  setup() {
    return { args };
  },
  template: '<IconButton v-bind="args" />',
});

export const Full = Template.bind({});
Full.args = {
  categoryColor: "#9C2A31",
  label: "Monumenti",
  iconSize: 30,
};
Full.decorators = [() => ({ template: '<story icon="https://img.icons8.com/ios/50/FFFFFF/ruins.png" :primary="true" /><story icon="https://img.icons8.com/ios/50/000000/ruins.png" :primary="false" />' })];

export const IconText = Template.bind({});
IconText.args = {
  primary: true,
  label: "Mostre",
  iconSize: 30
};
IconText.decorators = [() => ({ template: '<story icon="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/calendar.png" :primary="true" /><story icon="https://img.icons8.com/fluency-systems-filled/48/000000/calendar.png" :primary="false" />' })];
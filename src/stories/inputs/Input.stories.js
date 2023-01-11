import Input from "./Input.vue";
import { Icon } from "./PlainButton.stories";

export default {
  title: "Inputs/Input",
  component: Input,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    primary: { control: 'boolean' },
    categoryColor: { control: { type: 'color', presetColors: ['#FBD77B', '#8A9F5E', '#3A98B6', '#FB8155', '#9C2A31', '#858F92', '#CE9AF8'] } },
    backgroundColor: { control: "color" },
    onClick: {},
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: '<Input v-bind="args" />',
});

export const Text = Template.bind({});
Text.args = {
  mode: 'text'
};

export const Email = Template.bind({});
Email.args = {
  mode: 'email',
  required: true
}

export const Password = Template.bind({});
Password.args = {
  mode: 'password',
  icon: '/show/404503/body-organ-eye-human-eye-look-view.svg'
}

export const Search = Template.bind({})
Search.args = {
  mode: 'search',
  icon: '/show/476468/search.svg',
  iconBackground: '#ffffff',
  height: 52,
}
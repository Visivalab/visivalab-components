import VInput from "./VInput.vue";

export default {
  title: "Inputs/VInput",
  component: VInput,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    color: { control: { type: 'color', presetColors: ['#FBD77B', '#8A9F5E', '#3A98B6', '#FB8155', '#9C2A31', '#858F92', '#CE9AF8'] } },
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => ({
  components: { VInput },
  setup() {
    return { args };
  },
  template: '<VInput v-bind="args" />',
});

export const Text = Template.bind({});
Text.args = {
  mode: 'text',
  maxlength: 10
};

export const Email = Template.bind({});
Email.args = {
  mode: 'email',
  autocomplete: 'on',
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
}
import AvatarOmnia from "./AvatarOmnia.vue";
AvatarOmnia
export default {
  title: "Visualizations/AvatarOmnia",
  component: AvatarOmnia,
  parameters: {
    layout: 'fullscreen',
  },
};
const Template = (args) => ({
  components: { AvatarOmnia },
  setup() {
    return { args };
  },
  template: '<AvatarOmnia v-bind="args" />',
});

export const NoAvatar = Template.bind({});
NoAvatar.decorators = [() => ({ template: '<story name="Alteri Roberta" role="Funzionario archeologo" />' })];

export const Avatar = Template.bind({})
Avatar.decorators = [() => ({ template: '<story icon="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwd2l0aCUyMGdsYXNzZXN8ZW58MHx8MHx8&w=1000&q=80" name="Cat Robert" role="Felino archeologo" />' })];
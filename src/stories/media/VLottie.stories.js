import VLottie from "./VLottie.vue";

export default {
  title: "Media/VLottie",
  component: VLottie,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  components: { VLottie },
  setup() {
    return { args };
  },
  template: '<VLottie v-bind="args" />',
});

export const Lottie = Template.bind({});
Lottie.args = {
  path: 'https://assets6.lottiefiles.com/packages/lf20_lS88YC8r3Y.json',
  autoplay: true,
  loop: true
}

import { themes } from "@storybook/theming";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // backgrounds: { disable: true },
  backgrounds: {
    default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'light', value: '#ffffff' },
      ],
  },
  darkMode: {
    dark: {...themes.dark, brandImage: require("./assets/visivalab-light.png")},
    light: {...themes.normal, brandImage: require("./assets/visivalab-dark.png")}
  }
};

export const globalTypes = {
  scheme: {
    name: "Theme",
    description: "Select a theme",
    defaultValue: "both",
    // toolbar: {
    //   icon: "mirror",
    //   // items: ["Light", "Dark", "HERA", "OMNIA", "Both"],
    //   items: [
    //     {title: "HERA", value: "hera"},
    //     {title: "OMNIA", value: "omnia"},
    //     {title: "Both", value: "both", right: "Side by side"}
    //   ],
    //   dynamicTitle: true,
    // },
  },
};

// export const decorators = [
//   (story, context) => {
//     let {scheme} = context.globals
//     if (scheme == 'hera') {
//       return {components: story, template: '<div style="background: white; padding: 80px 0; display:flex; justify-content:center; gap: 25px" class="color-scheme--hera"><story/></div>'}
//     } else if (scheme == 'omnia') {
//       return {components: story, template: '<div style="background: black; padding: 80px 0; display:flex; justify-content:center; gap: 25px" class="color-scheme--omnia"><story/></div>'}
//     } else {
//       return {components: story, template: '<div style="background: white; padding: 80px 0; display:flex; justify-content:center; gap: 25px" class="color-scheme--hera"><story/></div><div style="background: black; padding: 80px 0; display:flex; justify-content:center; gap: 25px" class="color-scheme--omnia"><story/></div>'}
//     }
//   }
// ]
import { themes } from "@storybook/theming";
import "../src/stories/assets/color-scheme.css"
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: { disable: true },
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
    toolbar: {
      icon: "mirror",
      // items: ["Light", "Dark", "HERA", "OMNIA", "Both"],
      items: [
        {title: "HERA", value: "hera"},
        {title: "OMNIA", value: "omnia"},
        {title: "Both", value: "both", right: "Side by side"}
      ],
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  (story, context) => {
    let {scheme} = context.globals
    if (scheme == 'hera') {
      return {components: story, template: '<div style="padding: 80px 0; display:flex; justify-content:center; gap: 25px" class="color-scheme--hera"><story/></div>'}
    } else if (scheme == 'omnia') {
      return {components: story, template: '<div style="padding: 80px 0; display:flex; justify-content:center; gap: 25px" class="color-scheme--omnia"><story/></div>'}
    } else {
      return {components: story, template: '<div style="padding: 80px 0; display:flex; justify-content:center; gap: 25px" class="color-scheme--hera"><story/></div><div style="padding: 80px 0; display:flex; justify-content:center; gap: 25px" class="color-scheme--omnia"><story/></div>'}
    }
  }
]
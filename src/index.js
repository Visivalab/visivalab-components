import * as components from "./stories";
import "@/stories/assets/color-scheme.css"

const componentsList = components?.default;
const VisivalabComponents = {
  install(Vue) {
    Object.keys(componentsList).forEach((name) => {
      Vue.component(name, componentsList[name]);
    });
  },
};

export default VisivalabComponents;
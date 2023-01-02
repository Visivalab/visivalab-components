// import * as components from "./stories";
// import "@/stories/assets/color-scheme.css"

// const componentsList = components?.default;
// const VisivalabComponents = {
//   install(Vue) {
//     Object.keys(componentsList).forEach((name) => {
//       Vue.component(name, componentsList[name]);
//     });
//   },
// };

// export default VisivalabComponents;

// INPUTS
import Button from "./stories/inputs/Button.vue";
import IconButton from "./stories/inputs/IconButton.vue";
import PlainButton from "./stories/inputs/PlainButton.vue";
import RoundButton from "./stories/inputs/RoundButton.vue";
import Input from "./stories/inputs/Input.vue"


// VISUALIZATIONS
import AvatarOmnia from "./stories/visualizations/AvatarOmnia.vue"

import "./stories/assets/color-scheme.css"


export { Button, IconButton, PlainButton, RoundButton, Input, AvatarOmnia };

import { proxy } from "valtio";

/* This code is creating a reactive state object using the `proxy` function from the `valtio` library.
The state object has several properties such as `intro`, `color`, `isLogoTexture`, `isFullTexture`,
`logoDecal`, and `fullDecal`. These properties can be accessed and modified like a regular
JavaScript object, but any changes made to them will trigger reactivity and update any components
that depend on them. */
const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;

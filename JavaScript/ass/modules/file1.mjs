// common js , ES6

// Named export
// export const name = "navin";

// export const greet = () => {
//   console.log("Hello from file1");
// };

// ES6
const name = "navin";
export const yojana = "yojana";

const greet = () => {
  console.log("Greet");
};

const sayHello = () => {
  console.log("SayHello");
};

// deafult export
export default sayHello;
// export {sayHello as default};

// named exports
export { name, greet };

import { navin, aman, yojana as Yoajana } from "./bridge.mjs";

console.log(navin, aman, Yoajana);

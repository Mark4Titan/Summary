import element from "./Element";

const View = (value) => {
  const [key] = Object.keys(value);
  const val = value[key];
  element[key] = val;
};

export default View;

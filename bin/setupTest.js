const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

console.error = (warning) => {
  throw new Error(warning);
};

Enzyme.configure({ adapter: new Adapter() });

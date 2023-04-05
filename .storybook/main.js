/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.jsx"],
  addons: [
    "storycap",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
export default config;

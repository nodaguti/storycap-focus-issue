import { withScreenshot } from 'storycap';

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    withScreenshot,
  ],
};

export default preview;

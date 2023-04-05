## Steps to reproduce
1. `yarn install`
2. `yarn storybook:build`
3. `yarn storycap`

## Expected Result
A screenshot of `Component` is stored with following console output:

```
$ yarn storycap
yarn run v1.22.19
$ storycap http://127.0.0.1:6006 --disableCssAnimation --chromiumChannel stable --serverCmd 'yarn storybook:serve'
info Wait for connecting storybook server http://127.0.0.1:6006.
info Executable Chromium path: /Applications/Google Chrome.app/Contents/MacOS/Google Chrome
info Storycap runs with managed mode
info Found 1 stories.
info Screenshot stored: __screenshots__/Component/Basic.png in 682 msec.
info Screenshot was ended successfully in 20172 msec capturing 1 PNGs.
✨  Done in 20.91s.
```

## Actual Result
An error occurs when storycap tries to find an element specified by `focus` option.

```
$ yarn storycap
yarn run v1.22.19
$ storycap http://127.0.0.1:6006 --disableCssAnimation --chromiumChannel stable --serverCmd 'yarn storybook:serve'
info Wait for connecting storybook server http://127.0.0.1:6006.
info Executable Chromium path: /Applications/Google Chrome.app/Contents/MacOS/Google Chrome
info Storycap runs with managed mode
info Found 1 stories.
error Error: failed to find element matching selector ".component-textarea"
Error: Error: failed to find element matching selector ".component-textarea"
    at ElementHandle.$eval (/Users/user/workspaces/storycap-focus-issue/node_modules/puppeteer-core/lib/cjs/puppeteer/common/JSHandle.js:649:19)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async CapturingBrowser.resetIfTouched (/Users/user/workspaces/storycap-focus-issue/node_modules/storycap/lib/node/capturing-browser.js:90:13)
    at async CapturingBrowser.screenshot (/Users/user/workspaces/storycap-focus-issue/node_modules/storycap/lib/node/capturing-browser.js:319:9)
    at async time (/Users/user/workspaces/storycap-focus-issue/node_modules/storycrawler/lib/timer.js:14:20)
    at async /Users/user/workspaces/storycap-focus-issue/node_modules/storycap/lib/node/screenshot-service.js:27:39
    at async /Users/user/workspaces/storycap-focus-issue/node_modules/storycrawler/lib/async-utils.js:153:28
    at async next (/Users/user/workspaces/storycap-focus-issue/node_modules/storycrawler/lib/async-utils.js:37:30)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

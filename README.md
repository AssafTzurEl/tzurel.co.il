# Documentation

Welcome to my website's source code! This site is built using Eleventy - a static site generator (SSG) that allows developers to create fast and efficent websites. The site itself is hosted at http://www.tzurel.co.il - check it out!

## Eleventy how-to

[Eleventy – getting started](https://www.11ty.dev/docs/getting-started/)


### Setup notes:

- If you are using VSCode, you might want to install the [Nunjucks](https://marketplace.visualstudio.com/items?itemName=ronnidc.nunjucks) extension
- During node.js installation, if you already have Python and VS installed, don't check the Chocolatey box
- Once you have a folder for the site, open VSCode and continue working with its Terminal pane
- `npm install`


### Plugins:

- [Image](https://www.11ty.dev/docs/plugins/image/)

### Important commands:

- Build site: `npm run build` (or `npx @11ty/eleventy`)
- Build, then start server with hot reload:  `npm run start` (or `npx @11ty/eleventy --serve`)
    - Stop with **Ctrl-C**
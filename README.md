# Get screenshots of Tweets with Puppeteer (serverless)

[![Netlify Status](https://api.netlify.com/api/v1/badges/260533cb-928d-4e65-8446-e3725f2db7a8/deploy-status)](https://app.netlify.com/sites/suspicious-tereshkova-855df9/deploys)
[![Live Demo](https://img.shields.io/badge/Live Preview-Click Me-green.svg?style=social)](https://serverless-tweet-image.netlify.app/)


## Start App

run `npx netlify login` and `npx netlify link` to link your local directory to the remote Netlify project. With this method it will automatically inject the environment variables from Netlify.

```bash
npm run serve
```

### Environment variables 

`CHROME_EXECUTABLE_PATH=/Applications/Google Chrome.app/Contents/MacOS/Google Chrome` (yours may be different)

### Valid themes

- "dark" / "light"

### Languages example

- en
- de
- nl
- it
- ...

### Tweet URL example

- https://twitter.com/elonmusk/status/1483633282482847744

## Check out my non-serverless repo

[Get tweets in Node.js (non-serverless)](https://github.com/noahliechti/get-tweets-as-image)

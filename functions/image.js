// const express = require("express");
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const chromium = require("chrome-aws-lambda");
const puppeteer = require("puppeteer-core");

exports.handler = async function (event, context) {
  console.log("event", event.body);
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath:
      process.env.CHROME_EXECUTABLE_PATH || (await chromium.executablePath),
    headless: true,
  });

  const page = await browser.newPage();

  await page.goto("https://spacejelly.dev/");

  const title = await page.title();
  const description = await page.$eval(
    'meta[name="description"]',
    (element) => element.content
  );

  await browser.close();

  return {
    statusCode: 200,
    body: JSON.stringify({
      page: {
        title,
        description,
      },
    }),
  };
};

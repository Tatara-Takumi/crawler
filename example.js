const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  //クロールするurl
  const url = "https://finance.yahoo.com/"
  await page.goto(url);
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
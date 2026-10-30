import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });

const page = await browser.newPage({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1,
});

await page.goto("https://portfolio-drab-three-50.vercel.app", {
  waitUntil: "networkidle",
});

await page.screenshot({
  path: "portfolio.png",
  fullPage: true,
});

await browser.close();

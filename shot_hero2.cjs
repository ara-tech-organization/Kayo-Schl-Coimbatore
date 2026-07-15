const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const mobile = await browser.newPage({ viewport: { width: 390, height: 1100 } });
  await mobile.goto("http://localhost:5195/perungudi/about", { waitUntil: "networkidle" });
  await mobile.waitForTimeout(1000);
  await mobile.screenshot({ path: "hero2-mobile-med.png" });
  await browser.close();
})();

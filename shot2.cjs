const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('pageerror', err => errors.push(String(err)));
  await page.goto('http://localhost:5186/perungudi/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'C:/Users/karth/AppData/Local/Temp/claude/c--Users-karth-OneDrive-Documents-Ara-Kayo-School-Chennai/72d69165-dd5f-452f-ae10-4ba2772794a5/scratchpad/hero-desktop.png' });
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobile.goto('http://localhost:5186/perungudi/', { waitUntil: 'networkidle', timeout: 30000 });
  await mobile.waitForTimeout(1500);
  await mobile.screenshot({ path: 'C:/Users/karth/AppData/Local/Temp/claude/c--Users-karth-OneDrive-Documents-Ara-Kayo-School-Chennai/72d69165-dd5f-452f-ae10-4ba2772794a5/scratchpad/hero-mobile.png' });
  console.log('ERRORS:', JSON.stringify(errors));
  await browser.close();
})();

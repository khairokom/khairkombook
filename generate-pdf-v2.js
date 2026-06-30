const puppeteer = require('puppeteer');
const path = require('path');
const sleep = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  console.log('🚀 جاري إنشاء النسخة المفصّلة PDF...');

  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--allow-file-access-from-files',
      '--enable-local-file-accesses',
      '--font-render-hinting=none',
      '--disable-gpu',
      '--run-all-compositor-stages-before-draw',
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 });

  const filePath = path.resolve(__dirname, 'book-v2.html');
  const fileUrl = `file:///${filePath.replace(/\\/g, '/')}`;

  console.log('📄 تحميل الصفحة...');
  await page.goto(fileUrl, {
    waitUntil: ['networkidle0', 'load', 'domcontentloaded'],
    timeout: 90000
  });

  // Wait for Google Fonts and animations
  console.log('⏳ انتظار تحميل الخطوط والصور...');
  await sleep(5000);

  // Inject print overrides
  await page.addStyleTag({
    content: `
      * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
      body { background: white !important; }
      @keyframes floatUp { 0%, 100% { transform: none; } }
      @keyframes heartBeat { 0%, 100% { transform: none; } }
      @keyframes ripple { 0%, 100% { opacity: 0.4; transform: none; } }
      @keyframes pulse { 0%, 100% { transform: none; opacity: 0.6; } }
      .page {
        width: 210mm !important;
        min-height: 297mm !important;
        margin: 0 !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        page-break-after: always !important;
        break-after: page !important;
      }
    `
  });

  await sleep(1500);

  const outputPath = path.resolve(__dirname, 'البنك-العاطفي-النسخة-المفصّلة.pdf');
  console.log('🖨 جاري تصدير PDF عالي الجودة...');

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: false,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: false,
    scale: 1,
    timeout: 120000
  });

  await browser.close();

  const fs = require('fs');
  const stats = fs.statSync(outputPath);
  const sizeMB = (stats.size / 1024 / 1024).toFixed(2);

  console.log('');
  console.log('✅ تم توليد PDF بنجاح!');
  console.log('📁 المسار:', outputPath);
  console.log('📦 الحجم:', sizeMB, 'MB');
  console.log('');
})().catch(err => {
  console.error('❌ خطأ:', err.message);
  process.exit(1);
});

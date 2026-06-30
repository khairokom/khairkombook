const puppeteer = require('puppeteer');
const sleep = ms => new Promise(r => setTimeout(r, ms));
const path = require('path');

(async () => {
  console.log('🚀 بدء توليد PDF...');

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
    ]
  });

  const page = await browser.newPage();

  // Set viewport to A4 at 96dpi
  await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 });

  // Load the HTML file
  const filePath = path.resolve(__dirname, 'index.html');
  const fileUrl = `file:///${filePath.replace(/\\/g, '/')}`;

  console.log('📄 تحميل الصفحة:', fileUrl);
  await page.goto(fileUrl, {
    waitUntil: ['networkidle0', 'load', 'domcontentloaded'],
    timeout: 60000
  });

  // Wait for fonts and images to load
  await sleep(4000);

  // Inject print-ready CSS overrides
  await page.addStyleTag({
    content: `
      * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
      body { padding-top: 0 !important; background: white !important; }
      .top-nav, .scroll-nav { display: none !important; }
      .page {
        width: 210mm !important;
        min-height: 297mm !important;
        margin: 0 !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        page-break-after: always !important;
        break-after: page !important;
      }
      @keyframes floatCoin { 0%, 100% { transform: none; } }
      @keyframes heartBeat { 0%, 100% { transform: none; } }
      @keyframes ringExpand { 0%, 100% { opacity: 0.4; transform: none; } }
    `
  });

  await sleep(1000);

  const outputPath = path.resolve(__dirname, 'البنك-العاطفي-خيركم.pdf');

  console.log('🖨 جاري تصدير PDF...');

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: false,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: false,
    scale: 1,
    timeout: 60000
  });

  await browser.close();

  console.log('');
  console.log('✅ تم توليد PDF بنجاح!');
  console.log('📁 المسار:', outputPath);
  console.log('');
})().catch(err => {
  console.error('❌ خطأ:', err.message);
  process.exit(1);
});

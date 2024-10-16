const { chromium } = require('playwright');
const fs = require('fs');

const category = 'R39'; // empleos pedidos
const filename = 'clasificados.json';

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://www.lanueva.com/servicios/clasificados/' + category);

    const classifieds = await page.evaluate(() => {
        const data = [];

        document.querySelectorAll('.clasificados__aviso').forEach((classified) => {
            const text = classified.innerText;
            const id = classified.attributes['id'].value;
            data.push({ id, text });
        });

        return data;
    });

    await browser.close();
    fs.writeFileSync('data/' + filename, JSON.stringify(classifieds, null, 2));
})();

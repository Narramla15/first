const webdriver = require('selenium-webdriver');
const { By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');

// Optional: Customize Chrome browser behavior
const options = new chrome.Options();
options.addArguments('--start-maximized');

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

async function runTest() {
    try {
        // ✅ Open the local HTML file (replace with correct path)
        await driver.get('file://' + __dirname + '/program.html');

        // ✅ Click the increment button
        const button = await driver.findElement(By.id('increment-button'));
        await button.click();

        // ✅ Wait until output is updated to '1'
        const output = await driver.findElement(By.id('output'));
        await driver.wait(until.elementTextIs(output, '1'), 5000);

        // ✅ Verify the result
        const text = await output.getText();
        assert.strictEqual(text, '1', 'Increment result is incorrect');
        console.log('✅ Test passed');

        // Keep the browser open (you can remove this if not needed)
        await new Promise(() => {});

    } catch (error) {
        console.error('❌ Test failed:', error);
    } finally {
        // You can close the browser here if you don't want it to stay open
        // await driver.quit();
    }
}

runTest();

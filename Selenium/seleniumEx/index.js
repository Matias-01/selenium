const {Builder, By, Key, JavascriptExecutor, util} = require("selenium-webdriver");

async function Example() {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://localhost:3000");
    await ((JavascriptExecutor), driver).executeScript("window.scrollBy(0,600)");    

     await driver.findElement(By.css('#name.form-control')).sendKeys("Matias");
     await driver.findElement(By.css('#apellido.form-control')).sendKeys("Gomez");
     await driver.findElement(By.css('#email.form-control')).sendKeys("matias.gomez@yungaslabs.ar");
     await driver.findElement(By.css('#message.form-control')).sendKeys("Made with Selenium");
    //  await driver.findElement(By.className('recaptcha-checkbox')).sendKeys(Key.RETURN);
    // await driver.findElement(By.className('recaptcha-checkbox-border')).sendKeys(Key.RETURN);
    Thread.sleep(10000);
    // await driver.findElement(By.css(span)).sendKeys(Key.RETURN); No anduvo


}
Example();
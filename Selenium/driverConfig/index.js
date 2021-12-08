const {Builder} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const options = new chrome.Options();

options.setPreference("browser.download.dir", "C:\\mySeleniumDownloads");
options.setPreference("browser.download.folderList",2);
options.setPreference("broser.helperApps.neverAsk.saveToDisk","application/x-csv");

const driver = new Builder().forBrowser("chrome").setChromeOptions(options).build();

driver.get("http://facebook.com");
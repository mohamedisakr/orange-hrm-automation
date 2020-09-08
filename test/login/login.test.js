const { Builder, until } = require("selenium-webdriver"); //, By, Key, until
const { login } = require("../../pages/login-form");
const assert = require("chai").assert;
const expect = require("chai").expect;

describe("login-test", function () {
  this.timeout(30000);
  let driver;
  let vars;
  let url;
  let actualUrl;
  let expectedUrl;

  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    url = "https://opensource-demo.orangehrmlive.com/index.php/auth/login";
    actualUrl = "https://opensource-demo.orangehrmlive.com/index.php/dashboard";
    vars = {};
  });

  afterEach(async function () {
    await driver.quit();
  });

  it("login-test", async function () {
    await driver.get(url);
    await driver.manage().window().setRect(1366, 728);
    await login(driver);

    await driver.wait(until.urlContains(actualUrl), 4000);
    expectedUrl = await driver.getCurrentUrl((currentUrl) => currentUrl);
    console.log(expectedUrl);
    await expect(actualUrl).to.equal(expectedUrl);
  });
});

// async function login(driver) {
//   await driver.findElement(By.id("txtUsername")).click();
//   await driver
//     .findElement(By.id("txtUsername"))
//     .sendKeys(validCredentials.username);
//   await driver.findElement(By.id("txtPassword")).click();
//   await driver
//     .findElement(By.id("txtPassword"))
//     .sendKeys(validCredentials.password);
//   await driver.findElement(By.id("btnLogin")).click();
// }

/*
// before refactoring using Page Object Model
const { Builder, By, Key, until } = require("selenium-webdriver");
const { validCredentials } = require("../../data/login/login.data");
const assert = require("assert");

describe("login-test", function () {
  this.timeout(30000);
  let driver;
  let vars;
  let url;

  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    url = "https://opensource-demo.orangehrmlive.com/index.php/auth/login";
    vars = {};
  });

  afterEach(async function () {
    await driver.quit();
  });

  it("login-test", async function () {
    await driver.get(url);
    await driver.manage().window().setRect(1366, 728);
    await driver.findElement(By.id("txtUsername")).click();
    await driver
      .findElement(By.id("txtUsername"))
      .sendKeys(validCredentials.username);
    await driver.findElement(By.id("txtPassword")).click();
    await driver
      .findElement(By.id("txtPassword"))
      .sendKeys(validCredentials.password);
    await driver.findElement(By.id("btnLogin")).click();
  });
});
*/

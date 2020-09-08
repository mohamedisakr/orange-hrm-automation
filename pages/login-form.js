const { By } = require("selenium-webdriver");
const { validCredentials } = require("../data/login/login.data");

const usernameField = By.id("txtUsername");
const passwordField = By.id("txtPassword");
const submitField = By.id("btnLogin");

async function login(driver) {
  const username = await driver.findElement(usernameField);
  username.click();
  username.sendKeys(validCredentials.username);

  const password = await driver.findElement(passwordField);
  password.click();
  password.sendKeys(validCredentials.password);

  await driver.findElement(submitField).click();
}

module.exports = { login };

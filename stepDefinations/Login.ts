import { Given, When, Then } from "cucumber";
import { LoginPageObjects } from "../pageObjects/LoginPageObjects";
import { browser, by, element, ElementFinder, protractor } from "protractor"
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

let logObj = new LoginPageObjects();

Given('User will navigate to Petclinic url', async function () {
    await browser.get('http://localhost:4200/petclinic/');
    await browser.sleep(1000);
});

Then('User should able to see Welcome to Petclinic message', async function () {
    await logObj.WelcomeMsg.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
    });
});
Then('User should able to see title of the webpage', async function () {
    let title = await browser.getTitle();
    await console.log("WebPage Title is " + title);
    await expect("SpringPetclinicAngular").to.equal(title);
});

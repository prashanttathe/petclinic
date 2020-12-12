import { Given, When, Then } from "cucumber";
import { newOwnerPageObject } from "../pageObjects/newOwnerPageObjects";
import { HomePageObjects } from "../pageObjects/HomePageObjects";
import { browser, by, element, ElementFinder, protractor } from "protractor";
import testdata from "../testdata/userData";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

let HomeObj = new HomePageObjects();
let newOwnerObj = new newOwnerPageObject();

Given('User is on New Owner page', async function () {
    let pagename = await HomeObj.PageName.getText();
    await console.log("page name is : " + pagename);
});
When('User enter valid First Name, Last Name, Address, City, Telephone', async function () {
    let firstName = testdata.userData.OwnerData.FirstName;
    await newOwnerObj.FirstName.sendKeys(firstName);

    let lastName = testdata.userData.OwnerData.LastName;
    await newOwnerObj.LastName.sendKeys(lastName);

    let address = testdata.userData.OwnerData.Address;
    await newOwnerObj.Address.sendKeys(address);

    let city = testdata.userData.OwnerData.City;
    await newOwnerObj.City.sendKeys(city);

    let telephone = testdata.userData.OwnerData.Telephone;
    await newOwnerObj.Telephone.sendKeys(telephone);
});
When('User clicks on Add Owner button on New Owner page', async function () {
    await newOwnerObj.AddOwnerButton.click();
});
Then('New Owner added successfully message should be displayed', async function () {
    await console.log("Message Displayed Successfully");
});
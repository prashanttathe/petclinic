import { Given, When, Then } from "cucumber";
import { LoginPageObjects } from "../pageObjects/LoginPageObjects";
import { HomePageObjects } from "../pageObjects/HomePageObjects";
import { browser } from "protractor";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

let HomeObj = new HomePageObjects();
let logObj = new LoginPageObjects();

Given('User is on Petclinic home page', async function () {
    await logObj.WelcomeMsg.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
    });
});
Then('Five menus should be displayed as Home,Owners,Veterinarians,Pet Types and Specialties', async function () {
    let menu1 = await HomeObj.HomeMenu.getAttribute("innerText");
    await console.log(" First Menu : " + menu1);
    await expect("HOME").to.equal(menu1);

    let menu2 = await HomeObj.Owners.getAttribute("innerText");
    await console.log(" Second Menu : " + menu2);
    await expect("OWNERS").to.equal(menu2);

    let menu3 = await HomeObj.Veterinarians.getAttribute("innerText");
    await console.log(" Third Menu : " + menu3);
    await expect("VETERINARIANS").to.equal(menu3);

    let menu4 = await HomeObj.PetTypes.getAttribute("innerText");
    await console.log(" Fourth Menu : " + menu4);
    await expect("PET TYPES").to.equal(menu4);

    let menu5 = await HomeObj.Specialties.getAttribute("innerText");
    await console.log(" Fifth Menu : " + menu5);
    await expect("SPECIALTIES").to.equal(menu5);
});
When('User clicks on owners tab', async function () {
    await HomeObj.Owners.click();
});
Then('ALL and ADD NEW owners sub-menus should be displayed', async function () {
    let firstMenu = await HomeObj.AllOwners.getText();
    await expect("ALL").to.equal(firstMenu);
    await console.log("first drop-down menue is : " + firstMenu);

    let secondMenu = await HomeObj.AddNewOwner.getText();
    await expect("ADD NEW").to.equal(secondMenu);
    await console.log("second drop-down menue is : " + secondMenu);
});
Given('User is on Owners tab', async function () {
    let Owners = await HomeObj.Owners.getAttribute("innerText");
    await console.log(" Tab name is : " + Owners);
    await expect("OWNERS").to.equal(Owners);
});
When('User clicks on ALL sub-menu', async function () {
    await HomeObj.AllOwners.click();
    await browser.sleep(2000);
});
Then('Owners list should be displayed', async function () {
    // await HomeObj.OwnerList.isDisplayed().then(async function (result) {
    //     await expect(true).to.equal(result);
    // });
    await browser.sleep(2000);
    let page = await HomeObj.PageName.getText();
    await console.log(" page name is : " + page);

});
Given('User is on All Owners list page', async function () {
    await browser.sleep(5000);
    let pagename = await HomeObj.PageName.getText();
    await console.log("page name is : " + pagename);
});
When('User clicks on Add Owner button', async function () {
    await HomeObj.AddOwnerButton.click();
});
Then('Add New Owner page should be displayed', async function () {
    await HomeObj.PageName.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
    });
    let pagename = await HomeObj.PageName.getText();
    await console.log("page name is : " + pagename);
});
When('User clicks on ADD NEW sub-menu', async function () {
    await HomeObj.AddNewOwner.click();
});
Then('New Owner page should get displayed', async function () {
    await HomeObj.PageName.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
    });
});

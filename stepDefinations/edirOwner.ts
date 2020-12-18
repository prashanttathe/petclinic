import { Given, When, Then } from "cucumber";
import { element, by } from "protractor";
import { editOwnerObj } from "../pageObjects/editOwnerObj";
import { browser } from "protractor";
const expect = global['chai'].expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

let editOwnObj = new editOwnerObj();

When('User clicks on first owner name to check owner information', async function () {
    await editOwnObj.firstOwner.click();
});
When('User clicks on Add Visit button', async function () {
    await editOwnObj.addVisit.click();
});
When('User selects date from calendar', async function () {
    await editOwnObj.date.click();
    let month = "12 2022";
    let date = "20";
    while (true) {
        let currentMonth = await editOwnObj.month.getText();
        await console.log("Month : " + currentMonth);
        if (month == currentMonth) {
            break;
        }
        else {
            await editOwnObj.nextMnth.click();
        }
    }
    await element(by.xpath("//*[@class='mat-calendar-table']/tbody/tr/td[.='" + date + "']")).click();
});
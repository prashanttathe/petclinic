// import { Given, When, Then } from "cucumber";

// import { HomePageObjects } from "../pageObjects/HomePageObjects";
// import { CustomerLevelRPO } from "../pageObjects/CustomerLevelRPO";
// import { CommonReportFunctinalities } from "../pageObjects/CommonReportFunctinalities";

// import { browser, by, element, ElementFinder, protractor } from "protractor"
// import { async } from "q";
// import TestData from "../TestData/userData";

// const chai = require("chai").use(require("chai-as-promised"));
// const expect = chai.expect;
// const chaiSort = require("chai").use(require("chai-sorted"));
// var { setDefaultTimeout } = require('cucumber');
// setDefaultTimeout(70 * 1000);


// //import InputData from "../DBconnection/InputData";
// import { Workbook, Row, Cell, Worksheet } from 'exceljs';
// import * as OracleDB from 'oracledb';
// import DBConnec = require('../DBconnection/DBConnec');
// //import {DBConnect} from "../DataFile/DBConnec";
// const oracledb = require('oracledb');
// import { getInformationFromDB } from "../DBconnection/DBConnec";
// import { createDeflate } from "zlib";
// import { DriverProvider } from "protractor/built/driverProviders";
// var until = protractor.ExpectedConditions;

// let HomeObj = new HomePageObjects();
// let crf = new CommonReportFunctinalities();
// let CLRObj = new CustomerLevelRPO();
// let SelectedNodeID;

// browser.ignoreSynchronization = true;

// When('User will click on Reports Menu from Homepage', async function () {
//     await browser.sleep(2000);
//     await browser.wait(until.elementToBeClickable(HomeObj.REPORTS), 20000, 'Element taking too long to be clickable in DOM');
//     await HomeObj.REPORTS.click();
//     await browser.sleep(2000);
// });
// When('User click on Customer Level report from report list', async function () {
//     await browser.wait(until.elementToBeClickable(HomeObj.CUSTOMER_LEVEL_REPORT), 20000, 'Element taking too long time to be clickable in DOM');
//     await HomeObj.CUSTOMER_LEVEL_REPORT.click();
//     await browser.sleep(1000);
// });
// Then('User Should able to see default landing page and page title as Revenue Impact Report- Customer Level', async function () {
//     await browser.sleep(1000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     let PageTitle = await CLRObj.HeaderTitle_CustomerLevelReoprt.getText();
//     await console.log("PageTitle is : " + PageTitle);
//     await expect(PageTitle).to.equal("Revenue Impact Report-Customer Level");
//     await browser.sleep(2000);
// });
// Given('User is on Customer Level Report', async function () {
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.visibilityOf(CLRObj.HeaderTitle_CustomerLevelReoprt), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.HeaderTitle_CustomerLevelReoprt.isDisplayed().then(async function (result) {
//         await expect(true).to.equal(result.valueOf());
//     });
// });
// Then('Filter dropdown list should be displayed', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.FILTER_LIST), 20000, 'Element taking too long time to be visible in DOM');
//     let FilterList = await CLRObj.FILTER_LIST.all(by.tagName("mat-option")).getAttribute("innerText");
//     await console.log(" Filter List : " + FilterList);
//     await browser.sleep(1000);
//     await CLRObj.FILTER_LIST.all(by.tagName("mat-option")).then(async function (FILTER_LIST) {
//         await console.log(" Filter List Count: " + FILTER_LIST.length);
//     })
// });
// Then('User should be able to see six horizontal filters on the screen-Region,Country,Sales Territory,Status,Re-rating Date,Segmentation', async function () {
//     await CLRObj.HorizontalFilterList.all(by.tagName("input")).then(async function (listreport) {
//         console.log(await listreport.length);

//         browser.sleep(2000);

//         let filters: string[] = ['Region', 'Country', 'Sales Territory', 'Status', 'Re-rating Date', 'Segmentation']

//         console.log(await filters.length);

//         for (let j = 0; j < filters.length; j++) {

//             console.log(await filters[j]);

//         }
//         for (let i = 1; i <= listreport.length; i++) {

//             listreport[i - 1].getAttribute("placeholder").then(async function (text) {

//                 console.log(await text);

//                 await expect(filters[i - 1]).to.contains(text);
//                 console.log(await expect(filters[i - 1]).to.contains(text));
//             });
//         };
//     });
// });
// Then('Reset button should be displayed on Customer Level Report', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.RESET), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.RESET.isDisplayed().then(async function (result) {
//         await console.log("Reset Button is Displayed :" + result);
//         expect(true).to.equal(result.valueOf());
//     });
//     // await browser.wait(until.elementToBeClickable(CLRObj.RE_RATING_DATE_CLS), 20000, 'Element taking too long to be clickable in DOM');
//     // await CLRObj.RE_RATING_DATE_CLS.click();
// });
// When('User clicks on reset button to remove all applied filter', async function () {
//     await browser.sleep(1000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(CLRObj.RESET), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.RESET.click();
//     await browser.sleep(1000);
// });
// Then('User should see three tables - Export ,Import and 3rd Party for the 3 directions', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.EXPORT_TABLE), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.EXPORT_TABLE.isDisplayed().then(async function (result) {
//         await console.log("Export Table is Displayed :" + result);
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.wait(until.visibilityOf(CLRObj.IMPORT_TABLE), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.IMPORT_TABLE.isDisplayed().then(async function (result) {
//         await console.log("Import Table is Displayed :" + result);
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.wait(until.visibilityOf(CLRObj.THPT_TABLE), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.THPT_TABLE.isDisplayed().then(async function (result) {
//         await console.log("Third Party Table is Displayed :" + result);
//         expect(true).to.equal(result.valueOf());
//     });
// });
// Then('Export,Import and Third Party buttons should not displayed for default landing on customer level report', async function () {
//     await browser.wait(until.invisibilityOf(CLRObj.EXPORT), 20000, 'Element taking too long time to be invisible in DOM');
//     await expect(CLRObj.EXPORT.isPresent()).to.eventually.equal(false);
//     await browser.wait(until.invisibilityOf(CLRObj.IMPORT), 20000, 'Element taking too long time to be invisible in DOM');
//     await expect(CLRObj.IMPORT.isPresent()).to.eventually.equal(false);
//     await browser.wait(until.invisibilityOf(CLRObj.THIRD_PARTY), 20000, 'Element taking too long time to be invisible in DOM');
//     await expect(CLRObj.THIRD_PARTY.isPresent()).to.eventually.equal(false);
// });

// Then('User should see the tooltips for Old Revenue as last 12 month’s shipments in View One report', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.OldRevTip).perform();
//     await browser.wait(until.visibilityOf(CLRObj.OldRevTip), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.OldRevTip.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
//     let OldRevTool = await CLRObj.OldRevTip.getAttribute("mattooltip");
//     await console.log("Old Rev Tooltip msg is :" + OldRevTool);
//     await expect(OldRevTool).to.equal("last 12 month’s shipments");
//     await browser.sleep(1000);
// });
// Then('User should see the tooltips for Revenue Var as =new revenue – old revenue in View One report', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.RevVarTip).perform();
//     await browser.wait(until.visibilityOf(CLRObj.RevVarTip), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.RevVarTip.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     let RevVarTool = await CLRObj.RevVarTip.getAttribute("mattooltip");
//     await console.log("Rev var Tooltip msg is :" + RevVarTool);
//     await expect(RevVarTool).to.equal("=new revenue – old revenue");
//     await browser.sleep(1000);
// });
// Then('User should see the tooltips for per Var with formula in View One report', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.PerVarTip).perform();
//     await browser.wait(until.visibilityOf(CLRObj.PerVarTip), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.PerVarTip.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     let PerVarTool = await CLRObj.PerVarTip.getAttribute("mattooltip");
//     await console.log("%var Tooltip msg is :" + PerVarTool);
//     await expect(PerVarTool).to.equal("=((new revenue-old revenue)/old revenue)*100");
//     await browser.sleep(1000);
// });
// Then('User should displayed default Currency Symbol as Doller for Old Rev and New Rev columns', async function () {
//     let CurrencySymbol = await CLRObj.OldRevCurrencySymbol.getText();
//     await expect(CurrencySymbol).to.contains("$");
//     await browser.sleep(1000);
// });
// Then('Grand Total row should be displayed, which is the sum of Export,Import and third Party directions for View 1', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.VIEW_ONE_GRANDTTL), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.VIEW_ONE_GRANDTTL.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     let GrandTotal = await CLRObj.GrandTotalText.getText();
//     await console.log(GrandTotal);
//     await expect(GrandTotal).to.equal("GRAND TOTAL");
//     await browser.sleep(1000);
// });

// Then('User should see Below column headers for all the directions-Total Shipment,Total Rated Wgt,Old Revenue,New Revenue,Revenue Var,PerVar', async function () {
//     await CLRObj.ExporColHeader.all(by.tagName("input")).then(async function (ColHeader) {

//         console.log(await ColHeader.length);

//         browser.sleep(2000);

//         let Headers: string[] = ['TOTAL SHIPMENT', ' TOTAL RATED WEIGHT', 'OLD REVENUE', 'NEW REVENUE', ' REVENUE VARIANCE', '%VARIANCE']

//         console.log(await Headers.length);

//         for (let j = 0; j < Headers.length; j++) {

//             console.log(await Headers[j]);

//         }
//         for (let i = 1; i <= ColHeader.length; i++) {

//             ColHeader[i - 1].getAttribute("placeholder").then(async function (text) {

//                 await console.log(await text);

//                 await expect(Headers[i - 1]).to.contains(text);
//                 console.log(await expect(Headers[i - 1]).to.contains(text));
//             });
//         };
//     });
// });
// Then('User should see Additional columns button and checkboxes for Additional columns', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.AddColsView1), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.AddColsView1.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     // await browser.sleep(1000);
//     // await CLRObj.AddColsIDS.sendKeys(protractor.Key.ENTER);
//     // await browser.sleep(2000);
//     // await browser.actions().mouseMove(CLRObj.AddColsIDS).click().perform();
//     // await browser.sleep(2000);
// });
// When('User clicks on Country ID Input Box', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.NODE_ID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NODE_ID.click();
//     await browser.sleep(1000);
// });
// Then('User should see Country IDs list with scrollbar', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.NODE_ID_SCROLL), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.NODE_ID_SCROLL.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
// });
// Then('Country IDs list should be displayed with ascending order', async function () {
//     var CountryIdsList = await CLRObj.NODE_ID_SCROLL.all(by.tagName("mat-option")).getText();
//     await console.log("Country Id's Length: " + CountryIdsList.length);
//     // await console.log("Node Id's: "+NodeIdsList);
//     var countryID = CountryIdsList.toString().split(",");
//     await console.log("Country Id's List with sorting: " + countryID.toString());
//     await expect(countryID.toString().trim()).to.be.ascending
// });
// When('Country ID Input Box is displayed and User clicks on it', async function () {
//     await browser.sleep(1000);
//     await browser.wait(until.visibilityOf(CLRObj.NODE_ID), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.NODE_ID.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.wait(until.elementToBeClickable(CLRObj.NODE_ID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NODE_ID.click();
//     await browser.sleep(1000);
// });
// Then('Country ID Input Box can be dropdown or also value can be enter in to this field', async function () {
//     let query = TestData.userData.OracleQuery.ExportNodeID;
//     var exportNodeID: string[] = await getInformationFromDB(query);
//     await console.log("Export NodeID is :" + exportNodeID[0])
//     await CLRObj.NODE_ID.sendKeys(exportNodeID[0].toString());
//     await browser.sleep(1000);
//     await CLRObj.NODE_ID.sendKeys(protractor.Key.ENTER);
//     await browser.sleep(1000);
// });
// Then('Selected Country ID value with hyper link should be displayed next to Country ID Input Box', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.NODE_ID_HYPERLINK), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.NODE_ID_HYPERLINK.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(2000);
//     let SelectedNodeID = await CLRObj.NODE_ID_HYPERLINK.getText();
//     await console.log("Selected NodeID: " + SelectedNodeID);

// });
// Then('User should see direction button, Download button after selecting value into Country ID Input Box', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.EXPORT), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.EXPORT.isDisplayed().then(async function (result) {
//         await console.log("Export Button is Displayed :" + result);
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.wait(until.visibilityOf(CLRObj.DOWNLOAD), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.DOWNLOAD.isDisplayed().then(async function (result) {
//         await console.log("Download Button is Displayed :" + result);
//         expect(true).to.equal(result.valueOf());
//     });
// });

// Then('The Calculation Period labels should be visible', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.CALCULATION_PERIOD_CUST), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.CALCULATION_PERIOD_CUST.isDisplayed().then(async function (result) {
//         await console.log("Calculation Period is Displayed :" + result);
//         expect(true).to.equal(result.valueOf());
//     });
// });
// Then('User should be able to verify the data for the Calculation Period is retrieved from the rerate sheet column name CALC_PERD and the data should be in the format', async function () {
//     let SelectedNode = await CLRObj.NODE_ID_HYPERLINK.getText();
//     let query = "SELECT CALC_PERD FROM mia_report_det r join   mia_node_status st on r.node_id=st.node_id JOIN mia_status_code sc ON st.stat_id=sc.stat_id WHERE r.node_id= '" + SelectedNode + "' and rownum=1"
//     var resdata: string[] = await getInformationFromDB(query);
//     let data = await CLRObj.CALCULATION_PERIOD_CUST_DATE.getText();
//     await console.log("Calculation Period Date :" + data);
//     expect(data).to.equal(resdata.toString())
// })
// When('User click on CountryID Hyperlink', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.NODE_ID_HYPERLINK), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.NODE_ID_HYPERLINK.click();
//     await browser.sleep(1000);
// });
// Then('User should see Heat Map Hyperlink button', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.NODE_ID_HEATMAP), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.NODE_ID_HEATMAP.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
// });
// Then('User should see Heat Map and Discount-Surcharge Button', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.NODE_ID_HEATMAP), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.NODE_ID_HEATMAP.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
// });
// When('User click on Heat map Hyperlink button', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.NODE_ID_HEATMAP), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.NODE_ID_HEATMAP.click();
//     await browser.sleep(2000);
// });
// Then('User should navigate on Heat Map report in new window', async function () {
//     await browser.getAllWindowHandles().then(async function (allwindow) {
//         await browser.switchTo().window(allwindow[1]);
//         await browser.wait(until.visibilityOf(CLRObj.HEATMAP_HEADER), 20000, 'Element taking too long to be clickable in DOM');
//         await CLRObj.HEATMAP_HEADER.isDisplayed().then(function (result) {
//             expect(true).to.equal(result.valueOf());
//         })
//     });
//     await CLRObj.HEATMAP_HEADER.getText().then(function (HeatMapReportTitle) {
//         console.log("Report Title : " + HeatMapReportTitle);
//         expect("Heat Map Report - Customer Level").to.equal(HeatMapReportTitle.valueOf());
//     });
//     await browser.sleep(1000);
//     await browser.close();
//     await browser.sleep(1000);
// });
// Then('User should navigate back on Customer level report', async function () {
//     await browser.sleep(1000);
//     await browser.getAllWindowHandles().then(async function (allwindow) {
//         await browser.switchTo().window(allwindow[0]);
//         await browser.sleep(2000);
//     });
// });
// When('User click on Discount-Surcharge Hyperlink button', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.NODE_ID_HYPERLINK), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.NODE_ID_HYPERLINK.click()
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.NODE_ID_DISCOUNT), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.NODE_ID_DISCOUNT.click();
//     await browser.sleep(2000);
// });
// Then('User should navigate on Discount-Surcharge report in new window', async function () {
//     await browser.getAllWindowHandles().then(async function (allwindow) {
//         await browser.switchTo().window(allwindow[1]);
//         browser.sleep(2000);
//     });
//     await browser.wait(until.visibilityOf(CLRObj.DISCOUNT_HEADER), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.DISCOUNT_HEADER.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await CLRObj.DISCOUNT_HEADER.getText().then(function (DiscountReportTitle) {
//         console.log("Report Title: " + DiscountReportTitle);
//         expect("Discount Surcharge Report").to.equal(DiscountReportTitle.valueOf());
//     });
//     await browser.sleep(1000);
//     await browser.close();
//     await browser.sleep(1000);
//     await browser.getAllWindowHandles().then(async function (allwindow) {
//         await browser.switchTo().window(allwindow[0]);
//         await browser.sleep(2000);
//     });
// });
// Then('Weight Input Box should be displayed, it should be disabled and Default value KG has selected', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.WEIGHT), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.WEIGHT.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.wait(until.visibilityOf(CLRObj.WEIGHT), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.WEIGHT.isEnabled().then(async function (enabled) {
//         expect(false).to.equal(enabled.valueOf());
//         await console.log("Weight Field is enabled:" + enabled);
//     });
//     await browser.wait(until.elementToBeSelected(CLRObj.KiloGrams), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.KiloGrams.isSelected().then(async function (result) {
//         expect(true).to.equal(result.valueOf());
//         await console.log("KiloGrams Value is Selcted:" + result);
//     });
// });
// When('User clicks on Currency list', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.CURRENCY_LIST), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.CURRENCY_LIST.click();
//     await browser.sleep(1000);
// });
// Then('Currency list should be displayed with Default value USD is selected', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.CURRENCY_LIST), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.CURRENCY_LIST.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.wait(until.elementToBeSelected(CLRObj.DefaultCurrency), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.DefaultCurrency.isSelected().then(async function (result) {
//         expect(true).to.equal(result.valueOf());
//         await console.log("Default USD Value is Selcted in Currency list:" + result);
//     });
// });
// Then('Currency value should be populated from table mia_exchange_rate and sorted with ascending order', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.CURRENCY_LIST), 20000, 'Element taking too long time to be visible in DOM');
//     let CurrencyValues = await CLRObj.CURRENCY_LIST.all(by.tagName("option")).getAttribute("value");
//     await browser.sleep(1000);
//     let query = TestData.userData.OracleQuery.CurrencyListQuery;
//     var resdata: string[] = await getInformationFromDB(query);
//     var arr1: string[] = CurrencyValues.toString().split(",");
//     await console.log("GUI Currency List : " + arr1.sort().toString());
//     await console.log("DB  Currency List : " + resdata.toString().trim());
//     expect(arr1.sort().toString()).to.equal(resdata.toString().trim());
//     await browser.sleep(1000);
// });
// When('User changed Currency value from USD to any other Currency from Currency list', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.CURRENCY_LIST), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.CURRENCY_LIST.element(by.cssContainingText('option', 'INR')).click();
//     await browser.sleep(2000);
// });
// Then('User should see Currency Symbol and values get changed as per selected Currency for Old Rev,New Rev and Revenue Variance columns for all views', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.OldRevCurrencySymbol), 20000, 'Element taking too long time to be visible in DOM');
//     let CurrencySymbol = await CLRObj.OldRevCurrencySymbol.getText();
//     await expect(CurrencySymbol).to.contains("₹");
//     await browser.sleep(1000);
//     await browser.wait(until.visibilityOf(CLRObj.NewRevCurrencySymbol), 20000, 'Element taking too long time to be visible in DOM');
//     let CurrencySymbol1 = await CLRObj.NewRevCurrencySymbol.getText();
//     await expect(CurrencySymbol1).to.contains("₹");
//     await browser.sleep(1000);
//     await browser.wait(until.visibilityOf(CLRObj.PerVarCurrencySymbol), 20000, 'Element taking too long time to be visible in DOM');
//     let CurrencySymbol2 = await CLRObj.PerVarCurrencySymbol.getText();
//     await expect(CurrencySymbol2).to.contains("₹");
//     await browser.sleep(1000);
// });
// Then('User should able to see Export direction table values should be converted accordingly to currency conversion rates', async function () {
//     let SelectedCountryID = await CLRObj.NODE_ID_HYPERLINK.getText();
//     await console.log("Selected NodeID  : " + SelectedCountryID);
//     let rowcount = await CLRObj.EXPORT_TABLE_Row.all(by.tagName("tr")).count();
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();
//     await console.log("Exp Row Count UI " + rowcount);
//     await console.log("Exp Col Count UI " + colcount);
//     let query = "SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'EXPORT TOTAL', 1, 'TOTAL',7, 'Grant total', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) row_type, SUM(shp_count) shp_count,SUM(shp_wgt) tot_weight,SUM(rev_old_usd) old_revenue,SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd) - SUM(rev_old_usd) ) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(SUM(rev_old_usd), 0) * 100), 2) AS percent FROM (SELECT disc_typ_cd,r.svc_cd, rev_new_usd*(select DISTINCT exrt_rte from mia_exchange_rate where exrt_ctry_cd='INR') rev_new_usd,rev_old_usd*(select DISTINCT exrt_rte from mia_exchange_rate where exrt_ctry_cd='INR') rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE','DSCH') svc_typ,shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r,mia_node_status s,mia_status_code c WHERE DISC_TYP_CD = 'EXPT' AND r.node_id = s.node_id AND c.stat_id = s.stat_id AND c.stat_id NOT IN ( 5,7,9,8)  AND r.NODE_ID  ='" + SelectedCountryID + "' AND rerate_dt = (SELECT MAX(rerate_dt) FROM MIA_REPORT_DET ) UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,'IPIE',0,SVC_ID, 0 FROM mia_svc_mstr WHERE DISC_TYP_CD = 'EXPT' AND EXISTS ( SELECT * FROM mia_node_status WHERE ( node_id = NULL OR NULL IS NULL ) AND stat_id NOT IN ( 5,7,9,8 ))) GROUP BY (disc_typ_cd,svc_typ,svc_cd) ORDER BY max(svc_id)";
//     var exportTableDBData: string[] = await getInformationFromDB(query);
//     await console.log("Query result " + exportTableDBData);
//     await console.log("Exp Row Count DB " + exportTableDBData.length);
//     await console.log("Exp Col Count DB " + exportTableDBData[0].length);
//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let exportTableUIData = await element(by.xpath("//*[@id='protract-export-tbl']/tbody/tr[" + i + "]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-export-tbl']/tbody/tr[" + i + "]/td[" + j + "]"));
//             await console.log("UI data " + exportTableUIData);
//             await console.log("DB data " + exportTableDBData[i - 1][j - 1]);
//             if ((exportTableDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((exportTableDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = exportTableDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(exportTableDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (exportTableUIData.length == 1) {
//                 if (exportTableUIData.toString().includes("-")) {
//                     exportTableUIData = exportTableUIData.replace("-", "0");
//                 }
//             }
//             if (exportTableUIData.toString().includes("-0.00")) {
//                 exportTableUIData = exportTableUIData.replace("-0.00", "0.00");
//             }
//             if (exportTableUIData.toString().includes(",")) {
//                 exportTableUIData = exportTableUIData.replace(",", "");
//             }
//             if (exportTableUIData.toString().includes("₹")) {

//                 exportTableUIData = exportTableUIData.replace("₹", "");
//             }
//             if (exportTableUIData.toString().includes("%")) {

//                 exportTableUIData = exportTableUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(exportTableUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (exportTableUIData.toString().includes(".00")) {

//                 exportTableUIData = exportTableUIData.replace(".00", "");
//             }
//             else {
//                 await expect((exportTableDBData[i - 1][j - 1]).toString()).to.equals((exportTableUIData.trim()));
//             }
//             await expect((exportTableDBData[i - 1][j - 1]).toString()).to.equals((exportTableUIData.trim()));
//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             });
//         }
//     }
// });
// Then('User should able to see Export service total values should be converted accordingly to currency conversion rates', async function () {
//     let SelectedCountryID = await CLRObj.NODE_ID_HYPERLINK.getText();
//     await console.log("Selected NodeID  : " + SelectedCountryID);
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();
//     await console.log("Total Row Count UI " + rowcount);
//     await console.log("Total Col Count UI " + colcount);
//     let query = "select * from (SELECT DECODE(GROUPING_id(disc_typ_cd,svc_typ,svc_cd),3,'EXPORT TOTAL' ,1,'TOTAL',7,'Grant total', svc_cd ||DECODE (svc_cd,'IP','(2P)','IPE','(2A)') ) row_type,SUM(shp_count) shp_count,SUM (shp_wgt) tot_weight,SUM(rev_old_usd) old_revenue,SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd)-SUM(rev_old_usd)) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd)-SUM(rev_old_usd))/ NULLIF(SUM(rev_old_usd), 0)*100),2) AS percent FROM(SELECT disc_typ_cd,r.svc_cd,rev_new_usd*(select DISTINCT exrt_rte from mia_exchange_rate where exrt_ctry_cd='INR') rev_new_usd,rev_old_usd*(select DISTINCT exrt_rte from mia_exchange_rate where exrt_ctry_cd='INR') rev_old_usd,DECODE( SUBSTR(r.svc_cd,1,2),'IP','IPIE','IE','IPIE','DSCH') svc_typ,shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r, mia_node_status s, mia_status_code c WHERE DISC_TYP_CD  ='EXPT' AND r.node_id =s.node_id AND c.stat_id =s.stat_id AND c.stat_id NOT IN (5,7,9,8) AND r.NODE_ID  ='" + SelectedCountryID + "' AND rerate_dt =(SELECT MAX(rerate_dt) FROM MIA_REPORT_DET) UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,'IPIE',0,SVC_ID,0 FROM mia_svc_mstr WHERE DISC_TYP_CD='EXPT' AND EXISTS(SELECT *FROM mia_node_status WHERE (node_id=NULL OR NULL IS NULL)AND stat_id NOT IN (5,7,9,8))) GROUP BY rollup(disc_typ_cd, svc_typ ,svc_cd)ORDER BY disc_typ_cd,MAX(SVC_ID)+GROUPING_id(disc_typ_cd,svc_typ,svc_cd)) where row_type = 'TOTAL' "
//     var EXPTServiceDBData: string[] = await getInformationFromDB(query);
//     await console.log("Query result " + EXPTServiceDBData);
//     await console.log("Total Row Count DB " + EXPTServiceDBData.length);
//     await console.log("Total Col Count DB " + EXPTServiceDBData[0].length);
//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let EXPTServiceUIData = await element(by.xpath("//*[@id='protract-export-tbl']/tfoot/tr[1]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-export-tbl']/tfoot/tr[1]/td[" + j + "]"));
//             await console.log("UI data " + EXPTServiceUIData);
//             await console.log("DB data " + EXPTServiceDBData[i - 1][j - 1]);
//             if ((EXPTServiceDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((EXPTServiceDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = EXPTServiceDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(EXPTServiceDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (EXPTServiceUIData.length == 1) {
//                 if (EXPTServiceUIData.toString().includes("-")) {
//                     EXPTServiceUIData = EXPTServiceUIData.replace("-", "0");
//                 }
//             }
//             if (EXPTServiceUIData.toString().includes("-0.00")) {
//                 EXPTServiceUIData = EXPTServiceUIData.replace("-0.00", "0.00");
//             }
//             if (EXPTServiceUIData.toString().includes(",")) {
//                 EXPTServiceUIData = EXPTServiceUIData.replace(",", "");
//             }
//             if (EXPTServiceUIData.toString().includes("₹")) {
//                 EXPTServiceUIData = EXPTServiceUIData.replace("₹", "");
//             }
//             if (EXPTServiceUIData.toString().includes("%")) {
//                 EXPTServiceUIData = EXPTServiceUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(EXPTServiceUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (EXPTServiceUIData.toString().includes(".00")) {

//                 EXPTServiceUIData = EXPTServiceUIData.replace(".00", "");
//             }
//             else {
//                 await expect((EXPTServiceDBData[i - 1][j - 1]).toString()).to.equals((EXPTServiceUIData.trim()));
//             }
//             await expect((EXPTServiceDBData[i - 1][j - 1]).toString()).to.equals((EXPTServiceUIData.trim()));
//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             });
//         }
//     }
// });
// Then('User should able to see Export Direction total values should be converted accordingly to currency conversion rates', async function () {
//     let SelectedCountryID = await CLRObj.NODE_ID_HYPERLINK.getText();
//     await console.log("Selected NodeID  : " + SelectedCountryID);
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();
//     await console.log("Export Total Row Count UI " + rowcount);
//     await console.log("Export Total Count UI " + colcount);
//     let query = "select * from (SELECT DECODE(GROUPING_id(disc_typ_cd,svc_typ,svc_cd),3,'EXPORT TOTAL' ,1,'TOTAL',7,'Grant total', svc_cd ||DECODE (svc_cd,'IP','(2P)','IPE','(2A)') ) row_type,SUM(shp_count) shp_count,SUM (shp_wgt) tot_weight,SUM(rev_old_usd) old_revenue,SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd)-SUM(rev_old_usd)) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd)-SUM(rev_old_usd))/ NULLIF(SUM(rev_old_usd), 0)*100),2) AS percent FROM(SELECT disc_typ_cd,r.svc_cd,rev_new_usd*(select DISTINCT exrt_rte from mia_exchange_rate where exrt_ctry_cd='INR') rev_new_usd,rev_old_usd*(select DISTINCT exrt_rte from mia_exchange_rate where exrt_ctry_cd='INR') rev_old_usd,DECODE( SUBSTR(r.svc_cd,1,2),'IP','IPIE','IE','IPIE','DSCH') svc_typ,shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r, mia_node_status s, mia_status_code c WHERE DISC_TYP_CD  ='EXPT' AND r.node_id =s.node_id AND c.stat_id =s.stat_id AND c.stat_id NOT IN (5,7,9,8) AND r.NODE_ID  ='" + SelectedCountryID + "' AND rerate_dt =(SELECT MAX(rerate_dt) FROM MIA_REPORT_DET) UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,'IPIE',0,SVC_ID,0 FROM mia_svc_mstr WHERE DISC_TYP_CD='EXPT' AND EXISTS(SELECT *FROM mia_node_status WHERE (node_id=NULL OR NULL IS NULL)AND stat_id NOT IN (5,7,9,8))) GROUP BY rollup(disc_typ_cd, svc_typ ,svc_cd)ORDER BY disc_typ_cd,MAX(SVC_ID)+GROUPING_id(disc_typ_cd,svc_typ,svc_cd)) where row_type = 'EXPORT TOTAL' "
//     var exportTotalDBData: string[] = await getInformationFromDB(query)
//     await console.log("Query result " + exportTotalDBData);
//     await console.log("Export Total Row Count DB " + exportTotalDBData.length);
//     await console.log("Export Total col Count DB " + exportTotalDBData[0].length);
//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let exportTotalUIData = await element(by.xpath("//*[@id='protract-export-tbl']/tfoot/tr[4]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-export-tbl']/tfoot/tr[4]/td[" + j + "]"));
//             await console.log("UI data " + exportTotalUIData);
//             await console.log("DB data " + exportTotalDBData[i - 1][j - 1]);
//             if ((exportTotalDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((exportTotalDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = exportTotalDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(exportTotalDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (exportTotalUIData.length == 1) {
//                 if (exportTotalUIData.toString().includes("-")) {
//                     exportTotalUIData = exportTotalUIData.replace("-", "0");
//                 }
//             }
//             if (exportTotalUIData.toString().includes("-0.00")) {
//                 exportTotalUIData = exportTotalUIData.replace("-0.00", "0.00");
//             }
//             if (exportTotalUIData.toString().includes(",")) {
//                 exportTotalUIData = exportTotalUIData.replace(",", "");
//             }
//             if (exportTotalUIData.toString().includes("₹")) {
//                 exportTotalUIData = exportTotalUIData.replace("₹", "");
//             }
//             if (exportTotalUIData.toString().includes("%")) {
//                 exportTotalUIData = exportTotalUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(exportTotalUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (exportTotalUIData.toString().includes(".00")) {

//                 exportTotalUIData = exportTotalUIData.replace(".00", "");
//             }
//             else {
//                 await expect((exportTotalDBData[i - 1][j - 1]).toString()).to.equals((exportTotalUIData.trim()));
//             }
//             await expect((exportTotalDBData[i - 1][j - 1]).toString()).to.equals((exportTotalUIData.trim()));
//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             });
//         }
//     }
// });
// Then('User should able to see Import direction table values should be converted accordingly to currency conversion rates', async function () {
//     let SelectedCountryID = await CLRObj.NODE_ID_HYPERLINK.getText();
//     await console.log("Selected NodeID  : " + SelectedCountryID);
//     let rowcount = await CLRObj.IMPORT_TABLE_Row.all(by.tagName("tr")).count();
//     let colcount = await CLRObj.ImportRowHeader.all(by.tagName("th")).count();
//     await console.log("IMPT Row Count UI " + rowcount);
//     await console.log("IMPT Col Count UI " + colcount);
//     let query = "SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'EXPORT TOTAL', 1, 'TOTAL',7, 'Grant total', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) row_type, SUM(shp_count) shp_count,SUM(shp_wgt) tot_weight,SUM(rev_old_usd) old_revenue,SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd) - SUM(rev_old_usd) ) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(SUM(rev_old_usd), 0) * 100), 2) AS percent FROM (SELECT disc_typ_cd,r.svc_cd,rev_new_usd*(select DISTINCT exrt_rte from mia_exchange_rate where exrt_ctry_cd='INR') rev_new_usd,rev_old_usd*(select DISTINCT exrt_rte from mia_exchange_rate where exrt_ctry_cd='INR') rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE','DSCH') svc_typ,shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r,mia_node_status s,mia_status_code c WHERE DISC_TYP_CD = 'IMPT' AND r.node_id = s.node_id AND c.stat_id = s.stat_id AND c.stat_id NOT IN ( 5,7,9,8) AND r.NODE_ID  ='" + SelectedCountryID + "' AND rerate_dt = (SELECT MAX(rerate_dt) FROM MIA_REPORT_DET ) UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,'IPIE',0,SVC_ID, 0 FROM mia_svc_mstr WHERE DISC_TYP_CD = 'IMPT' AND EXISTS ( SELECT * FROM mia_node_status WHERE ( node_id = NULL OR NULL IS NULL ) AND stat_id NOT IN ( 5,7,9,8 ))) GROUP BY (disc_typ_cd,svc_typ,svc_cd) ORDER BY max(svc_id)"
//     var importTableDBData: string[] = await getInformationFromDB(query);
//     await console.log("Query result " + importTableDBData);
//     await console.log("IMPT Row Count DB " + importTableDBData.length);
//     await console.log("IMPT Col Count DB " + importTableDBData[0].length);
//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let importTableUIData = await element(by.xpath("//*[@id='protract-import-tbl']/tbody/tr[" + i + "]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-import-tbl']/tbody/tr[" + i + "]/td[" + j + "]"));
//             await console.log("UI data " + importTableUIData);
//             await console.log("DB data " + importTableDBData[i - 1][j - 1]);
//             if ((importTableDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((importTableDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = importTableDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(importTableDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (importTableUIData.length == 1) {
//                 if (importTableUIData.toString().includes("-")) {
//                     importTableUIData = importTableUIData.replace("-", "0");
//                 }
//             }
//             if (importTableUIData.toString().includes("-0.00")) {
//                 importTableUIData = importTableUIData.replace("-0.00", "0.00");
//             }
//             if (importTableUIData.toString().includes(",")) {
//                 importTableUIData = importTableUIData.replace(",", "");
//             }
//             if (importTableUIData.toString().includes("₹")) {
//                 importTableUIData = importTableUIData.replace("₹", "");
//             }
//             if (importTableUIData.toString().includes("%")) {
//                 importTableUIData = importTableUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(importTableUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (importTableUIData.toString().includes(".00")) {
//                 importTableUIData = importTableUIData.replace(".00", "");
//             }
//             else {
//                 await expect((importTableDBData[i - 1][j - 1]).toString()).to.equals((importTableUIData.trim()));
//             }
//             await expect((importTableDBData[i - 1][j - 1]).toString()).to.equals((importTableUIData.trim()));
//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             });
//         }
//     }
// });
// Then('User should able to see Import service total values should be converted accordingly to currency conversion rates', async function () {
//     let SelectedCountryID = await CLRObj.NODE_ID_HYPERLINK.getText();
//     await console.log("Selected NodeID  : " + SelectedCountryID);
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();
//     await console.log("Total Row Count UI " + rowcount);
//     await console.log("Total Col Count UI " + colcount);
//     let query = "select * from (SELECT DECODE(GROUPING_id(disc_typ_cd,svc_typ,svc_cd),3,'IMPORT TOTAL' ,1,'TOTAL',7,'Grand total', svc_cd ||DECODE (svc_cd,'IP','(2P)','IPE','(2A)') ) row_type,SUM(shp_count) shp_count,SUM (shp_wgt) tot_weight,SUM(rev_old_usd) old_revenue,SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd)-SUM(rev_old_usd)) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd)-SUM(rev_old_usd))/ NULLIF(SUM(rev_old_usd), 0)*100),2) AS percent FROM(SELECT disc_typ_cd,r.svc_cd,rev_new_usd*(select DISTINCT exrt_rte from mia_exchange_rate where exrt_ctry_cd='INR') rev_new_usd,rev_old_usd*(select DISTINCT exrt_rte from mia_exchange_rate where exrt_ctry_cd='INR') rev_old_usd,DECODE( SUBSTR(r.svc_cd,1,2),'IP','IPIE','IE','IPIE','DSCH') svc_typ,shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r, mia_node_status s, mia_status_code c WHERE DISC_TYP_CD  ='IMPT' AND r.node_id =s.node_id AND c.stat_id =s.stat_id AND c.stat_id NOT IN (5,7,9,8) AND r.NODE_ID  ='" + SelectedCountryID + "' AND rerate_dt =(SELECT MAX(rerate_dt) FROM MIA_REPORT_DET) UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,'IPIE',0,SVC_ID,0 FROM mia_svc_mstr WHERE DISC_TYP_CD='IMPT' AND EXISTS(SELECT *FROM mia_node_status WHERE (node_id=NULL OR NULL IS NULL)AND stat_id NOT IN (5,7,9,8))) GROUP BY rollup(disc_typ_cd, svc_typ ,svc_cd)ORDER BY disc_typ_cd,MAX(SVC_ID)+GROUPING_id(disc_typ_cd,svc_typ,svc_cd)) where row_type = 'TOTAL' "
//     var iMPTServiceDBData: string[] = await getInformationFromDB(query);
//     await console.log("Query result " + iMPTServiceDBData);
//     await console.log("Total Row Count DB " + iMPTServiceDBData.length);
//     await console.log("Total Col Count DB " + iMPTServiceDBData[0].length);
//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let iMPTServiceUIData = await element(by.xpath("//*[@id='protract-import-tbl']/tfoot/tr[1]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-import-tbl']/tfoot/tr[1]/td[" + j + "]"));
//             await console.log("UI data " + iMPTServiceUIData);
//             await console.log("DB data " + iMPTServiceDBData[i - 1][j - 1]);
//             if ((iMPTServiceDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((iMPTServiceDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = iMPTServiceDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(iMPTServiceDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (iMPTServiceUIData.length == 1) {
//                 if (iMPTServiceUIData.toString().includes("-")) {
//                     iMPTServiceUIData = iMPTServiceUIData.replace("-", "0");
//                 }
//             }
//             if (iMPTServiceUIData.toString().includes("-0.00")) {
//                 iMPTServiceUIData = iMPTServiceUIData.replace("-0.00", "0.00");
//             }
//             if (iMPTServiceUIData.toString().includes(",")) {
//                 iMPTServiceUIData = iMPTServiceUIData.replace(",", "");
//             }
//             if (iMPTServiceUIData.toString().includes("₹")) {
//                 iMPTServiceUIData = iMPTServiceUIData.replace("₹", "");
//             }
//             if (iMPTServiceUIData.toString().includes("%")) {
//                 iMPTServiceUIData = iMPTServiceUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(iMPTServiceUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (iMPTServiceUIData.toString().includes(".00")) {
//                 iMPTServiceUIData = iMPTServiceUIData.replace(".00", "");
//             }
//             else {
//                 await expect((iMPTServiceDBData[i - 1][j - 1]).toString()).to.equals((iMPTServiceUIData.trim()));
//             }
//             await expect((iMPTServiceDBData[i - 1][j - 1]).toString()).to.equals((iMPTServiceUIData.trim()));
//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             });
//         }
//     }
// });
// Then('User should able to see Import Direction total values should be converted accordingly to currency conversion rates', async function () {
//     let SelectedCountryID = await CLRObj.NODE_ID_HYPERLINK.getText();
//     await console.log("Selected NodeID  : " + SelectedCountryID);
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();
//     await console.log("Import Total Row Count UI " + rowcount);
//     await console.log("Import Total Count UI " + colcount);
//     let query = "select * from (SELECT DECODE(GROUPING_id(disc_typ_cd,svc_typ,svc_cd),3,'IMPORT TOTAL' ,1,'TOTAL',7,'Grand total', svc_cd ||DECODE (svc_cd,'IP','(2P)','IPE','(2A)') ) row_type,SUM(shp_count) shp_count,SUM (shp_wgt) tot_weight,SUM(rev_old_usd) old_revenue,SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd)-SUM(rev_old_usd)) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd)-SUM(rev_old_usd))/ NULLIF(SUM(rev_old_usd), 0)*100),2) AS percent FROM(SELECT disc_typ_cd,r.svc_cd,rev_new_usd*(select DISTINCT exrt_rte from mia_exchange_rate where exrt_ctry_cd='INR') rev_new_usd,rev_old_usd*(select DISTINCT exrt_rte from mia_exchange_rate where exrt_ctry_cd='INR') rev_old_usd,DECODE( SUBSTR(r.svc_cd,1,2),'IP','IPIE','IE','IPIE','DSCH') svc_typ,shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r, mia_node_status s, mia_status_code c WHERE DISC_TYP_CD  ='IMPT' AND r.node_id =s.node_id AND c.stat_id =s.stat_id AND c.stat_id NOT IN (5,7,9,8) AND r.NODE_ID  ='" + SelectedCountryID + "' AND rerate_dt =(SELECT MAX(rerate_dt) FROM MIA_REPORT_DET) UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,'IPIE',0,SVC_ID,0 FROM mia_svc_mstr WHERE DISC_TYP_CD='IMPT' AND EXISTS(SELECT *FROM mia_node_status WHERE (node_id=NULL OR NULL IS NULL)AND stat_id NOT IN (5,7,9,8))) GROUP BY rollup(disc_typ_cd, svc_typ ,svc_cd)ORDER BY disc_typ_cd,MAX(SVC_ID)+GROUPING_id(disc_typ_cd,svc_typ,svc_cd)) where row_type = 'IMPORT TOTAL' "
//     var importTotalDBData: string[] = await getInformationFromDB(query);
//     await console.log("Query result " + importTotalDBData);
//     await console.log("Import Total Row Count DB " + importTotalDBData.length);
//     await console.log("Import Total col Count DB " + importTotalDBData[0].length);
//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let importTotalUIData = await element(by.xpath("//*[@id='protract-import-tbl']/tfoot/tr[4]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-import-tbl']/tfoot/tr[4]/td[" + j + "]"));
//             await console.log("UI data " + importTotalUIData);
//             await console.log("DB data " + importTotalDBData[i - 1][j - 1]);
//             if ((importTotalDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((importTotalDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = importTotalDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(importTotalDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (importTotalUIData.length == 1) {
//                 if (importTotalUIData.toString().includes("-")) {
//                     importTotalUIData = importTotalUIData.replace("-", "0");
//                 }
//             }
//             if (importTotalUIData.toString().includes("-0.00")) {
//                 importTotalUIData = importTotalUIData.replace("-0.00", "0.00");
//             }
//             if (importTotalUIData.toString().includes(",")) {
//                 importTotalUIData = importTotalUIData.replace(",", "");
//             }
//             if (importTotalUIData.toString().includes("₹")) {
//                 importTotalUIData = importTotalUIData.replace("₹", "");
//             }
//             if (importTotalUIData.toString().includes("%")) {
//                 importTotalUIData = importTotalUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(importTotalUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (importTotalUIData.toString().includes(".00")) {
//                 importTotalUIData = importTotalUIData.replace(".00", "");
//             }
//             else {
//                 await expect((importTotalDBData[i - 1][j - 1]).toString()).to.equals((importTotalUIData.trim()));
//             }
//             await expect((importTotalDBData[i - 1][j - 1]).toString()).to.equals((importTotalUIData.trim()));
//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             });
//         }
//     }
// });
// Then('User should able to see Third Party direction table values should be converted accordingly to currency conversion rates', async function () {
//     let SelectedCountryID = await CLRObj.NODE_ID_HYPERLINK.getText();
//     await console.log("Selected NodeID  : " + SelectedCountryID);
//     let rowcount = await CLRObj.THPT_TABLE_Row.all(by.tagName("tr")).count();
//     let colcount = await CLRObj.THPTRowHeader.all(by.tagName("th")).count();
//     await console.log("THPT Row Count UI " + rowcount);
//     await console.log("THPT Col Count UI " + colcount);
//     let query = "SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'EXPORT TOTAL', 1, 'TOTAL',7, 'Grant total', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) row_type, SUM(shp_count) shp_count,SUM(shp_wgt) tot_weight,SUM(rev_old_usd) old_revenue,SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd) - SUM(rev_old_usd) ) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(SUM(rev_old_usd), 0) * 100), 2) AS percent FROM (SELECT disc_typ_cd,r.svc_cd,rev_new_usd*(select DISTINCT exrt_rte from mia_exchange_rate where exrt_ctry_cd='INR') rev_new_usd,rev_old_usd*(select DISTINCT exrt_rte from mia_exchange_rate where exrt_ctry_cd='INR') rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE','DSCH') svc_typ,shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r,mia_node_status s,mia_status_code c WHERE DISC_TYP_CD = 'G3PP' AND r.node_id = s.node_id AND c.stat_id = s.stat_id AND c.stat_id NOT IN ( 5,7,9,8) AND r.NODE_ID  ='" + SelectedCountryID + "'AND rerate_dt = (SELECT MAX(rerate_dt) FROM MIA_REPORT_DET ) UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,'IPIE',0,SVC_ID, 0 FROM mia_svc_mstr WHERE DISC_TYP_CD = 'G3PP' AND EXISTS ( SELECT * FROM mia_node_status WHERE ( node_id = NULL OR NULL IS NULL ) AND stat_id NOT IN ( 5,7,9,8 ))) GROUP BY (disc_typ_cd,svc_typ,svc_cd) ORDER BY max(svc_id)"
//     var thptTableDBData: string[] = await getInformationFromDB(query);
//     await console.log("Query result " + thptTableDBData);
//     await console.log("THPT Row Count DB " + thptTableDBData.length);
//     await console.log("THPT Col Count DB " + thptTableDBData[0].length);
//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         let nullvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let thptTableUIData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tbody/tr[" + i + "]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tbody/tr[" + i + "]/td[" + j + "]"));
//             await console.log("UI data " + thptTableUIData);
//             await console.log("DB data " + thptTableDBData[i - 1][j - 1]);
//             if ((thptTableDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((thptTableDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = thptTableDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(thptTableDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (thptTableUIData.length == 1) {
//                 if (thptTableUIData.toString().includes("-")) {
//                     thptTableUIData = thptTableUIData.replace("-", "0");
//                 }
//             }
//             if (thptTableUIData.toString().includes("-0.00")) {
//                 thptTableUIData = thptTableUIData.replace("-0.00", "0.00");
//             }
//             if (thptTableUIData.toString().includes(",")) {
//                 thptTableUIData = thptTableUIData.replace(",", "");
//             }
//             if (thptTableUIData.toString().includes("₹")) {
//                 thptTableUIData = thptTableUIData.replace("₹", "");
//             }
//             if (thptTableUIData.toString().includes("%")) {
//                 thptTableUIData = thptTableUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(thptTableUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (thptTableUIData.toString().includes(".00")) {
//                 thptTableUIData = thptTableUIData.replace(".00", "");
//             }
//             else {
//                 await expect((thptTableDBData[i - 1][j - 1]).toString()).to.equals((thptTableUIData.trim()));
//             }
//             await expect((thptTableDBData[i - 1][j - 1]).toString()).to.equals((thptTableUIData.trim()));
//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             });
//         }
//     }
// });
// Then('User should able to see Third Party service total should be converted accordingly to currency conversion rates', async function () {
//     let SelectedCountryID = await CLRObj.NODE_ID_HYPERLINK.getText();
//     await console.log("Selected NodeID  : " + SelectedCountryID);
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();
//     await console.log("Total Row Count UI " + rowcount);
//     await console.log("Total Col Count UI " + colcount);
//     let query = "select * from (SELECT DECODE(GROUPING_id(disc_typ_cd,svc_typ,svc_cd),3,'THIRD PARTY TOTAL' ,1,'TOTAL',7,'Grand total', svc_cd ||DECODE (svc_cd,'IP','(2P)','IPE','(2A)') ) row_type,SUM(shp_count) shp_count,SUM (shp_wgt) tot_weight,SUM(rev_old_usd) old_revenue,SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd)-SUM(rev_old_usd)) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd)-SUM(rev_old_usd))/ NULLIF(SUM(rev_old_usd), 0)*100),2) AS percent FROM(SELECT disc_typ_cd,r.svc_cd,rev_new_usd*(select DISTINCT exrt_rte from mia_exchange_rate where exrt_ctry_cd='INR') rev_new_usd,rev_old_usd*(select DISTINCT exrt_rte from mia_exchange_rate where exrt_ctry_cd='INR') rev_old_usd,DECODE( SUBSTR(r.svc_cd,1,2),'IP','IPIE','IE','IPIE','DSCH') svc_typ,shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r, mia_node_status s, mia_status_code c WHERE DISC_TYP_CD  ='G3PP' AND r.node_id =s.node_id AND c.stat_id =s.stat_id AND c.stat_id NOT IN (5,7,9,8) AND r.NODE_ID  ='" + SelectedCountryID + "' AND rerate_dt =(SELECT MAX(rerate_dt) FROM MIA_REPORT_DET) UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,'IPIE',0,SVC_ID,0 FROM mia_svc_mstr WHERE DISC_TYP_CD='G3PP' AND EXISTS(SELECT *FROM mia_node_status WHERE (node_id=NULL OR NULL IS NULL)AND stat_id NOT IN (5,7,9,8))) GROUP BY rollup(disc_typ_cd, svc_typ ,svc_cd)ORDER BY disc_typ_cd,MAX(SVC_ID)+GROUPING_id(disc_typ_cd,svc_typ,svc_cd)) where row_type = 'TOTAL' "
//     var tHPTServiceDBData: string[] = await getInformationFromDB(query);
//     await console.log("Query result " + tHPTServiceDBData);
//     await console.log("Total Row Count DB " + tHPTServiceDBData.length);
//     await console.log("Total Col Count DB " + tHPTServiceDBData[0].length);
//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let tHPTServiceUIData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tfoot/tr[1]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tfoot/tr[1]/td[" + j + "]"));
//             await console.log("UI data " + tHPTServiceUIData);
//             await console.log("DB data " + tHPTServiceDBData[i - 1][j - 1]);
//             if ((tHPTServiceDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((tHPTServiceDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = tHPTServiceDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(tHPTServiceDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (tHPTServiceUIData.length == 1) {
//                 if (tHPTServiceUIData.toString().includes("-")) {
//                     tHPTServiceUIData = tHPTServiceUIData.replace("-", "0");
//                 }
//             }
//             if (tHPTServiceUIData.toString().includes("-0.00")) {
//                 tHPTServiceUIData = tHPTServiceUIData.replace("-0.00", "0.00");
//             }
//             if (tHPTServiceUIData.toString().includes(",")) {
//                 tHPTServiceUIData = tHPTServiceUIData.replace(",", "");
//             }
//             if (tHPTServiceUIData.toString().includes("₹")) {
//                 tHPTServiceUIData = tHPTServiceUIData.replace("₹", "");
//             }
//             if (tHPTServiceUIData.toString().includes("%")) {
//                 tHPTServiceUIData = tHPTServiceUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(tHPTServiceUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (tHPTServiceUIData.toString().includes(".00")) {
//                 tHPTServiceUIData = tHPTServiceUIData.replace(".00", "");
//             }
//             else {
//                 await expect((tHPTServiceDBData[i - 1][j - 1]).toString()).to.equals((tHPTServiceUIData.trim()));
//             }
//             await expect((tHPTServiceDBData[i - 1][j - 1]).toString()).to.equals((tHPTServiceUIData.trim()));
//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             });
//         }
//     }
// });
// Then('User should able to see Third Party Direction total should be converted accordingly to currency conversion rates', async function () {
//     let SelectedCountryID = await CLRObj.NODE_ID_HYPERLINK.getText();
//     await console.log("Selected NodeID  : " + SelectedCountryID);
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();
//     await console.log("Third Party Total Row Count UI " + rowcount);
//     await console.log("Third Party Total Count UI " + colcount);
//     let query = "select * from (SELECT DECODE(GROUPING_id(disc_typ_cd,svc_typ,svc_cd),3,'THIRD PARTY TOTAL' ,1,'TOTAL',7,'Grand total', svc_cd ||DECODE (svc_cd,'IP','(2P)','IPE','(2A)') ) row_type,SUM(shp_count) shp_count,SUM (shp_wgt) tot_weight,SUM(rev_old_usd) old_revenue,SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd)-SUM(rev_old_usd)) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd)-SUM(rev_old_usd))/ NULLIF(SUM(rev_old_usd), 0)*100),2) AS percent FROM(SELECT disc_typ_cd,r.svc_cd,rev_new_usd*(select DISTINCT exrt_rte from mia_exchange_rate where exrt_ctry_cd='INR') rev_new_usd,rev_old_usd*(select DISTINCT exrt_rte from mia_exchange_rate where exrt_ctry_cd='INR') rev_old_usd,DECODE( SUBSTR(r.svc_cd,1,2),'IP','IPIE','IE','IPIE','DSCH') svc_typ,shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r, mia_node_status s, mia_status_code c WHERE DISC_TYP_CD  ='G3PP' AND r.node_id =s.node_id AND c.stat_id =s.stat_id AND c.stat_id NOT IN (5,7,9,8) AND r.NODE_ID  ='" + SelectedCountryID + "' AND rerate_dt =(SELECT MAX(rerate_dt) FROM MIA_REPORT_DET) UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,'IPIE',0,SVC_ID,0 FROM mia_svc_mstr WHERE DISC_TYP_CD='G3PP' AND EXISTS(SELECT *FROM mia_node_status WHERE (node_id=NULL OR NULL IS NULL)AND stat_id NOT IN (5,7,9,8))) GROUP BY rollup(disc_typ_cd, svc_typ ,svc_cd)ORDER BY disc_typ_cd,MAX(SVC_ID)+GROUPING_id(disc_typ_cd,svc_typ,svc_cd)) where row_type = 'THIRD PARTY TOTAL' "
//     var tHPTTotalDBData: string[] = await getInformationFromDB(query);
//     await console.log("Query result " + tHPTTotalDBData);
//     await console.log("Third Party Total Row Count DB " + tHPTTotalDBData.length);
//     await console.log("Third Party Total col Count DB " + tHPTTotalDBData[0].length);
//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let tHPTTotalUIData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tfoot/tr[4]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tfoot/tr[4]/td[" + j + "]"));
//             await console.log("UI data " + tHPTTotalUIData);
//             await console.log("DB data " + tHPTTotalDBData[i - 1][j - 1]);
//             if ((tHPTTotalDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((tHPTTotalDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = tHPTTotalDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(tHPTTotalDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (tHPTTotalUIData.length == 1) {
//                 if (tHPTTotalUIData.toString().includes("-")) {
//                     tHPTTotalUIData = tHPTTotalUIData.replace("-", "0");
//                 }
//             }
//             if (tHPTTotalUIData.toString().includes("-0.00")) {
//                 tHPTTotalUIData = tHPTTotalUIData.replace("-0.00", "0.00");
//             }
//             if (tHPTTotalUIData.toString().includes(",")) {
//                 tHPTTotalUIData = tHPTTotalUIData.replace(",", "");
//             }
//             if (tHPTTotalUIData.toString().includes("₹")) {
//                 tHPTTotalUIData = tHPTTotalUIData.replace("₹", "");
//             }
//             if (tHPTTotalUIData.toString().includes("%")) {
//                 tHPTTotalUIData = tHPTTotalUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(tHPTTotalUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (tHPTTotalUIData.toString().includes(".00")) {
//                 tHPTTotalUIData = tHPTTotalUIData.replace(".00", "");
//             }
//             else {
//                 await expect((tHPTTotalDBData[i - 1][j - 1]).toString()).to.equals((tHPTTotalUIData.trim()));
//             }
//             await expect((tHPTTotalDBData[i - 1][j - 1]).toString()).to.equals((tHPTTotalUIData.trim()));
//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             });
//         }
//     }
// });
// Then('User should able to see Grand Total should be converted accordingly to currency conversion rates', async function () {
//     let SelectedCountryID = await CLRObj.NODE_ID_HYPERLINK.getText();
//     await console.log("Selected NodeID  : " + SelectedCountryID);
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();
//     await console.log("Grand Total Row Count UI " + rowcount);
//     await console.log("Grand Total Count UI " + colcount);
//     let query = "select * from (SELECT DECODE(GROUPING_id(disc_typ_cd,svc_typ,svc_cd),3,'EXPORT TOTAL' ,1,'TOTAL',7,'GRAND TOTAL', svc_cd ||DECODE (svc_cd,'IP','(2P)','IPE','(2A)') ) row_type,SUM(shp_count) shp_count,SUM (shp_wgt) tot_weight,SUM(rev_old_usd) old_revenue,SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd)-SUM(rev_old_usd)) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd)-SUM(rev_old_usd))/ NULLIF(SUM(rev_old_usd), 0)*100),2) AS percent FROM(SELECT disc_typ_cd,r.svc_cd,rev_new_usd,rev_old_usd,DECODE( SUBSTR(r.svc_cd,1,2),'IP','IPIE','IE','IPIE','DSCH') svc_typ,shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r, mia_node_status s, mia_status_code c WHERE DISC_TYP_CD  ='EXPT' AND r.node_id =s.node_id AND c.stat_id =s.stat_id AND c.stat_id NOT IN (5,7,9,8) AND r.NODE_ID  ='" + SelectedCountryID + "' AND rerate_dt =(SELECT MAX(rerate_dt) FROM MIA_REPORT_DET) UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,'IPIE',0,SVC_ID,0 FROM mia_svc_mstr WHERE DISC_TYP_CD='EXPT' AND EXISTS(SELECT *FROM mia_node_status WHERE (node_id=NULL OR NULL IS NULL)AND stat_id NOT IN (5,7,9,8))) GROUP BY rollup(disc_typ_cd, svc_typ ,svc_cd)ORDER BY disc_typ_cd,MAX(SVC_ID)+GROUPING_id(disc_typ_cd,svc_typ,svc_cd)) where row_type = 'GRAND TOTAL' "
//     var grandTotalDBData: string[] = await getInformationFromDB(query);
//     await console.log("Query result " + grandTotalDBData);
//     await console.log("Grand Total Row Count DB " + grandTotalDBData.length);
//     await console.log("Grand Total col Count DB " + grandTotalDBData[0].length);
//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let grandTotalUIData = await element(by.xpath("//*[@id='view-one-grandttl']/tfoot/tr/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='view-one-grandttl']/tfoot/tr/td[" + j + "]"));
//             await console.log("UI data " + grandTotalUIData);
//             await console.log("DB data " + grandTotalDBData[i - 1][j - 1]);
//             if ((grandTotalDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((grandTotalDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = grandTotalDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(grandTotalDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (grandTotalUIData.length == 1) {
//                 if (grandTotalUIData.toString().includes("-")) {
//                     grandTotalUIData = grandTotalUIData.replace("-", "0");
//                 }
//             }
//             if (grandTotalUIData.toString().includes("-0.00")) {
//                 grandTotalUIData = grandTotalUIData.replace("-0.00", "0.00");
//             }
//             if (grandTotalUIData.toString().includes(",")) {
//                 grandTotalUIData = grandTotalUIData.replace(",", "");
//             }
//             if (grandTotalUIData.toString().includes("₹")) {
//                 grandTotalUIData = grandTotalUIData.replace("₹", "");
//             }
//             if (grandTotalUIData.toString().includes("%")) {
//                 grandTotalUIData = grandTotalUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(grandTotalUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (grandTotalUIData.toString().includes(".00")) {
//                 grandTotalUIData = grandTotalUIData.replace(".00", "");
//             }
//             else {
//                 await expect((grandTotalDBData[i - 1][j - 1]).toString()).to.equals((grandTotalUIData.trim()));
//             }
//             await expect((grandTotalDBData[i - 1][j - 1]).toString()).to.equals((grandTotalUIData.trim()));
//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             });
//         }
//     }
// });
// Given('User is on Customer Level Report and selected one Node ID from the NodeID dropdown', async function () {
//     await browser.sleep(2000);
//     await CLRObj.NODE_ID.click();
//     await browser.sleep(1000);
//     await CLRObj.NODE_ID.sendKeys("718746776")
//     await browser.sleep(2000);
//     await CLRObj.SELECTED_NODEID.click();
//     await browser.sleep(2000);

// });

// When('User should see direction button and User clicks on Export direction button', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.EXPORT), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.EXPORT.click();
//     await browser.sleep(1000);
// });
// Then('User should see the View two header as By Weight Breaks-only show data with shipping records', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.View2Header), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.View2Header.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await CLRObj.View2Header.getText().then(function (ViewTwoHeader) {
//         console.log("View2 Title: " + ViewTwoHeader);
//         expect("By Weight Breaks(only show data with shipping records)").to.equal(ViewTwoHeader.valueOf());
//     });
// });
// Then('User should see Below column header for all the directions-Weight Breaks,Total Shipment,Total Rated Wgt,Old Revenue,New Revenue,Revenue Var,PerVar', async function () {
//     await CLRObj.WB_TABLE.all(by.tagName("input")).then(async function (View2Header) {
//         await console.log(await View2Header.length);

//         await browser.sleep(1000);
//         let Headers: string[] = ['WEIGHT BREAK', 'TOTAL SHIPMENT', ' TOTAL RATED WEIGHT', 'OLD REVENUE', 'NEW REVENUE', ' REVENUE VARIANCE', '%VARIANCE']

//         await console.log(await Headers.length);

//         for (let j = 0; j < Headers.length; j++) {

//             console.log(await Headers[j]);

//         }
//         for (let i = 1; i <= View2Header.length; i++) {

//             View2Header[i - 1].getAttribute("placeholder").then(async function (text) {

//                 await console.log(await text);

//                 await expect(Headers[i - 1]).to.contains(text);
//                 console.log(await expect(Headers[i - 1]).to.contains(text));
//             });
//         };
//     });
// });
// Then('User should see the tooltips for Old Revenue as last 12 month’s shipments', async function () {
//     await browser.actions().mouseMove(CLRObj.OldRevToolTip).perform();
//     await browser.sleep(1000);
//     await browser.wait(until.visibilityOf(CLRObj.OldRevToolTip), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.OldRevToolTip.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     let OldRevTool = await CLRObj.OldRevTip.getAttribute("mattooltip");
//     await console.log("Old Rev Tooltip msg is :" + OldRevTool);
//     await expect(OldRevTool).to.equal("last 12 month’s shipments");
//     await browser.sleep(1000);
// });
// Then('User should see the tooltips for Revenue Var as =new revenue – old revenue', async function () {
//     await browser.actions().mouseMove(CLRObj.RevVarToolTip).perform();
//     await browser.sleep(1000);
//     await browser.wait(until.visibilityOf(CLRObj.RevVarToolTip), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.RevVarToolTip.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     let RevVarTool = await CLRObj.RevVarTip.getAttribute("mattooltip");
//     await console.log("Rev var Tooltip msg is :" + RevVarTool);
//     await expect(RevVarTool).to.equal("=new revenue – old revenue");
//     await browser.sleep(1000);
// });

// Then('User should see the tooltips for per Var with formula', async function () {
//     await browser.actions().mouseMove(CLRObj.PerVarToolTip).perform();
//     await browser.sleep(1000);
//     await browser.wait(until.visibilityOf(CLRObj.PerVarToolTip), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.PerVarToolTip.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     let PerVarTool = await CLRObj.PerVarTip.getAttribute("mattooltip");
//     await console.log("%var Tooltip msg is :" + PerVarTool);
//     await expect(PerVarTool).to.equal("=((new revenue-old revenue)/old revenue)*100");
//     await browser.sleep(1000);
// });

// Then('User should see the View Three Title as By Regions and Countries only show data with shipping records', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.View3Header), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.View3Header.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await CLRObj.View3Header.getText().then(function (ViewThreeHeader) {
//         console.log("View3 Title: " + ViewThreeHeader);
//         expect("By Regions and Countries(only show data with shipping records)").to.equal(ViewThreeHeader.valueOf());
//     });
// });
// Then('User should see Below column header for all the directions-Zone,Country,Total Shipment,Total Rated Wgt,Old Revenue,New Revenue,Revenue Var,PerVar', async function () {
//     await CLRObj.ZONE_TABLE.all(by.tagName("input")).then(async function (View3Header) {
//         await console.log(await View3Header.length);
//         await browser.sleep(1000);
//         let Headers: string[] = ['ZONE', 'COUNTRY', 'TOTAL SHIPMENT', ' TOTAL RATED WEIGHT', 'OLD REVENUE', 'NEW REVENUE', ' REVENUE VARIANCE', '%VARIANCE']

//         console.log(await Headers.length);

//         for (let j = 0; j < Headers.length; j++) {

//             console.log(await Headers[j]);
//         }
//         for (let i = 1; i <= View3Header.length; i++) {

//             View3Header[i - 1].getAttribute("placeholder").then(async function (text) {

//                 await console.log(await text);

//                 await expect(Headers[i - 1]).to.contains(text);
//                 console.log(await expect(Headers[i - 1]).to.contains(text));
//             });
//         };
//     });
// });
// Then('Direction Total row should be displayed below the View3 table', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.TOTAL_ZONE), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.TOTAL_ZONE.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
// });

// Then('User should see the tooltips for Old Revenue as last 12 month’s shipments in View3 Report', async function () {
//     await browser.actions().mouseMove(CLRObj.OldRevToolTipV3).perform();
//     await browser.sleep(1000);
//     await browser.wait(until.visibilityOf(CLRObj.OldRevToolTipV3), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.OldRevToolTipV3.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     let OldRevTool = await CLRObj.OldRevTip.getAttribute("mattooltip");
//     await console.log("Old Rev Tooltip msg is :" + OldRevTool);
//     await expect(OldRevTool).to.equal("last 12 month’s shipments");
//     await browser.sleep(1000);
// });
// Then('User should see the tooltips for Revenue Var as =new revenue – old revenue in View3 Report', async function () {
//     await browser.actions().mouseMove(CLRObj.RevVarToolTipV3).perform();
//     await browser.sleep(1000);
//     await browser.wait(until.visibilityOf(CLRObj.RevVarToolTipV3), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.RevVarToolTipV3.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     let RevVarTool = await CLRObj.RevVarTip.getAttribute("mattooltip");
//     await console.log("Rev var Tooltip msg is :" + RevVarTool);
//     await expect(RevVarTool).to.equal("=new revenue – old revenue");
//     await browser.sleep(1000);
// });
// Then('User should see the tooltips for per Var with formula in View3 Report', async function () {
//     await browser.actions().mouseMove(CLRObj.PerVarToolTipV3).perform();
//     await browser.sleep(1000);
//     await browser.wait(until.visibilityOf(CLRObj.PerVarToolTipV3), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.PerVarToolTipV3.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     let PerVarTool = await CLRObj.PerVarTip.getAttribute("mattooltip");
//     await console.log("%var Tooltip msg is :" + PerVarTool);
//     await expect(PerVarTool).to.equal("=((new revenue-old revenue)/old revenue)*100");
//     await browser.sleep(1000);
// });
// When('User will click on Arrow Up icon in View3', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.Arrow_UP), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.Arrow_UP.click();
//     await browser.sleep(1000);
// });
// Then('User should navigate back to by-direction for view1', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.EXPORT), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.EXPORT.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
// });
// When('User clicks on reset button and select NodeId which is having Import direction data', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.RESET), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.RESET.click();
//     await browser.sleep(5000);

//     let query = TestData.userData.OracleQuery.ImportNodeID;
//     var importNodeID: string[] = await getInformationFromDB(query);
//     await console.log("Import NodeID is :" + importNodeID[0]);
//     await CLRObj.NODE_ID.sendKeys(importNodeID[0].toString());
//     await browser.sleep(1000);
//     await CLRObj.NODE_ID.sendKeys(protractor.Key.ENTER);
//     await browser.sleep(1000);
// });
// When('User will clicks on Import direction Button in View1', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.IMPORT), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.IMPORT.click();
//     await browser.sleep(1000);
// });

// Then('User should displayed View2 and View3 for Import direction', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.View2Header), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.View2Header.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//         console.log("View 2 Header is displayed for Import Direction: " + result);
//     });
//     await browser.wait(until.visibilityOf(CLRObj.View3Header), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.View3Header.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//         console.log("View 3 Header is displayed for Import Direction: " + result);
//     });
// });

// Then('User should displayed Import direction table for View2 and View3', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.WB_TABLE), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.WB_TABLE.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//         console.log("View 2 Table for Import Direction is displayed: " + result);
//     });
//     await browser.wait(until.visibilityOf(CLRObj.ZONE_TABLE), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.ZONE_TABLE.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//         console.log("View 3 Table for Import Direction is displayed: " + result);
//     });
// });
// Then('User should displayed Import direction total row at last', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.TOTAL_ZONE), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.TOTAL_ZONE.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//         console.log("Import Direction total is displayed: " + result);
//     });
//     await browser.wait(until.elementToBeClickable(CLRObj.Arrow_UP), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.Arrow_UP.click();
//     await browser.sleep(1000);
// });
// When('User will click on Third-Party direction Button in View1', async function () {
//     await CLRObj.THIRD_PARTY.click();
//     await browser.sleep(2000);
// });
// Then('User should displayed View2 and View3 for Third-Party direction', async function () {

//     await CLRObj.View2Header.isDisplayed().then(function (result) {

//         expect(true).to.equal(result.valueOf());
//         console.log("View 2 Header is displayed for Third-Party Direction: " + result);
//     });

//     await CLRObj.View3Header.isDisplayed().then(function (result) {

//         expect(true).to.equal(result.valueOf());
//         console.log("View 3 Header is displayed for Third-Party Direction: " + result);
//     });

// });
// Then('User should displayed Third-Party direction table for View2 and View3', async function () {

//     await CLRObj.WB_TABLE.isDisplayed().then(function (result) {

//         expect(true).to.equal(result.valueOf());
//         console.log("View 2 Table for Third-Party Direction is displayed: " + result);

//     });


//     await CLRObj.ZONE_TABLE.isDisplayed().then(function (result) {

//         expect(true).to.equal(result.valueOf());
//         console.log("View 3 Table for Third-Party Direction is displayed: " + result);
//     });
// });
// Then('User should displayed Third-Party direction total row at last', async function () {

//     await CLRObj.TOTAL_ZONE.isDisplayed().then(function (result) {

//         expect(true).to.equal(result.valueOf());
//         console.log("Third-Party Direction total is displayed: " + result);
//     });
//     await browser.sleep(2000);
//     await CLRObj.Arrow_UP.click();
//     await browser.sleep(2000);
// });

// When('User clicks on Sales Territory filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.SALESTERRITORY), 20000, 'Element taking too long to be clickable in DOM')
//     await CLRObj.SALESTERRITORY.click();
//     await browser.sleep(1000);
//     await CLRObj.SALESTERRITORY.sendKeys(protractor.Key.TAB);
//     for (var x = 0; x < 25; x++) {

//         let dropdown = await element(by.xpath(" //*[@id='protract-sales-scroll']"));
//         let cntvalue = await dropdown.all(by.tagName('mat-option')).count();

//         console.log("Value------------------------------------" + cntvalue)
//         if (await cntvalue == 198) {
//             break;
//         } else {
//             await browser.actions().sendKeys(protractor.Key.END).perform();
//             await browser.sleep(1000);
//         }
//     }

// });
// Then('User should see that Sales Territory Filter values are populated from EDW, Column Name:TERR_CD', async function () {

//     let query = "select distinct TERR_CD from mia_report_filter where TERR_CD IS NOT NULL order by TERR_CD";

//     var resdata: string[] = await getInformationFromDB(query);

//     var TerritoryFilters = await CLRObj.SalesTerrFilterValues.all(by.tagName("mat-option")).getText();
//     var arr1: string[] = TerritoryFilters.toString().split(",");
//     await console.log("GUI Data: " + arr1.sort().toString());
//     await console.log("DB Data: " + resdata.toString().trim());
//     expect(arr1.sort().toString()).to.equal(resdata.toString().trim());
// });

// When('User clicks on Status filter', async function () {
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.STATUS), 20000, 'Element taking too long to be clickable in DOM')
//     await CLRObj.STATUS.click();
//     await browser.sleep(1000);
//     await CLRObj.STATUS.sendKeys(protractor.Key.TAB);;
//     for (var x = 0; x < 13; x++) {

//         let dropdown = await element(by.xpath(" //*[@id='protract-status-scroll']"));
//         let cntvalue = await dropdown.all(by.tagName('mat-option')).count();

//         console.log("Value------------------------------------" + cntvalue)
//         if (await cntvalue == 8) {
//             break;
//         } else {
//             await browser.actions().sendKeys(protractor.Key.END).perform();
//             await browser.sleep(1000);
//         }
//     }
// });

// Then('User should see that Status Filter values are populated from mia_report_filter table, Column Name:STAT_CODE', async function () {

//     let query = "select distinct STAT_CODE from mia_report_filter r, mia_node_status s,mia_status_code c where r.node_id=s.node_id and s.stat_id=c.stat_id order by STAT_CODE";

//     var resdata: string[] = await getInformationFromDB(query);

//     var StatusFilters = await CLRObj.StatusFilterValues.all(by.tagName("mat-option")).getText();

//     var arr1: string[] = StatusFilters.toString().split(",");

//     await console.log("GUI Data: " + arr1.sort().toString());
//     await console.log("DB Data: " + resdata.toString().trim());

//     expect(arr1.sort().toString()).to.equal(resdata.toString().trim());

// });
// Then('User should see default re-rating date selected as latest date', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.RE_RATING_DAT), 20000, 'Element taking too long time to be visible in DOM')
//     await CLRObj.RE_RATING_DAT.isDisplayed().then(function (result) {
//         expect(true).to.equal(result);
//     });
//     await browser.wait(until.visibilityOf(CLRObj.SELECTED_DATE), 20000, 'Element taking too long time to be visible in DOM')
//     await CLRObj.SELECTED_DATE.isDisplayed().then(async function (result) {
//         await expect(true).to.equal(result);
//     });
//     let Date = await CLRObj.SELECTED_DATE.getText()
//     await console.log("Selected Date is : " + Date);
// });
// Then('User should see close-filter icon in re-rating date filter', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.CLOSE_FILTER), 20000, 'Element taking too long time to be visible in DOM')
//     await CLRObj.CLOSE_FILTER.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
// });
// When('User clicks on close-icon in re-rating date filter', async function () {
//     await browser.sleep(1000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(CLRObj.CLOSE_FILTER), 20000, 'Element taking too long time to be visible in DOM')
//     await CLRObj.CLOSE_FILTER.click();
//     await browser.sleep(1000);
// });
// Then('Selected Re-rating date is filter get closed', async function () {
//     await browser.wait(until.invisibilityOf(CLRObj.RE_RATING_DAT), 20000, 'Element taking too long time to be visible in DOM')
//     await CLRObj.RE_RATING_DAT.isPresent().then(function (result) {
//         expect(false).to.equal(result.valueOf());
//         console.log("Re-rating date filter is displayed :" + result);
//     });
// });
// Then('User should see Re-Rating dates from the filter should be sorted in descending order', async function () {
//     var ReRatingDatesFilters = await CLRObj.ReRatingDateFilterValues.all(by.tagName("mat-option")).getText();
//     var arr1: string[] = ReRatingDatesFilters.toString().split(",");
//     await console.log("Re-Rating Dates : " + arr1.sort().toString());
//     expect(arr1.toString().trim()).to.be.descending
// });
// When('User clicks on RE-Rating date filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.RE_RATING_DAT), 20000, 'Element taking too long to be clickable in DOM')
//     await CLRObj.RE_RATING_DAT.click();
//     await browser.sleep(1000);
// });
// Then('User should see that Re-Rating dates filter values are populated from mia_report_filter table, column:RERATE_DT', async function () {

//     let query = "select distinct to_char(RERATE_DT,'MM/DD/YYYY') from mia_report_filter where to_char(RERATE_DT,'MM/DD/YYYY') IS NOT NULL order by to_char(RERATE_DT,'MM/DD/YYYY')";

//     var resdata: string[] = await getInformationFromDB(query);

//     var ReRatingDatesFilters = await CLRObj.ReRatingDateFilterValues.all(by.tagName("mat-option")).getText();

//     var arr1: string[] = ReRatingDatesFilters.toString().split(",");
//     await console.log("GUI Data: " + arr1.sort().toString());
//     await console.log("DB Data: " + resdata.toString().trim());

//     expect(arr1.sort().toString()).to.equal(resdata.toString().trim());
// });

// When('User clicks on Segmentation filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.SEGMANTATION), 20000, 'Element taking too long to be clickable in DOM')
//     await CLRObj.SEGMANTATION.click();
//     await browser.sleep(1000);
//     await CLRObj.SEGMANTATION.sendKeys(protractor.Key.TAB);
//     for (var x = 0; x < 13; x++) {

//         let dropdown = await element(by.xpath(" //*[@id='protract-segmantation-scroll']"));
//         let cntvalue = await dropdown.all(by.tagName('mat-option')).count();

//         console.log("Value------------------------------------" + cntvalue)
//         if (await cntvalue == 8) {
//             break;
//         } else {
//             await browser.actions().sendKeys(protractor.Key.END).perform();
//             await browser.sleep(1000);
//         }

//     }
// });

// Then('User should see that Segmentation filter values are populated from the mia_report_filter table, column name:SEG_CD', async function () {

//     let query = "select distinct SEG_CD from mia_report_filter where SEG_CD IS NOT NULL order by SEG_CD";

//     var resdata: string[] = await getInformationFromDB(query);

//     var SegmentationFilters = await CLRObj.SegmentationFilterValues.all(by.tagName("mat-option")).getText();

//     var arr1: string[] = SegmentationFilters.toString().split(",");

//     await console.log("GUI Data: " + arr1.sort().toString());
//     await console.log("DB Data: " + resdata.toString().trim());

//     expect(arr1.sort().toString()).to.contains(resdata.toString().trim());

// });
// Then('User should see that the values from Segmentation filter start with S followed by the number', async function () {
//     await CLRObj.SegmentationFilterValues.all(by.tagName("mat-option")).then(async function (Segmentationlist) {

//         console.log(await Segmentationlist.length);

//         browser.sleep(3000);

//         for (let i = 1; i <= Segmentationlist.length; i++) {

//             Segmentationlist[i].getAttribute("innerText").then(async function (text) {

//                 console.log(await text);

//                 await expect(i).to.contains(text);
//                 console.log(await expect(text).to.contains("S"));
//             });

//         };
//     });
// });
// When('User selects a country from the Country Horizontal Filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.COUNTRY), 20000, 'Element taking too long to be clickable in DOM')
//     await CLRObj.COUNTRY.click();
//     await browser.sleep(1000);
//     await CLRObj.SELECTED_COUNTRY.click();
// });
// Then('Particular region should be displayed in the Region filter dropdown', async function () {
//     await CLRObj.COUNTRY.getAttribute("value").then(async function (Country) {
//         await browser.wait(until.elementToBeClickable(CLRObj.REGION), 20000, 'Element taking too long to be clickable in DOM')
//         await CLRObj.REGION.click();
//         await browser.sleep(2000);
//         await CLRObj.SELECTED_REGION.click();
//         await CLRObj.REGION.getAttribute("value").then(async function (Region) {

//             let query = "select distinct region_cd from mia_report_filter where payr_ctry_cd='" + Country + "'";
//             var resdata: string[] = await getInformationFromDB(query);

//             await console.log("GUI Region Filter Value: " + Region);
//             await console.log("DB Region Filter Value: " + resdata);
//             expect(Region.toString()).to.equal(resdata.toString());
//         });
//     });
//     await browser.wait(until.elementToBeClickable(CLRObj.RESET), 20000, 'Element taking too long to be clickable in DOM')
//     await CLRObj.RESET.click();
//     await browser.sleep(1000);
// });
// When('User will click on country and select country from country filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.COUNTRY), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.COUNTRY.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.SELECTED_COUNTRY), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SELECTED_COUNTRY.click();
//     await browser.sleep(1000);
// });
// When('User click on region and select region from region filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.REGION), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.REGION.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.SELECTED_REGION), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SELECTED_REGION.click();
//     await browser.sleep(1000);
// });
// When('User click on Status and select Status from Status filter', async function () {
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.STATUS), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.STATUS.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.SELECTED_STATUS), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SELECTED_STATUS.click();
//     await browser.sleep(1000);
// });
// When('User click on sales territory and select sales territory from sales territory filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.SALESTERRITORY), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SALESTERRITORY.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.SELECTED_SALES), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SELECTED_SALES.click();
//     await browser.sleep(1000);
// });
// When('User click on segmentation and select segmentation from segmentation filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.SEGMANTATION), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SEGMANTATION.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.SELECTED_SEGMANTATION), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SELECTED_SEGMANTATION.click();
// });
// When('User click on show hierarchy filter right arrow', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.SHOW_FILTER_CUST), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SHOW_FILTER_CUST.click();
//     await browser.sleep(1000);
// });
// When('User click on Country ID and select Country ID from Country ID from hierarchy filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.COUNTRY_ID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.COUNTRY_ID.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.SELECTED_CNTRY), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SELECTED_CNTRY.click();
// });
// When('User click and select Global Entity ID from hierarchy filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.GLOBAL_ENTITY_ID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.GLOBAL_ENTITY_ID.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.SELECTED_GLOBAL_ID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SELECTED_GLOBAL_ID.click();
//     await browser.sleep(1000);
// });

// When('User click and select Facility ID from hierarchy filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.FACLITY_ID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.FACLITY_ID.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.SELECTED_FACILITY), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SELECTED_FACILITY.click();
//     await browser.sleep(1000);
// });
// When('User click and select EAN from hierarchy filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.EAN), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.EAN.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.SELECTED_EAN), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SELECTED_EAN.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.SHOW_FILTER_CUST_CLS), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SHOW_FILTER_CUST_CLS.click();
//     await browser.sleep(1000);
// });
// When('User click on NodeId field and select nodeID from Dropdown', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.NODE_ID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NODE_ID.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.SELECTED_NODEID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SELECTED_NODEID.click();
//     await browser.sleep(1000);
// });
// Then('Based on the value entered dropdown should be filtered and filtered data should be displayed on report page', async function () {
//     await browser.sleep(1000);
//     await browser.wait(until.visibilityOf(CLRObj.ByDirectionExport), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.ByDirectionExport.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     let Exp = await CLRObj.ByDirectionExport.getText();
//     await console.log(Exp);
//     expect(Exp).to.equal("By Direction Export");
//     await browser.sleep(2000);
//     await CLRObj.ExportTableHead.all(by.tagName("th")).then(async function (ExportHeader) {
//         console.log(await "Total Export Headers are: " + ExportHeader.length);

//         for (let i = 0; i < ExportHeader.length; i++) {
//             ExportHeader[i].getText().then(async function (text) {
//                 console.log(await text);
//             });
//         };
//     });
// });
// When('User clicks on the reset Button to clear all selected inputs', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.RESET), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.RESET.click();
//     await browser.sleep(3000);
// });
// When('User clicks on the reset Button', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.RESET), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.RESET.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.RE_RATING_DATE_CLS), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.RE_RATING_DATE_CLS.click();
//     await browser.sleep(1000);
// });

// Then('All the applied Horizontal filters should be cleared', async function () {
//     let reg_result = await CLRObj.REGION.getAttribute("value");
//     await expect(reg_result).to.equal("");
//     let Country_result = await CLRObj.COUNTRY.getAttribute("value");
//     await expect(Country_result).to.equal("");
//     let Sales_result = await CLRObj.SALESTERRITORY.getAttribute("value");
//     await expect(Sales_result).to.equal("");
//     let Status_result = await CLRObj.STATUS.getAttribute("value");
//     await expect(Status_result).to.equal("");
//     let ReRate_result = await CLRObj.RE_RATING_DAT.getAttribute("value");
//     await expect(ReRate_result).to.equal("");
//     let Seg_result = await CLRObj.SEGMANTATION.getAttribute("value");
//     await expect(Seg_result).to.equal("");
// });

// Then('All the applied Vertical filters should be cleared', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.SHOW_FILTER_CUST), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SHOW_FILTER_CUST.click();
//     let CountryVer_result = await CLRObj.COUNTRY_ID.getAttribute("value");
//     await expect(CountryVer_result).to.equal("");
//     let Gbl_result = await CLRObj.GLOBAL_ENTITY_ID.getAttribute("value");
//     await expect(Gbl_result).to.equal("");
//     let Fac_result = await CLRObj.FACLITY_ID.getAttribute("value");
//     await expect(Fac_result).to.equal("");
//     let EAN_result = await CLRObj.EAN.getAttribute("value");
//     await expect(EAN_result).to.equal("");
//     await browser.wait(until.elementToBeClickable(CLRObj.SHOW_FILTER_CUST_CLS), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SHOW_FILTER_CUST_CLS.click();
// });
// Then('Vertical filters- Global Entity ID, Country ID, Facility ID and EAN should be displayed', async function () {

//     await CLRObj.HierarchyFilterList.all(by.tagName("input")).then(async function (listreport) {

//         console.log(await listreport.length);

//         let filters: string[] = ['Global Entity ID', 'Country ID', 'Facility ID', 'EAN']

//         console.log(await filters.length);

//         for (let j = 0; j < filters.length; j++) {

//             console.log(await filters[j]);
//         }
//         for (let i = 1; i <= listreport.length; i++) {

//             listreport[i - 1].getAttribute("placeholder").then(async function (text) {

//                 console.log(await text);

//                 await expect(filters[i - 1]).to.contains(text);
//                 console.log(await expect(filters[i - 1]).to.contains(text));
//                 await browser.sleep(1000);
//             });
//         };
//     });
// });

// When('User clicks on the Global Entity filter ID', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.GLOBAL_ENTITY_ID), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.GLOBAL_ENTITY_ID.click();
//     await browser.sleep(1000);
//     await CLRObj.GLOBAL_ENTITY_ID.sendKeys(protractor.Key.TAB);
//     for (var x = 0; x < 846; x++) {

//         let dropdown = await element(by.xpath(" //*[@id='protract-global-entity-scroll']"));
//         let cntvalue = await dropdown.all(by.tagName('mat-option')).count();

//         console.log("Value------------------------------------" + cntvalue)
//         if (await cntvalue == 6769) {
//             break;
//         } else {
//             await browser.actions().sendKeys(protractor.Key.END).perform();
//             await browser.sleep(1000);
//         }
//     }
// });


// Then('User should see Global Entity ID value is received from table mia_report_filter and column GLOB_ENT_NBR', async function () {

//     let query = "select distinct GLOB_ENT_NBR from mia_report_filter where GLOB_ENT_NBR IS NOT NULL order by GLOB_ENT_NBR";

//     var resdata: string[] = await getInformationFromDB(query);

//     var GlobalEntityIDFilters = await CLRObj.GlobalIDFilterValues.all(by.tagName("mat-option")).getText();
//     await console.log("before validation: " + GlobalEntityIDFilters.toString());
//     var arr: string[] = GlobalEntityIDFilters.toString().split(",");
//     await console.log("After Sorting :" + arr.toString());
//     await console.log("GUI Data: " + arr.toString());
//     await console.log("DB Data: " + resdata.toString());
//     expect(arr.toString()).to.equal(resdata.toString());
//     await browser.sleep(2000);
//     await CLRObj.SHOW_FILTER_CUST_CLS.click();
//     await browser.sleep(2000);

// });

// When('User clicks on the Country ID filter', async function () {

//     await browser.wait(until.elementToBeClickable(CLRObj.COUNTRY_ID), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.COUNTRY_ID.click();
//     await browser.sleep(1000);
//     await CLRObj.COUNTRY_ID.sendKeys(protractor.Key.TAB);
//     for (var x = 0; x < 550; x++) {

//         let dropdown = await element(by.xpath(" //*[@id='protract-cntry-scroll']"));
//         let cntvalue = await dropdown.all(by.tagName('mat-option')).count();

//         console.log("Value------------------------------------" + cntvalue)
//         if (await cntvalue == 5495) {
//             break;
//         } else {
//             await browser.actions().sendKeys(protractor.Key.END).perform();
//             await browser.sleep(1000);
//         }

//     }

// });
// Then('User should see Country ID value is received from table mia_report_filter and column CTRY_ENT_NBR', async function () {

//     let query = "select distinct CTRY_ENT_NBR from mia_report_filter where CTRY_ENT_NBR IS NOT NULL order by CTRY_ENT_NBR";

//     var resdata: string[] = await getInformationFromDB(query);

//     var CountryIDFilters = await CLRObj.CountryIDFilterValues.all(by.tagName("mat-option")).getText();

//     var arr: string[] = CountryIDFilters.toString().split(",");

//     await console.log("GUI Data: " + arr.sort().toString());
//     await console.log("DB Data: " + resdata.toString().trim());

//     expect(arr.sort().toString()).to.equal(resdata.toString().trim());

//     await browser.wait(until.elementToBeClickable(CLRObj.SHOW_FILTER_CUST_CLS), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.SHOW_FILTER_CUST_CLS.click();
//     await browser.sleep(1000);

// });

// When('User clicks on the Facility ID filter', async function () {

//     await browser.wait(until.elementToBeClickable(CLRObj.FACLITY_ID), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.FACLITY_ID.click();
//     await browser.sleep(1000);
//     await CLRObj.FACLITY_ID.sendKeys(protractor.Key.TAB);
//     for (var x = 0; x < 550; x++) {

//         let dropdown = await element(by.xpath(" //*[@id='protract-facility-scroll']"));
//         let cntvalue = await dropdown.all(by.tagName('mat-option')).count();

//         console.log("Value------------------------------------" + cntvalue)
//         if (await cntvalue == 5495) {
//             break;
//         } else {
//             await browser.actions().sendKeys(protractor.Key.END).perform();
//             await browser.sleep(1000);
//         }
//     }
// });
// Then('User should see Facility ID value is received from table mia_report_filter and column FAC_ENTI_NBR', async function () {

//     let query = "select distinct FAC_ENTI_NBR from mia_report_filter where FAC_ENTI_NBR IS NOT NULL order by FAC_ENTI_NBR";

//     var resdata: string[] = await getInformationFromDB(query);

//     var FacilityIDFilters = await CLRObj.FacilityIDFilterValues.all(by.tagName("mat-option")).getText();

//     var arr: string[] = FacilityIDFilters.toString().split(",");
//     await console.log("GUI Data: " + arr.sort().toString());
//     await console.log("DB Data: " + resdata.toString().trim());

//     expect(arr.sort().toString()).to.equal(resdata.toString().trim());

//     await browser.wait(until.elementToBeClickable(CLRObj.SHOW_FILTER_CUST_CLS), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.SHOW_FILTER_CUST_CLS.click();
//     await browser.sleep(1000);

// });


// When('User clicks on the EAN filter', async function () {

//     await browser.wait(until.elementToBeClickable(CLRObj.EAN), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.EAN.click();
//     await browser.sleep(1000);
//     await CLRObj.EAN.sendKeys(protractor.Key.TAB);
//     for (var x = 0; x < 550; x++) {

//         let dropdown = await element(by.xpath(" //*[@id='protract-ean-scroll']"));
//         let cntvalue = await dropdown.all(by.tagName('mat-option')).count();

//         console.log("Value------------------------------------" + cntvalue)
//         if (await cntvalue == 5495) {
//             break;
//         } else {
//             await browser.actions().sendKeys(protractor.Key.END).perform();
//             await browser.sleep(1000);
//         }
//     }
// });
// Then('User should see EAN filter value is received from table mia_report_filter and column ENT_ACCT_NBR', async function () {
//     let query = "select distinct ENT_ACCT_NBR from mia_report_filter where ENT_ACCT_NBR IS NOT NULL order by ENT_ACCT_NBR";

//     var resdata: string[] = await getInformationFromDB(query);

//     var EANIDFilters = await CLRObj.EANFilterValues.all(by.tagName("mat-option")).getText();

//     var arr: string[] = EANIDFilters.toString().split(",");

//     await console.log("GUI Data: " + arr.sort().toString());
//     await console.log("DB Data: " + resdata.toString().trim());

//     expect(arr.sort().toString()).to.equal(resdata.toString().trim());

//     await browser.wait(until.elementToBeClickable(CLRObj.SHOW_FILTER_CUST_CLS), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.SHOW_FILTER_CUST_CLS.click();
//     await browser.sleep(1000);

// });

// When('User clicks on the Global Entity ID', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.GLOBAL_ENTITY_ID), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.GLOBAL_ENTITY_ID.click();
//     await browser.sleep(1000);

// });

// Then('User should be able to see Global Entrity ID Filter as dropdown', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.DROPDOWNLIST), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.DROPDOWNLIST.isDisplayed().then(async function (result) {
//         await expect(true).to.equal(result);
//     });
// });
// Then('User should be able to enter value under Global Entrity ID filter', async function () {
//     let query = TestData.userData.OracleQuery.GlobalEntityID;
//     var globEntID: string[] = await getInformationFromDB(query);
//     await console.log("Global Entrity ID " + globEntID[0]);
//     await browser.wait(until.visibilityOf(crf.FILTER_DATA), 20000, 'Element taking too long time to be clickable in DOM')
//     await crf.FILTER_DATA.sendKeys(globEntID[0].toString());
//     await browser.sleep(1000);
// });
// Then('User should be able to see Country ID filter as dropdown', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.DROPDOWNLIST), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.DROPDOWNLIST.isDisplayed().then(async function (result) {
//         await expect(true).to.equal(result);
//     });
// });
// Then('User should be able to enter value under Country ID filter', async function () {
//     let query = TestData.userData.OracleQuery.CtryID;
//     var ctryID: string[] = await getInformationFromDB(query);
//     await console.log("Country ID " + ctryID[0]);
//     await browser.wait(until.visibilityOf(crf.FILTER_DATA), 20000, 'Element taking too long time to be clickable in DOM')
//     await crf.FILTER_DATA.sendKeys(ctryID[0].toString());
//     await browser.sleep(1000);
// });
// Then('User should be able to see Facility ID filter as dropdown', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.DROPDOWNLIST), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.DROPDOWNLIST.isDisplayed().then(async function (result) {
//         await expect(true).to.equal(result);
//     });
// });
// Then('User should be able to enter value under Facility ID filter', async function () {
//     let query = TestData.userData.OracleQuery.FacEntID;
//     var facEntID: string[] = await getInformationFromDB(query);
//     await console.log("Facility ID " + facEntID[0]);
//     await browser.wait(until.visibilityOf(crf.FILTER_DATA), 20000, 'Element taking too long time to be clickable in DOM')
//     await crf.FILTER_DATA.sendKeys(facEntID[0].toString());
//     await browser.sleep(1000);
// });

// Then('User should be able to see EAN filter as dropdown', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.DROPDOWNLIST), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.DROPDOWNLIST.isDisplayed().then(async function (result) {
//         await expect(true).to.equal(result);
//     });
// });
// Then('User should be able to enter value under EAN filter', async function () {
//     let query = TestData.userData.OracleQuery.Ean;
//     var ean: string[] = await getInformationFromDB(query);
//     await console.log("EAN  " + ean[0]);
//     await browser.wait(until.visibilityOf(crf.FILTER_DATA), 20000, 'Element taking too long time to be clickable in DOM')
//     await crf.FILTER_DATA.sendKeys(ean[0].toString());
//     await browser.sleep(1000);
// });

// When('User clear all Hierarchy filter', async function () {

//     await browser.sleep(2000);
//     await CLRObj.GLOBAL_ENTITY_ID.clear();
//     await browser.sleep(2000);
//     await CLRObj.COUNTRY_ID.clear();
//     await browser.sleep(2000);
//     await CLRObj.FACLITY_ID.clear();
//     await browser.sleep(2000);
//     await CLRObj.EAN.clear();
//     await browser.sleep(2000);

// });

// When('User changes Global ID value', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.GLOBAL_ENTITY_ID), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.GLOBAL_ENTITY_ID.click();
//     await browser.sleep(1000);
//     await CLRObj.GLOBAL_ENTITY_ID.sendKeys(TestData.userData.TestData.GloChangeID);
//     await browser.wait(until.visibilityOf(CLRObj.SELECTED_GLOBAL_ID), 20000, 'Element taking too long to be clickable in DOM');
//     let GlobalID = await CLRObj.SELECTED_GLOBAL_ID.getText();
//     await browser.sleep(1000);
//     await console.log("Selected Global Entity ID is :" + GlobalID);
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.SELECTED_GLOBAL_ID), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.SELECTED_GLOBAL_ID.click();
//     await browser.sleep(1000);
// });
// Then('User should see Country ID, Facility ID, EAN values are refreshed and changed as per hierarchy', async function () {
//     await CLRObj.GLOBAL_ENTITY_ID.getAttribute("value").then(async function (Globalid) {
//         await browser.wait(until.elementToBeClickable(CLRObj.COUNTRY_ID), 20000, 'Element taking too long to be clickable in DOM');
//         await CLRObj.COUNTRY_ID.click();
//         await browser.sleep(1000);
//         await browser.wait(until.visibilityOf(CLRObj.SELECTED_CNTRY), 20000, 'Element taking too long to be clickable in DOM');
//         let CountryID = await CLRObj.SELECTED_CNTRY.getText();
//         await browser.wait(until.elementToBeClickable(CLRObj.SELECTED_CNTRY), 20000, 'Element taking too long to be clickable in DOM');
//         await CLRObj.SELECTED_CNTRY.click();
//         await browser.sleep(1000);

//         let query = "select distinct CTRY_ENT_NBR from mia_report_filter where GLOB_ENT_NBR='" + Globalid + "'";
//         var resdata: string[] = await getInformationFromDB(query);
//         await console.log("GUI Country ID: " + CountryID);
//         await console.log("DB Country ID: " + resdata);
//         await expect(CountryID.toString()).to.equal(resdata.toString());

//     });
//     await CLRObj.COUNTRY_ID.getAttribute("value").then(async function (Countryid) {
//         await browser.wait(until.elementToBeClickable(CLRObj.FACLITY_ID), 20000, 'Element taking too long to be clickable in DOM');
//         await CLRObj.FACLITY_ID.click();
//         await browser.sleep(1000);
//         await browser.wait(until.visibilityOf(CLRObj.SELECTED_FACILITY), 20000, 'Element taking too long to be clickable in DOM');
//         let FacilityID = await CLRObj.SELECTED_FACILITY.getText();
//         await browser.wait(until.elementToBeClickable(CLRObj.SELECTED_FACILITY), 20000, 'Element taking too long to be clickable in DOM');
//         await CLRObj.SELECTED_FACILITY.click();
//         await browser.sleep(1000);

//         let query = "select distinct FAC_ENTI_NBR from mia_report_filter where CTRY_ENT_NBR='" + Countryid + "'";
//         var resdata: string[] = await getInformationFromDB(query);
//         await console.log("GUI Facility ID : " + FacilityID);
//         await console.log("DB Facility ID : " + resdata);
//         await expect(FacilityID.toString()).to.equal(resdata.toString());
//     });

//     await CLRObj.FACLITY_ID.getAttribute("value").then(async function (Facilityid) {
//         await browser.wait(until.elementToBeClickable(CLRObj.EAN), 20000, 'Element taking too long to be clickable in DOM');
//         await CLRObj.EAN.click();
//         await browser.sleep(1000);
//         await browser.wait(until.visibilityOf(CLRObj.SELECTED_EAN), 20000, 'Element taking too long to be clickable in DOM');
//         let EANID = await CLRObj.SELECTED_EAN.getText();
//         await browser.wait(until.elementToBeClickable(CLRObj.SELECTED_EAN), 20000, 'Element taking too long to be clickable in DOM');
//         await CLRObj.SELECTED_EAN.click();
//         await browser.sleep(1000);

//         let query = "select distinct ENT_ACCT_NBR from mia_report_filter where FAC_ENTI_NBR='" + Facilityid + "'";
//         var resdata: string[] = await getInformationFromDB(query);

//         await console.log("GUI EAN ID : " + EANID);
//         await console.log("DB EAN ID : " + resdata);

//         expect(EANID.toString()).to.equal(resdata.toString());

//     });
//     await browser.wait(until.elementToBeClickable(CLRObj.SHOW_FILTER_CUST_CLS), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.SHOW_FILTER_CUST_CLS.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.RESET), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.RESET.click();
//     await browser.sleep(1000);
// });
// When('User will click on Country filter and enter invalid inputs into Country filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.COUNTRY), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.COUNTRY.click();
//     await CLRObj.COUNTRY.sendKeys(TestData.userData.TestData.InvalidData);
//     await browser.sleep(1000);
// });
// Then('User should able to clear invalid inputs using click on X-Button into Country filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.COUNTRY_CLS), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.COUNTRY_CLS.click();
//     await browser.sleep(1000);
// });
// When('User will click on Sales Territory filter and enter invalid inputs into Sales Territory filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.SALESTERRITORY), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.SALESTERRITORY.click();
//     await CLRObj.SALESTERRITORY.sendKeys(TestData.userData.TestData.InvalidData);
//     await browser.sleep(1000);
// });
// Then('User should able to clear invalid inputs using click on X-Button into Sales Territory filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.SALESTERRITORY_CLS), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.SALESTERRITORY_CLS.click();
//     await browser.sleep(1000);
// });

// When('User will click on Status filter and enter invalid inputs into Status filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.STATUS), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.STATUS.click();
//     await CLRObj.STATUS.sendKeys(TestData.userData.TestData.InvalidData);
//     await browser.sleep(1000);
// });
// Then('User should able to clear invalid inputs using click on X-Button into Status filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.STATUS_FILTER_CLS), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.STATUS_FILTER_CLS.click();
//     await browser.sleep(1000);
// });
// When('User will click on Re-Rating Date filter and enter invalid inputs into Re-Rating Date filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.RE_RATING_DAT), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.RE_RATING_DAT.click();
//     await CLRObj.RE_RATING_DAT.sendKeys(TestData.userData.TestData.InvalidReRatDate);
//     await browser.sleep(1000);
// });
// Then('User should able to clear invalid inputs using click on X-Button into Re-Rating Date filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.RE_RATING_DATE_CLS), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.RE_RATING_DATE_CLS.click();
//     await browser.sleep(1000);
// });

// When('User will click on Segmentation filter and enter invalid inputs into Segmentation filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.SEGMANTATION), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.SEGMANTATION.click();
//     await CLRObj.SEGMANTATION.sendKeys(TestData.userData.TestData.InvalidData);
//     await browser.sleep(1000);
// });
// Then('User should able to clear invalid inputs using click on X-Button into Segmentation filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.SEGMANTATION_CLS), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.SEGMANTATION_CLS.click();
//     await browser.sleep(1000);
// });
// When('User will click on Global Entity ID filter and enter invalid inputs into Global Entity ID filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.GLOBAL_ENTITY_ID), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.GLOBAL_ENTITY_ID.click();
//     await browser.sleep(1000);
//     await CLRObj.GLOBAL_ENTITY_ID.sendKeys(TestData.userData.TestData.InvalidVerticalID);
//     await browser.sleep(1000);
// });
// Then('User should see X-Button into Global Entity ID filter', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.GLOBAL_ID_CLS), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.GLOBAL_ID_CLS.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
// });

// When('User will click on Country ID filter and enter invalid inputs into Country ID filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.COUNTRY_ID), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.COUNTRY_ID.click();
//     await CLRObj.COUNTRY_ID.sendKeys(TestData.userData.TestData.InvalidVerticalID);
//     await browser.sleep(1000);
// });
// Then('User should see X-Button into Country ID filter', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.COUNTRY_ID_CLS), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.COUNTRY_ID_CLS.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
// });

// When('User will click on Facility ID filter and enter invalid inputs into Facility ID filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.FACLITY_ID), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.FACLITY_ID.click();
//     await CLRObj.FACLITY_ID.sendKeys(TestData.userData.TestData.InvalidVerticalID);
//     await browser.sleep(1000);
// });
// Then('User should see X-Button into Facility ID filter', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.FACLITY_ID_CLS), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.FACLITY_ID_CLS.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
// });

// When('User will click on EAN filter and enter invalid inputs into EAN filter', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.EAN), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.EAN.click();
//     await CLRObj.EAN.sendKeys(TestData.userData.TestData.InvalidVerticalID);
//     await browser.sleep(1000);
// });
// Then('User should see X-Button into EAN filter', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.EAN_CLS), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.EAN_CLS.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
// });
// Then('User click on show hierarchy filter left arrow', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.SHOW_FILTER_CUST_CLS), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.SHOW_FILTER_CUST_CLS.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.RESET), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.RESET.click();
//     await browser.sleep(1000);
// });
// When('User click on Additional columns in view-1 and selects few checkboxes from the list', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.AddColsView1), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.AddColsView1.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.VarPerProductDir), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.VarPerProductDir.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.OldRevPerProductDir), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.OldRevPerProductDir.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.NewRevPerProductDir), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NewRevPerProductDir.click();
//     await browser.sleep(1000);
// });
// Then('User should able to see only nine checkboxes are enable at a time', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.NewRevPerProductDir), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NewRevPerProductDir.isEnabled().then(async function (enabled) {
//         expect(true).to.equal(enabled.valueOf());
//         await console.log("Nine checkboxes are enable at a time: " + enabled);
//     });
//     await browser.sleep(2000);
// });
// Then('Other than nine checkboxes should be disabled', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.VarPerProductTotal), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.VarPerProductTotal.getAttribute("aria-disabled").then(async function (disabled) {
//         await expect('true').to.equal(disabled);
//         await console.log("checkboxes are disabled : " + disabled);
//     });
//     await browser.wait(until.visibilityOf(CLRObj.OldRevPerProductTotal), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.OldRevPerProductTotal.getAttribute("aria-disabled").then(async function (disabled) {
//         await expect('true').to.equal(disabled);
//         await console.log("checkboxes are disabled : " + disabled);
//     });

//     await browser.wait(until.visibilityOf(CLRObj.NewRevPerProductTotal), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NewRevPerProductTotal.getAttribute("aria-disabled").then(async function (disabled) {
//         await expect('true').to.equal(disabled);
//         await console.log("checkboxes are disabled : " + disabled);
//     });
// });
// When('User uncheck first three checkboxes and check all remaining checkboxes from the list', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.TotalShipment), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.TotalShipment.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.TotalRatedWeight), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.TotalRatedWeight.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.OldRevenue), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.OldRevenue.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.VarPerProductTotal), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.VarPerProductTotal.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.OldRevPerProductTotal), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.OldRevPerProductTotal.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.NewRevPerProductTotal), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NewRevPerProductTotal.click();
//     await browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
//     await browser.sleep(1000);
// });
// Then('User should able to see Additional columns headers for View-1', async function () {
//     await CLRObj.ExporColHeader.all(by.tagName("input")).then(async function (ColHeader) {
//         console.log(await ColHeader.length);
//         browser.sleep(2000);
//         let Headers: string[] = ['NEW REVENUE', ' REVENUE VARIANCE', '%VARIANCE', 'Var%Product/Dir', 'OldRev%Product/Dir', 'NewRev%Product/Dir', 'Var%Product/Total', 'OldRev%Product/Total', 'NewRev%Product/Total']
//         console.log(await Headers.length);
//         for (let j = 0; j < Headers.length; j++) {
//             console.log(await Headers[j]);
//         }
//         for (let i = 1; i <= ColHeader.length; i++) {
//             ColHeader[i - 1].getAttribute("placeholder").then(async function (text) {
//                 await console.log(await text);
//                 await expect(Headers[i - 1]).to.contains(text);
//                 console.log(await expect(Headers[i - 1]).to.contains(text));
//             });
//         };
//     });
// });
// When('User click on Additional columns in view-2 and selects few checkboxes from the list', async function () {
//     // browser.ignoreSynchronization = false;
//     // let webElement = await CLRObj.AddColsView2;
//     // //await browser.executeScript(webElement.scrollIntoView(true));
//     // await browser.executeScript('arguments[0].scrollIntoView()', webElement);
//     // //await browser.actions().mouseMove(webElement).perform();
//     await browser.sleep(1000);
//     await browser.wait(until.visibilityOf(CLRObj.AddColsView2), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.AddColsView2.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.VarPerWBProductDir), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.VarPerWBProductDir.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.OldRevPerWBProductDir), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.OldRevPerWBProductDir.click();
//     await browser.sleep(1000);
// });
// Then('User should able to see only eight checkboxes are enable at a time', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.OldRevPerWBProductDir), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.OldRevPerWBProductDir.isEnabled().then(async function (enabled) {
//         expect(true).to.equal(enabled.valueOf());
//         await console.log("Eight checkboxes are enable at a time: " + enabled);
//     });
//     await browser.sleep(2000);
// });
// Then('Other than eight checkboxes should be disabled', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.NewRevPerWBProductDir), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NewRevPerWBProductDir.getAttribute("aria-disabled").then(async function (disabled) {
//         await expect('true').to.equal(disabled);
//         await console.log("checkboxes are disabled : " + disabled);
//     });
//     await browser.wait(until.visibilityOf(CLRObj.VarPerWBProductTotal), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.VarPerWBProductTotal.getAttribute("aria-disabled").then(async function (disabled) {
//         await expect('true').to.equal(disabled);
//         await console.log("checkboxes are disabled : " + disabled);
//     });
//     await browser.wait(until.visibilityOf(CLRObj.OldRevPerWBProductTotal), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.OldRevPerWBProductTotal.getAttribute("aria-disabled").then(async function (disabled) {
//         await expect('true').to.equal(disabled);
//         await console.log("checkboxes are disabled : " + disabled);
//     });
//     await browser.wait(until.visibilityOf(CLRObj.NewRevPerWBProductTotal), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NewRevPerWBProductTotal.getAttribute("aria-disabled").then(async function (disabled) {
//         await expect('true').to.equal(disabled);
//         await console.log("checkboxes are disabled : " + disabled);
//     });
// });
// When('User uncheck default selected checkboxes and check all remaining new checkboxes from the list', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.TotalShipmentV2), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.TotalShipmentV2.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.TotalRatedWeightV2), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.TotalRatedWeightV2.click();
//     await browser.sleep(2000);
//     await browser.wait(until.elementToBeClickable(CLRObj.NewRevPerWBProductDir), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NewRevPerWBProductDir.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.VarPerWBProductTotal), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.VarPerWBProductTotal.click();
//     await browser.sleep(2000);
//     await browser.wait(until.elementToBeClickable(CLRObj.OldRevenueV2), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.OldRevenueV2.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.NewRevenueV2), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NewRevenueV2.click();
//     await browser.sleep(2000);
//     await browser.wait(until.elementToBeClickable(CLRObj.OldRevPerWBProductTotal), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.OldRevPerWBProductTotal.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.NewRevPerWBProductTotal), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NewRevPerWBProductTotal.click();
//     await browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
//     await browser.sleep(1000);
// });
// Then('User should able to see Additional columns headers for View-2', async function () {
//     await CLRObj.ExporColHeader.all(by.tagName("input")).then(async function (ColHeader) {

//         console.log(await ColHeader.length);
//         browser.sleep(2000);
//         let Headers: string[] = ['Var%WEIGHT BREAK/DIR', 'OldRev%WEIGHT BREAK/DIR', 'NewRev%WEIGHT BREAK/DIR', 'Var%WEIGHT BREAK/TOTAL', 'OldRev%WEIGHT BREAK/TOTAL', 'NewRev%WEIGHT BREAK/TOTAL']
//         console.log(await Headers.length);
//         for (let j = 0; j < Headers.length; j++) {
//             console.log(await Headers[j]);
//         }
//         for (let i = 1; i <= ColHeader.length; i++) {
//             ColHeader[i - 1].getAttribute("placeholder").then(async function (text) {
//                 await console.log(await text);
//                 await expect(Headers[i - 1]).to.contains(text);
//                 console.log(await expect(Headers[i - 1]).to.contains(text));
//             });
//         };
//     });
// });
// Then('User should see the tooltips for VarProductDir in View two report', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.VarProductDirV2).perform();
//     await browser.wait(until.visibilityOf(CLRObj.VarProductDirV2), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.VarProductDirV2.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
//     let VarProductDirV2Msg = await CLRObj.VarProductDirV2.getAttribute("mattooltip");
//     await console.log("var%Product/Dir Tooltip msg is :" + VarProductDirV2Msg);
//     await expect(VarProductDirV2Msg).to.equal("= (Revenue Variance/New Revenue Export Total)*100 ");
//     await browser.sleep(1000);
// });
// Then('User should see the tooltips for OldRevProductDir in View two report', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.OldRevProductDirV2).perform();
//     await browser.wait(until.visibilityOf(CLRObj.OldRevProductDirV2), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.OldRevProductDirV2.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
//     let OldRevProductDirV2Msg = await CLRObj.OldRevProductDirV2.getAttribute("mattooltip");
//     await console.log("OldRev%Product/Dir Tooltip msg is :" + OldRevProductDirV2Msg);
//     await expect(OldRevProductDirV2Msg).to.equal("= (Old Revenue/Old Revenue Export Total)*100 ");
//     await browser.sleep(1000);
// });
// Then('User should see the tooltips for NewRevProductDir in View two report', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.NewRevProductDirV2).perform();
//     await browser.wait(until.visibilityOf(CLRObj.NewRevProductDirV2), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.NewRevProductDirV2.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
//     let NewRevProductDirV2Msg = await CLRObj.NewRevProductDirV2.getAttribute("mattooltip");
//     await console.log("NewRev%Product/Dir Tooltip msg is :" + NewRevProductDirV2Msg);
//     await expect(NewRevProductDirV2Msg).to.equal("= (New Revenue/New Revenue Export Total)*100 ");
//     await browser.sleep(1000);
// });
// Then('User should see the tooltips for VarProductTotal in View two report', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.VarProductTotalV2).perform();
//     await browser.wait(until.visibilityOf(CLRObj.VarProductTotalV2), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.VarProductTotalV2.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
//     let VarProductTotalV2Msg = await CLRObj.VarProductTotalV2.getAttribute("mattooltip");
//     await console.log("var%Product/TotalTooltip msg is :" + VarProductTotalV2Msg);
//     await expect(VarProductTotalV2Msg).to.equal("= (Revenue Variance/New Revenue Grand Total)*100");
//     await browser.sleep(1000);
// });
// Then('User should see the tooltips for OldRevProductTotal in View two report', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.OldRevProductTotalV2).perform();
//     await browser.wait(until.visibilityOf(CLRObj.OldRevProductTotalV2), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.OldRevProductTotalV2.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
//     let OldRevProductTotalV2Msg = await CLRObj.OldRevProductTotalV2.getAttribute("mattooltip");
//     await console.log("OldRev%Product/TotalTooltip msg is :" + OldRevProductTotalV2Msg);
//     await expect(OldRevProductTotalV2Msg).to.equal("= (Old Revenue/ Old Revenue Grand Total)*100");
//     await browser.sleep(1000);
// });
// Then('User should see the tooltips for NewRevProductTotal in View two report', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.NewRevProductTotalV2).perform();
//     await browser.wait(until.visibilityOf(CLRObj.NewRevProductTotalV2), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.NewRevProductTotalV2.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
//     let NewRevProductTotalV2Msg = await CLRObj.NewRevProductTotalV2.getAttribute("mattooltip");
//     await console.log("NewRev%Product/TotalTooltip msg is :" + NewRevProductTotalV2Msg);
//     await expect(NewRevProductTotalV2Msg).to.equal("= (New Revenue/New Revenue Grand Total)*100");
//     await browser.sleep(1000);
// });
// When('User click on Additional columns in view-3 and selects few checkboxes from the list', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.AddColsView3), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.AddColsView3.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.VarPerCtryProductDir), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.VarPerCtryProductDir.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.OldRevPerCtryProductDir), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.OldRevPerCtryProductDir.click();
//     await browser.sleep(1000);
// });
// Then('User should able to see only eight checkboxes are enable at a time in view-3', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.OldRevPerCtryProductDir), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.OldRevPerCtryProductDir.isEnabled().then(async function (enabled) {
//         expect(true).to.equal(enabled.valueOf());
//         await console.log("Eight checkboxes are enable at a time: " + enabled);
//     });
//     await browser.sleep(2000);
// });
// Then('Other than eight checkboxes should be disabled in view-3', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.NewRevPerCtryProductDir), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NewRevPerCtryProductDir.getAttribute("aria-disabled").then(async function (disabled) {
//         await expect('true').to.equal(disabled);
//         await console.log("checkboxes are disabled : " + disabled);
//     });
//     await browser.wait(until.visibilityOf(CLRObj.VarPerCtryProductTotal), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.VarPerCtryProductTotal.getAttribute("aria-disabled").then(async function (disabled) {
//         await expect('true').to.equal(disabled);
//         await console.log("checkboxes are disabled : " + disabled);
//     });
//     await browser.wait(until.visibilityOf(CLRObj.OldRevPerCtryProductTotal), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.OldRevPerCtryProductTotal.getAttribute("aria-disabled").then(async function (disabled) {
//         await expect('true').to.equal(disabled);
//         await console.log("checkboxes are disabled : " + disabled);
//     });
//     await browser.wait(until.visibilityOf(CLRObj.NewRevPerCtryProductTotal), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NewRevPerCtryProductTotal.getAttribute("aria-disabled").then(async function (disabled) {
//         await expect('true').to.equal(disabled);
//         await console.log("checkboxes are disabled : " + disabled);
//     });
// });
// When('User uncheck default selected checkboxes and check all remaining new checkboxes from the list in view-3', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.TotalShipmentV3), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.TotalShipmentV3.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.TotalRatedWeightV3), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.TotalRatedWeightV3.click();
//     await browser.sleep(2000);
//     await browser.wait(until.elementToBeClickable(CLRObj.NewRevPerCtryProductDir), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NewRevPerCtryProductDir.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.VarPerCtryProductTotal), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.VarPerCtryProductTotal.click();
//     await browser.sleep(2000);
//     await browser.wait(until.elementToBeClickable(CLRObj.OldRevenueV3), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.OldRevenueV3.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.NewRevenueV3), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NewRevenueV3.click();
//     await browser.sleep(2000);
//     await browser.wait(until.elementToBeClickable(CLRObj.OldRevPerCtryProductTotal), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.OldRevPerCtryProductTotal.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.NewRevPerCtryProductTotal), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NewRevPerCtryProductTotal.click();
//     await browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
//     await browser.sleep(1000);
// });
// Then('User should able to see Additional columns headers for View-3', async function () {
//     await CLRObj.ExporColHeader.all(by.tagName("input")).then(async function (ColHeader) {

//         console.log(await ColHeader.length);
//         browser.sleep(2000);
//         let Headers: string[] = ['VAR%COUNTRY/DIR', 'OLDREV%COUNTRY/DIR', 'NEWREV%COUNTRY/DIR', 'VAR%COUNTRY/TOTAL', 'OLDREV%COUNTRY/TOTAL', 'NEWREV%COUNTRY/TOTAL']
//         console.log(await Headers.length);
//         for (let j = 0; j < Headers.length; j++) {
//             console.log(await Headers[j]);
//         }
//         for (let i = 1; i <= ColHeader.length; i++) {
//             ColHeader[i - 1].getAttribute("placeholder").then(async function (text) {
//                 await console.log(await text);
//                 await expect(Headers[i - 1]).to.contains(text);
//                 console.log(await expect(Headers[i - 1]).to.contains(text));
//             });
//         };
//     });
// });
// Then('User should see the tooltips for VarProductDir in View three report', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.VarProductDirV3).perform();
//     await browser.wait(until.visibilityOf(CLRObj.VarProductDirV3), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.VarProductDirV3.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
//     let VarProductDirV3Msg = await CLRObj.VarProductDirV3.getAttribute("mattooltip");
//     await console.log("var%Product/Dir Tooltip msg is :" + VarProductDirV3Msg);
//     await expect(VarProductDirV3Msg).to.equal("= (Revenue Variance/New Revenue Export Total)*100 ");
//     await browser.sleep(1000);
// });
// Then('User should see the tooltips for OldRevProductDir in View three report', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.OldRevProductDirV3).perform();
//     await browser.wait(until.visibilityOf(CLRObj.OldRevProductDirV3), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.OldRevProductDirV3.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
//     let OldRevProductDirV3Msg = await CLRObj.OldRevProductDirV3.getAttribute("mattooltip");
//     await console.log("OldRev%Product/Dir Tooltip msg is :" + OldRevProductDirV3Msg);
//     await expect(OldRevProductDirV3Msg).to.equal("= (Old Revenue/Old Revenue Export Total)*100 ");
//     await browser.sleep(1000);
// });
// Then('User should see the tooltips for NewRevProductDir in View three report', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.NewRevProductDirV3).perform();
//     await browser.wait(until.visibilityOf(CLRObj.NewRevProductDirV3), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.NewRevProductDirV3.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
//     let NewRevProductDirV3Msg = await CLRObj.NewRevProductDirV3.getAttribute("mattooltip");
//     await console.log("NewRev%Product/Dir Tooltip msg is :" + NewRevProductDirV3Msg);
//     await expect(NewRevProductDirV3Msg).to.equal("= (New Revenue/New Revenue Export Total)*100 ");
//     await browser.sleep(1000);
// });
// Then('User should see the tooltips for VarProductTotal in View three report', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.VarProductTotalV3).perform();
//     await browser.wait(until.visibilityOf(CLRObj.VarProductTotalV3), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.VarProductTotalV3.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
//     let VarProductTotalV3Msg = await CLRObj.VarProductTotalV3.getAttribute("mattooltip");
//     await console.log("var%Product/TotalTooltip msg is :" + VarProductTotalV3Msg);
//     await expect(VarProductTotalV3Msg).to.equal("= (Revenue Variance/New Revenue Grand Total)*100");
//     await browser.sleep(1000);
// });
// Then('User should see the tooltips for OldRevProductTotal in View three report', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.OldRevProductTotalV3).perform();
//     await browser.wait(until.visibilityOf(CLRObj.OldRevProductTotalV3), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.OldRevProductTotalV3.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
//     let OldRevProductTotalV3Msg = await CLRObj.OldRevProductTotalV3.getAttribute("mattooltip");
//     await console.log("OldRev%Product/TotalTooltip msg is :" + OldRevProductTotalV3Msg);
//     await expect(OldRevProductTotalV3Msg).to.equal("= (Old Revenue/ Old Revenue Grand Total)*100");
//     await browser.sleep(1000);
// });
// Then('User should see the tooltips for NewRevProductTotal in View three report', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.NewRevProductTotalV3).perform();
//     await browser.wait(until.visibilityOf(CLRObj.NewRevProductTotalV3), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.NewRevProductTotalV3.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
//     let NewRevProductTotalV3Msg = await CLRObj.NewRevProductTotalV3.getAttribute("mattooltip");
//     await console.log("NewRev%Product/TotalTooltip msg is :" + NewRevProductTotalV3Msg);
//     await expect(NewRevProductTotalV3Msg).to.equal("= (New Revenue/New Revenue Grand Total)*100");
//     await browser.sleep(1000);
// });
// Then('User should see the tooltips for VarProductDir in View One report', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.VarProductDir).perform();
//     await browser.wait(until.visibilityOf(CLRObj.VarProductDir), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.VarProductDir.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
//     let VarProductDirMsg = await CLRObj.VarProductDir.getAttribute("mattooltip");
//     await console.log("var%Product/Dir Tooltip msg is :" + VarProductDirMsg);
//     await expect(VarProductDirMsg).to.equal("= (Revenue Variance/New Revenue Export Total)*100 ");
//     await browser.sleep(1000);
// });

// Then('User should see the tooltips for OldRevProductDir in View One report', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.OldRevProductDir).perform();
//     await browser.wait(until.visibilityOf(CLRObj.OldRevProductDir), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.OldRevProductDir.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
//     let OldRevProductDirMsg = await CLRObj.OldRevProductDir.getAttribute("mattooltip");
//     await console.log("OldRev%Product/Dir Tooltip msg is :" + OldRevProductDirMsg);
//     await expect(OldRevProductDirMsg).to.equal("= (Old Revenue/Old Revenue Export Total)*100 ");
//     await browser.sleep(1000);
// });
// Then('User should see the tooltips for NewRevProductDir in View One report', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.NewRevProductDir).perform();
//     await browser.wait(until.visibilityOf(CLRObj.NewRevProductDir), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.NewRevProductDir.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
//     let NewRevProductDirMsg = await CLRObj.NewRevProductDir.getAttribute("mattooltip");
//     await console.log("NewRev%Product/Dir Tooltip msg is :" + NewRevProductDirMsg);
//     await expect(NewRevProductDirMsg).to.equal("= (New Revenue/New Revenue Export Total)*100 ");
//     await browser.sleep(1000);
// });
// Then('User should see the tooltips for VarProductTotal in View One report', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.VarProductTotal).perform();
//     await browser.wait(until.visibilityOf(CLRObj.VarProductTotal), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.VarProductTotal.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
//     let VarProductTotalMsg = await CLRObj.VarProductTotal.getAttribute("mattooltip");
//     await console.log("var%Product/TotalTooltip msg is :" + VarProductTotalMsg);
//     await expect(VarProductTotalMsg).to.equal("= (Revenue Variance/New Revenue Grand Total)*100");
//     await browser.sleep(1000);
// });
// Then('User should see the tooltips for OldRevProductTotal in View One report', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.OldRevProductTotal).perform();
//     await browser.wait(until.visibilityOf(CLRObj.OldRevProductTotal), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.OldRevProductTotal.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
//     let OldRevProductTotalMsg = await CLRObj.OldRevProductTotal.getAttribute("mattooltip");
//     await console.log("OldRev%Product/TotalTooltip msg is :" + OldRevProductTotalMsg);
//     await expect(OldRevProductTotalMsg).to.equal("= (Old Revenue/ Old Revenue Grand Total)*100");
//     await browser.sleep(1000);
// });
// Then('User should see the tooltips for NewRevProductTotal in View One report', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.NewRevProductTotal).perform();
//     await browser.wait(until.visibilityOf(CLRObj.NewRevProductTotal), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.NewRevProductTotal.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.sleep(1000);
//     let NewRevProductTotalMsg = await CLRObj.NewRevProductTotal.getAttribute("mattooltip");
//     await console.log("NewRev%Product/TotalTooltip msg is :" + NewRevProductTotalMsg);
//     await expect(NewRevProductTotalMsg).to.equal("= (New Revenue/New Revenue Grand Total)*100");
//     await browser.sleep(1000);
// });
// Then('User should able to see Default Export Table', async function () {
//     let rowcount = await CLRObj.EXPORT_TABLE_Row.all(by.tagName("tr")).count();
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Exp Row Count UI " + rowcount);
//     await console.log("Exp Col Count UI " + colcount);

//     let query = TestData.userData.OracleQuery.DefaultExportQuery;

//     var exportTableDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + exportTableDBData);
//     await console.log("Exp Row Count DB " + exportTableDBData.length);
//     await console.log("Exp Col Count DB " + exportTableDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let exportTableUIData = await element(by.xpath("//*[@id='protract-export-tbl']/tbody/tr[" + i + "]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-export-tbl']/tbody/tr[" + i + "]/td[" + j + "]"));
//             await console.log("UI data " + exportTableUIData);
//             await console.log("DB data " + exportTableDBData[i - 1][j - 1]);
//             if ((exportTableDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = exportTableDBData[i - 1][j - 1];
//                 decimalvalue = Number(exportTableDBData[i - 1][j - 1]).toFixed(2).trim();
//                 isCheck = 1;
//             }
//             if (exportTableUIData.length == 1) {
//                 if (exportTableUIData.toString().includes("-")) {
//                     exportTableUIData = exportTableUIData.replace("-", "0");
//                 }
//             }
//             if (exportTableUIData.toString().includes("-0.00")) {
//                 exportTableUIData = exportTableUIData.replace("-0.00", "0.00");
//             }
//             if ((exportTableDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if (exportTableUIData.toString().includes(",")) {
//                 exportTableUIData = exportTableUIData.replace(",", "");
//             }
//             if (exportTableUIData.toString().includes("$")) {

//                 exportTableUIData = exportTableUIData.replace("$", "");
//             }
//             if (exportTableUIData.toString().includes("%")) {

//                 exportTableUIData = exportTableUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(exportTableUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (exportTableUIData.toString().includes(".00")) {

//                 exportTableUIData = exportTableUIData.replace(".00", "");
//             }
//             else {
//                 await expect((exportTableDBData[i - 1][j - 1]).toString()).to.equals((exportTableUIData.trim()));
//             }
//             await expect((exportTableDBData[i - 1][j - 1]).toString()).to.equals((exportTableUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('User should able to see Export service total', async function () {
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Total Row Count UI " + rowcount);
//     await console.log("Total Col Count UI " + colcount);

//     let query = TestData.userData.OracleQuery.EXPTServiceTotal;

//     var EXPTServiceDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + EXPTServiceDBData);
//     await console.log("Total Row Count DB " + EXPTServiceDBData.length);
//     await console.log("Total Col Count DB " + EXPTServiceDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let EXPTServiceUIData = await element(by.xpath("//*[@id='protract-export-tbl']/tfoot/tr[1]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-export-tbl']/tfoot/tr[1]/td[" + j + "]"));
//             await console.log("UI data " + EXPTServiceUIData);
//             await console.log("DB data " + EXPTServiceDBData[i - 1][j - 1]);
//             if ((EXPTServiceDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = EXPTServiceDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(EXPTServiceDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (EXPTServiceUIData.length == 1) {
//                 if (EXPTServiceUIData.toString().includes("-")) {
//                     EXPTServiceUIData = EXPTServiceUIData.replace("-", "0");
//                 }
//             }
//             if ((EXPTServiceDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if (EXPTServiceUIData.toString().includes(",")) {
//                 EXPTServiceUIData = EXPTServiceUIData.replace(",", "");
//                 EXPTServiceUIData = EXPTServiceUIData.replace(",", "");
//             }
//             else {
//                 if (EXPTServiceUIData.toString().includes("$")) {

//                     EXPTServiceUIData = EXPTServiceUIData.replace("$", "");
//                 }
//                 else {
//                     if (EXPTServiceUIData.toString().includes("%")) {

//                         EXPTServiceUIData = EXPTServiceUIData.replace("%", "");
//                         //await expect(EXPTServiceUIData.trim()).to.equals((EXPTServiceDBData[i - 1][j - 1]).toString());
//                         await expect(EXPTServiceUIData.toString().trim()).to.equals(Number(EXPTServiceDBData[i - 1][j - 1]).toFixed(2).trim());
//                     }
//                 }
//             }
//             if (EXPTServiceUIData.toString().includes("$")) {

//                 EXPTServiceUIData = EXPTServiceUIData.replace("$", "");
//             }
//             if (EXPTServiceUIData.toString().includes("%")) {

//                 EXPTServiceUIData = EXPTServiceUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(EXPTServiceUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (EXPTServiceUIData.toString().includes(".00")) {

//                 EXPTServiceUIData = EXPTServiceUIData.replace(".00", "");
//             }
//             else {
//                 await expect((EXPTServiceDBData[i - 1][j - 1]).toString()).to.equals((EXPTServiceUIData.trim()));
//             }
//             await expect((EXPTServiceDBData[i - 1][j - 1]).toString()).to.equals((EXPTServiceUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('User should able to see Export Direction total', async function () {
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Export Total Row Count UI " + rowcount);
//     await console.log("Export Total Count UI " + colcount);

//     let query = TestData.userData.OracleQuery.EXPTDirectionTotal;

//     var exportTotalDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + exportTotalDBData);
//     await console.log("Export Total Row Count DB " + exportTotalDBData.length);
//     await console.log("Export Total col Count DB " + exportTotalDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let exportTotalUIData = await element(by.xpath("//*[@id='protract-export-tbl']/tfoot/tr[4]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-export-tbl']/tfoot/tr[4]/td[" + j + "]"));
//             await console.log("UI data " + exportTotalUIData);
//             await console.log("DB data " + exportTotalDBData[i - 1][j - 1]);
//             if ((exportTotalDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = exportTotalDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(exportTotalDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (exportTotalUIData.length == 1) {
//                 if (exportTotalUIData.toString().includes("-")) {
//                     exportTotalUIData = exportTotalUIData.replace("-", "0");
//                 }
//             }
//             if ((exportTotalDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if (exportTotalUIData.toString().includes(",")) {
//                 exportTotalUIData = exportTotalUIData.replace(",", "");
//                 exportTotalUIData = exportTotalUIData.replace(",", "");
//             }
//             else {
//                 if (exportTotalUIData.toString().includes("$")) {

//                     exportTotalUIData = exportTotalUIData.replace("$", "");
//                 }
//                 else {
//                     if (exportTotalUIData.toString().includes("%")) {

//                         exportTotalUIData = exportTotalUIData.replace("%", "");
//                         await expect(exportTotalUIData.trim()).to.equals(Number(exportTotalDBData[i - 1][j - 1]).toFixed(2).trim());
//                     }
//                 }
//             }
//             if (exportTotalUIData.toString().includes("$")) {

//                 exportTotalUIData = exportTotalUIData.replace("$", "");
//             }
//             if (exportTotalUIData.toString().includes("%")) {

//                 exportTotalUIData = exportTotalUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(exportTotalUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (exportTotalUIData.toString().includes(".00")) {

//                 exportTotalUIData = exportTotalUIData.replace(".00", "");
//             }
//             else {
//                 await expect((exportTotalDBData[i - 1][j - 1]).toString()).to.equals((exportTotalUIData.trim()));
//             }
//             await expect((exportTotalDBData[i - 1][j - 1]).toString()).to.equals((exportTotalUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('User should able to see Default Import Table', async function () {
//     let rowcount = await CLRObj.IMPORT_TABLE_Row.all(by.tagName("tr")).count();
//     let colcount = await CLRObj.ImportRowHeader.all(by.tagName("th")).count();

//     await console.log("IMPT Row Count UI " + rowcount);
//     await console.log("IMPT Col Count UI " + colcount);

//     let query = TestData.userData.OracleQuery.DefaultImportQuery;

//     var importTableDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + importTableDBData);
//     await console.log("IMPT Row Count DB " + importTableDBData.length);
//     await console.log("IMPT Col Count DB " + importTableDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let importTableUIData = await element(by.xpath("//*[@id='protract-import-tbl']/tbody/tr[" + i + "]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-import-tbl']/tbody/tr[" + i + "]/td[" + j + "]"));
//             await console.log("UI data " + importTableUIData);
//             await console.log("DB data " + importTableDBData[i - 1][j - 1]);
//             if ((importTableDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((importTableDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = importTableDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(importTableDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (importTableUIData.length == 1) {
//                 if (importTableUIData.toString().includes("-")) {
//                     importTableUIData = importTableUIData.replace("-", "0");
//                 }
//             }
//             if (importTableUIData.toString().includes(",")) {
//                 importTableUIData = importTableUIData.replace(",", "");
//             }
//             if (importTableUIData.toString().includes(".")) {
//                 var length = importTableUIData.toString().split(".")[1].length;
//                 if (length == 1) {
//                     importTableUIData = importTableUIData.toString() + "0";
//                 }
//             }
//             else {
//                 if (importTableUIData.toString().includes("$")) {

//                     importTableUIData = importTableUIData.replace("$", "");
//                 }
//                 else {
//                     if (importTableUIData.toString().includes("%")) {

//                         importTableUIData = importTableUIData.replace("%", "");
//                         await expect(importTableUIData.trim()).to.equals((importTableDBData[i - 1][j - 1]).toString());
//                     }
//                 }
//             }
//             if (importTableUIData.toString().includes("$")) {

//                 importTableUIData = importTableUIData.replace("$", "");
//             }
//             if (importTableUIData.toString().includes("%")) {

//                 importTableUIData = importTableUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(importTableUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (importTableUIData.toString().includes(".00")) {

//                 importTableUIData = importTableUIData.replace(".00", "");
//             }
//             else {
//                 await expect((importTableDBData[i - 1][j - 1]).toString()).to.equals((importTableUIData.trim()));
//             }
//             await expect((importTableDBData[i - 1][j - 1]).toString()).to.equals((importTableUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });

// Then('User should able to see Import service total', async function () {
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Total Row Count UI " + rowcount);
//     await console.log("Total Col Count UI " + colcount);

//     let query = TestData.userData.OracleQuery.IMPTServiceTotal;

//     var iMPTServiceDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + iMPTServiceDBData);
//     await console.log("Total Row Count DB " + iMPTServiceDBData.length);
//     await console.log("Total Col Count DB " + iMPTServiceDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let tHPTServiceUIData = await element(by.xpath("//*[@id='protract-import-tbl']/tfoot/tr[1]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-import-tbl']/tfoot/tr[1]/td[" + j + "]"));
//             await console.log("UI data " + tHPTServiceUIData);
//             await console.log("DB data " + iMPTServiceDBData[i - 1][j - 1]);
//             if ((iMPTServiceDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = iMPTServiceDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(iMPTServiceDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (tHPTServiceUIData.length == 1) {
//                 if (tHPTServiceUIData.toString().includes("-")) {
//                     tHPTServiceUIData = tHPTServiceUIData.replace("-", "0");
//                 }
//             }
//             if ((iMPTServiceDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if (tHPTServiceUIData.toString().includes(",")) {
//                 tHPTServiceUIData = tHPTServiceUIData.replace(",", "");
//                 tHPTServiceUIData = tHPTServiceUIData.replace(",", "");
//             }
//             else {
//                 if (tHPTServiceUIData.toString().includes("$")) {

//                     tHPTServiceUIData = tHPTServiceUIData.replace("$", "");
//                 }
//                 else {
//                     if (tHPTServiceUIData.toString().includes("%")) {

//                         tHPTServiceUIData = tHPTServiceUIData.replace("%", "");
//                         //await expect(tHPTServiceUIData.trim()).to.equals((iMPTServiceDBData[i - 1][j - 1]).toString());
//                     }
//                 }
//             }
//             if (tHPTServiceUIData.toString().includes("$")) {

//                 tHPTServiceUIData = tHPTServiceUIData.replace("$", "");
//             }
//             if (tHPTServiceUIData.toString().includes("%")) {

//                 tHPTServiceUIData = tHPTServiceUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(tHPTServiceUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (tHPTServiceUIData.toString().includes(".00")) {

//                 tHPTServiceUIData = tHPTServiceUIData.replace(".00", "");
//             }
//             else {
//                 await expect((iMPTServiceDBData[i - 1][j - 1]).toString()).to.equals((tHPTServiceUIData.trim()));
//             }
//             await expect((iMPTServiceDBData[i - 1][j - 1]).toString()).to.equals((tHPTServiceUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// })
// Then('User should able to see Import Direction total', async function () {
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Import Total Row Count UI " + rowcount);
//     await console.log("Import Total Count UI " + colcount);

//     let query = TestData.userData.OracleQuery.IMPTDirectionTotal;

//     var importTotalDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + importTotalDBData);
//     await console.log("Import Total Row Count DB " + importTotalDBData.length);
//     await console.log("Import Total col Count DB " + importTotalDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let importTotalUIData = await element(by.xpath("//*[@id='protract-import-tbl']/tfoot/tr[4]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-import-tbl']/tfoot/tr[4]/td[" + j + "]"));
//             await console.log("UI data " + importTotalUIData);
//             await console.log("DB data " + importTotalDBData[i - 1][j - 1]);
//             if ((importTotalDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = importTotalDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(importTotalDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (importTotalUIData.length == 1) {
//                 if (importTotalUIData.toString().includes("-")) {
//                     importTotalUIData = importTotalUIData.replace("-", "0");
//                 }
//             }
//             if ((importTotalDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if (importTotalUIData.toString().includes(",")) {
//                 importTotalUIData = importTotalUIData.replace(",", "");
//                 importTotalUIData = importTotalUIData.replace(",", "");
//             }
//             else {
//                 if (importTotalUIData.toString().includes("$")) {

//                     importTotalUIData = importTotalUIData.replace("$", "");
//                 }
//                 else {
//                     if (importTotalUIData.toString().includes("%")) {

//                         importTotalUIData = importTotalUIData.replace("%", "");
//                         //await expect(importTotalUIData.trim()).to.equals((importTotalDBData[i - 1][j - 1]).toString());
//                     }
//                 }
//             }
//             if (importTotalUIData.toString().includes("$")) {

//                 importTotalUIData = importTotalUIData.replace("$", "");
//             }
//             if (importTotalUIData.toString().includes("%")) {

//                 importTotalUIData = importTotalUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(importTotalUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (importTotalUIData.toString().includes(".00")) {

//                 importTotalUIData = importTotalUIData.replace(".00", "");
//             }
//             else {
//                 await expect((importTotalDBData[i - 1][j - 1]).toString()).to.equals((importTotalUIData.trim()));
//             }
//             await expect((importTotalDBData[i - 1][j - 1]).toString()).to.equals((importTotalUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('User should able to see Default Third Party Table', async function () {
//     let rowcount = await CLRObj.THPT_TABLE_Row.all(by.tagName("tr")).count();
//     let colcount = await CLRObj.THPTRowHeader.all(by.tagName("th")).count();

//     await console.log("THPT Row Count UI " + rowcount);
//     await console.log("THPT Col Count UI " + colcount);

//     let query = TestData.userData.OracleQuery.DefaultThirdPartyQuery;

//     var thptTableDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + thptTableDBData);
//     await console.log("THPT Row Count DB " + thptTableDBData.length);
//     await console.log("THPT Col Count DB " + thptTableDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let thptTableUIData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tbody/tr[" + i + "]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tbody/tr[" + i + "]/td[" + j + "]"));
//             await console.log("UI data " + thptTableUIData);
//             await console.log("DB data " + thptTableDBData[i - 1][j - 1]);

//             if (thptTableUIData.length == 1) {
//                 if (thptTableUIData.toString().includes("-")) {
//                     thptTableUIData = thptTableUIData.replace("-", "0");
//                 }
//             }
//             if ((thptTableDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((thptTableDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = thptTableDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(thptTableDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (thptTableUIData.toString().includes(",")) {
//                 thptTableUIData = thptTableUIData.replace(",", "");
//             }
//             else {
//                 if (thptTableUIData.toString().includes("$")) {

//                     thptTableUIData = thptTableUIData.replace("$", "");
//                 }
//                 else {
//                     if (thptTableUIData.toString().includes("%")) {

//                         thptTableUIData = thptTableUIData.replace("%", "");
//                         await expect(thptTableUIData.trim()).to.equals((thptTableDBData[i - 1][j - 1])).toString();
//                     }
//                 }
//             }
//             if (thptTableUIData.toString().includes("$")) {

//                 thptTableUIData = thptTableUIData.replace("$", "");
//             }
//             if (thptTableUIData.toString().includes("%")) {

//                 thptTableUIData = thptTableUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(thptTableUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (thptTableUIData.toString().includes(".00")) {

//                 thptTableUIData = thptTableUIData.replace(".00", "");
//             }

//             else {
//                 await expect((thptTableDBData[i - 1][j - 1]).toString()).to.equals((thptTableUIData.trim()));
//             }
//             await expect((thptTableDBData[i - 1][j - 1]).toString()).to.equals((thptTableUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('User should able to see Third Party service total', async function () {
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Total Row Count UI " + rowcount);
//     await console.log("Total Col Count UI " + colcount);

//     let query = TestData.userData.OracleQuery.THPTServiceTotal;

//     var tHPTServiceDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + tHPTServiceDBData);
//     await console.log("Total Row Count DB " + tHPTServiceDBData.length);
//     await console.log("Total Col Count DB " + tHPTServiceDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let tHPTServiceUIData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tfoot/tr[1]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tfoot/tr[1]/td[" + j + "]"));
//             await console.log("UI data " + tHPTServiceUIData);
//             await console.log("DB data " + tHPTServiceDBData[i - 1][j - 1]);

//             if (tHPTServiceUIData.length == 1) {
//                 if (tHPTServiceUIData.toString().includes("-")) {
//                     tHPTServiceUIData = tHPTServiceUIData.replace("-", "0");
//                 }
//             }
//             if ((tHPTServiceDBData[i - 1][j - 1]) == null) {
//                 await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }

//             if ((tHPTServiceDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = tHPTServiceDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(tHPTServiceDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (tHPTServiceUIData.toString().includes(",")) {
//                 tHPTServiceUIData = tHPTServiceUIData.replace(",", "");
//                 tHPTServiceUIData = tHPTServiceUIData.replace(",", "");
//             }
//             else {
//                 if (tHPTServiceUIData.toString().includes("$")) {

//                     tHPTServiceUIData = tHPTServiceUIData.replace("$", "");
//                 }
//                 else {
//                     if (tHPTServiceUIData.toString().includes("%")) {

//                         tHPTServiceUIData = tHPTServiceUIData.replace("%", "");
//                         await expect(tHPTServiceUIData.trim()).to.equals((tHPTServiceDBData[i - 1][j - 1]).toString());
//                     }
//                 }
//             }
//             if (tHPTServiceUIData.toString().includes("$")) {

//                 tHPTServiceUIData = tHPTServiceUIData.replace("$", "");
//             }
//             if (tHPTServiceUIData.toString().includes("%")) {

//                 tHPTServiceUIData = tHPTServiceUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(tHPTServiceUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (tHPTServiceUIData.toString().includes(".00")) {

//                 tHPTServiceUIData = tHPTServiceUIData.replace(".00", "");
//             }
//             else {
//                 await expect((tHPTServiceDBData[i - 1][j - 1]).toString()).to.equals((tHPTServiceUIData.trim()));
//             }
//             await expect((tHPTServiceDBData[i - 1][j - 1]).toString()).to.equals((tHPTServiceUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// })
// Then('User should able to see Third Party Direction total', async function () {
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Third Party Total Row Count UI " + rowcount);
//     await console.log("Third Party Total Count UI " + colcount);

//     let query = TestData.userData.OracleQuery.THPTDirectionTotal;

//     var tHPTTotalDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + tHPTTotalDBData);
//     await console.log("Third Party Total Row Count DB " + tHPTTotalDBData.length);
//     await console.log("Third Party Total col Count DB " + tHPTTotalDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let tHPTTotalUIData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tfoot/tr[4]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tfoot/tr[4]/td[" + j + "]"));
//             await console.log("UI data " + tHPTTotalUIData);
//             await console.log("DB data " + tHPTTotalDBData[i - 1][j - 1]);

//             if (tHPTTotalUIData.length == 1) {
//                 if (tHPTTotalUIData.toString().includes("-")) {
//                     tHPTTotalUIData = tHPTTotalUIData.replace("-", "0");
//                 }
//             }
//             if ((tHPTTotalDBData[i - 1][j - 1]) == null) {
//                 await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }

//             if ((tHPTTotalDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = tHPTTotalDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(tHPTTotalDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (tHPTTotalUIData.toString().includes(",")) {
//                 tHPTTotalUIData = tHPTTotalUIData.replace(",", "");
//                 tHPTTotalUIData = tHPTTotalUIData.replace(",", "");
//             }
//             else {
//                 if (tHPTTotalUIData.toString().includes("$")) {

//                     tHPTTotalUIData = tHPTTotalUIData.replace("$", "");
//                 }
//                 else {
//                     if (tHPTTotalUIData.toString().includes("%")) {

//                         tHPTTotalUIData = tHPTTotalUIData.replace("%", "");
//                         await expect(tHPTTotalUIData.trim()).to.equals((tHPTTotalDBData[i - 1][j - 1]).toString());
//                     }
//                 }
//             }
//             if (tHPTTotalUIData.toString().includes("$")) {

//                 tHPTTotalUIData = tHPTTotalUIData.replace("$", "");
//             }
//             if (tHPTTotalUIData.toString().includes("%")) {

//                 tHPTTotalUIData = tHPTTotalUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(tHPTTotalUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (tHPTTotalUIData.toString().includes(".00")) {

//                 tHPTTotalUIData = tHPTTotalUIData.replace(".00", "");
//             }
//             else {
//                 await expect((tHPTTotalDBData[i - 1][j - 1]).toString()).to.equals((tHPTTotalUIData.trim()));
//             }
//             await expect((tHPTTotalDBData[i - 1][j - 1]).toString()).to.equals((tHPTTotalUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('User should able to see Grand Total is Total of the All direction', async function () {
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Grand Total Row Count UI " + rowcount);
//     await console.log("Grand Total Count UI " + colcount);

//     let query = TestData.userData.OracleQuery.GrandTotal;

//     var grandTotalDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + grandTotalDBData);
//     await console.log("Grand Total Row Count DB " + grandTotalDBData.length);
//     await console.log("Grand Total col Count DB " + grandTotalDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let grandTotalUIData = await element(by.xpath("//*[@id='view-one-grandttl']/tfoot/tr/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='view-one-grandttl']/tfoot/tr/td[" + j + "]"));
//             await console.log("UI data " + grandTotalUIData);
//             await console.log("DB data " + grandTotalDBData[i - 1][j - 1]);
//             if ((grandTotalDBData[i - 1][j - 1]) == null) {
//                 await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if (grandTotalUIData.length == 1) {
//                 if (grandTotalUIData.toString().includes("-")) {
//                     grandTotalUIData = grandTotalUIData.replace("-", "0");
//                 }
//             }
//             if ((grandTotalDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = grandTotalDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(grandTotalDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (grandTotalUIData.toString().includes(",")) {
//                 grandTotalUIData = grandTotalUIData.replace(",", "");
//             }
//             if (grandTotalUIData.toString().includes("$")) {

//                 grandTotalUIData = grandTotalUIData.replace("$", "");
//             }
//             if (grandTotalUIData.toString().includes("%")) {

//                 grandTotalUIData = grandTotalUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(grandTotalUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (grandTotalUIData.toString().includes(".00")) {

//                 grandTotalUIData = grandTotalUIData.replace(".00", "");
//             }
//             else {
//                 await expect((grandTotalDBData[i - 1][j - 1]).toString()).to.equals((grandTotalUIData.trim()));
//             }
//             await expect((grandTotalDBData[i - 1][j - 1]).toString()).to.equals((grandTotalUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// When('User clicks on Country ID and selects one coutry ID', async function () {
//     let query = TestData.userData.OracleQuery.ExportNodeID;
//     var EXPTNodeID: string[] = await getInformationFromDB(query);
//     await console.log("Export Node ID :" + EXPTNodeID[0].toString());
//     await CLRObj.NODE_ID.sendKeys(EXPTNodeID[0].toString());
//     await browser.sleep(1000);
//     await CLRObj.NODE_ID.sendKeys(protractor.Key.ENTER);
//     await browser.sleep(1000);
//     // await browser.sleep(1000);
//     // await CLRObj.NODE_ID.sendKeys("6445367")
//     // await browser.sleep(1000);
//     // await CLRObj.NODE_ID.sendKeys(protractor.Key.ENTER);
//     // await browser.sleep(1000);
// });
// Then('By direction Export table data should be matching with database table', async function () {
//     let rowcount = await CLRObj.EXPORT_TABLE_Row.all(by.tagName("tr")).count();
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Exp Row Count UI " + rowcount);
//     await console.log("Exp Col Count UI " + colcount);

//     SelectedNodeID = await CLRObj.NODE_ID_HYPERLINK.getText();

//     await console.log("Selected NodeID  : " + SelectedNodeID);

//     let query = "SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'Discount type Total', 1, 'Service type total', 7, 'Grand total', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) SERVICE,SUM(shp_count) shp_count,SUM(shp_wgt) tot_weight, SUM(rev_old_usd) old_revenue, SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd) - SUM(rev_old_usd) ) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(SUM(rev_old_usd), 0) * 100), 2) PER_VARIANCE FROM(SELECT disc_typ_cd,r.svc_cd, rev_new_usd,SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot, SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot,rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE') svc_typ,shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r,mia_node_status s,mia_status_code c WHERE r.NODE_ID = s.node_id    AND c.stat_id    = s.stat_id  AND c.stat_id NOT  IN ( 5, 7, 9 ) AND r.NODE_ID='" + SelectedNodeID + "' AND rerate_dt =  ( SELECT MAX(rerate_dt) FROM MIA_REPORT_DET)UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,0,0,0,0, 'IPIE', 0,SVC_ID,0 FROM mia_svc_mstr WHERE  EXISTS (SELECT *FROM mia_node_status WHERE( node_id  = NULL OR NULL IS NULL )  AND stat_id NOT IN ( 5, 7, 9 )))where disc_typ_cd='EXPT'  GROUP BY (disc_typ_cd, svc_typ, svc_cd) ORDER BY disc_typ_cd,MAX(SVC_ID) + GROUPING_id(disc_typ_cd, svc_typ, svc_cd)"
//     var exportTableDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + exportTableDBData);
//     await console.log("Exp Row Count DB " + exportTableDBData.length);
//     await console.log("Exp Col Count DB " + exportTableDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {

//             let exportTableUIData = await element(by.xpath("//*[@id='protract-export-tbl']/tbody/tr[" + i + "]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-export-tbl']/tbody/tr[" + i + "]/td[" + j + "]"));
//             await console.log("UI data " + exportTableUIData);
//             await console.log("DB data " + exportTableDBData[i - 1][j - 1]);
//             if ((exportTableDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((exportTableDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = exportTableDBData[i - 1][j - 1];
//                 decimalvalue = Number(exportTableDBData[i - 1][j - 1]).toFixed(2).trim();
//                 isCheck = 1;
//             }
//             if (exportTableUIData.length == 1) {
//                 if (exportTableUIData.toString().includes("-")) {
//                     exportTableUIData = exportTableUIData.replace("-", "0");
//                 }
//             }
//             if (exportTableUIData.toString().includes("-0.00")) {
//                 exportTableUIData = exportTableUIData.replace("-0.00", "0.00");
//             }

//             if (exportTableUIData.toString().includes(",")) {
//                 exportTableUIData = exportTableUIData.replace(",", "");
//             }
//             else {
//                 if (exportTableUIData.toString().includes("$")) {
//                     exportTableUIData = exportTableUIData.replace("$", "");
//                 }
//                 else {
//                     if (exportTableUIData.toString().includes("%")) {
//                         exportTableUIData = exportTableUIData.replace("%", "");
//                         await expect(exportTableUIData.toString().trim()).to.equals(Number(exportTableDBData[i - 1][j - 1]).toFixed(2).trim());
//                     }
//                 }
//             }
//             if (exportTableUIData.toString().includes("$")) {

//                 exportTableUIData = exportTableUIData.replace("$", "");
//             }
//             if (exportTableUIData.toString().includes("%")) {

//                 exportTableUIData = exportTableUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(exportTableUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (exportTableUIData.toString().includes(".00")) {

//                 exportTableUIData = exportTableUIData.replace(".00", "");
//             }
//             else {
//                 await expect((exportTableDBData[i - 1][j - 1]).toString()).to.equals((exportTableUIData.trim()));
//             }
//             await expect((exportTableDBData[i - 1][j - 1]).toString()).to.equals((exportTableUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('Export service total should be matching with database table', async function () {
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Total Row Count UI " + rowcount);
//     await console.log("Total Col Count UI " + colcount);

//     let query = "select * from (SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'EXPORT TOTAL', 1, 'TOTAL', 7, 'GRAND TOTAL', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) SERVICE,SUM(shp_count) shp_count,SUM(shp_wgt) tot_weight, SUM(rev_old_usd) old_revenue, SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd) - SUM(rev_old_usd) ) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(SUM(rev_old_usd), 0) * 100), 2) PER_VARIANCE FROM(SELECT disc_typ_cd,r.svc_cd, rev_new_usd,SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot, SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot,rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE') svc_typ,shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r,mia_node_status s,mia_status_code c WHERE r.NODE_ID = s.node_id    AND c.stat_id    = s.stat_id  AND c.stat_id NOT  IN ( 5, 7, 9 ) AND r.NODE_ID='" + SelectedNodeID + "' AND rerate_dt =  ( SELECT MAX(rerate_dt) FROM MIA_REPORT_DET)UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,0,0,0,0, 'IPIE', 0,SVC_ID,0 FROM mia_svc_mstr WHERE  EXISTS (SELECT *FROM mia_node_status WHERE( node_id  = NULL OR NULL IS NULL )  AND stat_id NOT IN ( 5, 7, 9 )))where disc_typ_cd='EXPT'  GROUP BY ROLLUP(disc_typ_cd, svc_typ, svc_cd) ORDER BY disc_typ_cd,MAX(SVC_ID) + GROUPING_id(disc_typ_cd, svc_typ, svc_cd)) WHERE SERVICE='TOTAL'";

//     var EXPTServiceDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + EXPTServiceDBData);
//     await console.log("Total Row Count DB " + EXPTServiceDBData.length);
//     await console.log("Total Col Count DB " + EXPTServiceDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let EXPTServiceUIData = await element(by.xpath("//*[@id='protract-export-tbl']/tfoot/tr[1]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-export-tbl']/tfoot/tr[1]/td[" + j + "]"));
//             await console.log("UI data " + EXPTServiceUIData);
//             await console.log("DB data " + EXPTServiceDBData[i - 1][j - 1]);
//             if ((EXPTServiceDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = EXPTServiceDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(EXPTServiceDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (EXPTServiceUIData.length == 1) {
//                 if (EXPTServiceUIData.toString().includes("-")) {
//                     EXPTServiceUIData = EXPTServiceUIData.replace("-", "0");
//                 }
//             }
//             if ((EXPTServiceDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if (EXPTServiceUIData.toString().includes(",")) {
//                 EXPTServiceUIData = EXPTServiceUIData.replace(",", "");
//                 EXPTServiceUIData = EXPTServiceUIData.replace(",", "");
//             }
//             else {
//                 if (EXPTServiceUIData.toString().includes("$")) {

//                     EXPTServiceUIData = EXPTServiceUIData.replace("$", "");
//                 }
//                 else {
//                     if (EXPTServiceUIData.toString().includes("%")) {

//                         EXPTServiceUIData = EXPTServiceUIData.replace("%", "");
//                         //await expect(EXPTServiceUIData.trim()).to.equals((EXPTServiceDBData[i - 1][j - 1]).toString());
//                         await expect(EXPTServiceUIData.toString().trim()).to.equals(Number(EXPTServiceDBData[i - 1][j - 1]).toFixed(2).trim());
//                     }
//                 }
//             }
//             if (EXPTServiceUIData.toString().includes("$")) {

//                 EXPTServiceUIData = EXPTServiceUIData.replace("$", "");
//             }
//             if (EXPTServiceUIData.toString().includes("%")) {

//                 EXPTServiceUIData = EXPTServiceUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(EXPTServiceUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (EXPTServiceUIData.toString().includes(".00")) {

//                 EXPTServiceUIData = EXPTServiceUIData.replace(".00", "");
//             }
//             else {
//                 await expect((EXPTServiceDBData[i - 1][j - 1]).toString()).to.equals((EXPTServiceUIData.trim()));
//             }
//             await expect((EXPTServiceDBData[i - 1][j - 1]).toString()).to.equals((EXPTServiceUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }

// });
// Then('Export Direction total should be matching with database table', async function () {
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Export Total Row Count UI " + rowcount);
//     await console.log("Export Total Count UI " + colcount);

//     let query = "select * from (SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'EXPORT TOTAL', 1, 'TOTAL', 7, 'GRAND TOTAL', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) SERVICE,SUM(shp_count) shp_count,SUM(shp_wgt) tot_weight, SUM(rev_old_usd) old_revenue, SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd) - SUM(rev_old_usd) ) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(SUM(rev_old_usd), 0) * 100), 2) PER_VARIANCE FROM(SELECT disc_typ_cd,r.svc_cd, rev_new_usd,SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot, SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot,rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE') svc_typ,shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r,mia_node_status s,mia_status_code c WHERE r.NODE_ID = s.node_id    AND c.stat_id    = s.stat_id  AND c.stat_id NOT  IN ( 5, 7, 9 ) AND r.NODE_ID='" + SelectedNodeID + "' AND rerate_dt =  ( SELECT MAX(rerate_dt) FROM MIA_REPORT_DET)UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,0,0,0,0, 'IPIE', 0,SVC_ID,0 FROM mia_svc_mstr WHERE  EXISTS (SELECT *FROM mia_node_status WHERE( node_id  = NULL OR NULL IS NULL )  AND stat_id NOT IN ( 5, 7, 9 )))where disc_typ_cd='EXPT'  GROUP BY ROLLUP(disc_typ_cd, svc_typ, svc_cd) ORDER BY disc_typ_cd,MAX(SVC_ID) + GROUPING_id(disc_typ_cd, svc_typ, svc_cd)) WHERE SERVICE='EXPORT TOTAL'";

//     var exportTotalDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + exportTotalDBData);
//     await console.log("Export Total Row Count DB " + exportTotalDBData.length);
//     await console.log("Export Total col Count DB " + exportTotalDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let exportTotalUIData = await element(by.xpath("//*[@id='protract-export-tbl']/tfoot/tr[4]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-export-tbl']/tfoot/tr[4]/td[" + j + "]"));
//             await console.log("UI data " + exportTotalUIData);
//             await console.log("DB data " + exportTotalDBData[i - 1][j - 1]);
//             if ((exportTotalDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if (exportTotalUIData.toString().includes(".00")) {

//                 exportTotalUIData = exportTotalUIData.replace(".00", "");
//             }
//             if ((exportTotalDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = exportTotalDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(exportTotalDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (exportTotalUIData.length == 1) {
//                 if (exportTotalUIData.toString().includes("-")) {
//                     exportTotalUIData = exportTotalUIData.replace("-", "0");
//                 }
//             }
//             if (exportTotalUIData.toString().includes(",")) {
//                 exportTotalUIData = exportTotalUIData.replace(",", "");
//                 exportTotalUIData = exportTotalUIData.replace(",", "");
//             }
//             if (exportTotalUIData.toString().includes("$")) {

//                 exportTotalUIData = exportTotalUIData.replace("$", "");
//             }
//             if (exportTotalUIData.toString().includes("%")) {

//                 exportTotalUIData = exportTotalUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(exportTotalUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (exportTotalUIData.toString().includes(".00")) {

//                 exportTotalUIData = exportTotalUIData.replace(".00", "");
//             }
//             else {
//                 await expect((exportTotalDBData[i - 1][j - 1]).toString()).to.equals((exportTotalUIData.trim()));
//             }
//             await expect((exportTotalDBData[i - 1][j - 1]).toString()).to.equals((exportTotalUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('By direction Import table data should be matching with database table', async function () {
//     let rowcount = await CLRObj.IMPORT_TABLE_Row.all(by.tagName("tr")).count();
//     let colcount = await CLRObj.ImportRowHeader.all(by.tagName("th")).count();

//     await console.log("IMPT Row Count UI " + rowcount);
//     await console.log("IMPT Col Count UI " + colcount);
//     let query = "SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'Discount type Total', 1, 'Service type total', 7, 'Grand total', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) SERVICE,SUM(shp_count) shp_count,SUM(shp_wgt) tot_weight, SUM(rev_old_usd) old_revenue, SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd) - SUM(rev_old_usd) ) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(SUM(rev_old_usd), 0) * 100), 2) PER_VARIANCE FROM(SELECT disc_typ_cd,r.svc_cd, rev_new_usd,SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot, SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot,rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE') svc_typ,shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r,mia_node_status s,mia_status_code c WHERE r.NODE_ID = s.node_id    AND c.stat_id    = s.stat_id  AND c.stat_id NOT  IN ( 5, 7, 9 ) AND r.NODE_ID='" + SelectedNodeID + "' AND rerate_dt =  ( SELECT MAX(rerate_dt) FROM MIA_REPORT_DET)UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,0,0,0,0, 'IPIE', 0,SVC_ID,0 FROM mia_svc_mstr WHERE  EXISTS (SELECT *FROM mia_node_status WHERE( node_id  = NULL OR NULL IS NULL )  AND stat_id NOT IN ( 5, 7, 9 )))where disc_typ_cd='IMPT'  GROUP BY (disc_typ_cd, svc_typ, svc_cd) ORDER BY disc_typ_cd,MAX(SVC_ID) + GROUPING_id(disc_typ_cd, svc_typ, svc_cd)"
//     var importTableDBData: string[] = await getInformationFromDB(query);
//     await console.log("Query result " + importTableDBData);
//     await console.log("IMPT Row Count DB " + importTableDBData.length);
//     await console.log("IMPT Col Count DB " + importTableDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let importTableUIData = await element(by.xpath("//*[@id='protract-import-tbl']/tbody/tr[" + i + "]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-import-tbl']/tbody/tr[" + i + "]/td[" + j + "]"));
//             await console.log("UI data " + importTableUIData);
//             await console.log("DB data " + importTableDBData[i - 1][j - 1]);
//             if ((importTableDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((importTableDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = importTableDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(importTableDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (importTableUIData.length == 1) {
//                 if (importTableUIData.toString().includes("-")) {
//                     importTableUIData = importTableUIData.replace("-", "0");
//                 }
//             }
//             if (importTableUIData.toString().includes(",")) {
//                 importTableUIData = importTableUIData.replace(",", "");
//             }
//             if (importTableUIData.toString().includes(".")) {
//                 var length = importTableUIData.toString().split(".")[1].length;
//                 if (length == 1) {
//                     importTableUIData = importTableUIData.toString() + "0";
//                 }
//             }
//             else {
//                 if (importTableUIData.toString().includes("$")) {

//                     importTableUIData = importTableUIData.replace("$", "");
//                 }
//                 else {
//                     if (importTableUIData.toString().includes("%")) {

//                         importTableUIData = importTableUIData.replace("%", "");
//                         await expect(importTableUIData.trim()).to.equals((importTableDBData[i - 1][j - 1]).toString());
//                     }
//                 }
//             }
//             if (importTableUIData.toString().includes("$")) {

//                 importTableUIData = importTableUIData.replace("$", "");
//             }
//             if (importTableUIData.toString().includes("%")) {

//                 importTableUIData = importTableUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(importTableUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (importTableUIData.toString().includes(".00")) {

//                 importTableUIData = importTableUIData.replace(".00", "");
//             }
//             else {
//                 await expect((importTableDBData[i - 1][j - 1]).toString()).to.equals((importTableUIData.trim()));
//             }
//             await expect((importTableDBData[i - 1][j - 1]).toString()).to.equals((importTableUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('Import service total should be matching with database table', async function () {
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Total Row Count UI " + rowcount);
//     await console.log("Total Col Count UI " + colcount);

//     let query = "select * from (SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'IMPORT TOTAL', 1, 'TOTAL', 7, 'GRAND TOTAL', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) SERVICE,SUM(shp_count) shp_count,SUM(shp_wgt) tot_weight, SUM(rev_old_usd) old_revenue, SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd) - SUM(rev_old_usd) ) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(SUM(rev_old_usd), 0) * 100), 2) PER_VARIANCE FROM(SELECT disc_typ_cd,r.svc_cd, rev_new_usd,SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot, SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot,rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE') svc_typ,shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r,mia_node_status s,mia_status_code c WHERE r.NODE_ID = s.node_id    AND c.stat_id    = s.stat_id  AND c.stat_id NOT  IN ( 5, 7, 9 ) AND r.NODE_ID='" + SelectedNodeID + "' AND rerate_dt =  ( SELECT MAX(rerate_dt) FROM MIA_REPORT_DET)UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,0,0,0,0, 'IPIE', 0,SVC_ID,0 FROM mia_svc_mstr WHERE  EXISTS (SELECT *FROM mia_node_status WHERE( node_id  = NULL OR NULL IS NULL )  AND stat_id NOT IN ( 5, 7, 9 )))where disc_typ_cd='IMPT'  GROUP BY ROLLUP(disc_typ_cd, svc_typ, svc_cd) ORDER BY disc_typ_cd,MAX(SVC_ID) + GROUPING_id(disc_typ_cd, svc_typ, svc_cd)) WHERE SERVICE='TOTAL'";

//     var iMPTServiceDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + iMPTServiceDBData);
//     await console.log("Total Row Count DB " + iMPTServiceDBData.length);
//     await console.log("Total Col Count DB " + iMPTServiceDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let tHPTServiceUIData = await element(by.xpath("//*[@id='protract-import-tbl']/tfoot/tr[1]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-import-tbl']/tfoot/tr[1]/td[" + j + "]"));
//             await console.log("UI data " + tHPTServiceUIData);
//             await console.log("DB data " + iMPTServiceDBData[i - 1][j - 1]);
//             if ((iMPTServiceDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((iMPTServiceDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = iMPTServiceDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(iMPTServiceDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (tHPTServiceUIData.length == 1) {
//                 if (tHPTServiceUIData.toString().includes("-")) {
//                     tHPTServiceUIData = tHPTServiceUIData.replace("-", "0");
//                 }
//             }
//             if (tHPTServiceUIData.toString().includes(",")) {
//                 tHPTServiceUIData = tHPTServiceUIData.replace(",", "");
//                 tHPTServiceUIData = tHPTServiceUIData.replace(",", "");
//             }
//             else {
//                 if (tHPTServiceUIData.toString().includes("$")) {

//                     tHPTServiceUIData = tHPTServiceUIData.replace("$", "");
//                 }
//                 else {
//                     if (tHPTServiceUIData.toString().includes("%")) {

//                         tHPTServiceUIData = tHPTServiceUIData.replace("%", "");
//                         //await expect(tHPTServiceUIData.trim()).to.equals((iMPTServiceDBData[i - 1][j - 1]).toString());
//                     }
//                 }
//             }
//             if (tHPTServiceUIData.toString().includes("$")) {

//                 tHPTServiceUIData = tHPTServiceUIData.replace("$", "");
//             }
//             if (tHPTServiceUIData.toString().includes("%")) {

//                 tHPTServiceUIData = tHPTServiceUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(tHPTServiceUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (tHPTServiceUIData.toString().includes(".00")) {

//                 tHPTServiceUIData = tHPTServiceUIData.replace(".00", "");
//             }
//             else {
//                 await expect((iMPTServiceDBData[i - 1][j - 1]).toString()).to.equals((tHPTServiceUIData.trim()));
//             }
//             await expect((iMPTServiceDBData[i - 1][j - 1]).toString()).to.equals((tHPTServiceUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('Import Direction total should be matching with database table', async function () {
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Import Total Row Count UI " + rowcount);
//     await console.log("Import Total Count UI " + colcount);

//     let query = "select * from (SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'IMPORT TOTAL', 1, 'TOTAL', 7, 'GRAND TOTAL', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) SERVICE,SUM(shp_count) shp_count,SUM(shp_wgt) tot_weight, SUM(rev_old_usd) old_revenue, SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd) - SUM(rev_old_usd) ) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(SUM(rev_old_usd), 0) * 100), 2) PER_VARIANCE FROM(SELECT disc_typ_cd,r.svc_cd, rev_new_usd,SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot, SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot,rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE') svc_typ,shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r,mia_node_status s,mia_status_code c WHERE r.NODE_ID = s.node_id    AND c.stat_id    = s.stat_id  AND c.stat_id NOT  IN ( 5, 7, 9 ) AND r.NODE_ID='" + SelectedNodeID + "' AND rerate_dt =  ( SELECT MAX(rerate_dt) FROM MIA_REPORT_DET)UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,0,0,0,0, 'IPIE', 0,SVC_ID,0 FROM mia_svc_mstr WHERE  EXISTS (SELECT *FROM mia_node_status WHERE( node_id  = NULL OR NULL IS NULL )  AND stat_id NOT IN ( 5, 7, 9 )))where disc_typ_cd='IMPT'  GROUP BY ROLLUP(disc_typ_cd, svc_typ, svc_cd) ORDER BY disc_typ_cd,MAX(SVC_ID) + GROUPING_id(disc_typ_cd, svc_typ, svc_cd)) WHERE SERVICE='IMPORT TOTAL'";

//     var importTotalDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + importTotalDBData);
//     await console.log("Import Total Row Count DB " + importTotalDBData.length);
//     await console.log("Import Total col Count DB " + importTotalDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let importTotalUIData = await element(by.xpath("//*[@id='protract-import-tbl']/tfoot/tr[4]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-import-tbl']/tfoot/tr[4]/td[" + j + "]"));
//             await console.log("UI data " + importTotalUIData);
//             await console.log("DB data " + importTotalDBData[i - 1][j - 1]);
//             if ((importTotalDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((importTotalDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = importTotalDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(importTotalDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (importTotalUIData.length == 1) {
//                 if (importTotalUIData.toString().includes("-")) {
//                     importTotalUIData = importTotalUIData.replace("-", "0");
//                 }
//             }
//             if (importTotalUIData.toString().includes(",")) {
//                 importTotalUIData = importTotalUIData.replace(",", "");
//                 importTotalUIData = importTotalUIData.replace(",", "");
//             }
//             else {
//                 if (importTotalUIData.toString().includes("$")) {

//                     importTotalUIData = importTotalUIData.replace("$", "");
//                 }
//                 else {
//                     if (importTotalUIData.toString().includes("%")) {

//                         importTotalUIData = importTotalUIData.replace("%", "");
//                         //await expect(importTotalUIData.trim()).to.equals((importTotalDBData[i - 1][j - 1]).toString());
//                     }
//                 }
//             }
//             if (importTotalUIData.toString().includes("$")) {

//                 importTotalUIData = importTotalUIData.replace("$", "");
//             }
//             if (importTotalUIData.toString().includes("%")) {

//                 importTotalUIData = importTotalUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(importTotalUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (importTotalUIData.toString().includes(".00")) {

//                 importTotalUIData = importTotalUIData.replace(".00", "");
//             }
//             else {
//                 await expect((importTotalDBData[i - 1][j - 1]).toString()).to.equals((importTotalUIData.trim()));
//             }
//             await expect((importTotalDBData[i - 1][j - 1]).toString()).to.equals((importTotalUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('By direction Third Party table data should be matching with database table', async function () {
//     let rowcount = await CLRObj.THPT_TABLE_Row.all(by.tagName("tr")).count();
//     let colcount = await CLRObj.THPTRowHeader.all(by.tagName("th")).count();

//     await console.log("THPT Row Count UI " + rowcount);
//     await console.log("THPT Col Count UI " + colcount);

//     let query = "SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'Discount type Total', 1, 'Service type total', 7, 'Grand total', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) SERVICE,SUM(shp_count) shp_count,SUM(shp_wgt) tot_weight, SUM(rev_old_usd) old_revenue, SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd) - SUM(rev_old_usd) ) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(SUM(rev_old_usd), 0) * 100), 2) PER_VARIANCE FROM(SELECT disc_typ_cd,r.svc_cd, rev_new_usd,SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot, SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot,rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE') svc_typ,shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r,mia_node_status s,mia_status_code c WHERE r.NODE_ID = s.node_id    AND c.stat_id    = s.stat_id  AND c.stat_id NOT  IN ( 5, 7, 9 ) AND r.NODE_ID='" + SelectedNodeID + "' AND rerate_dt =  ( SELECT MAX(rerate_dt) FROM MIA_REPORT_DET)UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,0,0,0,0, 'IPIE', 0,SVC_ID,0 FROM mia_svc_mstr WHERE  EXISTS (SELECT *FROM mia_node_status WHERE( node_id  = NULL OR NULL IS NULL )  AND stat_id NOT IN ( 5, 7, 9 )))where disc_typ_cd='G3PP'  GROUP BY (disc_typ_cd, svc_typ, svc_cd) ORDER BY disc_typ_cd,MAX(SVC_ID) + GROUPING_id(disc_typ_cd, svc_typ, svc_cd)"

//     var thptTableDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + thptTableDBData);
//     await console.log("THPT Row Count DB " + thptTableDBData.length);
//     await console.log("THPT Col Count DB " + thptTableDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let thptTableUIData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tbody/tr[" + i + "]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tbody/tr[" + i + "]/td[" + j + "]"));
//             await console.log("UI data " + thptTableUIData);
//             await console.log("DB data " + thptTableDBData[i - 1][j - 1]);

//             if ((thptTableDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if (thptTableUIData.length == 1) {
//                 if (thptTableUIData.toString().includes("-")) {
//                     thptTableUIData = thptTableUIData.replace("-", "0");
//                 }
//             }
//             if ((thptTableDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = thptTableDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(thptTableDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (thptTableUIData.toString().includes(",")) {
//                 thptTableUIData = thptTableUIData.replace(",", "");
//             }
//             else {
//                 if (thptTableUIData.toString().includes("$")) {

//                     thptTableUIData = thptTableUIData.replace("$", "");
//                 }
//                 else {
//                     if (thptTableUIData.toString().includes("%")) {

//                         thptTableUIData = thptTableUIData.replace("%", "");
//                         await expect(thptTableUIData.trim()).to.equals((thptTableDBData[i - 1][j - 1])).toString();
//                     }
//                 }
//             }
//             if (thptTableUIData.toString().includes("$")) {

//                 thptTableUIData = thptTableUIData.replace("$", "");
//             }
//             if (thptTableUIData.toString().includes("%")) {

//                 thptTableUIData = thptTableUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(thptTableUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (thptTableUIData.toString().includes(".00")) {

//                 thptTableUIData = thptTableUIData.replace(".00", "");
//             }

//             else {
//                 await expect((thptTableDBData[i - 1][j - 1]).toString()).to.equals((thptTableUIData.trim()));
//             }
//             await expect((thptTableDBData[i - 1][j - 1]).toString()).to.equals((thptTableUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('Third Party service total should be matching with database table', async function () {
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Total Row Count UI " + rowcount);
//     await console.log("Total Col Count UI " + colcount);

//     let query = "select * from (SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'THIRD PARTY TOTAL', 1, 'TOTAL', 7, 'GRAND TOTAL', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) SERVICE,SUM(shp_count) shp_count,SUM(shp_wgt) tot_weight, SUM(rev_old_usd) old_revenue, SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd) - SUM(rev_old_usd) ) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(SUM(rev_old_usd), 0) * 100), 2) PER_VARIANCE FROM(SELECT disc_typ_cd,r.svc_cd, rev_new_usd,SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot, SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot,rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE') svc_typ,shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r,mia_node_status s,mia_status_code c WHERE r.NODE_ID = s.node_id    AND c.stat_id    = s.stat_id  AND c.stat_id NOT  IN ( 5, 7, 9 ) AND r.NODE_ID='" + SelectedNodeID + "' AND rerate_dt =  ( SELECT MAX(rerate_dt) FROM MIA_REPORT_DET)UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,0,0,0,0, 'IPIE', 0,SVC_ID,0 FROM mia_svc_mstr WHERE  EXISTS (SELECT *FROM mia_node_status WHERE( node_id  = NULL OR NULL IS NULL )  AND stat_id NOT IN ( 5, 7, 9 )))where disc_typ_cd='G3PP'  GROUP BY ROLLUP(disc_typ_cd, svc_typ, svc_cd) ORDER BY disc_typ_cd,MAX(SVC_ID) + GROUPING_id(disc_typ_cd, svc_typ, svc_cd)) WHERE SERVICE='TOTAL'";

//     var tHPTServiceDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + tHPTServiceDBData);
//     await console.log("Total Row Count DB " + tHPTServiceDBData.length);
//     await console.log("Total Col Count DB " + tHPTServiceDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let tHPTServiceUIData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tfoot/tr[1]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tfoot/tr[1]/td[" + j + "]"));
//             await console.log("UI data " + tHPTServiceUIData);
//             await console.log("DB data " + tHPTServiceDBData[i - 1][j - 1]);

//             if ((tHPTServiceDBData[i - 1][j - 1]) == null) {
//                 await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if (tHPTServiceUIData.length == 1) {
//                 if (tHPTServiceUIData.toString().includes("-")) {
//                     tHPTServiceUIData = tHPTServiceUIData.replace("-", "0");
//                 }
//             }
//             if ((tHPTServiceDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = tHPTServiceDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(tHPTServiceDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (tHPTServiceUIData.toString().includes(",")) {
//                 tHPTServiceUIData = tHPTServiceUIData.replace(",", "");
//                 tHPTServiceUIData = tHPTServiceUIData.replace(",", "");
//             }
//             else {
//                 if (tHPTServiceUIData.toString().includes("$")) {

//                     tHPTServiceUIData = tHPTServiceUIData.replace("$", "");
//                 }
//                 else {
//                     if (tHPTServiceUIData.toString().includes("%")) {

//                         tHPTServiceUIData = tHPTServiceUIData.replace("%", "");
//                         await expect(tHPTServiceUIData.trim()).to.equals((tHPTServiceDBData[i - 1][j - 1]).toString());
//                     }
//                 }
//             }
//             if (tHPTServiceUIData.toString().includes("$")) {

//                 tHPTServiceUIData = tHPTServiceUIData.replace("$", "");
//             }
//             if (tHPTServiceUIData.toString().includes("%")) {

//                 tHPTServiceUIData = tHPTServiceUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(tHPTServiceUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (tHPTServiceUIData.toString().includes(".00")) {

//                 tHPTServiceUIData = tHPTServiceUIData.replace(".00", "");
//             }
//             else {
//                 await expect((tHPTServiceDBData[i - 1][j - 1]).toString()).to.equals((tHPTServiceUIData.trim()));
//             }
//             await expect((tHPTServiceDBData[i - 1][j - 1]).toString()).to.equals((tHPTServiceUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('Third Party Direction total should be matching with database table', async function () {
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Third Party Total Row Count UI " + rowcount);
//     await console.log("Third Party Total Count UI " + colcount);

//     let query = "select * from (SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'THIRD PARTY TOTAL', 1, 'TOTAL', 7, 'GRAND TOTAL', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) SERVICE,SUM(shp_count) shp_count,SUM(shp_wgt) tot_weight, SUM(rev_old_usd) old_revenue, SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd) - SUM(rev_old_usd) ) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(SUM(rev_old_usd), 0) * 100), 2) PER_VARIANCE FROM(SELECT disc_typ_cd,r.svc_cd, rev_new_usd,SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot, SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot,rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE') svc_typ,shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r,mia_node_status s,mia_status_code c WHERE r.NODE_ID = s.node_id    AND c.stat_id    = s.stat_id  AND c.stat_id NOT  IN ( 5, 7, 9 ) AND r.NODE_ID='" + SelectedNodeID + "' AND rerate_dt =  ( SELECT MAX(rerate_dt) FROM MIA_REPORT_DET)UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,0,0,0,0, 'IPIE', 0,SVC_ID,0 FROM mia_svc_mstr WHERE  EXISTS (SELECT *FROM mia_node_status WHERE( node_id  = NULL OR NULL IS NULL )  AND stat_id NOT IN ( 5, 7, 9 )))where disc_typ_cd='G3PP'  GROUP BY ROLLUP(disc_typ_cd, svc_typ, svc_cd) ORDER BY disc_typ_cd,MAX(SVC_ID) + GROUPING_id(disc_typ_cd, svc_typ, svc_cd)) WHERE SERVICE='THIRD PARTY TOTAL'";

//     var tHPTTotalDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + tHPTTotalDBData);
//     await console.log("Third Party Total Row Count DB " + tHPTTotalDBData.length);
//     await console.log("Third Party Total col Count DB " + tHPTTotalDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let tHPTTotalUIData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tfoot/tr[4]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tfoot/tr[4]/td[" + j + "]"));
//             await console.log("UI data " + tHPTTotalUIData);
//             await console.log("DB data " + tHPTTotalDBData[i - 1][j - 1]);

//             if ((tHPTTotalDBData[i - 1][j - 1]) == null) {
//                 await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if (tHPTTotalUIData.length == 1) {
//                 if (tHPTTotalUIData.toString().includes("-")) {
//                     tHPTTotalUIData = tHPTTotalUIData.replace("-", "0");
//                 }
//             }
//             if ((tHPTTotalDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = tHPTTotalDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(tHPTTotalDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (tHPTTotalUIData.toString().includes(",")) {
//                 tHPTTotalUIData = tHPTTotalUIData.replace(",", "");
//                 tHPTTotalUIData = tHPTTotalUIData.replace(",", "");
//             }
//             else {
//                 if (tHPTTotalUIData.toString().includes("$")) {

//                     tHPTTotalUIData = tHPTTotalUIData.replace("$", "");
//                 }
//                 else {
//                     if (tHPTTotalUIData.toString().includes("%")) {

//                         tHPTTotalUIData = tHPTTotalUIData.replace("%", "");
//                         await expect(tHPTTotalUIData.trim()).to.equals((tHPTTotalDBData[i - 1][j - 1]).toString());
//                     }
//                 }
//             }
//             if (tHPTTotalUIData.toString().includes("$")) {

//                 tHPTTotalUIData = tHPTTotalUIData.replace("$", "");
//             }
//             if (tHPTTotalUIData.toString().includes("%")) {

//                 tHPTTotalUIData = tHPTTotalUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(tHPTTotalUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (tHPTTotalUIData.toString().includes(".00")) {

//                 tHPTTotalUIData = tHPTTotalUIData.replace(".00", "");
//             }
//             else {
//                 await expect((tHPTTotalDBData[i - 1][j - 1]).toString()).to.equals((tHPTTotalUIData.trim()));
//             }
//             await expect((tHPTTotalDBData[i - 1][j - 1]).toString()).to.equals((tHPTTotalUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('Grand Total should be matching with database table', async function () {
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Grand Total Row Count UI " + rowcount);
//     await console.log("Grand Total Count UI " + colcount);

//     let query = "SELECT * FROM (SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'Discount type Total', 1, 'Service type total', 7, 'GRAND TOTAL', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) SERVICE,SUM(shp_count) shp_count, SUM(shp_wgt) tot_weight,SUM(rev_old_usd) old_revenue,SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd)- SUM(rev_old_usd) ) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(SUM(rev_old_usd), 0) * 100), 2) PER_VARIANCE FROM (SELECT disc_typ_cd,r.svc_cd,rev_new_usd,SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot,SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot,rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE') svc_typ, shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r, mia_node_status s, mia_status_code c WHERE r.NODE_ID    = s.node_id AND c.stat_id = s.stat_id AND c.stat_id NOT IN ( 5, 7, 9 )AND r.NODE_ID='" + SelectedNodeID + "' AND rerate_dt = ( SELECT MAX(rerate_dt) FROM MIA_REPORT_DET  ) AND shp_wgt IS NOT NULL UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,0,0,0,0, 'IPIE', 0, SVC_ID,0 FROM mia_svc_mstr WHERE EXISTS (SELECT *FROM mia_node_status WHERE( node_id   = NULL OR NULL IS NULL )AND stat_id NOT IN ( 5, 7, 9 )))GROUP BY rollup(disc_typ_cd, svc_typ, svc_cd) ORDER BY disc_typ_cd, MAX(SVC_ID) + GROUPING_id(disc_typ_cd, svc_typ, svc_cd)) WHERE SERVICE='GRAND TOTAL'"

//     var grandTotalDBData: string[] = await getInformationFromDB(query);
//     await console.log("Query result " + grandTotalDBData);
//     await console.log("Grand Total Row Count DB " + grandTotalDBData.length);
//     await console.log("Grand Total col Count DB " + grandTotalDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let grandTotalUIData = await element(by.xpath("//*[@id='view-one-grandttl']/tfoot/tr/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='view-one-grandttl']/tfoot/tr/td[" + j + "]"));

//             await console.log("UI data " + grandTotalUIData);
//             await console.log("DB data " + grandTotalDBData[i - 1][j - 1]);
//             if ((grandTotalDBData[i - 1][j - 1]) == null) {
//                 await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if (grandTotalUIData.length == 1) {
//                 if (grandTotalUIData.toString().includes("-")) {
//                     grandTotalUIData = grandTotalUIData.replace("-", "0");
//                 }
//             }
//             if ((grandTotalDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = grandTotalDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(grandTotalDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (grandTotalUIData.toString().includes(",")) {
//                 grandTotalUIData = grandTotalUIData.replace(",", "");
//             }
//             if (grandTotalUIData.toString().includes("$")) {

//                 grandTotalUIData = grandTotalUIData.replace("$", "");
//             }
//             if (grandTotalUIData.toString().includes("%")) {

//                 grandTotalUIData = grandTotalUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(grandTotalUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (grandTotalUIData.toString().includes(".00")) {

//                 grandTotalUIData = grandTotalUIData.replace(".00", "");
//             }
//             else {
//                 await expect((grandTotalDBData[i - 1][j - 1]).toString()).to.equals((grandTotalUIData.trim()));
//             }
//             await expect((grandTotalDBData[i - 1][j - 1]).toString()).to.equals((grandTotalUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// When('User clicks on additional columns button and selects additional columns', async function () {
//     await browser.sleep(1000);
//     await browser.actions().mouseMove(CLRObj.AddColsView1).perform();
//     await browser.wait(until.elementToBeClickable(CLRObj.AddColsView1), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.AddColsView1.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.VarPerProductDir), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.VarPerProductDir.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.OldRevPerProductDir), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.OldRevPerProductDir.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.NewRevPerProductDir), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NewRevPerProductDir.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.TotalShipment), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.TotalShipment.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.TotalRatedWeight), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.TotalRatedWeight.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.OldRevenue), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.OldRevenue.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.VarPerProductTotal), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.VarPerProductTotal.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.OldRevPerProductTotal), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.OldRevPerProductTotal.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.NewRevPerProductTotal), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NewRevPerProductTotal.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.NewRevenue), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NewRevenue.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.RevenueVariance), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.RevenueVariance.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.PerVariance), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.PerVariance.click();
//     await browser.sleep(1000);
//     await browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
//     await browser.sleep(1000);
// });
// Then('By direction Export table data for additional columns should be matching with database table', async function () {
//     let rowcount = await CLRObj.EXPORT_TABLE_Row.all(by.tagName("tr")).count();
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();
//     await console.log("Exp Row Count UI " + rowcount);
//     await console.log("Exp Col Count UI " + colcount);
//     SelectedNodeID = await CLRObj.NODE_ID_HYPERLINK.getText();
//     await console.log("Selected NodeID  : " + SelectedNodeID);
//     let query = "SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'Discount type Total', 1, 'Service type total', 7, 'GRAND TOTAL', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) SERVICE,TO_CHAR(ABS((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(MAX(new_rev_tot), 0) * 100),9999990.99) prodbydir,TO_CHAR((CASE WHEN ROUND(SUM(rev_old_usd) / NULLIF(MAX(old_rev_tot), 0), 2) * 100 > 100 THEN 100 ELSE SUM(rev_old_usd) / NULLIF(MAX(old_rev_tot), 0) * 100 END),999990.99) old_rev_bydir,TO_CHAR((CASE WHEN SUM(rev_new_usd) / NULLIF(MAX(new_rev_tot), 0) * 100 > 100 THEN 100 ELSE SUM(rev_new_usd) / NULLIF(MAX(new_rev_tot), 0) * 100 END),999999.99) new_rev_bydir,TO_CHAR(ABS(SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(MAX(new_rev_gtot), 0)* 100,999990.99) prodbytot,TO_CHAR(SUM(rev_old_usd)     / NULLIF(MAX(old_rev_gtot), 0) * 100,999999.99) old_rev_bytot, TO_CHAR((SUM(rev_new_usd)    / NULLIF(MAX(new_rev_gtot), 0)) * 100,999999.99) new_rev_bytot FROM (SELECT disc_typ_cd,r.svc_cd,rev_new_usd, SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot,SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot,rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE') svc_typ,shp_wgt,0 SVC_ID, 1 shp_count FROM MIA_REPORT_DET r,mia_node_status s,mia_status_code c WHERE r.NODE_ID = s.node_id AND c.stat_id = s.stat_id AND c.stat_id NOT IN ( 5, 7, 9 ) AND r.NODE_ID ='" + SelectedNodeID + "' AND rerate_dt =( SELECT MAX(rerate_dt) FROM MIA_REPORT_DET) AND shp_wgt IS NOT NULL UNION ALL SELECT disc_typ_cd,SVC_CD, 0,0,0,0,0,0,'IPIE',0,SVC_ID,0 FROM mia_svc_mstr WHERE EXISTS (SELECT * FROM mia_node_status WHERE( node_id = NULL OR NULL IS NULL ) AND stat_id NOT IN ( 5, 7, 9 ))) WHERE disc_typ_cd='EXPT' GROUP BY (disc_typ_cd, svc_typ, svc_cd) ORDER BY disc_typ_cd, MAX(SVC_ID) + GROUPING_id(disc_typ_cd, svc_typ, svc_cd)";
//     var exportTableDBData: string[] = await getInformationFromDB(query);
//     await console.log("Query result " + exportTableDBData);
//     await console.log("Exp Row Count DB " + exportTableDBData.length);
//     await console.log("Exp Col Count DB " + exportTableDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {

//             let exportTableUIData = await element(by.xpath("//*[@id='protract-export-tbl']/tbody/tr[" + i + "]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-export-tbl']/tbody/tr[" + i + "]/td[" + j + "]"));
//             await console.log("UI data " + exportTableUIData);
//             await console.log("DB data " + exportTableDBData[i - 1][j - 1]);
//             if ((exportTableDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((exportTableDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = exportTableDBData[i - 1][j - 1];
//                 decimalvalue = Number(exportTableDBData[i - 1][j - 1]).toFixed(2).trim();
//                 isCheck = 1;
//             }
//             if (exportTableUIData.length == 1) {
//                 if (exportTableUIData.toString().includes("-")) {
//                     exportTableUIData = exportTableUIData.replace("-", "0");
//                 }
//             }
//             if (exportTableUIData.toString().includes("-0.00")) {
//                 exportTableUIData = exportTableUIData.replace("-0.00", "0.00");
//             }

//             if (exportTableUIData.toString().includes(",")) {
//                 exportTableUIData = exportTableUIData.replace(",", "");
//             }
//             else {
//                 if (exportTableUIData.toString().includes("$")) {
//                     exportTableUIData = exportTableUIData.replace("$", "");
//                 }
//                 else {
//                     if (exportTableUIData.toString().includes("%")) {
//                         exportTableUIData = exportTableUIData.replace("%", "");
//                         await expect(exportTableUIData.toString().trim()).to.equals(Number(exportTableDBData[i - 1][j - 1]).toFixed(2).trim());
//                     }
//                 }
//             }
//             if (exportTableUIData.toString().includes("$")) {

//                 exportTableUIData = exportTableUIData.replace("$", "");
//             }
//             if (exportTableUIData.toString().includes("%")) {

//                 exportTableUIData = exportTableUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(exportTableUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (exportTableUIData.toString().includes(".00")) {

//                 exportTableUIData = exportTableUIData.replace(".00", "");
//             }
//             else {
//                 await expect((exportTableDBData[i - 1][j - 1]).toString()).to.equals((exportTableUIData.trim()));
//             }
//             await expect((exportTableDBData[i - 1][j - 1]).toString()).to.equals((exportTableUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }

// });
// Then('Export service total for additional columns should be matching with database table', async function () {
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Total Row Count UI " + rowcount);
//     await console.log("Total Col Count UI " + colcount);


//     let query = "select * from (SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'EXPORT TOTAL', 1, 'TOTAL', 7, 'GRAND TOTAL', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) SERVICE,ROUND((SUM(rev_new_usd)  - SUM(rev_old_usd)) / NULLIF(MAX(new_rev_tot), 0) * 100, 2) prodbydir,CASE WHEN ROUND(SUM(rev_old_usd) / NULLIF(MAX(old_rev_tot), 0), 2) * 100 > 100 THEN 100 ELSE ROUND(SUM(rev_old_usd) / NULLIF(MAX(old_rev_tot), 0), 2) * 100 END old_rev_bydir,CASE WHEN ROUND(SUM(rev_new_usd) / NULLIF(MAX(new_rev_tot), 0), 2) * 100 > 100 THEN 100 ELSE ROUND(SUM(rev_new_usd) / NULLIF(MAX(new_rev_tot), 0), 2) * 100 END new_rev_bydir,ROUND((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(MAX(new_rev_gtot), 0), 2) * 100 prodbytot,ROUND(SUM(rev_old_usd)  / NULLIF(MAX(old_rev_gtot), 0), 2) * 100 old_rev_bytot, ROUND(SUM(rev_new_usd)  / NULLIF(MAX(new_rev_gtot), 0), 2) * 100 new_rev_bytot FROM (SELECT disc_typ_cd,r.svc_cd,rev_new_usd,SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot,SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot,rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE') svc_typ, shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r, mia_node_status s, mia_status_code c WHERE r.NODE_ID    = s.node_id AND c.stat_id = s.stat_id AND c.stat_id NOT IN ( 5, 7, 9 )AND r.NODE_ID='" + SelectedNodeID + "' AND rerate_dt = ( SELECT MAX(rerate_dt) FROM MIA_REPORT_DET  ) AND shp_wgt IS NOT NULL UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,0,0,0,0, 'IPIE', 0, SVC_ID,0 FROM mia_svc_mstr WHERE EXISTS (SELECT *FROM mia_node_status WHERE( node_id   = NULL OR NULL IS NULL )AND stat_id NOT IN ( 5, 7, 9 ))) where disc_typ_cd='EXPT' GROUP BY ROLLUP (disc_typ_cd, svc_typ, svc_cd) ORDER BY disc_typ_cd, MAX(SVC_ID) + GROUPING_id(disc_typ_cd, svc_typ, svc_cd)) WHERE SERVICE='TOTAL'"

//     var EXPTServiceDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + EXPTServiceDBData);
//     await console.log("Total Row Count DB " + EXPTServiceDBData.length);
//     await console.log("Total Col Count DB " + EXPTServiceDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let EXPTServiceUIData = await element(by.xpath("//*[@id='protract-export-tbl']/tfoot/tr[1]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-export-tbl']/tfoot/tr[1]/td[" + j + "]"));
//             await console.log("UI data " + EXPTServiceUIData);
//             await console.log("DB data " + EXPTServiceDBData[i - 1][j - 1]);
//             if ((EXPTServiceDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = EXPTServiceDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(EXPTServiceDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (EXPTServiceUIData.length == 1) {
//                 if (EXPTServiceUIData.toString().includes("-")) {
//                     EXPTServiceUIData = EXPTServiceUIData.replace("-", "0");
//                 }
//             }
//             if ((EXPTServiceDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if (EXPTServiceUIData.toString().includes(",")) {
//                 EXPTServiceUIData = EXPTServiceUIData.replace(",", "");
//                 EXPTServiceUIData = EXPTServiceUIData.replace(",", "");
//             }
//             else {
//                 if (EXPTServiceUIData.toString().includes("$")) {

//                     EXPTServiceUIData = EXPTServiceUIData.replace("$", "");
//                 }
//                 else {
//                     if (EXPTServiceUIData.toString().includes("%")) {

//                         EXPTServiceUIData = EXPTServiceUIData.replace("%", "");
//                         //await expect(EXPTServiceUIData.trim()).to.equals((EXPTServiceDBData[i - 1][j - 1]).toString());
//                         await expect(EXPTServiceUIData.toString().trim()).to.equals(Number(EXPTServiceDBData[i - 1][j - 1]).toFixed(2).trim());
//                     }
//                 }
//             }
//             if (EXPTServiceUIData.toString().includes("$")) {

//                 EXPTServiceUIData = EXPTServiceUIData.replace("$", "");
//             }
//             if (EXPTServiceUIData.toString().includes("%")) {

//                 EXPTServiceUIData = EXPTServiceUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(EXPTServiceUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (EXPTServiceUIData.toString().includes(".00")) {

//                 EXPTServiceUIData = EXPTServiceUIData.replace(".00", "");
//             }
//             else {
//                 await expect((EXPTServiceDBData[i - 1][j - 1]).toString()).to.equals((EXPTServiceUIData.trim()));
//             }
//             await expect((EXPTServiceDBData[i - 1][j - 1]).toString()).to.equals((EXPTServiceUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('Export Direction total for additional columns should be matching with database table', async function () {

//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Export Total Row Count UI " + rowcount);
//     await console.log("Export Total Count UI " + colcount);

//     let query = "select * from (SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'EXPORT TOTAL', 1, 'TOTAL', 7, 'GRAND TOTAL', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) SERVICE,ROUND((SUM(rev_new_usd)  - SUM(rev_old_usd)) / NULLIF(MAX(new_rev_tot), 0) * 100, 2) prodbydir,CASE WHEN ROUND(SUM(rev_old_usd) / NULLIF(MAX(old_rev_tot), 0), 2) * 100 > 100 THEN 100 ELSE ROUND(SUM(rev_old_usd) / NULLIF(MAX(old_rev_tot), 0), 2) * 100 END old_rev_bydir,CASE WHEN ROUND(SUM(rev_new_usd) / NULLIF(MAX(new_rev_tot), 0), 2) * 100 > 100 THEN 100 ELSE ROUND(SUM(rev_new_usd) / NULLIF(MAX(new_rev_tot), 0), 2) * 100 END new_rev_bydir,ROUND((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(MAX(new_rev_gtot), 0), 2) * 100 prodbytot,ROUND(SUM(rev_old_usd)  / NULLIF(MAX(old_rev_gtot), 0), 2) * 100 old_rev_bytot, ROUND(SUM(rev_new_usd)  / NULLIF(MAX(new_rev_gtot), 0), 2) * 100 new_rev_bytot FROM (SELECT disc_typ_cd,r.svc_cd,rev_new_usd,SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot,SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot,rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE') svc_typ, shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r, mia_node_status s, mia_status_code c WHERE r.NODE_ID    = s.node_id AND c.stat_id = s.stat_id AND c.stat_id NOT IN ( 5, 7, 9 )AND r.NODE_ID='" + SelectedNodeID + "' AND rerate_dt = ( SELECT MAX(rerate_dt) FROM MIA_REPORT_DET  ) AND shp_wgt IS NOT NULL UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,0,0,0,0, 'IPIE', 0, SVC_ID,0 FROM mia_svc_mstr WHERE EXISTS (SELECT *FROM mia_node_status WHERE( node_id   = NULL OR NULL IS NULL )AND stat_id NOT IN ( 5, 7, 9 ))) where disc_typ_cd='EXPT' GROUP BY ROLLUP (disc_typ_cd, svc_typ, svc_cd) ORDER BY disc_typ_cd, MAX(SVC_ID) + GROUPING_id(disc_typ_cd, svc_typ, svc_cd)) WHERE SERVICE='EXPORT TOTAL'"
//     var exportTotalDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + exportTotalDBData);
//     await console.log("Export Total Row Count DB " + exportTotalDBData.length);
//     await console.log("Export Total col Count DB " + exportTotalDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let exportTotalUIData = await element(by.xpath("//*[@id='protract-export-tbl']/tfoot/tr[4]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-export-tbl']/tfoot/tr[4]/td[" + j + "]"));
//             await console.log("UI data " + exportTotalUIData);
//             await console.log("DB data " + exportTotalDBData[i - 1][j - 1]);
//             if ((exportTotalDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((exportTotalDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = exportTotalDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(exportTotalDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (exportTotalUIData.length == 1) {
//                 if (exportTotalUIData.toString().includes("-")) {
//                     exportTotalUIData = exportTotalUIData.replace("-", "0");
//                 }
//             }
//             if (exportTotalUIData.toString().includes(".00")) {
//                 exportTotalUIData = exportTotalUIData.replace(".00", "");
//             }
//             if (exportTotalUIData.toString().includes(",")) {
//                 exportTotalUIData = exportTotalUIData.replace(",", "");
//                 exportTotalUIData = exportTotalUIData.replace(",", "");
//             }
//             if (exportTotalUIData.toString().includes("$")) {

//                 exportTotalUIData = exportTotalUIData.replace("$", "");
//             }
//             if (exportTotalUIData.toString().includes("%")) {

//                 exportTotalUIData = exportTotalUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(exportTotalUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             else {
//                 await expect((exportTotalDBData[i - 1][j - 1]).toString()).to.equals((exportTotalUIData.trim()));
//             }
//             await expect((exportTotalDBData[i - 1][j - 1]).toString()).to.equals((exportTotalUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('By direction Import table data for additional columns should be matching with database table', async function () {
//     let rowcount = await CLRObj.IMPORT_TABLE_Row.all(by.tagName("tr")).count();
//     let colcount = await CLRObj.ImportRowHeader.all(by.tagName("th")).count();

//     await console.log("IMPT Row Count UI " + rowcount);
//     await console.log("IMPT Col Count UI " + colcount);
//     let query = "SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'Discount type Total', 1, 'Service type total', 7, 'GRAND TOTAL', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) SERVICE,ROUND((SUM(rev_new_usd)  - SUM(rev_old_usd)) / NULLIF(MAX(new_rev_tot), 0) * 100, 2) prodbydir,CASE WHEN ROUND(SUM(rev_old_usd) / NULLIF(MAX(old_rev_tot), 0), 2) * 100 > 100 THEN 100 ELSE ROUND(SUM(rev_old_usd) / NULLIF(MAX(old_rev_tot), 0), 2) * 100 END old_rev_bydir,CASE WHEN ROUND(SUM(rev_new_usd) / NULLIF(MAX(new_rev_tot), 0), 2) * 100 > 100 THEN 100 ELSE ROUND(SUM(rev_new_usd) / NULLIF(MAX(new_rev_tot), 0), 2) * 100 END new_rev_bydir,ROUND((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(MAX(new_rev_gtot), 0), 2) * 100 prodbytot,ROUND(SUM(rev_old_usd)  / NULLIF(MAX(old_rev_gtot), 0), 2) * 100 old_rev_bytot, ROUND(SUM(rev_new_usd)  / NULLIF(MAX(new_rev_gtot), 0), 2) * 100 new_rev_bytot FROM (SELECT disc_typ_cd,r.svc_cd,rev_new_usd,SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot,SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot,rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE') svc_typ, shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r, mia_node_status s, mia_status_code c WHERE r.NODE_ID    = s.node_id AND c.stat_id = s.stat_id AND c.stat_id NOT IN ( 5, 7, 9 )AND r.NODE_ID='" + SelectedNodeID + "' AND rerate_dt = ( SELECT MAX(rerate_dt) FROM MIA_REPORT_DET  ) AND shp_wgt IS NOT NULL UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,0,0,0,0, 'IPIE', 0, SVC_ID,0 FROM mia_svc_mstr WHERE EXISTS (SELECT *FROM mia_node_status WHERE( node_id   = NULL OR NULL IS NULL )AND stat_id NOT IN ( 5, 7, 9 ))) where disc_typ_cd='IMPT' GROUP BY (disc_typ_cd, svc_typ, svc_cd) ORDER BY disc_typ_cd, MAX(SVC_ID) + GROUPING_id(disc_typ_cd, svc_typ, svc_cd)"
//     var importTableDBData: string[] = await getInformationFromDB(query);
//     await console.log("Query result " + importTableDBData);
//     await console.log("IMPT Row Count DB " + importTableDBData.length);
//     await console.log("IMPT Col Count DB " + importTableDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let importTableUIData = await element(by.xpath("//*[@id='protract-import-tbl']/tbody/tr[" + i + "]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-import-tbl']/tbody/tr[" + i + "]/td[" + j + "]"));
//             await console.log("UI data " + importTableUIData);
//             await console.log("DB data " + importTableDBData[i - 1][j - 1]);
//             if ((importTableDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((importTableDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = importTableDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(importTableDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (importTableUIData.length == 1) {
//                 if (importTableUIData.toString().includes("-")) {
//                     importTableUIData = importTableUIData.replace("-", "0");
//                 }
//             }
//             if (importTableUIData.toString().includes(",")) {
//                 importTableUIData = importTableUIData.replace(",", "");
//             }
//             if (importTableUIData.toString().includes(".")) {
//                 var length = importTableUIData.toString().split(".")[1].length;
//                 if (length == 1) {
//                     importTableUIData = importTableUIData.toString() + "0";
//                 }
//             }
//             else {
//                 if (importTableUIData.toString().includes("$")) {

//                     importTableUIData = importTableUIData.replace("$", "");
//                 }
//                 else {
//                     if (importTableUIData.toString().includes("%")) {

//                         importTableUIData = importTableUIData.replace("%", "");
//                         await expect(importTableUIData.trim()).to.equals((importTableDBData[i - 1][j - 1]).toString());
//                     }
//                 }
//             }
//             if (importTableUIData.toString().includes("$")) {

//                 importTableUIData = importTableUIData.replace("$", "");
//             }
//             if (importTableUIData.toString().includes("%")) {

//                 importTableUIData = importTableUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(importTableUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (importTableUIData.toString().includes(".00")) {

//                 importTableUIData = importTableUIData.replace(".00", "");
//             }
//             else {
//                 await expect((importTableDBData[i - 1][j - 1]).toString()).to.equals((importTableUIData.trim()));
//             }
//             await expect((importTableDBData[i - 1][j - 1]).toString()).to.equals((importTableUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('Import service total for additional columns should be matching with database table', async function () {
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Total Row Count UI " + rowcount);
//     await console.log("Total Col Count UI " + colcount);

//     let query = "select * from (SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'IMPORT TOTAL', 1, 'TOTAL', 7, 'GRAND TOTAL', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) SERVICE,ROUND((SUM(rev_new_usd)  - SUM(rev_old_usd)) / NULLIF(MAX(new_rev_tot), 0) * 100, 2) prodbydir,CASE WHEN ROUND(SUM(rev_old_usd) / NULLIF(MAX(old_rev_tot), 0), 2) * 100 > 100 THEN 100 ELSE ROUND(SUM(rev_old_usd) / NULLIF(MAX(old_rev_tot), 0), 2) * 100 END old_rev_bydir,CASE WHEN ROUND(SUM(rev_new_usd) / NULLIF(MAX(new_rev_tot), 0), 2) * 100 > 100 THEN 100 ELSE ROUND(SUM(rev_new_usd) / NULLIF(MAX(new_rev_tot), 0), 2) * 100 END new_rev_bydir,ROUND((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(MAX(new_rev_gtot), 0), 2) * 100 prodbytot,ROUND(SUM(rev_old_usd)  / NULLIF(MAX(old_rev_gtot), 0), 2) * 100 old_rev_bytot, ROUND(SUM(rev_new_usd)  / NULLIF(MAX(new_rev_gtot), 0), 2) * 100 new_rev_bytot FROM (SELECT disc_typ_cd,r.svc_cd,rev_new_usd,SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot,SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot,rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE') svc_typ, shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r, mia_node_status s, mia_status_code c WHERE r.NODE_ID    = s.node_id AND c.stat_id = s.stat_id AND c.stat_id NOT IN ( 5, 7, 9 )AND r.NODE_ID='" + SelectedNodeID + "' AND rerate_dt = ( SELECT MAX(rerate_dt) FROM MIA_REPORT_DET  ) AND shp_wgt IS NOT NULL UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,0,0,0,0, 'IPIE', 0, SVC_ID,0 FROM mia_svc_mstr WHERE EXISTS (SELECT *FROM mia_node_status WHERE( node_id   = NULL OR NULL IS NULL )AND stat_id NOT IN ( 5, 7, 9 ))) where disc_typ_cd='IMPT' GROUP BY ROLLUP (disc_typ_cd, svc_typ, svc_cd) ORDER BY disc_typ_cd, MAX(SVC_ID) + GROUPING_id(disc_typ_cd, svc_typ, svc_cd)) WHERE SERVICE='TOTAL'"

//     var iMPTServiceDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + iMPTServiceDBData);
//     await console.log("Total Row Count DB " + iMPTServiceDBData.length);
//     await console.log("Total Col Count DB " + iMPTServiceDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let tHPTServiceUIData = await element(by.xpath("//*[@id='protract-import-tbl']/tfoot/tr[1]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-import-tbl']/tfoot/tr[1]/td[" + j + "]"));
//             await console.log("UI data " + tHPTServiceUIData);
//             await console.log("DB data " + iMPTServiceDBData[i - 1][j - 1]);
//             if ((iMPTServiceDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((iMPTServiceDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = iMPTServiceDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(iMPTServiceDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (tHPTServiceUIData.length == 1) {
//                 if (tHPTServiceUIData.toString().includes("-")) {
//                     tHPTServiceUIData = tHPTServiceUIData.replace("-", "0");
//                 }
//             }
//             if (tHPTServiceUIData.toString().includes(",")) {
//                 tHPTServiceUIData = tHPTServiceUIData.replace(",", "");
//                 tHPTServiceUIData = tHPTServiceUIData.replace(",", "");
//             }
//             else {
//                 if (tHPTServiceUIData.toString().includes("$")) {

//                     tHPTServiceUIData = tHPTServiceUIData.replace("$", "");
//                 }
//                 else {
//                     if (tHPTServiceUIData.toString().includes("%")) {

//                         tHPTServiceUIData = tHPTServiceUIData.replace("%", "");
//                         //await expect(tHPTServiceUIData.trim()).to.equals((iMPTServiceDBData[i - 1][j - 1]).toString());
//                     }
//                 }
//             }
//             if (tHPTServiceUIData.toString().includes("$")) {

//                 tHPTServiceUIData = tHPTServiceUIData.replace("$", "");
//             }
//             if (tHPTServiceUIData.toString().includes("%")) {

//                 tHPTServiceUIData = tHPTServiceUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(tHPTServiceUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (tHPTServiceUIData.toString().includes(".00")) {

//                 tHPTServiceUIData = tHPTServiceUIData.replace(".00", "");
//             }
//             else {
//                 await expect((iMPTServiceDBData[i - 1][j - 1]).toString()).to.equals((tHPTServiceUIData.trim()));
//             }
//             await expect((iMPTServiceDBData[i - 1][j - 1]).toString()).to.equals((tHPTServiceUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('Import Direction total for additional columns should be matching with database table', async function () {
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Import Total Row Count UI " + rowcount);
//     await console.log("Import Total Count UI " + colcount);
//     let query = "select * from (SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'IMPORT TOTAL', 1, 'TOTAL', 7, 'GRAND TOTAL', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) SERVICE,ROUND((SUM(rev_new_usd)  - SUM(rev_old_usd)) / NULLIF(MAX(new_rev_tot), 0) * 100, 2) prodbydir,CASE WHEN ROUND(SUM(rev_old_usd) / NULLIF(MAX(old_rev_tot), 0), 2) * 100 > 100 THEN 100 ELSE ROUND(SUM(rev_old_usd) / NULLIF(MAX(old_rev_tot), 0), 2) * 100 END old_rev_bydir,CASE WHEN ROUND(SUM(rev_new_usd) / NULLIF(MAX(new_rev_tot), 0), 2) * 100 > 100 THEN 100 ELSE ROUND(SUM(rev_new_usd) / NULLIF(MAX(new_rev_tot), 0), 2) * 100 END new_rev_bydir,ROUND((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(MAX(new_rev_gtot), 0), 2) * 100 prodbytot,ROUND(SUM(rev_old_usd)  / NULLIF(MAX(old_rev_gtot), 0), 2) * 100 old_rev_bytot, ROUND(SUM(rev_new_usd)  / NULLIF(MAX(new_rev_gtot), 0), 2) * 100 new_rev_bytot FROM (SELECT disc_typ_cd,r.svc_cd,rev_new_usd,SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot,SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot,rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE') svc_typ, shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r, mia_node_status s, mia_status_code c WHERE r.NODE_ID    = s.node_id AND c.stat_id = s.stat_id AND c.stat_id NOT IN ( 5, 7, 9 )AND r.NODE_ID='" + SelectedNodeID + "' AND rerate_dt = ( SELECT MAX(rerate_dt) FROM MIA_REPORT_DET  ) AND shp_wgt IS NOT NULL UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,0,0,0,0, 'IPIE', 0, SVC_ID,0 FROM mia_svc_mstr WHERE EXISTS (SELECT *FROM mia_node_status WHERE( node_id   = NULL OR NULL IS NULL )AND stat_id NOT IN ( 5, 7, 9 ))) where disc_typ_cd='IMPT' GROUP BY ROLLUP (disc_typ_cd, svc_typ, svc_cd) ORDER BY disc_typ_cd, MAX(SVC_ID) + GROUPING_id(disc_typ_cd, svc_typ, svc_cd)) WHERE SERVICE='IMPORT TOTAL'"

//     var importTotalDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + importTotalDBData);
//     await console.log("Import Total Row Count DB " + importTotalDBData.length);
//     await console.log("Import Total col Count DB " + importTotalDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let importTotalUIData = await element(by.xpath("//*[@id='protract-import-tbl']/tfoot/tr[4]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-import-tbl']/tfoot/tr[4]/td[" + j + "]"));
//             await console.log("UI data " + importTotalUIData);
//             await console.log("DB data " + importTotalDBData[i - 1][j - 1]);
//             if ((importTotalDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((importTotalDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = importTotalDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(importTotalDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (importTotalUIData.length == 1) {
//                 if (importTotalUIData.toString().includes("-")) {
//                     importTotalUIData = importTotalUIData.replace("-", "0");
//                 }
//             }
//             if (importTotalUIData.toString().includes(",")) {
//                 importTotalUIData = importTotalUIData.replace(",", "");
//                 importTotalUIData = importTotalUIData.replace(",", "");
//             }
//             else {
//                 if (importTotalUIData.toString().includes("$")) {

//                     importTotalUIData = importTotalUIData.replace("$", "");
//                 }
//                 else {
//                     if (importTotalUIData.toString().includes("%")) {

//                         importTotalUIData = importTotalUIData.replace("%", "");
//                         //await expect(importTotalUIData.trim()).to.equals((importTotalDBData[i - 1][j - 1]).toString());
//                     }
//                 }
//             }
//             if (importTotalUIData.toString().includes("$")) {

//                 importTotalUIData = importTotalUIData.replace("$", "");
//             }
//             if (importTotalUIData.toString().includes("%")) {

//                 importTotalUIData = importTotalUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(importTotalUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (importTotalUIData.toString().includes(".00")) {

//                 importTotalUIData = importTotalUIData.replace(".00", "");
//             }
//             else {
//                 await expect((importTotalDBData[i - 1][j - 1]).toString()).to.equals((importTotalUIData.trim()));
//             }
//             await expect((importTotalDBData[i - 1][j - 1]).toString()).to.equals((importTotalUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('By direction Third Party table data for additional columns should be matching with database table', async function () {
//     let rowcount = await CLRObj.THPT_TABLE_Row.all(by.tagName("tr")).count();
//     let colcount = await CLRObj.THPTRowHeader.all(by.tagName("th")).count();

//     await console.log("THPT Row Count UI " + rowcount);
//     await console.log("THPT Col Count UI " + colcount);

//     let query = "SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'Discount type Total', 1, 'Service type total', 7, 'GRAND TOTAL', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) SERVICE,ROUND((SUM(rev_new_usd)  - SUM(rev_old_usd)) / NULLIF(MAX(new_rev_tot), 0) * 100, 2) prodbydir,CASE WHEN ROUND(SUM(rev_old_usd) / NULLIF(MAX(old_rev_tot), 0), 2) * 100 > 100 THEN 100 ELSE ROUND(SUM(rev_old_usd) / NULLIF(MAX(old_rev_tot), 0), 2) * 100 END old_rev_bydir,CASE WHEN ROUND(SUM(rev_new_usd) / NULLIF(MAX(new_rev_tot), 0), 2) * 100 > 100 THEN 100 ELSE ROUND(SUM(rev_new_usd) / NULLIF(MAX(new_rev_tot), 0), 2) * 100 END new_rev_bydir,ROUND((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(MAX(new_rev_gtot), 0), 2) * 100 prodbytot,ROUND(SUM(rev_old_usd)  / NULLIF(MAX(old_rev_gtot), 0), 2) * 100 old_rev_bytot, ROUND(SUM(rev_new_usd)  / NULLIF(MAX(new_rev_gtot), 0), 2) * 100 new_rev_bytot FROM (SELECT disc_typ_cd,r.svc_cd,rev_new_usd,SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot,SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot,rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE') svc_typ, shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r, mia_node_status s, mia_status_code c WHERE r.NODE_ID    = s.node_id AND c.stat_id = s.stat_id AND c.stat_id NOT IN ( 5, 7, 9 )AND r.NODE_ID='" + SelectedNodeID + "' AND rerate_dt = ( SELECT MAX(rerate_dt) FROM MIA_REPORT_DET  ) AND shp_wgt IS NOT NULL UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,0,0,0,0, 'IPIE', 0, SVC_ID,0 FROM mia_svc_mstr WHERE EXISTS (SELECT *FROM mia_node_status WHERE( node_id   = NULL OR NULL IS NULL )AND stat_id NOT IN ( 5, 7, 9 ))) where disc_typ_cd='G3PP' GROUP BY (disc_typ_cd, svc_typ, svc_cd) ORDER BY disc_typ_cd, MAX(SVC_ID) + GROUPING_id(disc_typ_cd, svc_typ, svc_cd)"

//     var thptTableDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + thptTableDBData);
//     await console.log("THPT Row Count DB " + thptTableDBData.length);
//     await console.log("THPT Col Count DB " + thptTableDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let thptTableUIData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tbody/tr[" + i + "]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tbody/tr[" + i + "]/td[" + j + "]"));
//             await console.log("UI data " + thptTableUIData);
//             await console.log("DB data " + thptTableDBData[i - 1][j - 1]);

//             if ((thptTableDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if (thptTableUIData.length == 1) {
//                 if (thptTableUIData.toString().includes("-")) {
//                     thptTableUIData = thptTableUIData.replace("-", "0");
//                 }
//             }
//             if ((thptTableDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = thptTableDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(thptTableDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (thptTableUIData.toString().includes(",")) {
//                 thptTableUIData = thptTableUIData.replace(",", "");
//             }
//             else {
//                 if (thptTableUIData.toString().includes("$")) {

//                     thptTableUIData = thptTableUIData.replace("$", "");
//                 }
//                 else {
//                     if (thptTableUIData.toString().includes("%")) {

//                         thptTableUIData = thptTableUIData.replace("%", "");
//                         await expect(thptTableUIData.trim()).to.equals((thptTableDBData[i - 1][j - 1])).toString();
//                     }
//                 }
//             }
//             if (thptTableUIData.toString().includes("$")) {

//                 thptTableUIData = thptTableUIData.replace("$", "");
//             }
//             if (thptTableUIData.toString().includes("%")) {

//                 thptTableUIData = thptTableUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(thptTableUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (thptTableUIData.toString().includes(".00")) {

//                 thptTableUIData = thptTableUIData.replace(".00", "");
//             }

//             else {
//                 await expect((thptTableDBData[i - 1][j - 1]).toString()).to.equals((thptTableUIData.trim()));
//             }
//             await expect((thptTableDBData[i - 1][j - 1]).toString()).to.equals((thptTableUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('Third Party service total for additional columns should be matching with database table', async function () {
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Total Row Count UI " + rowcount);
//     await console.log("Total Col Count UI " + colcount);

//     let query = "select * from (SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'THIRD PARTY TOTAL', 1, 'TOTAL', 7, 'GRAND TOTAL', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) SERVICE,ROUND((SUM(rev_new_usd)  - SUM(rev_old_usd)) / NULLIF(MAX(new_rev_tot), 0) * 100, 2) prodbydir,CASE WHEN ROUND(SUM(rev_old_usd) / NULLIF(MAX(old_rev_tot), 0), 2) * 100 > 100 THEN 100 ELSE ROUND(SUM(rev_old_usd) / NULLIF(MAX(old_rev_tot), 0), 2) * 100 END old_rev_bydir,CASE WHEN ROUND(SUM(rev_new_usd) / NULLIF(MAX(new_rev_tot), 0), 2) * 100 > 100 THEN 100 ELSE ROUND(SUM(rev_new_usd) / NULLIF(MAX(new_rev_tot), 0), 2) * 100 END new_rev_bydir,ROUND((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(MAX(new_rev_gtot), 0), 2) * 100 prodbytot,ROUND(SUM(rev_old_usd)  / NULLIF(MAX(old_rev_gtot), 0), 2) * 100 old_rev_bytot, ROUND(SUM(rev_new_usd)  / NULLIF(MAX(new_rev_gtot), 0), 2) * 100 new_rev_bytot FROM (SELECT disc_typ_cd,r.svc_cd,rev_new_usd,SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot,SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot,rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE') svc_typ, shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r, mia_node_status s, mia_status_code c WHERE r.NODE_ID    = s.node_id AND c.stat_id = s.stat_id AND c.stat_id NOT IN ( 5, 7, 9 )AND r.NODE_ID='" + SelectedNodeID + "' AND rerate_dt = ( SELECT MAX(rerate_dt) FROM MIA_REPORT_DET  ) AND shp_wgt IS NOT NULL UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,0,0,0,0, 'IPIE', 0, SVC_ID,0 FROM mia_svc_mstr WHERE EXISTS (SELECT *FROM mia_node_status WHERE( node_id   = NULL OR NULL IS NULL )AND stat_id NOT IN ( 5, 7, 9 ))) where disc_typ_cd='G3PP' GROUP BY ROLLUP (disc_typ_cd, svc_typ, svc_cd) ORDER BY disc_typ_cd, MAX(SVC_ID) + GROUPING_id(disc_typ_cd, svc_typ, svc_cd)) WHERE SERVICE='TOTAL'"

//     var tHPTServiceDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + tHPTServiceDBData);
//     await console.log("Total Row Count DB " + tHPTServiceDBData.length);
//     await console.log("Total Col Count DB " + tHPTServiceDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let tHPTServiceUIData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tfoot/tr[1]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tfoot/tr[1]/td[" + j + "]"));
//             await console.log("UI data " + tHPTServiceUIData);
//             await console.log("DB data " + tHPTServiceDBData[i - 1][j - 1]);

//             if ((tHPTServiceDBData[i - 1][j - 1]) == null) {
//                 await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if (tHPTServiceUIData.length == 1) {
//                 if (tHPTServiceUIData.toString().includes("-")) {
//                     tHPTServiceUIData = tHPTServiceUIData.replace("-", "0");
//                 }
//             }
//             if ((tHPTServiceDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = tHPTServiceDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(tHPTServiceDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (tHPTServiceUIData.toString().includes(",")) {
//                 tHPTServiceUIData = tHPTServiceUIData.replace(",", "");
//                 tHPTServiceUIData = tHPTServiceUIData.replace(",", "");
//             }
//             else {
//                 if (tHPTServiceUIData.toString().includes("$")) {

//                     tHPTServiceUIData = tHPTServiceUIData.replace("$", "");
//                 }
//                 else {
//                     if (tHPTServiceUIData.toString().includes("%")) {

//                         tHPTServiceUIData = tHPTServiceUIData.replace("%", "");
//                         await expect(tHPTServiceUIData.trim()).to.equals((tHPTServiceDBData[i - 1][j - 1]).toString());
//                     }
//                 }
//             }
//             if (tHPTServiceUIData.toString().includes("$")) {

//                 tHPTServiceUIData = tHPTServiceUIData.replace("$", "");
//             }
//             if (tHPTServiceUIData.toString().includes("%")) {

//                 tHPTServiceUIData = tHPTServiceUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(tHPTServiceUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (tHPTServiceUIData.toString().includes(".00")) {

//                 tHPTServiceUIData = tHPTServiceUIData.replace(".00", "");
//             }
//             else {
//                 await expect((tHPTServiceDBData[i - 1][j - 1]).toString()).to.equals((tHPTServiceUIData.trim()));
//             }
//             await expect((tHPTServiceDBData[i - 1][j - 1]).toString()).to.equals((tHPTServiceUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('Third Party Direction total for additional columns should be matching with database table', async function () {
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Third Party Total Row Count UI " + rowcount);
//     await console.log("Third Party Total Count UI " + colcount);

//     let query = "select * from (SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'THIRD PARTY TOTAL', 1, 'TOTAL', 7, 'GRAND TOTAL', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) SERVICE,ROUND((SUM(rev_new_usd)  - SUM(rev_old_usd)) / NULLIF(MAX(new_rev_tot), 0) * 100, 2) prodbydir,CASE WHEN ROUND(SUM(rev_old_usd) / NULLIF(MAX(old_rev_tot), 0), 2) * 100 > 100 THEN 100 ELSE ROUND(SUM(rev_old_usd) / NULLIF(MAX(old_rev_tot), 0), 2) * 100 END old_rev_bydir,CASE WHEN ROUND(SUM(rev_new_usd) / NULLIF(MAX(new_rev_tot), 0), 2) * 100 > 100 THEN 100 ELSE ROUND(SUM(rev_new_usd) / NULLIF(MAX(new_rev_tot), 0), 2) * 100 END new_rev_bydir,ROUND((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(MAX(new_rev_gtot), 0), 2) * 100 prodbytot,ROUND(SUM(rev_old_usd)  / NULLIF(MAX(old_rev_gtot), 0), 2) * 100 old_rev_bytot, ROUND(SUM(rev_new_usd)  / NULLIF(MAX(new_rev_gtot), 0), 2) * 100 new_rev_bytot FROM (SELECT disc_typ_cd,r.svc_cd,rev_new_usd,SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot,SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot,rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE') svc_typ, shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r, mia_node_status s, mia_status_code c WHERE r.NODE_ID    = s.node_id AND c.stat_id = s.stat_id AND c.stat_id NOT IN ( 5, 7, 9 )AND r.NODE_ID='" + SelectedNodeID + "' AND rerate_dt = ( SELECT MAX(rerate_dt) FROM MIA_REPORT_DET  ) AND shp_wgt IS NOT NULL UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,0,0,0,0, 'IPIE', 0, SVC_ID,0 FROM mia_svc_mstr WHERE EXISTS (SELECT *FROM mia_node_status WHERE( node_id   = NULL OR NULL IS NULL )AND stat_id NOT IN ( 5, 7, 9 ))) where disc_typ_cd='G3PP' GROUP BY ROLLUP (disc_typ_cd, svc_typ, svc_cd) ORDER BY disc_typ_cd, MAX(SVC_ID) + GROUPING_id(disc_typ_cd, svc_typ, svc_cd)) WHERE SERVICE='THIRD PARTY TOTAL'"

//     var tHPTTotalDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + tHPTTotalDBData);
//     await console.log("Third Party Total Row Count DB " + tHPTTotalDBData.length);
//     await console.log("Third Party Total col Count DB " + tHPTTotalDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let tHPTTotalUIData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tfoot/tr[4]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-third Party-tbl']/tfoot/tr[4]/td[" + j + "]"));
//             await console.log("UI data " + tHPTTotalUIData);
//             await console.log("DB data " + tHPTTotalDBData[i - 1][j - 1]);

//             if ((tHPTTotalDBData[i - 1][j - 1]) == null) {
//                 await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if (tHPTTotalUIData.length == 1) {
//                 if (tHPTTotalUIData.toString().includes("-")) {
//                     tHPTTotalUIData = tHPTTotalUIData.replace("-", "0");
//                 }
//             }
//             if ((tHPTTotalDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = tHPTTotalDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(tHPTTotalDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (tHPTTotalUIData.toString().includes(",")) {
//                 tHPTTotalUIData = tHPTTotalUIData.replace(",", "");
//                 tHPTTotalUIData = tHPTTotalUIData.replace(",", "");
//             }
//             else {
//                 if (tHPTTotalUIData.toString().includes("$")) {

//                     tHPTTotalUIData = tHPTTotalUIData.replace("$", "");
//                 }
//                 else {
//                     if (tHPTTotalUIData.toString().includes("%")) {

//                         tHPTTotalUIData = tHPTTotalUIData.replace("%", "");
//                         await expect(tHPTTotalUIData.trim()).to.equals((tHPTTotalDBData[i - 1][j - 1]).toString());
//                     }
//                 }
//             }
//             if (tHPTTotalUIData.toString().includes("$")) {

//                 tHPTTotalUIData = tHPTTotalUIData.replace("$", "");
//             }
//             if (tHPTTotalUIData.toString().includes("%")) {

//                 tHPTTotalUIData = tHPTTotalUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(tHPTTotalUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (tHPTTotalUIData.toString().includes(".00")) {

//                 tHPTTotalUIData = tHPTTotalUIData.replace(".00", "");
//             }
//             else {
//                 await expect((tHPTTotalDBData[i - 1][j - 1]).toString()).to.equals((tHPTTotalUIData.trim()));
//             }
//             await expect((tHPTTotalDBData[i - 1][j - 1]).toString()).to.equals((tHPTTotalUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('Grand Total for additional columns should be matching with database table', async function () {
//     let rowcount = 1;
//     let colcount = await CLRObj.ExporRowHeader.all(by.tagName("th")).count();

//     await console.log("Grand Total Row Count UI " + rowcount);
//     await console.log("Grand Total Count UI " + colcount);

//     let query = "SELECT * FROM (SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'THIRD PARTY TOTAL', 1, 'TOTAL', 7, 'GRAND TOTAL', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) SERVICE,ROUND((SUM(rev_new_usd)  - SUM(rev_old_usd)) / NULLIF(MAX(new_rev_tot), 0) * 100, 2) prodbydir,CASE WHEN ROUND(SUM(rev_old_usd) / NULLIF(MAX(old_rev_tot), 0), 2) * 100 > 100 THEN 100 ELSE ROUND(SUM(rev_old_usd) / NULLIF(MAX(old_rev_tot), 0), 2) * 100 END old_rev_bydir,CASE WHEN ROUND(SUM(rev_new_usd) / NULLIF(MAX(new_rev_tot), 0), 2) * 100 > 100 THEN 100 ELSE ROUND(SUM(rev_new_usd) / NULLIF(MAX(new_rev_tot), 0), 2) * 100 END new_rev_bydir,ROUND((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(MAX(new_rev_gtot), 0), 2) * 100 prodbytot,ROUND(SUM(rev_old_usd)  / NULLIF(MAX(old_rev_gtot), 0), 2) * 100 old_rev_bytot, ROUND(SUM(rev_new_usd)  / NULLIF(MAX(new_rev_gtot), 0), 2) * 100 new_rev_bytot FROM (SELECT disc_typ_cd,r.svc_cd,rev_new_usd,SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot,SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot,rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE') svc_typ, shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r, mia_node_status s, mia_status_code c WHERE r.NODE_ID    = s.node_id AND c.stat_id = s.stat_id AND c.stat_id NOT IN ( 5, 7, 9 )AND r.NODE_ID='" + SelectedNodeID + "' AND rerate_dt = ( SELECT MAX(rerate_dt) FROM MIA_REPORT_DET  ) AND shp_wgt IS NOT NULL UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,0,0,0,0, 'IPIE', 0, SVC_ID,0 FROM mia_svc_mstr WHERE EXISTS (SELECT *FROM mia_node_status WHERE( node_id   = NULL OR NULL IS NULL )AND stat_id NOT IN ( 5, 7, 9 ))) GROUP BY ROLLUP(disc_typ_cd, svc_typ, svc_cd) ORDER BY disc_typ_cd, MAX(SVC_ID) + GROUPING_id(disc_typ_cd, svc_typ, svc_cd)) WHERE SERVICE='GRAND TOTAL'"
//     var grandTotalDBData: string[] = await getInformationFromDB(query);
//     await console.log("Query result " + grandTotalDBData);
//     await console.log("Grand Total Row Count DB " + grandTotalDBData.length);
//     await console.log("Grand Total col Count DB " + grandTotalDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let grandTotalUIData = await element(by.xpath("//*[@id='view-one-grandttl']/tfoot/tr/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='view-one-grandttl']/tfoot/tr/td[" + j + "]"));

//             await console.log("UI data " + grandTotalUIData);
//             await console.log("DB data " + grandTotalDBData[i - 1][j - 1]);
//             if ((grandTotalDBData[i - 1][j - 1]) == null) {
//                 await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if (grandTotalUIData.length == 1) {
//                 if (grandTotalUIData.toString().includes("-")) {
//                     grandTotalUIData = grandTotalUIData.replace("-", "0");
//                 }
//             }
//             if ((grandTotalDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = grandTotalDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(grandTotalDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (grandTotalUIData.toString().includes(",")) {
//                 grandTotalUIData = grandTotalUIData.replace(",", "");
//             }
//             if (grandTotalUIData.toString().includes("$")) {

//                 grandTotalUIData = grandTotalUIData.replace("$", "");
//             }
//             if (grandTotalUIData.toString().includes("%")) {

//                 grandTotalUIData = grandTotalUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(grandTotalUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             if (grandTotalUIData.toString().includes(".00")) {

//                 grandTotalUIData = grandTotalUIData.replace(".00", "");
//             }
//             else {
//                 await expect((grandTotalDBData[i - 1][j - 1]).toString()).to.equals((grandTotalUIData.trim()));
//             }
//             await expect((grandTotalDBData[i - 1][j - 1]).toString()).to.equals((grandTotalUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('DB Code Reusable', async function () {
//     let query = "SELECT DECODE(GROUPING_id(disc_typ_cd, svc_typ, svc_cd), 3, 'Discount type Total', 1, 'Service type total', 7, 'Grand total', svc_cd || DECODE(svc_cd, 'IP', '(2P)', 'IPE', '(2A)')) SERVICE,SUM(shp_count) shp_count,SUM(shp_wgt) tot_weight, SUM(rev_old_usd) old_revenue, SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd) - SUM(rev_old_usd) ) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(SUM(rev_old_usd), 0) * 100), 2) PER_VARIANCE FROM(SELECT disc_typ_cd,r.svc_cd, rev_new_usd,SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot, SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot,rev_old_usd,DECODE(SUBSTR(r.svc_cd, 1, 2), 'IP', 'IPIE', 'IE', 'IPIE') svc_typ,shp_wgt,0 SVC_ID,1 shp_count FROM MIA_REPORT_DET r,mia_node_status s,mia_status_code c WHERE r.NODE_ID = s.node_id    AND c.stat_id    = s.stat_id  AND c.stat_id NOT  IN ( 5, 7, 9 ) AND r.NODE_ID='" + SelectedNodeID + "' AND rerate_dt =  ( SELECT MAX(rerate_dt) FROM MIA_REPORT_DET)UNION ALL SELECT disc_typ_cd, SVC_CD,0,0,0,0,0,0, 'IPIE', 0,SVC_ID,0 FROM mia_svc_mstr WHERE  EXISTS (SELECT *FROM mia_node_status WHERE( node_id  = NULL OR NULL IS NULL )  AND stat_id NOT IN ( 5, 7, 9 )))where disc_typ_cd='IMPT'  GROUP BY (disc_typ_cd, svc_typ, svc_cd) ORDER BY disc_typ_cd,MAX(SVC_ID) + GROUPING_id(disc_typ_cd, svc_typ, svc_cd)"
//     //let exportTableUIData=await element(by.xpath("//*[@id='protract-import-tbl']/tbody/tr[" + i + "]/td[" + j + "]")).getText();
//     //await dbValidation(query,exportTableUIData);
// });
// When('User select CountryID and clicks on any direction button', async function () {
//     let query = TestData.userData.OracleQuery.ExportNodeID;
//     var EXPTNodeID: string[] = await getInformationFromDB(query);
//     await console.log("Export Country ID :" + EXPTNodeID[0].toString());
//     await CLRObj.NODE_ID.sendKeys(EXPTNodeID[0].toString());
//     await browser.sleep(1000);
//     await CLRObj.NODE_ID.sendKeys(protractor.Key.ENTER);
//     await browser.wait(until.elementToBeClickable(CLRObj.EXPORT), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.EXPORT.click();
//     await browser.sleep(1000);
// });
// Then('User should be navigate on View2 for selected direction', async function () {
//     await browser.actions().mouseMove(CLRObj.View2Header).perform();
//     await browser.wait(until.elementToBeClickable(CLRObj.View2Header), 20000, 'Element taking too long to appear in the DOM');
//     await CLRObj.View2Header.click();
//     await browser.sleep(1000);

//     await CLRObj.View2Header.getText().then(function (ViewTwoHeader) {

//         console.log("View2 Title: " + ViewTwoHeader);

//         expect("By Weight Breaks(only show data with shipping records)").to.equal(ViewTwoHeader.valueOf());

//     });
// });
// Then('User should see view2 table data should be matching with database table', async function () {
//     let rowcount = await CLRObj.View2_TABLE_Row.all(by.tagName("tr")).count();
//     let colcount = await CLRObj.WB_RowHeader.all(by.tagName("th")).count();
//     await console.log("View2 Row Count UI " + rowcount);
//     await console.log("View2 Col Count UI " + colcount);
//     SelectedNodeID = await CLRObj.NODE_ID_HYPERLINK.getText();
//     await console.log("Selected NodeID  : " + SelectedNodeID);
//     let query = "with test as (SELECT wgt_typ_cd,row_type,tot_shipment,tot_weight,old_revenue,new_revenue,prodbydir,old_rev_bydir,new_rev_bydir,prodbytot,old_rev_bytot,new_rev_bytot, wgt_id,var_pct FROM(SELECT wt_range,svc_typ,NVL(wgt_typ_cd,'TOTALIP') wgt_typ_cd,DECODE(GROUPING_id(svc_typ, wgt_typ_cd, wt_range), 7, 'Discount type total', 3, '', wt_range) row_type, COUNT(*) tot_shipment,sum(shp_wgt) tot_weight,SUM(rev_old_usd) old_revenue,SUM(rev_new_usd) new_revenue, to_char(ROUND(NVL(((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(SUM(rev_old_usd), 0)) * 100, 0),2),999999.99) var_pct, ROUND((SUM(rev_new_usd) - SUM(rev_old_usd))/NULLIF(MAX(new_rev_tot),0),2)*100 prodbydir, ROUND(SUM(rev_old_usd)  /NULLIF(MAX(old_rev_tot),0),2)*100 old_rev_bydir, ROUND(SUM(rev_new_usd)  /NULLIF(MAX(new_rev_tot),0),2)*100 new_rev_bydir,ROUND((SUM(rev_new_usd) - SUM(rev_old_usd))/NULLIF(MAX(new_rev_gtot),0),2)*100 prodbytot, ROUND(SUM(rev_old_usd)  /NULLIF(MAX(old_rev_gtot),0),2)*100 old_rev_bytot,ROUND(SUM(rev_new_usd)  /NULLIF(MAX(new_rev_gtot),0),2)*100 new_rev_bytot, MAX(svc_id) wgt_id FROM (SELECT r.*, SUBSTR(svc_cd, 1, 2) svc_typ,(SELECT SVC_ID FROM mia_svc_mstr m WHERE m.svc_cd   =r.svc_cd AND m.disc_typ_cd=r.disc_typ_cd ) svc_id, SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot,SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot, SUM(rev_new_usd) over () new_rev_gtot FROM MIA_REPORT_DET r WHERE node_id = '" + SelectedNodeID + "' ) WHERE disc_typ_cd = 'EXPT' GROUP BY rollup(svc_typ, wgt_typ_cd, wt_range)HAVING gROUPING_id(svc_typ, wgt_typ_cd, wt_range) IN ( 0, 3, 7 ) ORDER BY wgt_id + GROUPING_id(svc_typ, wgt_typ_cd, wt_range),3,4) A WHERE SVC_TYP='IP' UNION SELECT wgt_typ_cd,row_type,tot_shipment,tot_weight,old_revenue,new_revenue,prodbydir,old_rev_bydir,new_rev_bydir,prodbytot,old_rev_bytot,new_rev_bytot,wgt_id,var_pct FROM(SELECT wt_range,svc_typ,NVL(wgt_typ_cd,'IETOTAL') wgt_typ_cd,DECODE(GROUPING_id(svc_typ, wgt_typ_cd, wt_range), 7, 'Discount type total', 3, '', wt_range) row_type,COUNT(*) tot_shipment,SUM(shp_wgt) tot_weight,SUM(rev_old_usd) old_revenue,SUM(rev_new_usd) new_revenue,ROUND((SUM(rev_new_usd) - SUM(rev_old_usd))/NULLIF(MAX(new_rev_tot),0),2)*100 prodbydir,ROUND(SUM(rev_old_usd)  /NULLIF(MAX(old_rev_tot),0),2)*100 old_rev_bydir,ROUND(SUM(rev_new_usd)  /NULLIF(MAX(new_rev_tot),0),2)*100 new_rev_bydir,to_char(ROUND(NVL(((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(SUM(rev_old_usd), 0)) * 100, 0),2),999999.99) var_pct, ROUND((SUM(rev_new_usd) - SUM(rev_old_usd))/NULLIF(MAX(new_rev_gtot),0),2)*100 prodbytot,ROUND(SUM(rev_old_usd)  /NULLIF(MAX(old_rev_gtot),0),2)*100 old_rev_bytot, ROUND(SUM(rev_new_usd)  /NULLIF(MAX(new_rev_gtot),0),2)*100 new_rev_bytot,MAX(svc_id) wgt_id FROM (SELECT r.*,SUBSTR(svc_cd, 1, 2) svc_typ,(SELECT SVC_ID FROM mia_svc_mstr m WHERE m.svc_cd   =r.svc_cd AND m.disc_typ_cd=r.disc_typ_cd) svc_id,SUM(rev_old_usd) over (partition BY disc_typ_cd) old_rev_tot,SUM(rev_old_usd) over () old_rev_gtot,SUM(rev_new_usd) over (partition BY disc_typ_cd) new_rev_tot,SUM(rev_new_usd) over () new_rev_gtot FROM MIA_REPORT_DET r WHERE node_id = '" + SelectedNodeID + "') WHERE disc_typ_cd = 'EXPT' GROUP BY rollup(svc_typ, wgt_typ_cd, wt_range)HAVING gROUPING_id(svc_typ, wgt_typ_cd, wt_range) IN ( 0, 3, 7 )ORDER BY wgt_id + GROUPING_id(svc_typ, wgt_typ_cd, wt_range),3,4) A WHERE SVC_TYP='IE'ORDER BY WGT_ID)select wgt_typ_cd,row_type,TO_CHAR(tot_shipment,999990.99) tot_shipment,TO_CHAR(tot_weight,999990.99) tot_weight,TO_CHAR(old_revenue,999990.9900) old_revenue,TO_CHAR(new_revenue,999990.9900) new_revenue,TO_CHAR((NEW_REVENUE-OLD_REVENUE),99990.99) REVENUE_VARIANCE,TO_CHAR(var_pct,99990.99) var_pct from test"
//     var view2TableDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + view2TableDBData);
//     await console.log("View2 Row Count DB " + view2TableDBData.length);
//     await console.log("View2 Col Count DB " + view2TableDBData[0].length);
//     let valDBdata = "";
//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {

//             let view2TableUIData = await element(by.xpath("//*[@id='protract-wb']/tbody/tr[" + i + "]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-wb']/tbody/tr[" + i + "]/td[" + j + "]"));
//             await console.log("UI data " + view2TableUIData);
//             await console.log("DB data " + view2TableDBData[i - 1][j - 1]);
//             if ((view2TableDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             valDBdata = (view2TableDBData[i - 1][j - 1]).toString().trim();
//             if (valDBdata == "TOTALIP") {
//                 valDBdata = valDBdata.replace("TOTALIP", "IP TOTAL");
//             }
//             if (valDBdata == "IETOTAL") {
//                 valDBdata = valDBdata.replace("IETOTAL", "IE TOTAL");
//             }
//             if (view2TableUIData.length == 1) {
//                 if (view2TableUIData.toString().includes("-")) {
//                     view2TableUIData = view2TableUIData.replace("-", "0");
//                 }
//             }
//             if (view2TableUIData.toString().includes("-0.00")) {
//                 view2TableUIData = view2TableUIData.replace("-0.00", "0.00");
//             }

//             if (view2TableUIData.toString().includes(",")) {
//                 view2TableUIData = view2TableUIData.replace(",", "");
//             }
//             else {
//                 if (view2TableUIData.toString().includes("$")) {
//                     view2TableUIData = view2TableUIData.replace("$", "");
//                 }
//                 else {
//                     if (view2TableUIData.toString().includes("%")) {
//                         view2TableUIData = view2TableUIData.replace("%", "");
//                         await expect(view2TableUIData.toString().trim()).to.equals(Number(view2TableDBData[i - 1][j - 1]).toFixed(2).trim());
//                     }
//                 }
//             }
//             if (view2TableUIData.toString().includes("$")) {

//                 view2TableUIData = view2TableUIData.replace("$", "");
//             }
//             if (view2TableUIData.toString().includes("%")) {

//                 view2TableUIData = view2TableUIData.replace("%", "");
//             }
//             else {
//                 await expect((valDBdata).toString().trim()).to.equals((view2TableUIData.trim()));
//             }
//             await expect((valDBdata).toString().trim()).to.equals((view2TableUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('User should see view2 Export Total data should be matching with database table', async function () {
//     let rowcount = await CLRObj.View2_Export_Total.all(by.tagName("tr")).count();
//     let colcount = await CLRObj.WB_RowHeader.all(by.tagName("th")).count();
//     await console.log("View2 Row Count UI " + rowcount);
//     await console.log("View2 Col Count UI " + colcount);
//     SelectedNodeID = await CLRObj.NODE_ID_HYPERLINK.getText();
//     await console.log("Selected NodeID  : " + SelectedNodeID);
//     let query = " "
//     var view2TableDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + view2TableDBData);
//     await console.log("View2 Row Count DB " + view2TableDBData.length);
//     await console.log("View2 Col Count DB " + view2TableDBData[0].length);
//     let valDBdata = "";
//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {

//             let view2TableUIData = await element(by.xpath("//*[@id='protract-wb']/tbody/tr[" + i + "]/td[" + j + "]")).getText();
//             let uiData = await element(by.xpath("//*[@id='protract-wb']/tbody/tr[" + i + "]/td[" + j + "]"));
//             await console.log("UI data " + view2TableUIData);
//             await console.log("DB data " + view2TableDBData[i - 1][j - 1]);
//             if ((view2TableDBData[i - 1][j - 1]) == null) {
//                 //await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             valDBdata = (view2TableDBData[i - 1][j - 1]).toString().trim();
//             if (valDBdata == "TOTALIP") {
//                 valDBdata = valDBdata.replace("TOTALIP", "IP TOTAL");
//             }
//             if (valDBdata == "IETOTAL") {
//                 valDBdata = valDBdata.replace("IETOTAL", "IE TOTAL");
//             }
//             if (view2TableUIData.length == 1) {
//                 if (view2TableUIData.toString().includes("-")) {
//                     view2TableUIData = view2TableUIData.replace("-", "0");
//                 }
//             }
//             if (view2TableUIData.toString().includes("-0.00")) {
//                 view2TableUIData = view2TableUIData.replace("-0.00", "0.00");
//             }

//             if (view2TableUIData.toString().includes(",")) {
//                 view2TableUIData = view2TableUIData.replace(",", "");
//             }
//             else {
//                 if (view2TableUIData.toString().includes("$")) {
//                     view2TableUIData = view2TableUIData.replace("$", "");
//                 }
//                 else {
//                     if (view2TableUIData.toString().includes("%")) {
//                         view2TableUIData = view2TableUIData.replace("%", "");
//                         await expect(view2TableUIData.toString().trim()).to.equals(Number(view2TableDBData[i - 1][j - 1]).toFixed(2).trim());
//                     }
//                 }
//             }
//             if (view2TableUIData.toString().includes("$")) {

//                 view2TableUIData = view2TableUIData.replace("$", "");
//             }
//             if (view2TableUIData.toString().includes("%")) {

//                 view2TableUIData = view2TableUIData.replace("%", "");
//             }
//             else {
//                 await expect((valDBdata).toString().trim()).to.equals((view2TableUIData.trim()));
//             }
//             await expect((valDBdata).toString().trim()).to.equals((view2TableUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('User should be navigate on View3 for selected direction', async function () {
//     await browser.actions().mouseMove(CLRObj.View3Header).perform();
//     await browser.wait(until.elementToBeClickable(CLRObj.View3Header), 20000, 'Element taking too long to appear in the DOM');
//     await CLRObj.View3Header.click();
//     await browser.sleep(1000);
//     await CLRObj.View3Header.getText().then(function (ViewThreeHeader) {
//         console.log("View3 Title: " + ViewThreeHeader);
//         expect("By Regions and Countries(only show data with shipping records)").to.equal(ViewThreeHeader.valueOf());
//     });
// });
// Then('User should see view3 table data should be matching with database table', async function () {

//     let rowcount = await CLRObj.View3_TABLE_Row.all(by.tagName("tr")).count();
//     let colcount = await CLRObj.ZONE_TABLE_Header.all(by.tagName("th")).count();

//     await console.log("View 3 Row Count UI " + rowcount);
//     await console.log("View 3 Col Count UI " + colcount);

//     let SelectedNodeID = await CLRObj.NODE_ID_HYPERLINK.getText();
//     await console.log("Selected NodeID  : " + SelectedNodeID);

//     let query = " SELECT DECODE(dest_region_cd,NULL,DECODE('IMPT','IMPORT ','EXPT','EXPORT ')|| 'TOTAL',dest_region_cd),CTRY_CD,count(*) shp_count,SUM(shp_wgt) tot_weight,SUM(rev_old_usd) old_revenue,SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd)        - SUM(rev_old_usd) ) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd) - SUM(rev_old_usd)) / NULLIF(SUM(rev_old_usd), 0) * 100), 2) PER_VARIANCE, Round(((SUM(rev_new_usd) -   SUM(rev_old_usd))/nullif(max(new_rev_tot),0)*100),2) prodbydir,round(SUM(rev_old_usd)/nullif(max(old_rev_tot),0),2)*100 old_rev_bydir, round(SUM(rev_new_usd)/nullif(max(new_rev_tot),0),2)*100 new_rev_bydir,round((SUM(rev_new_usd) -   SUM(rev_old_usd))/nullif(max(new_rev_gtot),0),2)*100 prodbytot,round(SUM(rev_old_usd)/nullif(max(old_rev_gtot),0),2)*100 old_rev_bytot,round(SUM(rev_new_usd)/nullif(max(new_rev_gtot),0),2)*100 new_rev_bytot from ( SELECT decode(disc_typ_cd, 'EXPT', dest_CTRY_CD, 'IMPT', ORIG_CTRY_CD,dest_CTRY_CD || '-' || ORIG_CTRY_CD) CTRY_CD,dest_region_cd,1 shp_count,shp_wgt,rev_old_usd rev_old_usd,rev_new_usd rev_new_usd,sum(rev_old_usd) over(partition by disc_typ_cd) old_rev_tot,sum(rev_old_usd) over() old_rev_gtot, sum(rev_new_usd) over(partition by disc_typ_cd) new_rev_tot,sum(rev_new_usd) over() new_rev_gtot FROM mia_report_det WHERE node_id = '" + SelectedNodeID + "'AND disc_typ_cd = 'EXPT') group by (CTRY_CD,dest_region_cd)having ( grouping(CTRY_CD) = 1 and grouping(dest_region_cd) = 1 ) or ( grouping(CTRY_CD) = 0 and grouping(dest_region_cd) = 0 ) Order by dest_region_cd"

//     var View3TableDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + View3TableDBData);
//     await console.log("View 3 Row Count DB " + View3TableDBData.length);
//     await console.log("View 3 Col Count DB " + View3TableDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let View3TableUIData = await element(by.xpath("//*[@id='protract-zone']/tbody/tr[" + i + "]/td[" + j + "]")).getText();

//             let uiData = await element(by.xpath("//*[@id='protract-zone']/tbody/tr[" + i + "]/td[" + j + "]"));

//             await console.log("UI data " + View3TableUIData);
//             await console.log("DB data " + View3TableDBData[i - 1][j - 1]);

//             if ((View3TableDBData[i - 1][j - 1]) == null) {
//                 await console.log("Cell value is null then no need to test any thing/no operation required");
//                 continue;
//             }
//             if ((View3TableDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = View3TableDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(View3TableDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (View3TableUIData.length == 1) {
//                 if (View3TableUIData.toString().includes("-")) {
//                     View3TableUIData = View3TableUIData.replace("-", "0");
//                 }
//             }
//             if (View3TableUIData.toString().includes(",")) {
//                 View3TableUIData = View3TableUIData.replace(",", "");
//             }
//             // if (View3TableUIData.toString().includes(".")) {
//             //     var length = View3TableUIData.toString().split(".")[1].length;
//             //     if (length == 1) {
//             //         View3TableUIData = View3TableUIData.toString() + "0";
//             //     }
//             // }
//             if (View3TableUIData.toString().includes("$")) {

//                 View3TableUIData = View3TableUIData.replace("$", "");
//             }
//             if (View3TableUIData.toString().includes("%")) {

//                 View3TableUIData = View3TableUIData.replace("%", "");
//             }

//             if (View3TableUIData.toString().includes(".00")) {

//                 View3TableUIData = View3TableUIData.replace(".00", "");
//             }

//             if (isCheck == 1) {
//                 await expect(View3TableUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 continue;
//             }
//             else {
//                 await expect((View3TableDBData[i - 1][j - 1]).toString()).to.equals((View3TableUIData.trim()));
//             }
//             await expect((View3TableDBData[i - 1][j - 1]).toString()).to.equals((View3TableUIData.trim()));

//             await browser.actions().mouseMove(uiData).perform();
//             await browser.wait(until.elementToBeClickable(uiData), 20000, 'Element taking too long to appear in the DOM');
//             await uiData.click();
//             await browser.sleep(1000);
//             await uiData.isDisplayed().then(async function (result) {
//                 await expect(true).to.equal(result.valueOf())
//             })
//         }
//     }
// });
// Then('User should see view3 direction total should be matching with database direction total', async function () {

//     let rowcount = 1;
//     let colcount = await CLRObj.ZONE_TABLE_Header.all(by.tagName("th")).count();

//     await console.log("View 3 direction total Row Count UI " + rowcount);
//     await console.log("View 3 direction total Col Count UI " + colcount);

//     let SelectedNodeID = await CLRObj.NODE_ID_HYPERLINK.getText();
//     await console.log("Selected NodeID  : " + SelectedNodeID);

//     let query = "select * from (SELECT decode(prcg_geo_zn,null,DECODE('IMPT','IMPORT ','EXPT','EXPORT ')|| 'TOTAL',prcg_geo_zn) prcg_geo_zn,CTRY_CD,count(*) shp_count,SUM(shp_wgt) tot_weight,SUM(rev_old_usd) old_revenue,SUM(rev_new_usd) new_revenue,(SUM(rev_new_usd)-SUM(rev_old_usd)) REVENUE_VARIANCE,ROUND(((SUM(rev_new_usd)-SUM(rev_old_usd))/ NULLIF(SUM(rev_old_usd), 0)*100),2) AS percent from(SELECT decode(disc_typ_cd, 'EXPT', dest_CTRY_CD, 'IMPT', ORIG_CTRY_CD,dest_CTRY_CD || '-' || ORIG_CTRY_CD) CTRY_CD,prcg_geo_zn,1 shp_count,shp_wgt,rev_old_usd rev_old_usd,rev_new_usd rev_new_usd,sum(rev_old_usd) over(partition by disc_typ_cd) old_rev_tot,sum(rev_old_usd) over() old_rev_gtot,sum(rev_new_usd) over(partition by disc_typ_cd) new_rev_tot,sum(rev_new_usd) over() new_rev_gtot FROM mia_report_det WHERE node_id = '" + SelectedNodeID + "' AND disc_typ_cd = 'EXPT') group by rollup(CTRY_CD,prcg_geo_zn) having ( grouping(CTRY_CD) = 1 and grouping(prcg_geo_zn) = 1 ) or ( grouping(CTRY_CD) = 0 and grouping(prcg_geo_zn) = 0)) where PRCG_GEO_ZN = 'EXPORT TOTAL' "

//     var View3TableDBData: string[] = await getInformationFromDB(query);

//     await console.log("Query result " + View3TableDBData);
//     await console.log("View 3 direction total Row Count DB " + View3TableDBData.length);
//     await console.log("View 3 direction total Col Count DB " + View3TableDBData[0].length);

//     for (let i = 1; i <= rowcount; i++) {
//         let decimalvalue;
//         var isCheck = 0;
//         for (let j = 1; j <= colcount; j++) {
//             let View3TableUIData = await element(by.xpath("//*[@id='protract-zone-total']/tfoot/tr/td[" + j + "]")).getText();
//             await console.log("UI data " + View3TableUIData);
//             await console.log("DB data " + View3TableDBData[i - 1][j - 1]);

//             if ((View3TableDBData[i - 1][j - 1]).toString().includes(".")) {
//                 decimalvalue = View3TableDBData[i - 1][j - 1];
//                 decimalvalue = parseFloat(View3TableDBData[i - 1][j - 1]).toFixed(2);
//                 isCheck = 1;
//             }
//             if (View3TableUIData.toString().includes(",")) {
//                 View3TableUIData = View3TableUIData.replace(",", "");
//             }
//             if (View3TableUIData.toString().includes(" ")) {
//                 View3TableUIData = View3TableUIData.replace(" ", "null");
//             }
//             if (View3TableUIData.toString().includes(".")) {
//                 var length = View3TableUIData.toString().split(".")[1].length;
//                 if (length == 1) {
//                     View3TableUIData = View3TableUIData.toString() + "0";
//                 }
//             }
//             else {
//                 if (View3TableUIData.toString().includes("$")) {

//                     View3TableUIData = View3TableUIData.replace("$", "");
//                 }
//                 else {
//                     if (View3TableUIData.toString().includes("%")) {

//                         View3TableUIData = View3TableUIData.replace("%", "");
//                         await expect(View3TableUIData.trim()).to.equals((View3TableDBData[i - 1][j - 1]));
//                     }
//                 }
//             }
//             if (View3TableUIData.toString().includes("$")) {

//                 View3TableUIData = View3TableUIData.replace("$", "");
//             }
//             if (View3TableUIData.toString().includes("%")) {

//                 View3TableUIData = View3TableUIData.replace("%", "");
//             }
//             if (isCheck == 1) {
//                 await expect(View3TableUIData.trim()).to.equals(decimalvalue);
//                 isCheck = 0;
//                 break;
//             }

//             else {
//                 await expect((View3TableDBData[i - 1][j - 1]).toString()).to.equals((View3TableUIData.trim()));
//             }
//             await expect((View3TableDBData[i - 1][j - 1]).toString()).to.equals((View3TableUIData.trim()));
//         }
//     }
// });
// When('User remove re-rating date filter', async function () {
//     await browser.sleep(2000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(CLRObj.CLOSE_FILTER), 20000, 'Element taking too long time to be visible in DOM')
//     await CLRObj.CLOSE_FILTER.click();
//     await browser.sleep(1000);
// });
// When('User selects status as Mark to Reject and selects one CountryID', async function () {
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(crf.FILTER_DATA), 20000, 'Element taking too long time to be clickable in DOM')
//     await crf.FILTER_DATA.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.MARK_TO_REJECT_STATUS), 20000, 'Element taking too long time to be clickable in DOM')
//     await CLRObj.MARK_TO_REJECT_STATUS.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.APPLY_BUTTON), 20000, 'Element taking too long time to be clickable in DOM')
//     await CLRObj.APPLY_BUTTON.click();
//     await browser.sleep(2000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(CLRObj.NODE_ID), 20000, 'Element taking too long time to be clickable in DOM');
//     await browser.sleep(1000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await CLRObj.NODE_ID.click();
//     await browser.wait(until.visibilityOf(CLRObj.SELECTED_NODEID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SELECTED_NODEID.click();
//     await browser.sleep(1000);
// });
// When('User clicks on Mark to Reject button', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.MARK_TO_REJECT), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.MARK_TO_REJECT.click();
//     await browser.sleep(1000);
// });
// Then('Pop up window, with Reasons in title, should be displayed', async function () {
//     await browser.sleep(1000);
//     let ReaonTitle = await CLRObj.RejectionReasonTitle.getText();
//     await console.log("Reaon Title : " + ReaonTitle);
//     await browser.wait(until.visibilityOf(CLRObj.RejectionReasonTitle), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.RejectionReasonTitle.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
// });
// Then('window should have Reject,Cancel and Cross buttons', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.SAVE), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.SAVE.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.wait(until.visibilityOf(CLRObj.CANCEL), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.CANCEL.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.wait(until.visibilityOf(CLRObj.CLOSE), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.CLOSE.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
// });
// Then('The Reasons pop up window will have a drop down list with a set of predefined reasons The reasons are mandatory to select', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.REASONS_LISt), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.REASONS_LISt.sendKeys(protractor.Key.TAB);
//     await browser.wait(until.visibilityOf(CLRObj.REJECT_COMMENT), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.REJECT_COMMENT.sendKeys(protractor.Key.TAB);
//     await browser.wait(until.visibilityOf(CLRObj.REJECT_MIGRATION_DATE), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.REJECT_MIGRATION_DATE.sendKeys(protractor.Key.TAB);
//     await browser.sleep(1000);

//     let reasonmsg = await CLRObj.ReasonRequiredMsg.getText();
//     await console.log("Reason for rejecting is mandatory:" + reasonmsg);
//     await expect(reasonmsg).to.equal("Select a reason for rejecting");
//     await browser.sleep(1000);

//     let Commentsmsg = await CLRObj.CommentsRequiredMsg.getText();
//     await console.log("Comments are mandatory:" + Commentsmsg);
//     await expect(Commentsmsg).to.equal("Comments are Required");
//     await browser.sleep(1000);

//     let Datemsg = await CLRObj.DateRequiredMsg.getText();
//     await console.log("Date is mandatory:" + Datemsg);
//     await expect(Datemsg).to.equal("Date is Required");
//     await browser.sleep(1000);

//     await browser.wait(until.elementToBeClickable(CLRObj.REASONS_LISt), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.REASONS_LISt.click();
//     await CLRObj.ReasonsList.all(by.tagName("mat-option")).then(async function (listReasons) {
//         console.log(await listReasons.length);
//         await browser.sleep(1000);
//         let reasons: string[] = ['Out of tolerance(country level)', 'Out of tolerance(customer specific)', 'Pricing at product level', 'Pricing at zone level', 'Customer specific']
//         console.log(await reasons.length);
//         for (let j = 0; j < reasons.length; j++) {
//             console.log(await reasons[j]);
//         }
//         for (let i = 1; i <= listReasons.length; i++) {

//             listReasons[i - 1].getAttribute("innerText").then(async function (text) {

//                 console.log(await text);
//                 await expect(reasons[i - 1]).to.contains(text);
//                 console.log(await expect(reasons[i - 1]).to.contains(text));
//             });
//         };
//     });
// });
// Then('The Cross and Cancel buttons should have same functionality', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.RejectionReasonselected), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.RejectionReasonselected.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.CLOSE), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.CLOSE.click();
//     await browser.wait(until.visibilityOf(CLRObj.MARK_TO_REJECT), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.MARK_TO_REJECT.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.wait(until.elementToBeClickable(CLRObj.MARK_TO_REJECT), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.MARK_TO_REJECT.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.CANCEL), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.CANCEL.click();
//     await browser.wait(until.visibilityOf(CLRObj.MARK_TO_REJECT), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.MARK_TO_REJECT.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
// });
// When('User selects any reason from the dropdown list of predefined reasons', async function () {
//     // await browser.wait(until.elementToBeClickable(CLRObj.MARK_TO_REJECT), 20000, 'Element taking too long time to be clickable in DOM');
//     // await CLRObj.MARK_TO_REJECT.click();
//     // await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.REASONS_LISt), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.REASONS_LISt.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.RejectionReasonselected), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.RejectionReasonselected.click();
//     await browser.sleep(1000);
// });
// When('User clicks on comments for rejection section', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.REJECT_COMMENT), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.REJECT_COMMENT.click();
//     await browser.sleep(1000);
// });
// Then('Only-200 characters allowed message should get displayed under comments for rejection', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.REJECT_COMMENT), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.REJECT_COMMENT.getAttribute("placeholder").then(async function (message) {
//         await console.log("Restricted Characters Message : " + message);
//     });
// });
// When('User enter comments or notes for rejection in the mandatory comment section', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.REJECT_COMMENT), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.REJECT_COMMENT.sendKeys("This nodeID is rejected for Customer specific testing");
//     await browser.sleep(1000);
// });
// Then('User should select a future Recommended Migration Date', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.REJECT_MIGRATION_DATE), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.REJECT_MIGRATION_DATE.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.TodayDate), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.TodayDate.click();
//     await browser.sleep(1000);
// });
// When('User clicks on the Save button of the Reasons window', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.SAVE), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SAVE.click();
//     await browser.sleep(5000);
// });
// Then('Rejected Reason,Comments,PA ID ,date and status should be saved and displayed in the comments section', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.SHOW_FILTER_CUST), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SHOW_FILTER_CUST.click();
//     await browser.sleep(1000);

//     let Reason = await CLRObj.REASON.getText();
//     await console.log(" Rejected Reason is: " + Reason);
//     await CLRObj.REASON.isPresent().then(function (enabled) {
//         expect(true).to.equal(enabled.valueOf());
//         console.log("Reason is Displayed:" + enabled);
//     });
//     let comments = await CLRObj.COMMENTS.getText();
//     await console.log(" Comments  :" + comments);
//     await CLRObj.COMMENTS.isPresent().then(function (enabled) {
//         expect(true).to.equal(enabled.valueOf());
//         console.log("Comments is Displayed:" + enabled);
//     });
//     let Migration_Date = await CLRObj.MIGRATION_DATE.getText();
//     await console.log("The Migration_Date is :" + Migration_Date);
//     await CLRObj.MIGRATION_DATE.isPresent().then(function (enabled) {
//         expect(true).to.equal(enabled.valueOf());
//         console.log("Migration_Date is Displayed:" + enabled);
//     });
//     let paid_id = await CLRObj.PA_ID.getText();
//     await console.log(" PA_id:" + paid_id);
//     await CLRObj.PA_ID.isPresent().then(function (enabled) {
//         expect(true).to.equal(enabled.valueOf());
//         console.log("PA-ID is Displayed:" + enabled);
//     });

//     let status = await CLRObj.CommentSectionStatus.getText();
//     await console.log(" status:" + status);
//     await CLRObj.CommentSectionStatus.isPresent().then(function (enabled) {
//         expect(true).to.equal(enabled.valueOf());
//         console.log("status is Displayed:" + enabled);
//     });
//     // await browser.wait(until.elementToBeClickable(CLRObj.SHOW_FILTER_CUST_CLS), 20000, 'Element taking too long time to be clickable in DOM');
//     // await CLRObj.SHOW_FILTER_CUST_CLS.click();
//     // await browser.sleep(1000);
// });
// Then('The Status should be shown as Mark to Reject', async function () {
//     let status = await CLRObj.CommentSectionStatus.getText();
//     console.log(await expect("Mark to Reject").to.equal(status));
//     await browser.wait(until.elementToBeClickable(CLRObj.SHOW_FILTER_CUST_CLS), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SHOW_FILTER_CUST_CLS.click();
// });

// Given('Customer is with status Mark to Reject', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.MARK_TO_REJECT), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.MARK_TO_REJECT.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
// });
// When('User clicks on the Mark to Approve Button', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.MARK_TO_APPROVE), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.MARK_TO_APPROVE.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.APPROVE_FORM), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.APPROVE_FORM.click();
//     await browser.sleep(1000);
// });
// Then('Status should be changed to Mark to Approve', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.SHOW_FILTER_CUST), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SHOW_FILTER_CUST.click();
//     await browser.sleep(1000);
//     let status = await CLRObj.CommentSectionStatus.getText();
//     console.log(await expect("Mark to Approve").to.equal(status));
//     await browser.wait(until.elementToBeClickable(CLRObj.SHOW_FILTER_CUST_CLS), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SHOW_FILTER_CUST_CLS.click();
//     await browser.sleep(1000);
// });
// Given('Customer is with status Mark to Approve', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.MARK_TO_APPROVE), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.MARK_TO_APPROVE.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
// });

// Then('Status should be changed to Mark to Reject', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.REASONS_LISt), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.REASONS_LISt.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.RejectionReasonselected), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.RejectionReasonselected.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.REJECT_COMMENT), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.REJECT_COMMENT.click();
//     await browser.wait(until.visibilityOf(CLRObj.REJECT_COMMENT), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.REJECT_COMMENT.sendKeys("This nodeID is rejected for Customer specific testing");
//     await browser.wait(until.elementToBeClickable(CLRObj.REJECT_MIGRATION_DATE), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.REJECT_MIGRATION_DATE.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.TodayDate), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.TodayDate.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.SAVE), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SAVE.click();
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(CLRObj.SHOW_FILTER_CUST), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SHOW_FILTER_CUST.click();
//     await browser.sleep(1000);

//     let status = await CLRObj.CommentSectionStatus.getText();
//     console.log(await expect("Mark to Reject").to.equal(status));
//     await browser.wait(until.elementToBeClickable(CLRObj.SHOW_FILTER_CUST_CLS), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SHOW_FILTER_CUST_CLS.click();
//     await browser.sleep(1000);
// });
// When('User select status as Non-Reviewed and select one CountryID', async function () {
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(crf.FILTER_DATA), 20000, 'Element taking too long time to be clickable in DOM')
//     await crf.FILTER_DATA.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.NON_REVIEWED_STATUS), 20000, 'Element taking too long time to be clickable in DOM')
//     await CLRObj.NON_REVIEWED_STATUS.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.APPLY_BUTTON), 20000, 'Element taking too long time to be clickable in DOM')
//     await CLRObj.APPLY_BUTTON.click();
//     await browser.sleep(2000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(CLRObj.NODE_ID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NODE_ID.click();
//     await browser.wait(until.visibilityOf(CLRObj.SELECTED_NODEID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SELECTED_NODEID.click();
//     await browser.sleep(1000);

//     // let query = TestData.userData.OracleQuery.CountryIDNonReviewedStatus;
//     // var nonReviewedNodeID: string[] = await getInformationFromDB(query);
//     // await console.log("NonReviewed NodeID is :" + nonReviewedNodeID[0])
//     // await CLRObj.NODE_ID.sendKeys(nonReviewedNodeID[0].toString());
//     // await browser.sleep(1000);
//     // await CLRObj.NODE_ID.sendKeys(protractor.Key.ENTER);
//     // await browser.sleep(1000);
// });
// When('User selects status as Mark to Approve and selects one CountryID', async function () {
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(crf.FILTER_DATA), 20000, 'Element taking too long time to be clickable in DOM')
//     await crf.FILTER_DATA.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.MARK_TO_APPROVE_STATUS), 20000, 'Element taking too long time to be clickable in DOM')
//     await CLRObj.MARK_TO_APPROVE_STATUS.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.APPLY_BUTTON), 20000, 'Element taking too long time to be clickable in DOM')
//     await CLRObj.APPLY_BUTTON.click();
//     await browser.sleep(2000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(CLRObj.NODE_ID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NODE_ID.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.SELECTED_NODEID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SELECTED_NODEID.click();
//     await browser.sleep(1000);


//     // let query = TestData.userData.OracleQuery.CountryIDMarkToApproved;
//     // var MACountryID: string[] = await getInformationFromDB(query);
//     // await console.log("Export Country ID :" + MACountryID[0].toString());
//     // await CLRObj.NODE_ID.sendKeys(MACountryID[0].toString());
//     // await browser.sleep(1000);
//     // await CLRObj.NODE_ID.sendKeys(protractor.Key.ENTER);
//     // await browser.sleep(1000);
//     // await browser.wait(until.elementToBeClickable(CLRObj.NODE_ID), 20000, 'Element taking too long time to be clickable in DOM');
//     // await CLRObj.NODE_ID.click();
//     // await browser.wait(until.visibilityOf(CLRObj.SELECTED_NODEID), 20000, 'Element taking too long time to be clickable in DOM');
//     // await CLRObj.SELECTED_NODEID.click();
//     // await browser.sleep(1000);
// });
// When('User selects status as Approved and selects one CountryID', async function () {
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(crf.FILTER_DATA), 20000, 'Element taking too long time to be clickable in DOM')
//     await crf.FILTER_DATA.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.APPROVED_STATUS), 20000, 'Element taking too long time to be clickable in DOM')
//     await CLRObj.APPROVED_STATUS.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.APPLY_BUTTON), 20000, 'Element taking too long time to be clickable in DOM')
//     await CLRObj.APPLY_BUTTON.click();
//     await browser.sleep(2000);
//     await browser.sleep(1000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(CLRObj.NODE_ID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NODE_ID.click();
//     await browser.wait(until.visibilityOf(CLRObj.SELECTED_NODEID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SELECTED_NODEID.click();
//     await browser.sleep(1000);
// });
// When('User clicks on Mark to Approve Button', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.MARK_TO_APPROVE), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.MARK_TO_APPROVE.click();
//     await browser.sleep(1000);
// });
// Then('Pop up window for Approve should get displayed and user clicks on Approve button', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.APPROVE_FORM), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.APPROVE_FORM.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.wait(until.visibilityOf(CLRObj.CLOSE_FORM), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.CLOSE_FORM.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.wait(until.visibilityOf(CLRObj.CANCEL_FORM), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.CANCEL_FORM.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.wait(until.elementToBeClickable(CLRObj.APPROVE_FORM), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.APPROVE_FORM.click();
//     await browser.sleep(5000);
// });
// Then('PA ID and the status as Mark to Approve should be displayed in the comments section', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.SHOW_FILTER_CUST), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SHOW_FILTER_CUST.click();
//     await browser.sleep(1000);
//     let paid_id = await CLRObj.PA_ID.getText();
//     await console.log(" PA_id:" + paid_id);
//     await CLRObj.PA_ID.isPresent().then(function (enabled) {
//         expect(true).to.equal(enabled.valueOf());
//         console.log("PA-ID is Displayed:" + enabled);
//     });

//     let status = await CLRObj.CommentSectionStatus.getText();
//     console.log(await expect("Mark to Approve").to.equal(status));
//     await console.log(" status:" + status);
//     await CLRObj.CommentSectionStatus.isPresent().then(function (enabled) {
//         expect(true).to.equal(enabled.valueOf());
//         console.log("status is Displayed:" + enabled);
//     });
//     // await browser.wait(until.elementToBeClickable(CLRObj.SHOW_FILTER_CUST_CLS), 20000, 'Element taking too long time to be clickable in DOM');
//     // await CLRObj.SHOW_FILTER_CUST_CLS.click();
//     // await browser.sleep(1000);
// });
// Then('Recommended future migration date should not displayed in the comments section for status as Mark to Approve', async function () {
//     await browser.wait(until.invisibilityOf(CLRObj.COMMENTS), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.COMMENTS.isPresent().then(function (result) {
//         expect(false).to.equal(result.valueOf());
//         console.log("Comment is displayed :" + result);
//     });
//     await browser.wait(until.invisibilityOf(CLRObj.MIGRATION_DATE), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.MIGRATION_DATE.isPresent().then(function (result) {
//         expect(false).to.equal(result.valueOf());
//         console.log("Migration date is displayed :" + result);
//     });
//     await browser.wait(until.elementToBeClickable(CLRObj.SHOW_FILTER_CUST_CLS), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SHOW_FILTER_CUST_CLS.click();
//     await browser.sleep(1000);
// });
// When('User select the status Excluded and select one CountryID', async function () {
//     await browser.wait(until.elementToBeClickable(crf.FILTER_DATA), 20000, 'Element taking too long time to be clickable in DOM')
//     await crf.FILTER_DATA.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.EXCLUDED_STATUS), 20000, 'Element taking too long time to be clickable in DOM')
//     await CLRObj.EXCLUDED_STATUS.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.APPLY_BUTTON), 20000, 'Element taking too long time to be clickable in DOM')
//     await CLRObj.APPLY_BUTTON.click();
//     await browser.sleep(2000);
//     await browser.wait(until.elementToBeClickable(CLRObj.NODE_ID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NODE_ID.click();
//     await browser.wait(until.visibilityOf(CLRObj.SELECTED_NODEID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SELECTED_NODEID.click();
// });
// Then('User should be able to see the error message Data is not valid as its excluded from RRT', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.ExcludedErrorMsg), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.ExcludedErrorMsg.isDisplayed().then(async function (result) {
//         await console.log("Error Message is displayed :" + result);
//         expect(true).to.equal(result.valueOf());
//     });
//     await CLRObj.ExcludedErrorMsg.getText().then(async function (result) {
//         await console.log("Error Message is :" + result);
//     });
// });
// Then('User should be able to see -Node ID dropdown field, Reset button', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.NODE_ID), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.NODE_ID.isDisplayed().then(async function (result) {
//         await console.log("Node ID dropdown field is displayed :" + result);
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.wait(until.visibilityOf(CLRObj.RESET), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.RESET.isDisplayed().then(async function (result) {
//         await console.log("Reset Button is displayed :" + result);
//         expect(true).to.equal(result.valueOf());
//     });
// });
// Then('User should not be able to see -Download button,Mark To Approve button, Mark To Reject button', async function () {
//     await browser.wait(until.invisibilityOf(CLRObj.DOWNLOAD), 20000, 'Element taking too long time to be visible in DOM');
//     await expect(CLRObj.DOWNLOAD.isPresent()).to.eventually.equal(false);
//     await browser.wait(until.invisibilityOf(CLRObj.MARK_TO_APPROVE), 20000, 'Element taking too long time to be visible in DOM');
//     await expect(CLRObj.MARK_TO_APPROVE.isPresent()).to.eventually.equal(false);
//     await browser.wait(until.invisibilityOf(CLRObj.MARK_TO_REJECT), 20000, 'Element taking too long time to be visible in DOM');
//     await expect(CLRObj.MARK_TO_REJECT.isPresent()).to.eventually.equal(false);
// });
// Then('User perform reset action to reset page', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.RESET), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.RESET.click();
//     await browser.sleep(1000);
// });
// When('User clicks on the download button', async function () {
//     await browser.sleep(1000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(CLRObj.DOWNLOAD), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.DOWNLOAD.click();
//     await browser.sleep(1000);
// });
// Then('User able to see PDF download option', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.CUSTOMIZABLE_PDF), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.CUSTOMIZABLE_PDF.isDisplayed().then(async function (result) {
//         await console.log("PDF Download Option Display :" + result);
//         expect(true).to.equal(result.valueOf());
//     });
// });
// When('User clicks on or Mouse hover to the PDF download option', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.CUSTOMIZABLE_PDF), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.CUSTOMIZABLE_PDF.click();
//     await browser.sleep(1000);
// });
// Then('User should see suboption for PDF download like Full Report and Custom Report', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.FULL_REPORT), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.FULL_REPORT.isDisplayed().then(async function (result) {
//         await console.log("PDF Full Report displayed :" + result);
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.wait(until.visibilityOf(CLRObj.CUSTOM_REPORT), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.CUSTOM_REPORT.isDisplayed().then(async function (result) {
//         await console.log("PDF Custom Report displayed :" + result);
//         expect(true).to.equal(result.valueOf());
//     });
// });
// Then('User select Full Report PDF download option', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.FULL_REPORT), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.FULL_REPORT.click();
//     await browser.sleep(1000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
// });
// Then('Full Report PDF file should be download', async function () {
//     await console.log("Full Report PDF file should be download")
// });
// When('User select Custom Report PDF download option', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.CUSTOM_REPORT), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.CUSTOM_REPORT.click();
//     await browser.sleep(1000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
// });
// Then('User able to see By Direction, By Weight breaks, By Zones option checkboxes', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.BY_DIRECTION), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.BY_DIRECTION.isDisplayed().then(async function (result) {
//         await console.log("By Direction CheckBox Displayed :" + result);
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.wait(until.visibilityOf(CLRObj.BY_WEIGTH_BREAKS), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.BY_WEIGTH_BREAKS.isDisplayed().then(async function (result) {
//         await console.log("By Weight breaks CheckBox Displayed :" + result);
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.wait(until.visibilityOf(CLRObj.BY_ZONES), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.BY_ZONES.isDisplayed().then(async function (result) {
//         await console.log("By Zones CheckBox Displayed :" + result);
//         expect(true).to.equal(result.valueOf());
//     });
// });
// Then('User able to see cross, cancel and download button', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.CLOSE_DOWNLOAD), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.CLOSE_DOWNLOAD.isDisplayed().then(async function (result) {
//         await console.log("Cross Button is displayed :" + result);
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.wait(until.visibilityOf(CLRObj.CANCEL_DOWNLOAD), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.CANCEL_DOWNLOAD.isDisplayed().then(async function (result) {
//         await console.log("Cancel Button is displayed :" + result);
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.wait(until.visibilityOf(CLRObj.APPROVE_DOWNLOAD), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.APPROVE_DOWNLOAD.isDisplayed().then(async function (result) {
//         await console.log("Download Button is displayed :" + result);
//         expect(true).to.equal(result.valueOf());
//     });
// });
// Then('User able to see download button should be disabled', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.APPROVE_DOWNLOAD), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.APPROVE_DOWNLOAD.isEnabled().then(async function (enabled) {
//         expect(false).to.equal(enabled.valueOf());
//         await console.log("PDF Download button is enabled:" + enabled);
//     });
// });
// Then('User should able to select these checkboxes', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.BY_DIRECTION), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.BY_DIRECTION.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.BY_WEIGTH_BREAKS), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.BY_WEIGTH_BREAKS.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.BY_ZONES), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.BY_ZONES.click();
//     await browser.sleep(1000);
// });
// Then('User select particular download option and click on download button', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.APPROVE_DOWNLOAD), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.APPROVE_DOWNLOAD.click();
//     await browser.sleep(1000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
// });
// Then('Selected Custom Report PDF file should be download', async function () {
//     await console.log("Custom Report PDF file downloaded Successful")
//     await browser.wait(until.elementToBeClickable(CLRObj.RESET), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.RESET.click();
//     await browser.sleep(1000);
// });
// When('User clicks on Node Id and select one NodeID from dropdown', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.NODE_ID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NODE_ID.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.SELECTED_NODEID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SELECTED_NODEID.click();
//     await browser.sleep(1000);
// });
// Then('User should view Report and should able to download selected report', async function () {
//     await browser.sleep(1000);
//     await browser.wait(until.visibilityOf(CLRObj.ByDirectionExport), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.ByDirectionExport.isDisplayed().then(function (result) {
//         expect(true).to.equal(result.valueOf());
//     });
//     await browser.wait(until.elementToBeClickable(CLRObj.DOWNLOAD), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.DOWNLOAD.click();
//     await browser.sleep(2000);
//     await browser.wait(until.elementToBeClickable(CLRObj.CUSTOMIZABLE_PDF), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.CUSTOMIZABLE_PDF.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.FULL_REPORT), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.FULL_REPORT.click();
//     await browser.sleep(1000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
// });
// Then('Mark to Approve Button should be visible', async function () {
//     await browser.sleep(1000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.visibilityOf(CLRObj.MARK_TO_APPROVE), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.MARK_TO_APPROVE.isDisplayed().then(async function (result) {
//         await expect(true).to.equal(result);
//     })
// });
// Then('Mark to Reject Button should be visible', async function () {
//     await browser.sleep(1000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.visibilityOf(CLRObj.MARK_TO_REJECT), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.MARK_TO_REJECT.isDisplayed().then(async function (result) {
//         await expect(true).to.equal(result);
//     })
// })
// When('User clicks on close icon to clear applied filters', async function () {
//     await browser.sleep(1000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(CLRObj.CLOSE_FILTER), 20000, 'Element taking too long time to be visible in DOM')
//     await CLRObj.CLOSE_FILTER.click();
//     await browser.sleep(3000);
// });
// When('Selects Country Id from country ID dropdown', async function () {
//     await browser.sleep(1000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(CLRObj.NODE_ID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NODE_ID.click();
//     await browser.wait(until.visibilityOf(CLRObj.SELECTED_NODEID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SELECTED_NODEID.click();
// });
// Then('Hierarchy View displayed with all the Hierarchy ID as hyperlinks and the Country ID has submitted in the Hierarchy view', async function () {
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.visibilityOf(CLRObj.HIERARCHY_TABLE), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.HIERARCHY_TABLE.isDisplayed().then(async function (result) {
//         await expect(true).to.equal(result);
//     })
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     let HIERARCHY_ROWS_Count = await CLRObj.HIERARCHY_ROWS.all(by.tagName("tr")).count();
//     await console.log("HIERARCHY_ROWS_Count : " + HIERARCHY_ROWS_Count);
//     for (let i = 1; i <= HIERARCHY_ROWS_Count; i++) {
//         let HIERARCHY_IDS = await browser.element(by.xpath("//*[@id='protract-hierarchy-tbl']/tbody/tr[" + i + "]/td[1]")).getAttribute("innerText");
//         await console.log("HIERARCHY IDS : " + HIERARCHY_IDS)
//         if (HIERARCHY_IDS.includes("C")) {
//             await browser.element(by.xpath("//*[@id='protract-hierarchy-tbl']/tbody/tr[" + i + "]/td[1]/a")).click();
//             await browser.sleep(1000);
//         }
//     }
// });
// Then('Mark to Approve and Mark to Reject Button should be visible', async function () {
//     await browser.sleep(1000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.visibilityOf(CLRObj.MARK_TO_APPROVE), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.MARK_TO_APPROVE.isDisplayed().then(async function (result) {
//         await expect(true).to.equal(result);
//     })
//     await browser.wait(until.visibilityOf(CLRObj.MARK_TO_REJECT), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.MARK_TO_REJECT.isDisplayed().then(async function (result) {
//         await expect(true).to.equal(result);
//     })
// });
// Then('Mark to Approve and Mark to Reject Button should not visible', async function () {
//     await browser.sleep(3000);
//     await browser.wait(until.invisibilityOf(CLRObj.MARK_TO_APPROVE), 25000, 'Element taking too long time to be clickable in DOM');
//     await expect(CLRObj.MARK_TO_APPROVE.isPresent()).to.eventually.equal(false);
//     await browser.wait(until.invisibilityOf(CLRObj.MARK_TO_REJECT), 25000, 'Element taking too long time to be clickable in DOM');
//     await expect(CLRObj.MARK_TO_REJECT.isPresent()).to.eventually.equal(false);
// });
// When('User select one Group ID and select one CountryID', async function () {
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(crf.FILTER_DATA), 20000, 'Element taking too long time to be clickable in DOM')
//     await crf.FILTER_DATA.click();
//     let groupID = await CLRObj.DROPDOWNLIST.all(by.tagName("mat-option")).first();
//     await groupID.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.APPLY_BUTTON), 20000, 'Element taking too long time to be clickable in DOM')
//     await CLRObj.APPLY_BUTTON.click();
//     await browser.sleep(2000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(CLRObj.NODE_ID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NODE_ID.click();
//     await browser.wait(until.visibilityOf(CLRObj.SELECTED_NODEID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SELECTED_NODEID.click();
//     await browser.sleep(1000);
// });
// Then('Hierarchy View displayed with all the Hierarchy ID as hyperlinks and Group ID has submitted in the Hierarchy view', async function () {
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.visibilityOf(CLRObj.HIERARCHY_TABLE), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.HIERARCHY_TABLE.isDisplayed().then(async function (result) {
//         await expect(true).to.equal(result);
//     })
//     let HIERARCHY_ROWS_Count = await CLRObj.HIERARCHY_ROWS.all(by.tagName("tr")).count();
//     await console.log("HIERARCHY_ROWS_Count : " + HIERARCHY_ROWS_Count);
//     for (let i = 1; i <= HIERARCHY_ROWS_Count; i++) {
//         let HIERARCHY_IDS = await browser.element(by.xpath("//*[@id='protract-hierarchy-tbl']/tbody/tr[" + i + "]/td[1]")).getAttribute("innerText");
//         await console.log("HIERARCHY IDS : " + HIERARCHY_IDS)
//         if (HIERARCHY_IDS.includes("G")) {
//             await browser.element(by.xpath("//*[@id='protract-hierarchy-tbl']/tbody/tr[" + i + "]/td[1]/a")).click();
//             await browser.sleep(1000);
//         }
//     }
//     // await browser.wait(until.elementToBeClickable(CLRObj.GroupID_HIERARCHY_View), 20000, 'Element taking too long time to be clickable in DOM');
//     // await CLRObj.GroupID_HIERARCHY_View.click();
//     // await browser.sleep(1000);
// });
// When('User select one SubGroup ID and select one CountryID', async function () {
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(crf.FILTER_DATA), 20000, 'Element taking too long time to be clickable in DOM')
//     await crf.FILTER_DATA.click();
//     let query = TestData.userData.OracleQuery.SubGroupID;
//     var subGroupID: string[] = await getInformationFromDB(query);
//     await console.log("SubGroup is :" + subGroupID[0])
//     await crf.FILTER_DATA.sendKeys(subGroupID[0].toString());
//     await browser.sleep(2000);
//     await browser.wait(until.visibilityOf(CLRObj.SELECTED_SUBGROUPID), 20000, 'Element taking too long time to be clickable in DOM')
//     await browser.sleep(1000);
//     await CLRObj.SELECTED_SUBGROUPID.click();
//     await browser.sleep(1000);

//     // let subGroupID = await CLRObj.DROPDOWNLIST.all(by.tagName("mat-option")).first();
//     // await subGroupID.click();
//     // await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.APPLY_BUTTON), 20000, 'Element taking too long time to be clickable in DOM')
//     await CLRObj.APPLY_BUTTON.click();
//     await browser.sleep(2000);
//     await browser.wait(until.elementToBeClickable(CLRObj.NODE_ID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NODE_ID.click();
//     await browser.wait(until.visibilityOf(CLRObj.SELECTED_NODEID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SELECTED_NODEID.click();
//     await browser.sleep(1000);
// });
// When('User select one Facility ID and select one CountryID', async function () {
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(crf.FILTER_DATA), 20000, 'Element taking too long time to be clickable in DOM')
//     await crf.FILTER_DATA.click();
//     let subGroupID = await CLRObj.DROPDOWNLIST.all(by.tagName("mat-option")).first();
//     await subGroupID.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.APPLY_BUTTON), 20000, 'Element taking too long time to be clickable in DOM')
//     await CLRObj.APPLY_BUTTON.click();
//     await browser.sleep(2000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(CLRObj.NODE_ID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.NODE_ID.click();
//     await browser.wait(until.visibilityOf(CLRObj.SELECTED_NODEID), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SELECTED_NODEID.click();
//     await browser.sleep(1000);
// });
// Then('Hierarchy View displayed with all the Hierarchy ID as hyperlinks and SubGroup ID has submitted in the Hierarchy view', async function () {
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.visibilityOf(CLRObj.HIERARCHY_TABLE), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.HIERARCHY_TABLE.isDisplayed().then(async function (result) {
//         await expect(true).to.equal(result);
//     })
//     let HIERARCHY_ROWS_Count = await CLRObj.HIERARCHY_ROWS.all(by.tagName("tr")).count();
//     await console.log("HIERARCHY_ROWS_Count : " + HIERARCHY_ROWS_Count);
//     for (let i = 1; i <= HIERARCHY_ROWS_Count; i++) {
//         let HIERARCHY_IDS = await browser.element(by.xpath("//*[@id='protract-hierarchy-tbl']/tbody/tr[" + i + "]/td[1]")).getAttribute("innerText");
//         await console.log("HIERARCHY IDS : " + HIERARCHY_IDS)
//         if (HIERARCHY_IDS.includes("S")) {
//             await browser.element(by.xpath("//*[@id='protract-hierarchy-tbl']/tbody/tr[" + i + "]/td[1]/a")).click();
//             await browser.sleep(1000);
//         }
//     }
// });
// Then('Hierarchy View displayed with all the Hierarchy ID as hyperlinks and Facility ID has submitted in the Hierarchy view', async function () {
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.visibilityOf(CLRObj.HIERARCHY_TABLE), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.HIERARCHY_TABLE.isDisplayed().then(async function (result) {
//         await expect(true).to.equal(result);
//     })
//     let HIERARCHY_ROWS_Count = await CLRObj.HIERARCHY_ROWS.all(by.tagName("tr")).count();
//     await console.log("HIERARCHY_ROWS_Count : " + HIERARCHY_ROWS_Count);
//     for (let i = 1; i <= HIERARCHY_ROWS_Count; i++) {
//         let HIERARCHY_IDS = await browser.element(by.xpath("//*[@id='protract-hierarchy-tbl']/tbody/tr[" + i + "]/td[1]")).getAttribute("innerText");
//         await console.log("HIERARCHY IDS : " + HIERARCHY_IDS)
//         if (HIERARCHY_IDS.includes("F")) {
//             await browser.element(by.xpath("//*[@id='protract-hierarchy-tbl']/tbody/tr[" + i + "]/td[1]/a")).click();
//             await browser.sleep(1000);
//         }
//     }
// });
// When('User selects reason,enter comments for rejection and selects Recommended Migration Date and clicks on Reject Button', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.REASONS_LISt), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.REASONS_LISt.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.RejectionReasonselected), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.RejectionReasonselected.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.REJECT_COMMENT), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.REJECT_COMMENT.click();
//     await browser.sleep(1000);
//     await browser.wait(until.visibilityOf(CLRObj.REJECT_COMMENT), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.REJECT_COMMENT.sendKeys("This Country ID is Reject for MULTI EAN Testing");
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.REJECT_MIGRATION_DATE), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.REJECT_MIGRATION_DATE.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.TodayDate), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.TodayDate.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.SAVE), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SAVE.click();
//     await browser.sleep(5000);
// });
// Then('Hierarchy View displayed with all the Hierarchy ID as hyperlinks and EAN ID has submitted in the Hierarchy view', async function () {
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.visibilityOf(CLRObj.HIERARCHY_TABLE), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.HIERARCHY_TABLE.isDisplayed().then(async function (result) {
//         await expect(true).to.equal(result);
//     })
//     let HIERARCHY_ROWS_Count = await CLRObj.HIERARCHY_ROWS.all(by.tagName("tr")).count();
//     await console.log("HIERARCHY_ROWS_Count : " + HIERARCHY_ROWS_Count);
//     for (let i = 1; i <= HIERARCHY_ROWS_Count; i++) {
//         let HIERARCHY_IDS = await browser.element(by.xpath("//*[@id='protract-hierarchy-tbl']/tbody/tr[" + i + "]/td[1]")).getAttribute("innerText");
//         await console.log("HIERARCHY IDS : " + HIERARCHY_IDS)
//         if (HIERARCHY_IDS.includes("E")) {
//             await browser.element(by.xpath("//*[@id='protract-hierarchy-tbl']/tbody/tr[" + i + "]/td[1]/a")).click();
//             await browser.sleep(1000);
//         }
//     }
// });
// Then('Rejected Reason,Comments,PA ID ,date and status for the selected EAN which are overwritten in the comments section', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.SHOW_FILTER_CUST), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SHOW_FILTER_CUST.click();
//     await browser.sleep(1000);

//     let Reason = await CLRObj.REASON.getText();
//     await console.log(" Rejected Reason is: " + Reason);
//     await CLRObj.REASON.isPresent().then(function (enabled) {
//         expect(true).to.equal(enabled.valueOf());
//         console.log("Reason is Displayed:" + enabled);
//     });
//     let comments = await CLRObj.COMMENTS.getText();
//     await console.log(" Comments  :" + comments);
//     await CLRObj.COMMENTS.isPresent().then(function (enabled) {
//         expect(true).to.equal(enabled.valueOf());
//         console.log("Comments is Displayed:" + enabled);
//     });
//     let Migration_Date = await CLRObj.MIGRATION_DATE.getText();
//     await console.log("The Migration_Date is :" + Migration_Date);
//     await CLRObj.MIGRATION_DATE.isPresent().then(function (enabled) {
//         expect(true).to.equal(enabled.valueOf());
//         console.log("Migration_Date is Displayed:" + enabled);
//     });
//     let paid_id = await CLRObj.PA_ID.getText();
//     await console.log(" PA_id:" + paid_id);
//     await CLRObj.PA_ID.isPresent().then(function (enabled) {
//         expect(true).to.equal(enabled.valueOf());
//         console.log("PA-ID is Displayed:" + enabled);
//     });

//     let status = await CLRObj.CommentSectionStatus.getText();
//     await console.log(" status:" + status);
//     await CLRObj.CommentSectionStatus.isPresent().then(function (enabled) {
//         expect(true).to.equal(enabled.valueOf());
//         console.log("status is Displayed:" + enabled);
//     });
//     await browser.wait(until.elementToBeClickable(CLRObj.SHOW_FILTER_CUST_CLS), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.SHOW_FILTER_CUST_CLS.click();
//     await browser.sleep(1000);
// });
// When('User selects one Country ID from filter data', async function () {
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(crf.FILTER_DATA), 20000, 'Element taking too long time to be clickable in DOM')
//     await crf.FILTER_DATA.click();
//     let countryID = await CLRObj.DROPDOWNLIST.all(by.tagName("mat-option")).first();
//     await countryID.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.APPLY_BUTTON), 20000, 'Element taking too long time to be clickable in DOM')
//     await CLRObj.APPLY_BUTTON.click();
//     await browser.sleep(1000);
// });
// When('Country ID hyperlink is submitted in Hierarchy View', async function () {
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     let HIERARCHY_ROWS_Count = await CLRObj.HIERARCHY_ROWS.all(by.tagName("tr")).count();
//     await console.log("HIERARCHY_ROWS_Count : " + HIERARCHY_ROWS_Count);
//     for (let i = 1; i <= HIERARCHY_ROWS_Count; i++) {
//         let HIERARCHY_IDS = await browser.element(by.xpath("//*[@id='protract-hierarchy-tbl']/tbody/tr[" + i + "]/td[1]")).getAttribute("innerText");
//         await console.log("HIERARCHY IDS : " + HIERARCHY_IDS)
//         if (HIERARCHY_IDS.includes("C")) {
//             await browser.element(by.xpath("//*[@id='protract-hierarchy-tbl']/tbody/tr[" + i + "]/td[1]/a")).click();
//             await browser.sleep(1000);
//         }
//     }
// });
// When('EAN ID hyperlink is submitted in Hierarchy View', async function () {
//     await browser.sleep(1000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     let HIERARCHY_ROWS_Count = await CLRObj.HIERARCHY_ROWS.all(by.tagName("tr")).count();
//     await console.log("HIERARCHY_ROWS_Count : " + HIERARCHY_ROWS_Count);
//     for (let i = 1; i <= HIERARCHY_ROWS_Count; i++) {
//         let HIERARCHY_IDS = await browser.element(by.xpath("//*[@id='protract-hierarchy-tbl']/tbody/tr[" + i + "]/td[1]")).getAttribute("innerText");
//         await console.log("HIERARCHY IDS : " + HIERARCHY_IDS)
//         await browser.sleep(1000);
//         if (HIERARCHY_IDS.includes("E")) {
//             await browser.sleep(1000);
//             await browser.element(by.xpath("//*[@id='protract-hierarchy-tbl']/tbody/tr[" + i + "]/td[1]/a")).click();
//             await browser.sleep(1000);
//         }
//     }
// });
// Then('Download button should be Visible', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.DOWNLOAD), 20000, 'Element taking too long time to be visible in DOM');
//     await CLRObj.DOWNLOAD.isDisplayed().then(async function (result) {
//         await console.log("Download Button is Displayed :" + result);
//         await expect(true).to.equal(result);
//     });
// });
// When('Download button is submitted and User should see PDF download option', async function () {
//    // await browser.wait(until.elementToBeClickable(CLRObj.DOWNLOAD), 20000, 'Element taking too long time to be clickable in DOM');
//     await browser.sleep(2000);
//     await CLRObj.DOWNLOAD.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.CUSTOMIZABLE_PDF), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.CUSTOMIZABLE_PDF.click();
//     await browser.sleep(1000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
// });
// When('PDF-General report is selected', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.FULL_REPORT), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.FULL_REPORT.click();
//     await browser.sleep(1000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
// });
// Then('PDF content should be downloaded for sum of all the direction at Country Level', async function () {
//     await console.log(" General/Full PDF Report file should be download");
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
// });
// When('PDF-Custom report is selected', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.CUSTOM_REPORT), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.CUSTOM_REPORT.click();
//     await browser.sleep(1000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
// });
// Then('By-Hierarchy, By-Direction, By-WB, By-Region options displayed and user select these checkboxes and clicks on download button', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.BY_HIERARCHY), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.BY_HIERARCHY.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.BY_DIRECTION), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.BY_DIRECTION.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.BY_WEIGTH_BREAKS), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.BY_WEIGTH_BREAKS.click();
//     await browser.wait(until.elementToBeClickable(CLRObj.BY_ZONES), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.BY_ZONES.click();
//     await browser.sleep(1000);
//     await browser.wait(until.elementToBeClickable(CLRObj.APPROVE_DOWNLOAD), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.APPROVE_DOWNLOAD.click();
//     await browser.sleep(1000);
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
// });
// Then('PDF content should be downloaded for sum of all the EANS at EAN level', async function () {
//     await console.log(" Custom PDF Report file should be download");
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
// });
// Then('Hierarchy View and By direction tables should be displayed', async function () {
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.visibilityOf(CLRObj.HIERARCHY_TABLE), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.HIERARCHY_TABLE.isDisplayed().then(async function (result) {
//         await expect(true).to.equal(result);
//     })
//     await browser.wait(until.visibilityOf(CLRObj.ByDirectionExport), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.ByDirectionExport.isDisplayed().then(function (result) {
//         expect(true).to.equal(result);
//     })
//     await browser.wait(until.visibilityOf(CLRObj.BY_DIRECTION_IMP_HEADER), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.BY_DIRECTION_IMP_HEADER.isDisplayed().then(function (result) {
//         expect(true).to.equal(result);
//     })
//     await browser.wait(until.visibilityOf(CLRObj.BY_DIRECTION_THP_HEADER), 20000, 'Element taking too long time to be clickable in DOM');
//     await CLRObj.BY_DIRECTION_THP_HEADER.isDisplayed().then(function (result) {
//         expect(true).to.equal(result);
//     })
// });
// When('User selects old month rerate date', async function () {
//     await browser.wait(until.invisibilityOf(CLRObj.circle_loading), 20000, 'Taking too long to load');
//     await browser.wait(until.elementToBeClickable(CLRObj.RRT_FILTER_DATA), 20000, 'Element taking too long time to be clickable in DOM')
//     await CLRObj.RRT_FILTER_DATA.click();
//     let CurrentMonth = "OCT 2020";
//     let Month = await CLRObj.Current_Month.getText();
//     if (CurrentMonth == Month) {

//     }
// });

// When('User clicks on Export direction button to navigate on View-2 and view-3', async function () {
//     await browser.wait(until.elementToBeClickable(CLRObj.EXPORT), 20000, 'Element taking too long time to be invisible in DOM');
//     await CLRObj.EXPORT.click();
// });
// Then('View-2 and view-3 should get refreshed with correct data corresponding to Group ID chosen', async function () {
//     await browser.wait(until.visibilityOf(CLRObj.View2Header), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.View2Header.isDisplayed().then(function (result) {
//         expect(true).to.equal(result);
//     });
//     await browser.wait(until.visibilityOf(CLRObj.View3Header), 20000, 'Element taking too long to be clickable in DOM');
//     await CLRObj.View3Header.isDisplayed().then(function (result) {
//         expect(true).to.equal(result);
//     });
// });

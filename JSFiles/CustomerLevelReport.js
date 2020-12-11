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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJMZXZlbFJlcG9ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0N1c3RvbWVyTGV2ZWxSZXBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBRWhELG9FQUFvRTtBQUNwRSxzRUFBc0U7QUFDdEUsMEZBQTBGO0FBRTFGLCtFQUErRTtBQUMvRSw2QkFBNkI7QUFDN0IsK0NBQStDO0FBRS9DLGlFQUFpRTtBQUNqRSw4QkFBOEI7QUFDOUIsZ0VBQWdFO0FBQ2hFLG1EQUFtRDtBQUNuRCxnQ0FBZ0M7QUFHaEMsdURBQXVEO0FBQ3ZELDREQUE0RDtBQUM1RCx3Q0FBd0M7QUFDeEMseURBQXlEO0FBQ3pELG9EQUFvRDtBQUNwRCx3Q0FBd0M7QUFDeEMsbUVBQW1FO0FBQ25FLHdDQUF3QztBQUN4QyxxRUFBcUU7QUFDckUsNkNBQTZDO0FBRTdDLHVDQUF1QztBQUN2Qyw4Q0FBOEM7QUFDOUMsdUNBQXVDO0FBQ3ZDLHNCQUFzQjtBQUV0Qix3Q0FBd0M7QUFFeEMsNEVBQTRFO0FBQzVFLGlDQUFpQztBQUNqQyxnSUFBZ0k7QUFDaEkscUNBQXFDO0FBQ3JDLGlDQUFpQztBQUNqQyxNQUFNO0FBQ04sbUZBQW1GO0FBQ25GLG1KQUFtSjtBQUNuSixtREFBbUQ7QUFDbkQsaUNBQWlDO0FBQ2pDLE1BQU07QUFDTixtSUFBbUk7QUFDbkksaUNBQWlDO0FBQ2pDLHlHQUF5RztBQUN6Ryw4RUFBOEU7QUFDOUUsd0RBQXdEO0FBQ3hELGdGQUFnRjtBQUNoRixpQ0FBaUM7QUFDakMsTUFBTTtBQUNOLGdFQUFnRTtBQUNoRSx5R0FBeUc7QUFDekcsK0lBQStJO0FBQy9JLGdHQUFnRztBQUNoRyx5REFBeUQ7QUFDekQsVUFBVTtBQUNWLE1BQU07QUFDTix1RUFBdUU7QUFDdkUsOEhBQThIO0FBQzlILHlHQUF5RztBQUN6Ryx5REFBeUQ7QUFDekQsaUNBQWlDO0FBQ2pDLGlHQUFpRztBQUNqRywwRUFBMEU7QUFDMUUsU0FBUztB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
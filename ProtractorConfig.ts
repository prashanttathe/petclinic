import { Config, browser } from "protractor";
let reporter = require('cucumber-html-reporter');
const globalAny:any=global;

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

let ReportDate = yyyy + '-' + mm + '-' + dd;


export let config: Config = {

  allScriptsTimeout: 50000,
  getPageTimeout: 50000,
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,

  SELENIUM_PROMISE_MANAGER: false,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),


  // Capabilities to be passed to the webdriver instance.

  capabilities:
  {
    browserName: 'chrome',

    chromeOptions: {

      args: ["--incognito"],

      prefs: {

        download: {
          prompt_for_download: false,
          directory_upgrade: true,
          default_directory: './Download/'
        }
      }
    }
  },

  specs: [
    '../features/login.feature',
    '../features/homePage.feature',
    '../features/newOwner.feature',
    '../features/editOwner.feature',
  ],

  cucumberOpts: {
    // require step definitions
    tags: "@smoke",
    format: 'json:./cucumberreport.json',
    strict: true,

    require: [
      './stepDefinations/*.js', // accepts a glob,

    ]
  },

  onPrepare: () => {

    browser.ignoreSynchronization = false;
    browser.driver.manage().window().maximize();
    const chai = require("chai").use(require("chai-as-promised"));
    globalAny.chai=chai;
  },
  onComplete: () => {
    var options = {
      theme: 'bootstrap',
      jsonFile: './cucumberreport.json',
      screenshotsDirectory: 'screenshots/',
      storeScreenshots: true,
      output: './Reports/' + ReportDate + '.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        "App Version": "0.3.2",
        "Test Environment": "test",
        "Browser": "Chrome  79.0.3945.88",
        "Platform": "Windows 7",
        "Parallel": "Scenarios",
        "Executed": "Web App"
      }
    };

    reporter.generate(options);


  }
};

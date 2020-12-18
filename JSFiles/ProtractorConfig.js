"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
let reporter = require('cucumber-html-reporter');
const globalAny = global;
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
let ReportDate = yyyy + '-' + mm + '-' + dd;
exports.config = {
    allScriptsTimeout: 50000,
    getPageTimeout: 50000,
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
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
            './stepDefinations/*.js',
        ]
    },
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = false;
        protractor_1.browser.driver.manage().window().maximize();
        const chai = require("chai").use(require("chai-as-promised"));
        globalAny.chai = chai;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdHJhY3RvckNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL1Byb3RyYWN0b3JDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTZDO0FBQzdDLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sU0FBUyxHQUFLLE1BQU0sQ0FBQztBQUUzQixJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ3ZCLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2xELElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLGVBQWU7QUFDdkUsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBRS9CLElBQUksVUFBVSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFHakMsUUFBQSxNQUFNLEdBQVc7SUFFMUIsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixjQUFjLEVBQUUsS0FBSztJQUNyQiw0Q0FBNEM7SUFDNUMsa0RBQWtEO0lBQ2xELGFBQWEsRUFBRSxJQUFJO0lBRW5CLHdCQUF3QixFQUFFLEtBQUs7SUFDL0IsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFHL0QsdURBQXVEO0lBRXZELFlBQVksRUFDWjtRQUNFLFdBQVcsRUFBRSxRQUFRO1FBRXJCLGFBQWEsRUFBRTtZQUViLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUVyQixLQUFLLEVBQUU7Z0JBRUwsUUFBUSxFQUFFO29CQUNSLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGlCQUFpQixFQUFFLElBQUk7b0JBQ3ZCLGlCQUFpQixFQUFFLGFBQWE7aUJBQ2pDO2FBQ0Y7U0FDRjtLQUNGO0lBRUQsS0FBSyxFQUFFO1FBQ0wsMkJBQTJCO1FBQzNCLDhCQUE4QjtRQUM5Qiw4QkFBOEI7UUFDOUIsK0JBQStCO0tBQ2hDO0lBRUQsWUFBWSxFQUFFO1FBQ1osMkJBQTJCO1FBQzNCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLDRCQUE0QjtRQUNwQyxNQUFNLEVBQUUsSUFBSTtRQUVaLE9BQU8sRUFBRTtZQUNQLHdCQUF3QjtTQUV6QjtLQUNGO0lBRUQsU0FBUyxFQUFFLEdBQUcsRUFBRTtRQUVkLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUM5RCxTQUFTLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQztJQUN0QixDQUFDO0lBQ0QsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUNmLElBQUksT0FBTyxHQUFHO1lBQ1osS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxvQkFBb0IsRUFBRSxjQUFjO1lBQ3BDLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsTUFBTSxFQUFFLFlBQVksR0FBRyxVQUFVLEdBQUcsT0FBTztZQUMzQyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDUixhQUFhLEVBQUUsT0FBTztnQkFDdEIsa0JBQWtCLEVBQUUsTUFBTTtnQkFDMUIsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsU0FBUzthQUN0QjtTQUNGLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRzdCLENBQUM7Q0FDRixDQUFDIn0=
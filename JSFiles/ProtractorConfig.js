"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
let reporter = require('cucumber-html-reporter');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdHJhY3RvckNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL1Byb3RyYWN0b3JDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTZDO0FBQzdDLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBRWpELElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDdkIsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbEQsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsZUFBZTtBQUN2RSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7QUFFL0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUdqQyxRQUFBLE1BQU0sR0FBVztJQUUxQixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLDRDQUE0QztJQUM1QyxrREFBa0Q7SUFDbEQsYUFBYSxFQUFFLElBQUk7SUFFbkIsd0JBQXdCLEVBQUUsS0FBSztJQUMvQixTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUcvRCx1REFBdUQ7SUFFdkQsWUFBWSxFQUNaO1FBQ0UsV0FBVyxFQUFFLFFBQVE7UUFFckIsYUFBYSxFQUFFO1lBRWIsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDO1lBRXJCLEtBQUssRUFBRTtnQkFFTCxRQUFRLEVBQUU7b0JBQ1IsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsaUJBQWlCLEVBQUUsSUFBSTtvQkFDdkIsaUJBQWlCLEVBQUUsYUFBYTtpQkFDakM7YUFDRjtTQUNGO0tBQ0Y7SUFFRCxLQUFLLEVBQUU7UUFDTCwyQkFBMkI7UUFDM0IsOEJBQThCO1FBQzlCLDhCQUE4QjtLQUMvQjtJQUVELFlBQVksRUFBRTtRQUNaLDJCQUEyQjtRQUMzQixJQUFJLEVBQUMsUUFBUTtRQUNiLE1BQU0sRUFBRSw0QkFBNEI7UUFDcEMsTUFBTSxFQUFFLElBQUk7UUFFWixPQUFPLEVBQUU7WUFDUCx3QkFBd0I7U0FFekI7S0FDRjtJQUVELFNBQVMsRUFBRSxHQUFHLEVBQUU7UUFFZCxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUN0QyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUU5QyxDQUFDO0lBQ0QsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUNmLElBQUksT0FBTyxHQUFHO1lBQ1osS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxvQkFBb0IsRUFBRSxjQUFjO1lBQ3BDLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsTUFBTSxFQUFFLFlBQVksR0FBRyxVQUFVLEdBQUcsT0FBTztZQUMzQyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDUixhQUFhLEVBQUUsT0FBTztnQkFDdEIsa0JBQWtCLEVBQUUsTUFBTTtnQkFDMUIsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsU0FBUzthQUN0QjtTQUNGLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRzdCLENBQUM7Q0FDRixDQUFDIn0=
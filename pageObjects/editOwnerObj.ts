import { ElementFinder, element, by, ElementArrayFinder } from "protractor";
export class editOwnerObj {
    firstOwner: ElementFinder;
    addVisit: ElementFinder;
    date: ElementFinder;
    month: ElementFinder;
    selectDate: ElementFinder;
    nextMnth: ElementFinder;

    constructor() {
        this.firstOwner = element(by.xpath("//*[@class='table table-striped']/tbody/tr[1]/td[1]/a"));
        this.addVisit = element(by.xpath("//*[contains(text(),'Add Visit')]"));
        this.date = element(by.xpath("//*[@class='mat-datepicker-toggle']"));
        this.month = element(by.xpath("//*[@class='mat-calendar-period-button mat-button']"));
        this.selectDate = element(by.css('.cdk-overlay-container mat-month-view[aria-label="2020/12/01"]'));
        //this.nextMnth = element(by.xpath("//*[@class='mat-calendar-next-button mat-icon-button']"));
        this.nextMnth = element(by.xpath("//*[@aria-label='Next month']"));
            

    }


}
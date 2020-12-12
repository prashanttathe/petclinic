import { ElementFinder, element, by, ElementArrayFinder } from "protractor";
import locators from "../TestData/webObjects";

export class HomePageObjects {
    HomeMenu: ElementFinder;
    Owners: ElementFinder;
    Veterinarians: ElementFinder;
    PetTypes: ElementFinder;
    Specialties: ElementFinder;
    AllOwners:ElementFinder;
    AddNewOwner:ElementFinder;
    OwnerList:ElementFinder;
    PageName:ElementFinder;
    AddOwnerButton:ElementFinder;

    constructor() {
        this.HomeMenu = element(by.xpath("//*[@class='nav navbar-nav']/li[1]/a"));
        this.Owners = element(by.xpath("//*[@class='nav navbar-nav']/li[2]/a"));
        this.Veterinarians = element(by.xpath("//*[@class='nav navbar-nav']/li[3]/a"));
        this.PetTypes = element(by.xpath("//*[@class='nav navbar-nav']/li[4]/a"));
        this.Specialties = element(by.xpath("//*[@class='nav navbar-nav']/li[5]/a"));
        this.AllOwners= element(by.linkText("ALL"));
        this.AddNewOwner= element(by.linkText("ADD NEW"));
        this.OwnerList=element(by.xpath("//table[@class='table table-striped']/thead/tr"));
        this.PageName=element(by.xpath("//*[@class='container xd-container']/h2"));
        this.AddOwnerButton=element(by.xpath("//*[@class='btn btn-default']"));
    
    }


}
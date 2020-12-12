"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePageObjects = void 0;
const protractor_1 = require("protractor");
class HomePageObjects {
    constructor() {
        this.HomeMenu = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[1]/a"));
        this.Owners = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[2]/a"));
        this.Veterinarians = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[3]/a"));
        this.PetTypes = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[4]/a"));
        this.Specialties = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[5]/a"));
        this.AllOwners = protractor_1.element(protractor_1.by.linkText("ALL"));
        this.AddNewOwner = protractor_1.element(protractor_1.by.linkText("ADD NEW"));
        this.OwnerList = protractor_1.element(protractor_1.by.xpath("//table[@class='table table-striped']/thead/tr"));
        this.PageName = protractor_1.element(protractor_1.by.xpath("//*[@class='container xd-container']/h2"));
        this.AddOwnerButton = protractor_1.element(protractor_1.by.xpath("//*[@class='btn btn-default']"));
    }
}
exports.HomePageObjects = HomePageObjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2VPYmplY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvSG9tZVBhZ2VPYmplY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE0RTtBQUc1RSxNQUFhLGVBQWU7SUFZeEI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxTQUFTLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxjQUFjLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztJQUUzRSxDQUFDO0NBR0o7QUEzQkQsMENBMkJDIn0=
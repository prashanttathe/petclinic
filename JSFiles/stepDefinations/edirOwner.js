"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const editOwnerObj_1 = require("../pageObjects/editOwnerObj");
const expect = global['chai'].expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);
let editOwnObj = new editOwnerObj_1.editOwnerObj();
cucumber_1.When('User clicks on first owner name to check owner information', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield editOwnObj.firstOwner.click();
    });
});
cucumber_1.When('User clicks on Add Visit button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield editOwnObj.addVisit.click();
    });
});
cucumber_1.When('User selects date from calendar', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield editOwnObj.date.click();
        let month = "12 2022";
        let date = "20";
        while (true) {
            let currentMonth = yield editOwnObj.month.getText();
            yield console.log("Month : " + currentMonth);
            if (month == currentMonth) {
                break;
            }
            else {
                yield editOwnObj.nextMnth.click();
            }
        }
        yield protractor_1.element(protractor_1.by.xpath("//*[@class='mat-calendar-table']/tbody/tr/td[.='" + date + "']")).click();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpck93bmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluYXRpb25zL2VkaXJPd25lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywyQ0FBeUM7QUFDekMsOERBQTJEO0FBRTNELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFFckMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2hELGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUU3QixJQUFJLFVBQVUsR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztBQUVwQyxlQUFJLENBQUMsNERBQTRELEVBQUU7O1FBQy9ELE1BQU0sVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLGlDQUFpQyxFQUFFOztRQUNwQyxNQUFNLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyxpQ0FBaUMsRUFBRTs7UUFDcEMsTUFBTSxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlCLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN0QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsT0FBTyxJQUFJLEVBQUU7WUFDVCxJQUFJLFlBQVksR0FBRyxNQUFNLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEQsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUMsQ0FBQztZQUM3QyxJQUFJLEtBQUssSUFBSSxZQUFZLEVBQUU7Z0JBQ3ZCLE1BQU07YUFDVDtpQkFDSTtnQkFDRCxNQUFNLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDckM7U0FDSjtRQUNELE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtEQUFrRCxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RHLENBQUM7Q0FBQSxDQUFDLENBQUMifQ==
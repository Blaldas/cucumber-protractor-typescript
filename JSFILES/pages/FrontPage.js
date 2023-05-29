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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrontPage = void 0;
const protractor_1 = require("protractor");
const Utils_1 = require("../utils/Utils");
const SeleniumUtils_1 = require("../utils/SeleniumUtils");
const chai_1 = __importDefault(require("chai"));
class FrontPage {
    //  depDateButton: ElementFinder;
    /**
     * Creates all elements and xpaths so that there is uniformization
     */
    constructor() {
        this.placeHolder = "<placeHolder>";
        this.oneWayButton = (0, protractor_1.element)(protractor_1.by.xpath("//button[@aria-label='One way']"));
        this.fromField = (0, protractor_1.element)(protractor_1.by.xpath("//input[@id='input-button__departure']"));
        this.toField = (0, protractor_1.element)(protractor_1.by.xpath("//input[@id='input-button__destination']"));
        this.cityButtonXpath = "//fsw-airport-item/span[contains(.,'" + this.placeHolder + "')]";
        this.monthButtonXpath = "//div[@data-id='" + this.placeHolder + "']";
        this.calendarMonthName = "//div[@data-ref='calendar-month-name']";
        this.addPeopleButton = protractor_1.element.all(protractor_1.by.xpath("//div[@data-ref='counter.counter__increment']"));
        this.removePeopleButton = protractor_1.element.all(protractor_1.by.xpath("//div[@data-ref='counter.counter__decrement']"));
        this.passengerDoneButton = (0, protractor_1.element)(protractor_1.by.className("passengers__confirm-button ry-button--anchor-blue ry-button--anchor"));
        this.searchButton = (0, protractor_1.element)(protractor_1.by.xpath("//button[@data-ref='flight-search-widget__cta']"));
    }
    /**
     * click on the one way trip button
     */
    clickOnOneWayTrip() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.oneWayButton.click();
        });
    }
    /**
     * Used internally to write on the From field
     * Deletes any text that might exist and the writes the text it wants
     * @param from
     */
    inputOnFromField(from) {
        return __awaiter(this, void 0, void 0, function* () {
            //await this.fromField.clear();
            yield this.fromField.sendKeys(protractor_1.Key.CONTROL, 'a', protractor_1.Key.DELETE);
            yield this.fromField.sendKeys(from);
        });
    }
    /**
    * Used internally to write on the To field
    * Deletes any text that might exist and the writes the text it wants
    * @param to
    */
    inputOnToField(to) {
        return __awaiter(this, void 0, void 0, function* () {
            // await this.toField.clear();
            yield this.toField.sendKeys(protractor_1.Key.CONTROL, 'a', protractor_1.Key.DELETE);
            yield this.toField.sendKeys(to);
        });
    }
    /**
     * Public method used to write on the To field and click on the correct button
     * @param to
     */
    selectTo(to) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.inputOnToField(to);
            yield this.selectCity(to);
        });
    }
    /**
   * Public method used to write on the From field and click on the correct button
   * @param from
   */
    selectFrom(from) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.inputOnFromField(from);
            yield this.selectCity(from);
        });
    }
    /**
     * This method replaces the placeholder in the cityButtonXpath by tyhe city
     * and clicks on the button
     * @param city The city to be selected
     */
    selectCity(city) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, protractor_1.element)(protractor_1.by.xpath(this.cityButtonXpath.replace(this.placeHolder, city))).click();
        });
    }
    /**
     * This method selects the correct flight date.
     * The method gets all button elements that have the choosen month.
     * The correct element is identified based on the year and month:
     * elIndex = choosen year - current year
     * if current month > choosen month, than elIndex--
     * @param year
     * @param month
     * @param day
     */
    selectDate(year, month, day) {
        return __awaiter(this, void 0, void 0, function* () {
            let monthComplete = yield (0, Utils_1.getMonthName)(month);
            // console.log('monthComplete', monthComplete);
            let monthStr = yield monthComplete.substring(0, 3);
            // await this.selectMonth(monthStr, year);
            //checks year diffence so it can choose the right xpath for the month
            const currentYear = yield (0, Utils_1.getYear)();
            let yearDifference = (yield year) - currentYear;
            //if its not this year and the month is lower than the current month 
            //the number of available xpaths is lowered
            if (month < (yield (0, Utils_1.getCurrentMonth)())) {
                yield yearDifference--;
            }
            //selects the month
            yield (0, SeleniumUtils_1.clickByXpath)(this.monthButtonXpath.replace(this.placeHolder, monthStr), yearDifference);
            //checks if it is the right month of the right year
            const picYear = yield (0, protractor_1.element)(protractor_1.by.xpath(this.calendarMonthName)).getText();
            yield chai_1.default.expect(picYear).to.equal(monthComplete + " " + year);
            yield (0, SeleniumUtils_1.clickByXpath)(this.monthButtonXpath.replace(this.placeHolder, year + "-" + month + "-" + day));
        });
    }
    /**
   * This method selects the correct final number of adults expected
   * @param nAdult Number of passengers of type adult to be selected
   */
    selectNumberAdults(nAdult) {
        return __awaiter(this, void 0, void 0, function* () {
            const adultClicks = nAdult - 1;
            if (adultClicks > 0) {
                for (let i = 0; i < adultClicks; i++) {
                    yield this.addPeopleButton.get(0).click();
                }
            }
            else if (adultClicks < 0) {
                for (let i = 0; i < adultClicks; i++) {
                    yield this.removePeopleButton.get(0).click();
                }
            }
        });
    }
    /**
     * This method selects the correct final number of children expected
     * @param nChild Number of passengers of type children to be selected
     */
    selectNumberChildren(nChild) {
        return __awaiter(this, void 0, void 0, function* () {
            const childClicks = nChild;
            if (childClicks > 0) {
                for (let i = 0; i < childClicks; i++) {
                    yield this.addPeopleButton.get(2).click();
                }
            }
            else if (childClicks < 0) {
                for (let i = 0; i < childClicks; i++) {
                    yield this.removePeopleButton.get(2).click();
                }
            }
        });
    }
    /**
     * This method is used to click on the DONE button in the modal
     * used to select the number of passenger, closing it
     */
    clickPsgrDoneButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.passengerDoneButton.click();
        });
    }
    /**
     * This method is used to click on the searchButton
     */
    clickOnSearchButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.searchButton.click();
        });
    }
}
exports.FrontPage = FrontPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnJvbnRQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvRnJvbnRQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFxRztBQUNyRywwQ0FBd0U7QUFDeEUsMERBQXNEO0FBQ3RELGdEQUF1QjtBQUd2QixNQUFhLFNBQVM7SUFlcEIsaUNBQWlDO0lBRWpDOztPQUVHO0lBQ0g7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsZUFBZSxHQUFHLHNDQUFzQyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNyRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsd0NBQXdDLENBQUM7UUFDbEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsa0JBQWtCLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElB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
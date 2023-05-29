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
exports.FlightsPage = void 0;
const protractor_1 = require("protractor");
const Utils_1 = require("../../utils/Utils");
const SeleniumUtils_1 = require("../../utils/SeleniumUtils");
class FlightsPage {
    constructor() {
        this.placeHolder = "<placeHolder>";
        this.selectPriceButton = (0, protractor_1.element)(protractor_1.by.xpath("//button[contains(@class,'card-price__button')]"));
        this.fareValueButton = (0, protractor_1.element)(protractor_1.by.className('fare-card__button fare-card__price ry-button--outline-dark-blue'));
        this.continueValueFareButton = (0, protractor_1.element)(protractor_1.by.className('fare-upgrade-footer-continue_button ry-button--outline-light-blue ry-button--full'));
        this.loginLaterButton = (0, protractor_1.element)(protractor_1.by.className("login-touchpoint__expansion-bar"));
        this.adultTitleDropDown = (0, protractor_1.element)(protractor_1.by.xpath('//pax-passenger[contains(., "Adult")]//button[@class="dropdown__toggle body-l-lg body-l-sm"]'));
        this.titleOption = (0, protractor_1.element)(protractor_1.by.className('dropdown-item__link'));
        this.adultFirstNameInputXpath = '//input[@name="form.passengers.ADT-' + this.placeHolder + '.name"]'; //replace by 0, 1, 2
        this.adultSurnameNameInputXpath = '//input[@name="form.passengers.ADT-' + this.placeHolder + '.surname"]'; //replace by 0, 1, 2
        this.childFirstNameInputXpath = '//input[@name="form.passengers.CHD-' + this.placeHolder + '.name"]'; //replace by 0, 1, 2
        this.childSurnameNameInputXpath = '//input[@name="form.passengers.CHD-' + this.placeHolder + '.surname"]'; //replace by 0, 1, 2
        this.continueButton = (0, protractor_1.element)(protractor_1.by.xpath("//button[contains(.,'Continue')]"));
    }
    clickOnContinueButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.continueButton.click();
        });
    }
    addChildPassengerData(nChild) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < nChild; i++) {
                yield (0, protractor_1.element)(protractor_1.by.xpath(this.childFirstNameInputXpath.replace(this.placeHolder, i.toString()))).sendKeys(yield (0, Utils_1.generateString)(7));
                yield (0, protractor_1.element)(protractor_1.by.xpath(this.childSurnameNameInputXpath.replace(this.placeHolder, i.toString()))).sendKeys(yield (0, Utils_1.generateString)(7));
            }
        });
    }
    addAdultPassengerData(nAdult) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < nAdult; i++) {
                yield this.adultTitleDropDown.click();
                yield this.titleOption.click();
                yield (0, protractor_1.element)(protractor_1.by.xpath(this.adultFirstNameInputXpath.replace(this.placeHolder, i.toString()))).sendKeys(yield (0, Utils_1.generateString)(7));
                yield (0, protractor_1.element)(protractor_1.by.xpath(this.adultSurnameNameInputXpath.replace(this.placeHolder, i.toString()))).sendKeys(yield (0, Utils_1.generateString)(7));
            }
        });
    }
    clickOnSelectPrice() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.selectPriceButton.click();
        });
    }
    clickOnFareValueButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fareValueButton.click();
        });
    }
    clickOnContinueValueFare() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, SeleniumUtils_1.clickElement)(this.continueValueFareButton);
        });
    }
    clickOnloginLater() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, SeleniumUtils_1.clickElement)(this.loginLaterButton);
        });
    }
}
exports.FlightsPage = FlightsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpcFBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wYWdlcy90cmlwL1RyaXBQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEyRjtBQUMzRiw2Q0FBbUQ7QUFDbkQsNkRBQXlEO0FBRXpELE1BQWEsV0FBVztJQXFCcEI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQztRQUVuQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsaUVBQWlFLENBQUMsQ0FBQyxDQUFDO1FBQ2hILElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxtRkFBbUYsQ0FBQyxDQUFDLENBQUM7UUFDMUksSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsOEZBQThGLENBQUMsQ0FBQyxDQUFDO1FBQzVJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBRWhFLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxxQ0FBcUMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQSxDQUFJLG9CQUFvQjtRQUM1SCxJQUFJLENBQUMsMEJBQTBCLEdBQUcscUNBQXFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUEsQ0FBSSxvQkFB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
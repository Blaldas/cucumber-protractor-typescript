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
exports.SeatsPage = void 0;
const protractor_1 = require("protractor");
const SeleniumUtils_1 = require("../../utils/SeleniumUtils");
class SeatsPage {
    constructor() {
        this.placeHolder = "<placeHolder>";
        this.okayFamilySeatingButton = (0, protractor_1.element)(protractor_1.by.className('seats-modal__cta ry-button--gradient-blue'));
        this.continueButton = (0, protractor_1.element)(protractor_1.by.xpath("//button[contains(.,'Continue')]"));
        this.selectSeatsLaterButton = (0, protractor_1.element)(protractor_1.by.xpath("//button[contains(.,'Option 2: Select seats later')]"));
        this.continueWithouSeatButton = (0, protractor_1.element)(protractor_1.by.xpath("//button[contains(.,'Continue without a seat')]"));
        this.noThanksButton = (0, protractor_1.element)(protractor_1.by.xpath("//button[contains(.,'No, thanks')]"));
        this.reenforceContinueButton = (0, protractor_1.element)(protractor_1.by.xpath("//button[contains(@class,'reinforcement-message__actions__button')]"));
    }
    continueWithoutSeatOrSelectYourOwn(nAdult, nChild) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.selectSeatsLaterButton.isPresent()) {
                yield this.continueWithouASit();
            }
            else {
                yield this.selectOwnSeats(nAdult, nChild);
                yield this.clickOnContinueButton();
                yield this.clickOnReenforceContinueButton();
                yield this.clickOnNoThanksButton();
            }
        });
    }
    /**
     * This method assumes the plane has allways the same size,
     * where the "included" seats range from the row 18 to 33
     *
     * The method assumes that there is a fist adult, followed by all the children and, then, the remaining adults~
     * A limmit of 4 children needs to be defined since the rows have a max of 6 seats and we assume the children only go with the first adult.
     * Upgrading this method to allow more children is not reasonable in the scope of this project,
     *
     * @param nAdult
     * @param nChild
     */
    selectOwnSeats(nAdult, nChild) {
        return __awaiter(this, void 0, void 0, function* () {
            const defaultSeatId = 'seat-';
            if (nChild > 0) {
                const letArr = ['A', 'B', 'C', 'D', 'E', 'F'];
                let row, firstLetter;
                let usableSeatGroup = true;
                //for each row
                for (let i = 18; i < 34; i++) {
                    //for each side
                    usableSeatGroup = true;
                    for (let n = 0; n < letArr.length - (nChild + 1); n++) {
                        //for each children + 1 adult
                        for (let d = 0; d < nChild + 1; d++) {
                            //obtains the seat element
                            const s1 = (0, protractor_1.element)(protractor_1.by.id(defaultSeatId + i + letArr[n + d]));
                            //checks if it is unavailable
                            if ((yield s1.getAttribute('class')).includes('unavailable')) {
                                usableSeatGroup = false;
                            }
                        }
                        if (usableSeatGroup) {
                            row = i;
                            firstLetter = n;
                            break;
                        }
                    }
                    if (usableSeatGroup) {
                        break;
                    }
                }
                if (!usableSeatGroup) {
                    console.log('There are no available combinations of seats that allow to take the child with the first adult');
                    process.exit(1);
                }
                //Selects the seats for the children + 1 adult
                for (let i = 0; i < nChild + 1; i++) {
                    yield (0, protractor_1.element)(protractor_1.by.id(defaultSeatId + row + letArr[firstLetter + i])).click();
                }
                //this adult is already selected
                nAdult--;
            }
        });
    }
    clickOnContinueButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, SeleniumUtils_1.clickElement)(this.continueButton);
        });
    }
    clickOnNoThanksButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.noThanksButton.click();
        });
    }
    clickOnOkayFamilySeatingButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.okayFamilySeatingButton.click();
        });
    }
    clickOnSelectSeatsLater() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.selectSeatsLaterButton.click();
        });
    }
    clickOnContinueWithoutASeat() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.continueWithouSeatButton.click();
        });
    }
    continueWithouASit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clickOnSelectSeatsLater();
            yield this.clickOnContinueWithoutASeat();
        });
    }
    clickOnReenforceContinueButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.reenforceContinueButton.click();
        });
    }
}
exports.SeatsPage = SeatsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlYXRzUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2VzL3RyaXAvU3RlYXRzUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMkY7QUFFM0YsNkRBQXlEO0FBRXpELE1BQWEsU0FBUztJQWNsQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDO1FBRW5DLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUMsQ0FBQztRQUN4RyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQyxDQUFDO1FBQ3JHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDLENBQUM7SUFJNUgsQ0FBQztJQUdLLGtDQUFrQyxDQUFDLE1BQVcsRUFBRSxNQUFXOztZQUM3RCxJQUFJLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUMvQyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2FBQ25DO2lCQUNJO2dCQUNELE1BQU0sSUFBSSxDQUFDLGNB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
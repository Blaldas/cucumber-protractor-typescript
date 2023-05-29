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
const cucumber_1 = require("@cucumber/cucumber");
const FrontPage_1 = require("../pages/FrontPage");
const TripPage_1 = require("../pages/trip/TripPage");
const SteatsPage_1 = require("../pages/trip/SteatsPage");
const BagsPage_1 = require("../pages/trip/BagsPage");
const ExtrasPage_1 = require("../pages/trip/ExtrasPage");
const Payment_1 = require("../pages/trip/Payment");
(0, cucumber_1.Given)('I search for a flight from {string} to {string} on {int}\\/{int}\\/{int} for {int} adults and {int} child', function (from, to, day, month, year, nAdult, nChild) {
    return __awaiter(this, void 0, void 0, function* () {
        // return 'pending';
        let frontPage = yield new FrontPage_1.FrontPage();
        //selects one way trip
        yield frontPage.clickOnOneWayTrip();
        //selects from and to
        yield frontPage.selectFrom(from);
        yield frontPage.selectTo(to);
        //selects the given day
        yield frontPage.selectDate(year, month, day);
        //selects passengers
        yield frontPage.selectNumberAdults(nAdult);
        yield frontPage.selectNumberChildren(nChild);
        yield frontPage.clickPsgrDoneButton();
        //goes to next page
        yield frontPage.clickOnSearchButton();
    });
});
(0, cucumber_1.When)('I proceed to pay with selected seats and 20 kg bags added for {int} adults and {int} child', function (nAdult, nChild) {
    return __awaiter(this, void 0, void 0, function* () {
        //flight page
        const flightsPage = yield new TripPage_1.FlightsPage();
        yield flightsPage.clickOnSelectPrice();
        yield flightsPage.clickOnFareValueButton();
        yield flightsPage.clickOnContinueValueFare();
        yield flightsPage.clickOnloginLater();
        yield flightsPage.addAdultPassengerData(nAdult);
        yield flightsPage.addChildPassengerData(nChild);
        yield flightsPage.clickOnContinueButton();
        const seatsPage = yield new SteatsPage_1.SeatsPage();
        yield seatsPage.clickOnOkayFamilySeatingButton();
        yield seatsPage.continueWithoutSeatOrSelectYourOwn(nAdult, nChild);
        const bagsPage = new BagsPage_1.BagsPage();
        yield bagsPage.clickOnSmallBagOnly();
        yield bagsPage.add20KgsBagsToAll();
        yield bagsPage.continueToNextPage();
        const extrasPage = yield new ExtrasPage_1.ExtrasPage();
        yield extrasPage.continueToNextPage();
    });
});
(0, cucumber_1.Then)('login popup shows up', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //payment page
        const paymentPage = new Payment_1.PaymentPage();
        yield paymentPage.checkIfLoginModalPresent();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVtb3N0ZXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwcy9EZW1vc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGlEQUF1RDtBQUV2RCxrREFBaUQ7QUFDakQscURBQXFEO0FBQ3JELHlEQUFxRDtBQUNyRCxxREFBa0Q7QUFDbEQseURBQXNEO0FBQ3RELG1EQUFvRDtBQUVwRCxJQUFBLGdCQUFLLEVBQUMsMkdBQTJHLEVBQUUsVUFBZ0IsSUFBWSxFQUFFLEVBQVUsRUFBRSxHQUFXLEVBQUUsS0FBYSxFQUFFLElBQVksRUFBRSxNQUFjLEVBQUUsTUFBYzs7UUFDak8sb0JBQW9CO1FBQ3BCLElBQUksU0FBUyxHQUFHLE1BQU0sSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDdEMsc0JBQXNCO1FBQ3RCLE1BQU0sU0FBUyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDcEMscUJBQXFCO1FBQ3JCLE1BQU0sU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxNQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0IsdUJBQXVCO1FBQ3ZCLE1BQU0sU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLG9CQUFvQjtRQUNwQixNQUFNLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxNQUFNLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxNQUFNLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3RDLG1CQUFtQjtRQUNuQixNQUFNLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzFDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFHSCxJQUFBLGVBQUksRUFBQyw0RkFBNEYsRUFBRSxVQUFnQixNQUFNLEVBQUUsTUFBTTs7UUFDN0gsYUFBYTtRQUNiLE1BQU0sV0FBVyxHQUFHLE1BQU0sSUFBSSxzQkFBVyxFQUFFLENBQUM7UUFDNUMsTUFBTSxXQUFXLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN2QyxNQUFNLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzNDLE1BQU0sV0FBVyxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDN0MsTUFBTSxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV0QyxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxNQUFNLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRTFDLE1BQU0sU0FBUyxHQUFHLE1BQU0sSUFBSSxzQkFBUyxFQUFFLENBQUM7UUFDeEMsTUFBTSxTQUFTLENBQUMsOEJBQThCLEVBQUUsQ0FBQztRQUNqRCxNQUFNLFNBQVMsQ0FBQyxrQ0FBa0MsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFbkUsTUFBTSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7UUFDaEMsTUFBTSxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNyQyxNQUFNLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ25DLE1BQU0sUUFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFcEMsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUMxQyxNQUFNLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBRTFDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFHSCxJQUFBLGVBQUksRUFBQyxzQkFBc0IsRUFBRTs7UUFDekIsY0FBYztRQUNkLE1BQU0sV0FBVyxHQUFHLElBQUkscUJBQVcsRUFBRSxDQUFDO1FBQ3RDLE1BQU0sV0FBVyxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDakQsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9
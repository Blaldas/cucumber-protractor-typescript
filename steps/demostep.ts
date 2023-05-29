import { Given, Then, When } from "@cucumber/cucumber";
import { browser } from "protractor";
import { FrontPage,  } from "../pages/FrontPage";
import { FlightsPage } from "../pages/trip/TripPage";
import { SeatsPage } from "../pages/trip/SteatsPage";
import { BagsPage } from "../pages/trip/BagsPage";
import { ExtrasPage } from "../pages/trip/ExtrasPage";
import { PaymentPage } from "../pages/trip/Payment";

Given('I search for a flight from {string} to {string} on {int}\\/{int}\\/{int} for {int} adults and {int} child', async function (from: string, to: string, day: number, month: number, year: number, nAdult: number, nChild: number) {
    // return 'pending';
    let frontPage = await new FrontPage();
    //selects one way trip
    await frontPage.clickOnOneWayTrip();
    //selects from and to
    await frontPage.selectFrom(from);
    await frontPage.selectTo(to);
    //selects the given day
    await frontPage.selectDate(year, month, day);
    //selects passengers
    await frontPage.selectNumberAdults(nAdult);
    await frontPage.selectNumberChildren(nChild);
    await frontPage.clickPsgrDoneButton();
    //goes to next page
    await frontPage.clickOnSearchButton();
});


When('I proceed to pay with selected seats and 20 kg bags added for {int} adults and {int} child', async function (nAdult, nChild) {
    //flight page
    const flightsPage = await new FlightsPage();
    await flightsPage.clickOnSelectPrice();
    await flightsPage.clickOnFareValueButton();
    await flightsPage.clickOnContinueValueFare();
    await flightsPage.clickOnloginLater();
    
    await flightsPage.addAdultPassengerData(nAdult);
    await flightsPage.addChildPassengerData(nChild);
    await flightsPage.clickOnContinueButton();

    const seatsPage = await new SeatsPage();
    await seatsPage.clickOnOkayFamilySeatingButton();
    await seatsPage.continueWithoutSeatOrSelectYourOwn(nAdult, nChild);

    const bagsPage = new BagsPage();
    await bagsPage.clickOnSmallBagOnly();
    await bagsPage.add20KgsBagsToAll();
    await bagsPage.continueToNextPage();
        
    const extrasPage = await new ExtrasPage();
    await extrasPage.continueToNextPage();

});


Then('login popup shows up', async function () {
    //payment page
    const paymentPage = new PaymentPage();
    await paymentPage.checkIfLoginModalPresent();
});


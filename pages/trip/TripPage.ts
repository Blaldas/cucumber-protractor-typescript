import { ElementFinder, browser, by, element, ExpectedConditions as EC } from "protractor";
import { generateString } from "../../utils/Utils";
import { clickElement } from "../../utils/SeleniumUtils";

export class FlightsPage {


    placeHolder: string;


    selectPriceButton: ElementFinder;
    fareValueButton: ElementFinder;
    continueValueFareButton: ElementFinder;
    loginLaterButton: ElementFinder;
    adultTitleDropDown: ElementFinder;
    titleOption: ElementFinder;
  
    adultFirstNameInputXpath: string;
    adultSurnameNameInputXpath: string;
   
    childFirstNameInputXpath: string;
    childSurnameNameInputXpath: string;

    continueButton:ElementFinder;

    constructor() {
        this.placeHolder = "<placeHolder>";

        this.selectPriceButton = element(by.xpath("//button[contains(@class,'card-price__button')]"));
        this.fareValueButton = element(by.className('fare-card__button fare-card__price ry-button--outline-dark-blue'));
        this.continueValueFareButton = element(by.className('fare-upgrade-footer-continue_button ry-button--outline-light-blue ry-button--full'));
        this.loginLaterButton = element(by.className("login-touchpoint__expansion-bar"));
        this.adultTitleDropDown = element(by.xpath('//pax-passenger[contains(., "Adult")]//button[@class="dropdown__toggle body-l-lg body-l-sm"]'));
        this.titleOption = element(by.className('dropdown-item__link'));

        this.adultFirstNameInputXpath = '//input[@name="form.passengers.ADT-' + this.placeHolder + '.name"]'    //replace by 0, 1, 2
        this.adultSurnameNameInputXpath = '//input[@name="form.passengers.ADT-' + this.placeHolder + '.surname"]'    //replace by 0, 1, 2

        this.childFirstNameInputXpath = '//input[@name="form.passengers.CHD-' + this.placeHolder + '.name"]'    //replace by 0, 1, 2
        this.childSurnameNameInputXpath = '//input[@name="form.passengers.CHD-' + this.placeHolder + '.surname"]'    //replace by 0, 1, 2

        this.continueButton = element(by.xpath("//button[contains(.,'Continue')]"));
    }


    async clickOnContinueButton() {
        await this.continueButton.click();
    }

    async addChildPassengerData(nChild: any) {
        for (let i = 0; i < nChild; i++) {

            await element(by.xpath(this.childFirstNameInputXpath.replace(this.placeHolder, i.toString()))).sendKeys(await generateString(7));
            await element(by.xpath(this.childSurnameNameInputXpath.replace(this.placeHolder, i.toString()))).sendKeys(await generateString(7));
        }
    }


    async addAdultPassengerData(nAdult: number) {
        for (let i = 0; i < nAdult; i++) {
            await this.adultTitleDropDown.click();
            await this.titleOption.click();

            await element(by.xpath(this.adultFirstNameInputXpath.replace(this.placeHolder, i.toString()))).sendKeys(await generateString(7));
            await element(by.xpath(this.adultSurnameNameInputXpath.replace(this.placeHolder, i.toString()))).sendKeys(await generateString(7));
        }
    }



    async clickOnSelectPrice() {
        await this.selectPriceButton.click();
    }

    async clickOnFareValueButton() {
        await this.fareValueButton.click();
    }

    async clickOnContinueValueFare() {
        await clickElement(this.continueValueFareButton);
    }

    async clickOnloginLater() {
        await clickElement(this.loginLaterButton);
    }

}
import { ElementFinder, browser, by, element, ExpectedConditions as EC } from "protractor";
import { clickElement } from "../../utils/SeleniumUtils";

export class ExtrasPage {

    placeHolder: string;

    continueButton: ElementFinder;

    constructor(){
        this.placeHolder = "<placeHolder>";

        this.continueButton= element(by.xpath("//button[contains(.,'Continue')]"));


    }


    async clickOnContinueButton(){
        await clickElement(this.continueButton, 3000);
    }

    async continueToNextPage(){
        await this.clickOnContinueButton();
        await this.clickOnContinueButton();

    }


}
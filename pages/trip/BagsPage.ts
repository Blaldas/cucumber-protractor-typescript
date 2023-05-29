import { ElementFinder, browser, by, element, ExpectedConditions as EC } from "protractor";

export class BagsPage {

    placeHolder: string;

    smallBagRadioButton: ElementFinder;
    add20KgBagsToAllBtn: ElementFinder;
    continueButton: ElementFinder;

    constructor(){
        this.placeHolder = "<placeHolder>";

        this.smallBagRadioButton = element(by.className("ry-radio-circle-button__label"));
        this.add20KgBagsToAllBtn = element(by.className("add-for-all add-for-all--cta ng-star-inserted"));
        this.continueButton= element(by.xpath("//button[contains(.,'Continue')]"));


    }

    async clickOnSmallBagOnly(){
        await this.smallBagRadioButton.click();
    }

    async add20KgsBagsToAll(){
        await this.add20KgBagsToAllBtn.click();
    }

    async continueToNextPage(){
        await this.continueButton.click();
    }


}
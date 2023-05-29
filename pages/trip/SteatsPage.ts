import { ElementFinder, browser, by, element, ExpectedConditions as EC } from "protractor";
import { generateString } from "../../utils/Utils";
import { clickElement } from "../../utils/SeleniumUtils";

export class SeatsPage {



    placeHolder: string;

    okayFamilySeatingButton: ElementFinder;

    continueButton: ElementFinder
    selectSeatsLaterButton: ElementFinder
    continueWithouSeatButton: ElementFinder;
    noThanksButton: ElementFinder
    reenforceContinueButton: ElementFinder;

    constructor() {
        this.placeHolder = "<placeHolder>";

        this.okayFamilySeatingButton = element(by.className('seats-modal__cta ry-button--gradient-blue'));
        this.continueButton = element(by.xpath("//button[contains(.,'Continue')]"));
        this.selectSeatsLaterButton = element(by.xpath("//button[contains(.,'Option 2: Select seats later')]"));
        this.continueWithouSeatButton = element(by.xpath("//button[contains(.,'Continue without a seat')]"));
        this.noThanksButton = element(by.xpath("//button[contains(.,'No, thanks')]"));
        this.reenforceContinueButton = element(by.xpath("//button[contains(@class,'reinforcement-message__actions__button')]"));



    }


    async continueWithoutSeatOrSelectYourOwn(nAdult: any, nChild: any) {
        if (await this.selectSeatsLaterButton.isPresent()) {
            await this.continueWithouASit();
        }
        else {
            await this.selectOwnSeats(nAdult, nChild);
            await this.clickOnContinueButton();
            await this.clickOnReenforceContinueButton();
            await this.clickOnNoThanksButton();
        }


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
    async selectOwnSeats(nAdult: any, nChild: any) {

        const defaultSeatId: string = 'seat-'

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
                        const s1 = element(by.id(defaultSeatId + i + letArr[n + d]))
                        //checks if it is unavailable
                        if ((await s1.getAttribute('class')).includes('unavailable')) {
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
                await element(by.id(defaultSeatId + row + letArr[firstLetter + i])).click();
            }
            //this adult is already selected
            nAdult--;
        }

    }

    async clickOnContinueButton() {
        await clickElement(this.continueButton);
    }

    async clickOnNoThanksButton() {
        await this.noThanksButton.click();
    }

    async clickOnOkayFamilySeatingButton() {
        await this.okayFamilySeatingButton.click();
    }

    private async clickOnSelectSeatsLater() {
        await this.selectSeatsLaterButton.click();
    }
    private async clickOnContinueWithoutASeat() {
        await this.continueWithouSeatButton.click();
    }
    async continueWithouASit() {
        await this.clickOnSelectSeatsLater();
        await this.clickOnContinueWithoutASeat();
    }

    async clickOnReenforceContinueButton() {
        await this.reenforceContinueButton.click();
    }



}
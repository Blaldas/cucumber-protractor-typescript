import { browser, element, by, By, $, $$, ElementFinder, Key, ElementArrayFinder } from 'protractor';
import { getCurrentMonth, getMonthName, getYear } from '../utils/Utils';
import { clickByXpath } from '../utils/SeleniumUtils';
import chai from "chai"


export class FrontPage {

  placeHolder: string;

  oneWayButton: ElementFinder;
  fromField: ElementFinder;
  toField: ElementFinder;
  readonly cityButtonXpath: string;
  readonly monthButtonXpath: string;
  readonly calendarMonthName: string;
  addPeopleButton: ElementArrayFinder;
  removePeopleButton: ElementArrayFinder;
  passengerDoneButton: ElementFinder;
  searchButton: ElementFinder;

  //  depDateButton: ElementFinder;

  /**
   * Creates all elements and xpaths so that there is uniformization
   */
  constructor() {
    this.placeHolder = "<placeHolder>";
    this.oneWayButton = element(by.xpath("//button[@aria-label='One way']"));
    this.fromField = element(by.xpath("//input[@id='input-button__departure']"));
    this.toField = element(by.xpath("//input[@id='input-button__destination']"));
    this.cityButtonXpath = "//fsw-airport-item/span[contains(.,'" + this.placeHolder + "')]";
    this.monthButtonXpath = "//div[@data-id='" + this.placeHolder + "']";
    this.calendarMonthName = "//div[@data-ref='calendar-month-name']";
    this.addPeopleButton = element.all(by.xpath("//div[@data-ref='counter.counter__increment']"));
    this.removePeopleButton = element.all(by.xpath("//div[@data-ref='counter.counter__decrement']"));
    this.passengerDoneButton = element(by.className("passengers__confirm-button ry-button--anchor-blue ry-button--anchor"));
    this.searchButton = element(by.xpath("//button[@data-ref='flight-search-widget__cta']"));

  }

  /**
   * click on the one way trip button
   */
  async clickOnOneWayTrip() {
    await this.oneWayButton.click();
  }

  /**
   * Used internally to write on the From field
   * Deletes any text that might exist and the writes the text it wants
   * @param from 
   */
  private async inputOnFromField(from: string) {
    //await this.fromField.clear();
    await this.fromField.sendKeys(Key.CONTROL, 'a', Key.DELETE);
    await this.fromField.sendKeys(from);
  }

   /**
   * Used internally to write on the To field
   * Deletes any text that might exist and the writes the text it wants
   * @param to 
   */
  private async inputOnToField(to: string) {
    // await this.toField.clear();
    await this.toField.sendKeys(Key.CONTROL, 'a', Key.DELETE);
    await this.toField.sendKeys(to);
  }

  /**
   * Public method used to write on the To field and click on the correct button
   * @param to 
   */
  async selectTo(to: string) {
    await this.inputOnToField(to);
    await this.selectCity(to);
  }

    /**
   * Public method used to write on the From field and click on the correct button
   * @param from 
   */
  async selectFrom(from: string) {
    await this.inputOnFromField(from);
    await this.selectCity(from);
  }

  /**
   * This method replaces the placeholder in the cityButtonXpath by tyhe city
   * and clicks on the button
   * @param city The city to be selected
   */
  private async selectCity(city: string) {
    await element(by.xpath(this.cityButtonXpath.replace(this.placeHolder, city))).click();
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
  async selectDate(year: number, month: number, day: number) {
    let monthComplete: string = await getMonthName(month);
    // console.log('monthComplete', monthComplete);
    let monthStr: string = await monthComplete.substring(0, 3);

    // await this.selectMonth(monthStr, year);

    //checks year diffence so it can choose the right xpath for the month
    const currentYear = await getYear();
    let yearDifference = await year - currentYear;

    //if its not this year and the month is lower than the current month 
    //the number of available xpaths is lowered
    if (month < await getCurrentMonth()) {
      await yearDifference--;
    }

    //selects the month
    await clickByXpath(this.monthButtonXpath.replace(this.placeHolder, monthStr), yearDifference);

    //checks if it is the right month of the right year
    const picYear = await element(by.xpath(this.calendarMonthName)).getText();

    await chai.expect(picYear).to.equal(monthComplete + " " + year);
    await clickByXpath(this.monthButtonXpath.replace(this.placeHolder, year + "-" + month + "-" + day));

  }

  /**
 * This method selects the correct final number of adults expected
 * @param nAdult Number of passengers of type adult to be selected
 */
  async selectNumberAdults(nAdult: number) {

    const adultClicks = nAdult - 1;
    if (adultClicks > 0) {
      for (let i = 0; i < adultClicks; i++) {
        await this.addPeopleButton.get(0).click();
      }
    } else if (adultClicks < 0) {
      for (let i = 0; i < adultClicks; i++) {
        await this.removePeopleButton.get(0).click();
      }
    }
  }

  /**
   * This method selects the correct final number of children expected
   * @param nChild Number of passengers of type children to be selected
   */
  async selectNumberChildren(nChild: number) {

    const childClicks = nChild;

    if (childClicks > 0) {
      for (let i = 0; i < childClicks; i++) {
        await this.addPeopleButton.get(2).click();
      }
    } else if (childClicks < 0) {
      for (let i = 0; i < childClicks; i++) {
        await this.removePeopleButton.get(2).click();
      }
    }
  }

  /**
   * This method is used to click on the DONE button in the modal
   * used to select the number of passenger, closing it
   */
  async clickPsgrDoneButton() {
    await this.passengerDoneButton.click();
  }

  /**
   * This method is used to click on the searchButton
   */
  async clickOnSearchButton() {
    await this.searchButton.click();
  }

}


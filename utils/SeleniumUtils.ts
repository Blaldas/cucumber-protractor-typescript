/**
 * This page is used to define functions that are very specific and/or complex
 * so that they can be wrapped, avoiding code errors
 */

import { ElementFinder, browser, by, element, ExpectedConditions as EC } from "protractor";



export async function clickByXpath(xpath: string, optNum: number = 0){

    const el = element.all(by.xpath(xpath)).get(optNum);

    await browser.wait(EC.visibilityOf(el), 1000); // Adjust the timeout value as needed

    await el.click();
}

export async function clickElement(element: ElementFinder, waitMils: number = 5000){
    await browser.wait(EC.visibilityOf(element), waitMils); // Adjust the timeout value as needed

    await element.click();
}
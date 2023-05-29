import { Before } from "@cucumber/cucumber";
import { Builder, Capabilities, browser, by, element } from "protractor";

var {setDefaultTimeout} = require('@cucumber/cucumber');

setDefaultTimeout(60 * 1000);

Before(async function() {

   //maximizes browser
   await browser.manage().window().maximize();
 
   //goes to website and accepts cookies
   await browser.get('https://www.ryanair.com/ie/en');
   await element(by.xpath("//button[@class='cookie-popup-with-overlay__button']")).click();
  });
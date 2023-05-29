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
const protractor_1 = require("protractor");
var { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);
(0, cucumber_1.Before)(function () {
    return __awaiter(this, void 0, void 0, function* () {
        //maximizes browser
        yield protractor_1.browser.manage().window().maximize();
        //goes to website and accepts cookies
        yield protractor_1.browser.get('https://www.ryanair.com/ie/en');
        yield (0, protractor_1.element)(protractor_1.by.xpath("//button[@class='cookie-popup-with-overlay__button']")).click();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdHNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcHMvVGVzdHNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBQzVDLDJDQUF5RTtBQUV6RSxJQUFJLEVBQUMsaUJBQWlCLEVBQUMsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUV4RCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFFN0IsSUFBQSxpQkFBTSxFQUFDOztRQUVKLG1CQUFtQjtRQUNuQixNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFM0MscUNBQXFDO1FBQ3JDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUNuRCxNQUFNLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6RixDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=
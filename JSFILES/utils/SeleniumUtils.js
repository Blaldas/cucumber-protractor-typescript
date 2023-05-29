"use strict";
/**
 * This page is used to define functions that are very specific and/or complex
 * so that they can be wrapped, avoiding code errors
 */
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
exports.clickElement = exports.clickByXpath = void 0;
const protractor_1 = require("protractor");
function clickByXpath(xpath, optNum = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        let el = protractor_1.element.all(protractor_1.by.xpath(xpath)).get(optNum);
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(el), 1000); // Adjust the timeout value as needed
        yield el.click();
    });
}
exports.clickByXpath = clickByXpath;
function clickElement(element, waitMils = 5000) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(element), waitMils); // Adjust the timeout value as needed
        yield element.click();
    });
}
exports.clickElement = clickElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZW5pdW1VdGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3V0aWxzL1NlbGVuaXVtVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7Ozs7Ozs7Ozs7O0FBRUgsMkNBQTJGO0FBSTNGLFNBQXNCLFlBQVksQ0FBQyxLQUFhLEVBQUUsU0FBaUIsQ0FBQzs7UUFFaEUsSUFBSSxFQUFFLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVsRCxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMscUNBQXFDO1FBRXBGLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLENBQUM7Q0FBQTtBQVBELG9DQU9DO0FBRUQsU0FBc0IsWUFBWSxDQUFDLE9BQXNCLEVBQUUsV0FBbUIsSUFBSTs7UUFDOUUsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLHFDQUFxQztRQUU3RixNQUFNLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBQUE7QUFKRCxvQ0FJQyJ9
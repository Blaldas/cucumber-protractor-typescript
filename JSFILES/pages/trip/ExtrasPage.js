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
exports.ExtrasPage = void 0;
const protractor_1 = require("protractor");
const SeleniumUtils_1 = require("../../utils/SeleniumUtils");
class ExtrasPage {
    constructor() {
        this.placeHolder = "<placeHolder>";
        this.continueButton = (0, protractor_1.element)(protractor_1.by.xpath("//button[contains(.,'Continue')]"));
    }
    clickOnContinueButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, SeleniumUtils_1.clickElement)(this.continueButton, 3000);
        });
    }
    continueToNextPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clickOnContinueButton();
            yield this.clickOnContinueButton();
        });
    }
}
exports.ExtrasPage = ExtrasPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0cmFzUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2VzL3RyaXAvRXh0cmFzUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMkY7QUFDM0YsNkRBQXlEO0FBRXpELE1BQWEsVUFBVTtJQU1uQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDO1FBRW5DLElBQUksQ0FBQyxjQUFjLEdBQUUsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO0lBRy9FLENBQUM7SUFHSyxxQkFBcUI7O1lBQ3ZCLE1BQU0sSUFBQSw0QkFBWSxFQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEQsQ0FBQztLQUFBO0lBRUssa0JBQWtCOztZQUNwQixNQUFNLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ25DLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFdkMsQ0FBQztLQUFBO0NBR0o7QUExQkQsZ0NBMEJDIn0=
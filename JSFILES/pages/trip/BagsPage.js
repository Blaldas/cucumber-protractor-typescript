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
exports.BagsPage = void 0;
const protractor_1 = require("protractor");
class BagsPage {
    constructor() {
        this.placeHolder = "<placeHolder>";
        this.smallBagRadioButton = (0, protractor_1.element)(protractor_1.by.className("ry-radio-circle-button__label"));
        this.add20KgBagsToAllBtn = (0, protractor_1.element)(protractor_1.by.className("add-for-all add-for-all--cta ng-star-inserted"));
        this.continueButton = (0, protractor_1.element)(protractor_1.by.xpath("//button[contains(.,'Continue')]"));
    }
    clickOnSmallBagOnly() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.smallBagRadioButton.click();
        });
    }
    add20KgsBagsToAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.add20KgBagsToAllBtn.click();
        });
    }
    continueToNextPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.continueButton.click();
        });
    }
}
exports.BagsPage = BagsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFnc1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wYWdlcy90cmlwL0JhZ3NQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEyRjtBQUUzRixNQUFhLFFBQVE7SUFRakI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQztRQUVuQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLGNBQWMsR0FBRSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7SUFHL0UsQ0FBQztJQUVLLG1CQUFtQjs7WUFDckIsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0MsQ0FBQztLQUFBO0lBRUssaUJBQWlCOztZQUNuQixNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQyxDQUFDO0tBQUE7SUFFSyxrQkFBa0I7O1lBQ3BCLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QyxDQUFDO0tBQUE7Q0FHSjtBQS9CRCw0QkErQkMifQ==
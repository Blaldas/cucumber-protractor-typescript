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
exports.PaymentPage = void 0;
const protractor_1 = require("protractor");
var should = require('chai').should();
class PaymentPage {
    constructor() {
        this.placeHolder = "<placeHolder>";
        this.loginModal = (0, protractor_1.element)(protractor_1.by.className("auth-popup"));
    }
    checkIfLoginModalPresent() {
        return __awaiter(this, void 0, void 0, function* () {
            yield should.exist(this.loginModal);
        });
    }
}
exports.PaymentPage = PaymentPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2VzL3RyaXAvUGF5bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUQ7QUFHekQsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBRXJDLE1BQWEsV0FBVztJQU9wQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDO1FBRW5DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUssd0JBQXdCOztZQUMxQixNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7S0FBQTtDQUlKO0FBbkJELGtDQW1CQyJ9
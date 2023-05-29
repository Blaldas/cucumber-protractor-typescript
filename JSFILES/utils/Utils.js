"use strict";
/**
 * This file is used to store methods that are general an non selenium related;
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
exports.generateString = exports.getCurrentMonth = exports.getYear = exports.getMonthName = void 0;
function getMonthName(monthNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        const date = new Date();
        date.setMonth(monthNumber - 1); // Subtract 1 since month numbers are zero-based in JavaScript
        const options = { month: 'long' };
        const formatter = new Intl.DateTimeFormat('en', options);
        return formatter.format(date);
    });
}
exports.getMonthName = getMonthName;
function getYear() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Date().getFullYear();
    });
}
exports.getYear = getYear;
function getCurrentMonth() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Date().getMonth();
    });
}
exports.getCurrentMonth = getCurrentMonth;
/**
 * This method generates a random string of n lenght
 * @param length
 * @returns
 */
function generateString(n) {
    return __awaiter(this, void 0, void 0, function* () {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = ' ';
        const charactersLength = characters.length;
        for (let i = 0; i < n; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    });
}
exports.generateString = generateString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91dGlscy9VdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7Ozs7Ozs7Ozs7OztBQUVILFNBQXNCLFlBQVksQ0FBQyxXQUFtQjs7UUFDbEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLDhEQUE4RDtRQUU5RixNQUFNLE9BQU8sR0FBK0IsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDOUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV6RCxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUFBO0FBUkQsb0NBUUM7QUFFRCxTQUFzQixPQUFPOztRQUN6QixPQUFPLE1BQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0NBQUE7QUFGRCwwQkFFQztBQUdELFNBQXNCLGVBQWU7O1FBQ2pDLE9BQU8sTUFBTSxJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Q0FBQTtBQUZELDBDQUVDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQXNCLGNBQWMsQ0FBQyxDQUFTOztRQUMxQyxNQUFNLFVBQVUsR0FBRSxzREFBc0QsQ0FBQztRQUV6RSxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDakIsTUFBTSxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQzNDLEtBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUc7WUFDMUIsTUFBTSxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1NBQzdFO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUFBO0FBVkQsd0NBVUMifQ==
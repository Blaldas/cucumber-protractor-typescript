import { ElementFinder, by, element, } from "protractor";
import { expect } from 'chai';

var should = require('chai').should()

export class PaymentPage {

    placeHolder: string;

    loginModal: ElementFinder;


    constructor(){
        this.placeHolder = "<placeHolder>";

        this.loginModal = element(by.className("auth-popup"));
    }

    async checkIfLoginModalPresent(){
        await should.exist(this.loginModal)
    }



}
const homePageElements = require('../../pages/home-page.elements');
const menuPageElements = require('../../pages/menu-page.elements');
const registerPageElements = require('../../pages/register-page.elements');
const homePageAfterRegisterElements = require('../../pages/home-page-after-register.elements');
const loginPageElements = require('../../pages/login.elements');
const moviePageElements = require('../../pages/movie-page.elements');
const paymentMethodsPageElements = require('../../pages/payment-methods.elements');
const creditOrDebitCardPageElements = require('../../pages/credit-or-debit-card.elements');
const detailPaymentPageElements = require('../../pages/detail-payment.elements');


const { Key } = require('webdriverio');
const functions = require('../../utils/functions');
const assert = require('assert');

async function registerUser() {ß
    await menuPageElements.btnRegister.click();
    await registerPageElements.names.setValue('Pepito');
    await registerPageElements.surnames.click();
    await registerPageElements.surnames.setValue('Perez');
    await registerPageElements.email.click();
    email = functions.getRandomEmail()
    await registerPageElements.email.setValue(email);
    await registerPageElements.confirmEmail.click();
    await registerPageElements.confirmEmail.setValue(email);
    await registerPageElements.telephone.click();
    await registerPageElements.telephone.setValue(functions.getRandomPhone());
    await registerPageElements.address.click();
    await registerPageElements.address.setValue('Transv 65 # 56-22');
    await registerPageElements.lstGender.click();
    await registerPageElements.genderMale.click();
    await registerPageElements.datePickerBirthdate.click();
    await registerPageElements.btnEditBirthdate.click();
    await registerPageElements.inputBirthdate.click();
    await registerPageElements.inputBirthdate.clearValue();
    await registerPageElements.inputBirthdate.setValue('28/09/1995');
    await registerPageElements.btnAccept.click();
    await registerPageElements.inputDocumentNumber.click();
    await registerPageElements.inputDocumentNumber.setValue(functions.getRandomDocumentNumber());
    const buttonSelector = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().descriptionContains("Contraseña *"))';
    const button = $(`android=${buttonSelector}`);
    await registerPageElements.lstPreferredTheater.click();
    await registerPageElements.lblPreferredTheater.click();
    await (await registerPageElements.inputPassword).click();
    const password = functions.getRandomPassword()
    await registerPageElements.inputPassword.setValue(functions.getRandomPassword());
    await registerPageElements.chkAcceptTerms.click();
    await registerPageElements.btnContinue.click();

    await homePageAfterRegisterElements.waitForUserRegisterSuccess();
    const elementExists = await homePageAfterRegisterElements.userRegisterSuccesful.isExisting();
    assert.ok(elementExists, 'The user was not registered.');

}

async function loginUser() {
    await loginPageElements.email.click();
    await loginPageElements.email.setValue('andahefa1995@gmail.com');
    await loginPageElements.password.click();
    await loginPageElements.password.setValue('Aa1020808853*');
    await loginPageElements.login.click();

}

async function buyTicketCinemark() {
    buttonSelector = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().descriptionContains("Contraseña *"))';
    button = $(`android=${buttonSelector}`);
    await homePageAfterRegisterElements.movie.click();
    await moviePageElements.movieTime.click();
    await moviePageElements.waitForUserRegisterSuccess();
    await moviePageElements.numberOneticket.click();
    await moviePageElements.btncontinue.click();
    await moviePageElements.interactWithChairs();
    functions.waitBrowser(10000)
    await moviePageElements.btncontinue.click();
    await moviePageElements.waitForSelectedFoot();
    await moviePageElements.selectedFoot.click();
    await moviePageElements.btncontinue.click();
    await moviePageElements.btncontinue.click();
    await moviePageElements.city.click();
    await moviePageElements.city.setValue('bogota');
    functions.waitBrowser(2000)
    browser.keys([Key.Space])
    await browser.pause(2000);
    await moviePageElements.bogotaCity.click();
    await browser.pause(5000);
    await moviePageElements.acceptedTerms.click();
    await moviePageElements.btncontinue.click();
    await paymentMethodsPageElements.waitBtncreditOrDebitCard();
    await functions.waitBrowser(5000)
    await paymentMethodsPageElements.creditOrDebitCard.click();
    await creditOrDebitCardPageElements.waitNameCard();
    await creditOrDebitCardPageElements.nameCard.setValue('APPROVED')
    await creditOrDebitCardPageElements.numberCard.setValue('5471300000000003')
    await creditOrDebitCardPageElements.dueDate.setValue('05/25')
    await creditOrDebitCardPageElements.securityCode.setValue('777')
    await creditOrDebitCardPageElements.btnPayment.click()

    const qrPayment = await homePageAfterRegisterElements.qrPayment.isExisting();
    assert.ok(qrPayment, 'The purchase of the tickets for Cinemark did not go through.');
    await detailPaymentPageElements.qrPayment

}

describe('buy-ticket', () => {
    it('Buy ticket cinemark with new created user account', async () => {
        await homePageElements.waitForElementNotLocalitation();
        await homePageElements.notLocalitation.click();
        await homePageElements.lstCity.click();
        await homePageElements.lblBogotaCity.click();
        await homePageElements.btnContinue.click();
        await homePageElements.btnMenu.click();
        await menuPageElements.profile.click();
        await registerUser();
        await buyTicketCinemark();

    })
    
})


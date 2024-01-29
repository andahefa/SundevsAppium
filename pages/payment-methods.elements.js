class PaymentMethodsPageElements {

    get creditOrDebitCard() {
        return $('//android.view.View[contains(@content-desc,"Tarjeta cr")]');
    }

    async waitBtncreditOrDebitCard(timeout = 10000) {
        const elem = this.creditOrDebitCard
        await elem.waitForDisplayed({ timeout: timeout })
    }
}

module.exports = new PaymentMethodsPageElements();
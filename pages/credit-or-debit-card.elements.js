class CreditOrDebitCardPageElements{

    async waitNameCard(timeout = 10000) {
        const elem = this.nameCard
        await elem.waitForDisplayed({ timeout: timeout })
    }

    get nameCard(){
        return $("//*[contains(@hint,'Nombre impreso en la tarjeta')]");
    }
    get numberCard(){
        return $("//*[contains(@hint,'Numero de tarjeta')]");
    }

    get dueDate(){
        return $("//*[contains(@hint,'Fecha de vencimiento')]");
    }

    get securityCode(){
        return $("//*[contains(@hint,'Código de seguridad')]");
    }

    get btnPayment(){
        return $('//android.widget.Button[@content-desc="PAGAR"]');
    }
}

module.exports = new CreditOrDebitCardPageElements();
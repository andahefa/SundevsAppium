class HomePageElements{
    get notLocalitation(){
        return $('//android.widget.Button[@content-desc="CONTINUAR SIN LOCALIZACIÓN"]');
    }

    async waitForElementNotLocalitation(timeout = 30000) {
        await browser.waitUntil(
            async () => {
                const element = await this.notLocalitation;
                return await element.isExisting();
            },
            {
                timeout: timeout,
                timeoutMsg: 'El elemento notLocalitation no se encontró después de ' + (timeout / 1000) + ' segundos',
                interval: 500
            }
        );
    }

    get lstCity(){
        return $('~Ciudad *');
    }

    get lblBogotaCity(){
        return $('~Bogota');
    }

    get btnContinue(){
        return $('~CONTINUAR');
    }

    get btnMenu(){
        return $('//android.view.View[contains(@content-desc,"5 de 5")]');
    }

}

module.exports = new HomePageElements();
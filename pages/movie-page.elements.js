class MoviePageElements {
    get movieTime() {
        return $('(//android.view.View[contains(@content-desc,":")])[1]');
    }

    get numberOneticket() {
        return $('//android.view.View[contains(@content-desc,"General 3D")]//android.widget.Button[2]')
    }

    async waitForUserRegisterSuccess(timeout = 60000) {
        const elem = this.numberOneticket
        await elem.waitForDisplayed({ timeout: timeout })
    }

    get btncontinue() {
        return $('//android.widget.Button[@content-desc="CONTINUAR"]')
    }

    selectedChair(index) {
        return $(`//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.view.View/android.view.View[${index}]`);
    }


    async interactWithChairs() {
        for (let i = 7; i <= 20; i++) {
            const chair = this.selectedChair(i);
            await chair.click();
            if (!await this.messageChairNotAvailable.isDisplayed()) {
                break;
            } else {
                await browser.pause(8000);
            }
        }
    }

    get messageChairNotAvailable() {
        return $('//android.widget.Button[@content-desc="Silla no disponible"]');
    }

    get selectedFoot() {
        return $('//android.view.View[contains(@content-desc," COMBO MIO APP")]/android.view.View[2]')
    }

    async waitForSelectedFoot(timeout = 15000) {
        const elem = this.selectedFoot
        await elem.waitForDisplayed({ timeout: timeout })
    }

    get city() {
        return $("//*[contains(@hint,'Ciudad *')]");
    }

    get bogotaCity() {
        return $('//android.view.View[contains(@content-desc,"BOGOTA D.C.")]');
    }

    get acceptedTerms() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]');
    }
}

module.exports = new MoviePageElements();

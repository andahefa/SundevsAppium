class HomePageAfterRegisterElements {
    get userRegisterSuccesful() {
        return $('//android.view.View[@content-desc="AH"]');
    }
    async waitForUserRegisterSuccess(timeout = 30000) {
        const elem = this.userRegisterSuccesful
        await elem.waitForDisplayed({ timeout: timeout })
    }

    get movie() {
        return $('//android.widget.ScrollView/android.view.View[9]/android.view.View/android.view.View[1]');
    }

}

module.exports = new HomePageAfterRegisterElements();
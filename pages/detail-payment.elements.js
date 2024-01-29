class DetailPaymentPageElements {

    get qrPayment() {
        return $('//android.view.View[@content-desc="qr code"]');
    }

}

module.exports = new DetailPaymentPageElements();
class Functions{
    getRandomEmail(length = 10) {
        let email = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;

        for (let counter = 0; counter < length; counter++) {
            email += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return email + "@gmail.com";
    }

    getRandomPhone = (length = 7)=>{
        let phoneNumber = '';
        const characters = '0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            phoneNumber += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return '312' + phoneNumber;
    }

    getRandomDocumentNumber = (length = 6)=>{
        let documentNumber = '';
        const characters = '0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            documentNumber += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return '1020' + documentNumber;
    }

    getRandomPassword = (length = 8)=>{
        let password = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return "Aa" + password;
    }

    async waitBrowser(time){
        await browser.pause(10000);
    }

}

module.exports = new Functions();
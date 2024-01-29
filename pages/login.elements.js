class LoginPageElements {
    get email() {
        return $("//*[contains(@hint,'Correo electrónico *')]");
    }

    get password() {
        return $("//*[contains(@hint,'Contrase')]");
    }

    get login() {
        return $("//android.widget.Button[contains(@content-desc,'INICIAR SESI')]");
    }


}

module.exports = new LoginPageElements();
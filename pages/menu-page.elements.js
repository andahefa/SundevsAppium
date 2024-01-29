class MenuPageElements {
    get profile() {
        return $('~Perfil');
    }
    get btnRegister() {
        return $('//android.view.View[@content-desc="Registrarse"]');
    }
}

module.exports = new MenuPageElements();

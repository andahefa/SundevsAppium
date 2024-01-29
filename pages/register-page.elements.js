class RegisterPageElements{
    get names(){
        return $('//android.widget.ScrollView/android.widget.EditText[1]');
    }
    get surnames(){
        return $('//android.widget.ScrollView/android.widget.EditText[2]');
    }
    get email(){
        return $('//android.widget.ScrollView/android.widget.EditText[3]');
    }
    get confirmEmail(){
        return $('//android.widget.ScrollView/android.widget.EditText[4]');
    }
    get telephone(){
        return $('//android.widget.ScrollView/android.widget.EditText[5]');
    }
    get address(){
        return $('//android.widget.ScrollView/android.widget.EditText[6]');
    }
    get lstGender(){
        return $('//android.widget.Button[@content-desc="Género (opcional)"]');
    }
    get genderMale(){
        return $('//android.view.View[@content-desc="Masculino"]');
    }
    get datePickerBirthdate(){
        //return $("(//*[contains(@class,'android.view.View')])[5]");
        return $("//*[contains(@hint,'Fecha de nacimiento')]");
    }
    get btnEditBirthdate(){
        return $('//android.view.View[contains(@content-desc,"SELECCIONA UNA FECHA")]/android.widget.Button[1]');
    }
    get inputBirthdate(){
        return $("(//*[contains(@class,'android.widget.EditText')])");
    }
    get btnAccept(){
        return $('~ACEPTAR');
    }
    get inputDocumentNumber(){
        return $("//*[contains(@hint,'de documento')]");
    }
    get lstPreferredTheater(){
        return $('~Teatro de preferencia *');
    }
    get lblPreferredTheater(){
        return $('~Lab v5 Floresta');
    }
    get inputPassword(){
        return $("//*[contains(@hint,'Contrase')]");
    }
    get chkAcceptTerms(){
        return $('//android.widget.ScrollView/android.view.View[2]');
    }
    get btnContinue(){
        return $('~CONTINUAR');
    }


}

module.exports = new RegisterPageElements();
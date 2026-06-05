class loginPage {
    //Seletores
    get menuLogin() {
        return $('~Login')
    }
    get campoEmail() {
        return $('~input-email')
    }
    get campoSenha() {
        return $('~input-password')
    }
    get botaoLogin() {
        return $('~button-LOGIN')
    }
    get mensagem() {
        return $('id=android:id/message')
    }
    get mensagemErro() {
        return $('~new UiSelector().text("Please enter a valid email address")')
    }
    get botaoOk() {
        return $('id=android:id/button1')
    }

    //Métodos / Ações
    async abrirMenu() {
        await this.menuLogin.click()
    }
    async preencherLogin() {
        //melhorar método
        await this.campoEmail.setValue('luciano@teste.com')
        await this.campoSenha.setValue('12345678')
        await this.botaoLogin.click()
    }
    async preencherLoginInvalido() {

        await this.campoEmail.setValue('luciano@teste')
        await this.campoSenha.setValue('12345678')
        await this.botaoLogin.click()
    }
    async mensagemAlerta() {
        return await this.mensagem.getText()
    }
}

export default new loginPage();
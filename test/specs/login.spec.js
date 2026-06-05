import loginPage from "../pageobjects/login.page";

describe('funcionalidade login', () => {

    it('deve fazer login com sucesso', async () => {

        await loginPage.abrirMenu()
        await loginPage.preencherLogin()
        expect(await loginPage.mensagemAlerta()).toEqual('You are logged in!')
        await loginPage.botaoOk.click()   /* função de aceitar alertas */

    });

    it('deve falhar ao fazer login inválido', async () => {

        await loginPage.abrirMenu() 
        await loginPage.preencherLoginInvalido()

        const mensagem = await $('~new UiSelector().text("Please enter a valid email address")')

        expect(mensagem).toBeDisplayed()
    });

});

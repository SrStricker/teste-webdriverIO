import loginPage from "../pageobjects/login.page";

describe('funcionalidade login', () => {

    beforeEach( async () => {
        await loginPage.abrirMenu()
    });

    afterEach(async () => {
        await browser.relaunchActiveApp()   /* função de reiniciar o app */
    });

    it('deve fazer login com sucesso', async () => {

        await loginPage.preencherLogin('luciano@teste.com', '12345678')
        expect(await loginPage.mensagemAlerta()).toEqual('You are logged in!')
        //await loginPage.botaoOk.click()   /* função de aceitar alertas */

    });

    it('deve falhar ao fazer login inválido', async () => {

        await loginPage.preencherLogin('luciano@teste', '12345678')
        await loginPage.mensagemErro('Please enter a valid email address')
    });

    it('deve falhar ao fazer login com senha inválida', async () => {
        
        await loginPage.preencherLogin('luciano@teste.com', '12345')
        await loginPage.mensagemErro('Please enter at least 8 characters')
    });

});

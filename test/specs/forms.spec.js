import formPage from '../pageobjects/forms.page'

describe('funcionalidade tela de formulário', () => {

    beforeEach(async () => {
        formPage.abrirmenuForms()
    });

    it('deve preencher os campos do formulário', async () => {
        await formPage.preencherCampoTexto('Automação de testes')
        expect(await formPage.obterResultadoCampoTexto()).toEqual('Automação de testes')

    });

    it('deve selecionar uma opção do dropdown', async () => {

        await formPage.selecionarOpcao('This app is awesome')

        expect(await formPage.validarOpcao()).toEqual('This app is awesome')

    });

    it.only('deve trocar o botão de on para off', async () => {
        //Botão on
        const OnOff = await driver.$("accessibility id:switch");
        await OnOff.click();
        driver.pause(2000);

        await browser.swipe({
            direction: 'left',                  // Swipe from right to left
            duration: 2000,                     // Last for 5 seconds
            percent: 0.1,                       // Swipe 50% of the scrollableElement
            scrollableElement: OnOff,  // The element to swipe within
        })
        driver.pause(2000);

    });
});


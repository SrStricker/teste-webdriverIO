import DragPage from "../pageobjects/drag.page"

describe('teste da tela DragDrop', () => {

    beforeEach(async () => {
        await driver.reloadSession()
        await DragPage.abrirmenuDragDrop()
        driver.pause(2000)
    });

    it('Deve completar o quebra cabeças', async () => {
        await DragPage.movimento1()
        await DragPage.movimento2()
        await DragPage.movimento3()
        await DragPage.movimento4()
        await DragPage.movimento5()
        await DragPage.movimento6()
        await DragPage.movimento7()
        await DragPage.movimento8()
        await DragPage.movimento9()

        await DragPage.validarmensagemSucesso()

    });

});
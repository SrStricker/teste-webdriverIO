import swipePage from '../pageobjects/swipe.page';

describe('funcionalidade swipe', () => {

    beforeEach(async () => {
        await swipePage.abrirmenuSwipe();
    });

    it('deve arrastar para cima e para baixo', async () => {
        await swipePage.arrastarParaCima();
        await swipePage.arrastarParaBaixo();
    });

    it('deve navegar pelos cards', async () => {
        for (let i = 0; i < 6; i++) {
            await swipePage.arrastarParaEsquerda();
        }
    });
});
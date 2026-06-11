class swipePage {

    //selectors
    get menuSwipe() { return $('~Swipe') }
    get card4() { return $('//android.view.ViewGroup[@resource-id="__CAROUSEL_ITEM_5__"]/android.view.ViewGroup[@content-desc="card"]') }

    //métodos
    async abrirmenuSwipe() {
        await this.menuSwipe.click()
    }
    async arrastarParaCima() {
        const { width, height } = await driver.getWindowRect();
        await driver.action('pointer')
            .move({ duration: 0, x: width / 2, y: height * 0.8 })
            .down({ button: 0 })
            .move({ duration: 1000, x: width / 2, y: height * 0.2 })
            .up({ button: 0 })
            .perform()
    }
    async arrastarParaBaixo() {
        const { width, height } = await driver.getWindowRect();
        await driver.action('pointer')
            .move({ duration: 0, x: width / 2, y: height * 0.2 })
            .down({ button: 0 })
            .move({ duration: 1000, x: width / 2, y: height * 0.8 })
            .up({ button: 0 })
            .perform()
    }
    async arrastarParaEsquerda() {

        const { width, height } = await driver.getWindowRect()

        await driver.action('pointer')
            .move({
                duration: 0,
                x: width * 0.85,
                y: height * 0.45
            })
            .down({ button: 0 })
            .move({
                duration: 1000,
                x: width * 0.10,
                y: height * 0.45
            })
            .up({ button: 0 })
            .perform()
    }

}


export default new swipePage();
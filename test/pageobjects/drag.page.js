class DragPage {

    get menuDrop() { return $('~Drag') }
    get peca1() { return $('~drag-c1') } get destino1() { return $('~drop-c1') }
    get peca2() { return $('~drag-c2') } get destino2() { return $('~drop-c2') }
    get peca3() { return $('~drag-c3') } get destino3() { return $('~drop-c3') }
    get peca4() { return $('~drag-r1') } get destino4() { return $('~drop-r1') }
    get peca5() { return $('~drag-r2') } get destino5() { return $('~drop-r2') }
    get peca6() { return $('~drag-r3') } get destino6() { return $('~drop-r3') }
    get peca7() { return $('~drag-l1') } get destino7() { return $('~drop-l1') }
    get peca8() { return $('~drag-l2') } get destino8() { return $('~drop-l2') }
    get peca9() { return $('~drag-l3') } get destino9() { return $('~drop-l3') }
    get mensagem() { return $('android=new UiSelector().text("Congratulations")') }

    async abrirmenuDragDrop() {
        await this.menuDrop.click()

    }

    async movimento1() {
        await this.peca1.dragAndDrop(this.destino1)
    }
    async movimento2() {
        await this.peca2.dragAndDrop(this.destino2)
    }
    async movimento3() {
        await this.peca3.dragAndDrop(this.destino3)
    }
    async movimento4() {
        await this.peca4.dragAndDrop(this.destino4)
    }
    async movimento5() {
        await this.peca5.dragAndDrop(this.destino5)

    }
    async movimento6() {
        await this.peca6.dragAndDrop(this.destino6)

    }
    async movimento7() {
        await this.peca7.dragAndDrop(this.destino7)

    }
    async movimento8() {
        await this.peca8.dragAndDrop(this.destino8)

    }
    async movimento9() {
        await this.peca9.dragAndDrop(this.destino9)

    }
    async validarmensagemSucesso() {
        await expect(this.mensagem).toBeDisplayed()
    }
}

export default new DragPage();
class FormPage {
    //seletores

    get menuForms() { return $('~Forms') }
    get campoTexto() { return $('~text-input') }
    get campoTextoResultado() { return $('~input-text-result') }
    get Dropdown() { return $("-android uiautomator:new UiSelector().resourceId(\"text_input\")") }

    //métodos
    async abrirmenuForms() {
        await this.menuForms.click()
    }
    async preencherCampoTexto(texto) {
        await this.campoTexto.addValue(texto)
    }
    async obterResultadoCampoTexto() {
        return await this.campoTextoResultado.getText()
    }
    async selecionarOpcao(txtopcao) {
        await this.Dropdown.click()
        const opcao = $(`-android uiautomator:new UiSelector().text(\"${txtopcao}\")`)
        await opcao.click()
    }
    async validarOpcao() {
        return await this.Dropdown.getText()
    }
}
export default new FormPage();
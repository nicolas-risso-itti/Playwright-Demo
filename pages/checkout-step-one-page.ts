import { expect, type Locator, type Page } from '@playwright/test';

/**
 * Contiene los elementos y metodos de la pagina de checkout primer paso.
 */
export class CheckoutStepOnePage {
    readonly page: Page
    readonly input_firstName: Locator
    readonly input_lastName: Locator
    readonly input_postalCode: Locator
    readonly input_continue: Locator


    constructor(page: Page) {
        this.page = page;
        this.input_firstName = page.getByPlaceholder("First Name")
        this.input_lastName = page.getByPlaceholder("Last Name")
        this.input_postalCode = page.getByPlaceholder("Zip/Postal Code")
        this.input_continue = page.locator("//input[@id='continue']")
    }

    /**
     * Completa el formulario de informacion.
     *
     * @param {string} firstName - Nombre.
     * @param {string} lastName - Apellido.
     * @param {string} postalCode - Codigo postal.
    */
    async completar_informacion(firstName: string, lastName: string, postalCode: string) {
        await this.input_firstName.fill(firstName)
        await this.input_lastName.fill(lastName)
        await this.input_postalCode.fill(postalCode)
    }

    /**
     * Click en continuar.
     */
    async click_continuar() {
        await this.input_continue.click()
    }
}


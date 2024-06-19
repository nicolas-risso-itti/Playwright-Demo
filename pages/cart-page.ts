import { expect, type Locator, type Page } from '@playwright/test';

/**
 * Contiene los elementos y metodos de la pagina de Cart (Carrito).
 */
export class CartPage {
    readonly page: Page
    readonly btn_checkout: Locator
    readonly a_carrito: Locator

    constructor(page: Page) {
        this.page = page;
        this.btn_checkout = page.getByText("Checkout")
    }

    /**
     * Click en checkout del carrito.
     *
      */
    async click_checkout() {
        await this.btn_checkout.click()
    }

}


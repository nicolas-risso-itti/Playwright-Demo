import { expect, type Locator, type Page } from '@playwright/test';

/**
 * Contiene los elementos y metodos de la pagina de checkout completado.
 */
export class CheckoutCompletePage {
    readonly page: Page
    readonly h2_orderComplete: Locator


    constructor(page: Page) {
        this.page = page;
        this.h2_orderComplete = page.getByText("Thank you for your order!")
    }

    /**
     * Click en finish.
    */
    async valida_orden_completada() {
        await expect(this.h2_orderComplete).toBeVisible()
    }
}


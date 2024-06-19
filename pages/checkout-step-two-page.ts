import { expect, type Locator, type Page } from '@playwright/test';

/**
 * Contiene los elementos y metodos de la pagina de checkout segundo paso.
 */
export class CheckoutStepTwoPage {
    readonly page: Page
    readonly btn_finish: Locator

    constructor(page: Page) {
        this.page = page;
        this.btn_finish = page.getByText("Finish")
    }

    /**
     * Click en finish.
    */
    async click_finish() {
        await this.btn_finish.click()
    }
}


import { expect, type Locator, type Page } from '@playwright/test';

/**
 * Contiene los elementos y metodos de la pagina de inventory.
 */
export class InventoryPage {
    readonly page: Page
    readonly btn_addToCart: Locator
    readonly a_carrito: Locator

    constructor(page: Page) {
        this.page = page;
        this.btn_addToCart = page.locator("//div[text()='Sauce Labs Backpack']/ancestor::div[@class='inventory_item_description']//button[text()='Add to cart']")
        this.a_carrito = page.locator("//a[@class='shopping_cart_link']")
    }

    /**
     * Click en el primer producto del inventario.
     *
      */
    async click_primer_producto() {
        await this.btn_addToCart.click()
    }

    /**
      * Click en carrito de compras.
       */
    async click_carrito() {
        await this.a_carrito.click()
    }
}


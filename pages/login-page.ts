import { expect, type Locator, type Page } from '@playwright/test';

/**
 * Contiene los elementos y metodos de la pagina de login.
 */
export class LoginPage {
  readonly page: Page
  readonly input_username: Locator
  readonly input_password: Locator
  readonly btn_login: Locator
  readonly h3_msj_errorLockedUser: Locator

  constructor(page: Page) {
    this.page = page;
    this.input_username = page.locator('//input[@id="user-name"]')
    this.input_password = page.locator('//input[@id="password"]')
    this.btn_login = page.locator('//input[@id="login-button"]')
    this.h3_msj_errorLockedUser = page.getByText('Epic sadface: Sorry, this user has been locked out.', { exact: true })
  }

  /**
   * Escribe las credenciales y se loguea.
   *
    * @param {string} username - Usuario a loguear.
    * @param {string} password - Contraña a loguear.
    */
  async loguear_credenciales(username: string, password: string) {
    await this.input_username.fill(username)
    await this.input_password.fill(password)
    await this.btn_login.click()
  }

 /**
   * Valida el que este visible el mensaje de usuario locked.
    */
  async validar_msj_errorLockedUser() {
    await expect(this.h3_msj_errorLockedUser).toBeVisible()
  }
}


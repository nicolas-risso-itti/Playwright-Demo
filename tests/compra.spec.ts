import { test } from '@playwright/test'
import { LoginPage, InventoryPage, CartPage, CheckoutStepOnePage, CheckoutStepTwoPage, CheckoutCompletePage } from '../pages'


test('compra de producto',{tag: '@smoke'}, async ({ page }) => {
  const variables = {
    username: 'standard_user',
    password: 'secret_sauce',
    nombre: 'nicolas',
    apellido: 'risso',
    codPostal: '7000'
  }
  const loginPage = new LoginPage(page)
  await page.goto('/')
  await loginPage.loguear_credenciales(variables.username,variables.password)
  const inventoryPage = new InventoryPage(page)
  await inventoryPage.click_primer_producto()
  await inventoryPage.click_carrito()
  const cartPage = new CartPage(page)
  await cartPage.click_checkout()
  const checkout1Page = new CheckoutStepOnePage(page)
  await checkout1Page.completar_informacion(variables.nombre, variables.apellido, variables.codPostal)
  await checkout1Page.click_continuar()
  const checkout2Page = new CheckoutStepTwoPage(page)
  await checkout2Page.click_finish()
  const checkoutCompletoPage = new CheckoutCompletePage(page)
  await checkoutCompletoPage.valida_orden_completada()
});

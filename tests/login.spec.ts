import { test } from '@playwright/test'
import { LoginPage } from '../pages/login-page'

test('login correcto',{tag: '@smoke'}, async ({ page }) => {
  const variables = {
    username: 'standard_user',
    password: 'secret_sauce'
  }
  const loginPage = new LoginPage(page)
  await page.goto('/')
  await loginPage.loguear_credenciales(variables.username,variables.password)
});

test('login usuario locked', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await page.goto('/')
  await loginPage.loguear_credenciales('locked_out_user','secret_sauce')
  await loginPage.validar_msj_errorLockedUser()
});

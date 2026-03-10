import { expect } from '@playwright/test'
import { validUser } from '../data/users.json'

export class LoginPage {
    constructor(page) {
        this.page = page
        this.title = 'Swag Labs'
        this.header = page.locator('.login_logo')
        this.usernameInput = page.locator('#user-name')
        this.passwordInput = page.locator('#password')
        this.loginBtn = page.locator('#login-button')
    }

    async goto() {
        await this.page.goto('/')
        await expect(this.page).toHaveTitle(this.title)
        await expect(this.header).toHaveText('Swag Labs')
    }

    async login() {
        await this.usernameInput.fill(validUser.username)
        await this.passwordInput.fill(validUser.password)
        await this.loginBtn.click()
    }

    async validateLoginPage() {
        await expect(this.page).toHaveTitle(this.title)
        await expect(this.header).toBeVisible()
        await expect(this.usernameInput).toBeVisible()
        await expect(this.passwordInput).toBeVisible()
        await expect(this.loginBtn).toBeVisible()
    }
}
import { expect } from "@playwright/test";

export class YourCartPage {
	constructor(page) {
		this.page = page;
		this.title = "Swag Labs";
		this.header = page.locator(".app_logo");
		this.hamburgerMenu = page.locator("#react-burger-menu-btn");

		this.product = page.locator(".cart_item");
		this.removeBtn = '.btn_secondary.btn_inventory'

		this.shoppingCart = page.locator(".shopping_cart_link");
		this.cartBadge = page.locator(".shopping_cart_badge");

        this.checkoutBtn = page.locator('#checkout')
        this.contShoppingBtn = page.locator('#continue-shopping')
	}

	async verifyItems(productDetails) {
        for (const product of productDetails) {
            await expect(this.product.filter({ hasText: product.name })).toBeVisible()
            await expect(this.product.filter({ hasText: product.price })).toBeVisible()
            console.log(`Product: ${product.name}, Price: ${product.price} found`)
        }
	}

    async clickCheckoutBtn() {
        await this.checkoutBtn.click()
    }
}
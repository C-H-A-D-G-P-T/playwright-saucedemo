import { expect } from "@playwright/test";

export class CheckoutOverviewPage {
	constructor(page) {
		this.page = page;
		this.title = "Swag Labs";
		this.header = page.locator(".app_logo");
		this.hamburgerMenu = page.locator("#react-burger-menu-btn");
		this.sectionName = page.locator(".title");
		this.totalItemPrice = page.locator(".summary_subtotal_label");
		this.tax = page.locator(".summary_tax_label");
		this.total = page.locator(".summary_total_label");
		this.finishBtn = page.locator("#finish");
		this.cancelBtn = page.locator("#cancel");
	}

	async verifyPrice(productDetails) {
		await expect(this.sectionName).toHaveText("Checkout: Overview");
		let totalPrice = 0;
		for (const product of productDetails) {
			const productPrice = Number(product.price.substring(1));
			totalPrice += productPrice;
		}
		console.log(`Item total: ${totalPrice}`);

		const tax = await this.tax.textContent();
		console.log(tax);
		const calculatedTotal = totalPrice + Number(tax.substring(6));
		console.log(`Item total + tax = ${calculatedTotal}`);
		await expect(this.total).toHaveText(`Total: $${String(calculatedTotal)}`);
	}

	async clickFinishBtn() {
		await this.finishBtn.click();
	}
}

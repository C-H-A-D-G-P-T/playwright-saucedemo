import { expect } from "@playwright/test";

export class ThankYouPage {
	constructor(page) {
		this.page = page;
		this.title = "Swag Labs";
		this.header = page.locator(".app_logo");
		this.hamburgerMenu = page.locator("#react-burger-menu-btn");
		this.logoutBtn = page.locator("#logout_sidebar_link");
		this.sectionName = page.locator(".title");

		this.checkIcon = page.locator(".pony_express");
		this.thankMsg = page.getByRole("heading", {
			name: "Thank you for your order!",
		});
		this.completeMsg = page.getByText(
			"Your order has been dispatched, and will arrive just as fast as the pony can get there!",
		);
		this.backHomeBtn = page.locator("#back-to-products");
	}

	async validateThankPage() {
		expect(this.page).toHaveTitle(this.title);
		expect(this.header).toHaveText(this.title);
		expect(this.sectionName).toHaveText("Checkout: Complete!");
		expect(this.checkIcon).toBeVisible();
		expect(this.thankMsg).toBeVisible();
		expect(this.completeMsg).toBeVisible();
		expect(this.backHomeBtn).toBeVisible();
	}

	async clickBackHomeBtn() {
		await this.backHomeBtn.click();
	}

	async logout() {
		await this.hamburgerMenu.click();
		await this.logoutBtn.click();
	}
}

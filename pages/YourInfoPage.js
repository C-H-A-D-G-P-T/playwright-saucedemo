import { expect } from "@playwright/test";

export class YourInfoPage {
	constructor(page) {
		this.page = page;
		this.title = "Swag Labs";
		this.header = page.locator(".app_logo");
		this.hamburgerMenu = page.locator("#react-burger-menu-btn");
		this.sectionName = page.locator(".title");
		this.firstNameInput = page.locator("#first-name");
		this.lastNameInput = page.locator("#last-name");
		this.zipCodeInput = page.locator("#postal-code");
		this.contBtn = page.locator("#continue");
		this.cancelBtn = page.locator("#cancel");
	}

	async fillInfo() {
		await expect(this.sectionName).toHaveText("Checkout: Your Information");
		await this.firstNameInput.fill("Warit");
		await this.lastNameInput.fill("Tanmanee");
		await this.zipCodeInput.fill("10700");
	}

    async clickContinueBtn() {
        await this.contBtn.click()
    }
}

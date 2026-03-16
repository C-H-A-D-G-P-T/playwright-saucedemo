import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { ProductPage } from "../pages/ProductPage.js";
import { YourCartPage } from "../pages/YourCartPage.js";
import { YourInfoPage } from "../pages/YourInfoPage.js";
import { CheckoutOverviewPage } from "../pages/CheckoutOverviewPage.js";
import { ThankYouPage } from "../pages/ThankYouPage.js";

test("Place an Order Successfully", async ({ page }) => {
	const loginPage = new LoginPage(page);
	const productPage = new ProductPage(page);
	const yourCartPage = new YourCartPage(page);
	const yourInfoPage = new YourInfoPage(page);
	const checkoutOverviewPage = new CheckoutOverviewPage(page);
	const thankYouPage = new ThankYouPage(page);

	await loginPage.goto();
	await loginPage.login();

	// const products = [
	// 	"Sauce Labs Bike Light", 
	// 	"Sauce Labs Fleece Jacket"
	// ];
	// const productDetails = await productPage.addToCart(products);

	await productPage.addToCart('Sauce Labs Bike Light');
	const productDetails = await productPage.addToCart('Sauce Labs Fleece Jacket');

	await productPage.clickCartBtn();

	await yourCartPage.verifyItems(productDetails);
	await yourCartPage.clickCheckoutBtn();

	await yourInfoPage.fillInfo();
	await yourInfoPage.clickContinueBtn();

	await checkoutOverviewPage.verifyPrice(productDetails);
	await checkoutOverviewPage.clickFinishBtn();

	await thankYouPage.validateThankPage();
	await thankYouPage.logout();

	await loginPage.validateLoginPage();
});

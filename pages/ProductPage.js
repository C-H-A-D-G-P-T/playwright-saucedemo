import { expect } from "@playwright/test";

export class ProductPage {
	constructor(page) {
		this.page = page;
		this.title = "Swag Labs";
		this.header = page.locator(".app_logo");
		this.hamburgerMenu = page.locator("#react-burger-menu-btn");

		this.product = page.locator(".inventory_item");
		this.addToCartBtn = '.btn_primary.btn_inventory'
		this.removeBtn = '.btn_secondary.btn_inventory'

		this.shoppingCart = page.locator(".shopping_cart_link");
		this.cartBadge = page.locator(".shopping_cart_badge");
	}

    productCount = 0

	async addToCart(productArray) {
        const productDetails = []
        for (const product of productArray) {
            const targetProduct = this.product.filter({ hasText: product });
            await targetProduct.locator(this.addToCartBtn).click()
    
            this.productCount += 1
            console.log(this.productCount)
    
            await expect(this.cartBadge).toHaveText(String(this.productCount))
    
            const productPrice = await targetProduct.locator('.inventory_item_price').textContent()
            console.log(`Added ${product}: ${productPrice}`)

            productDetails.push({name: product, price: productPrice})
        }
        console.log(productDetails)
        return productDetails
	}

    async removeFromCart(productName) {
		const targetProduct = this.product.filter({ hasText: productName });
        await targetProduct.locator(this.removeBtn).click()

        this.productCount -= 1
        console.log(this.productCount)

        if (this.productCount === 0) {
            await expect(this.cartBadge).toHaveCount(0)
        } else {
            await expect(this.cartBadge).toHaveText(String(this.productCount))
        }
    }

    async clickCartBtn() {
        await this.shoppingCart.click()
    }
}

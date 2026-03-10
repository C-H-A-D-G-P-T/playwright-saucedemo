# Playwright SauceDemo E2E Tests

An end-to-end test suite built with [Playwright](https://playwright.dev/) using the **Page Object Model (POM)** pattern, targeting the [SauceDemo](https://www.saucedemo.com/) web application.

---

## 📁 Project Structure

```
playwright-saucedemo/
├── .github/
│   └── workflows/
│       └── playwright.yml        # CI/CD GitHub Actions workflow
├── data/
│   └── users.json                # Test user credentials
├── pages/
│   ├── LoginPage.js              # Login page interactions
│   ├── ProductPage.js            # Product listing & add-to-cart
│   ├── YourCartPage.js           # Cart verification
│   ├── YourInfoPage.js           # Checkout info form
│   ├── CheckoutOverviewPage.js   # Order summary & price verification
│   └── ThankYouPage.js           # Order confirmation & logout
├── tests/
│   └── e2e.spec.js               # Main E2E test spec
├── utils/                        # Shared utilities/helpers
├── playwright-report/            # HTML test reports (auto-generated)
├── test-results/                 # Traces and artifacts (auto-generated)
├── playwright.config.js          # Playwright configuration
├── package.json
└── README.md
```

---

## 🧪 Test Coverage

### `Place an Order Successfully`

A full end-to-end purchase flow covering:

| Step | Action |
|------|--------|
| 1 | Navigate to login page and authenticate |
| 2 | Add multiple products to cart (`Sauce Labs Bike Light`, `Sauce Labs Fleece Jacket`) |
| 3 | Click cart button to open cart |
| 4 | Verify cart items match selected products |
| 5 | Proceed to checkout and fill in personal info |
| 6 | Verify total price on checkout overview |
| 7 | Complete order and validate Thank You page |
| 8 | Log out and verify redirect to login page |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm v7 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/playwright-saucedemo.git
cd playwright-saucedemo

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## ▶️ Running Tests

```bash
# Run all tests (headless)
npx playwright test

# Run tests with UI mode
npx playwright test --ui

# Run tests in headed mode (visible browser)
npx playwright test --headed

# Run a specific test file
npx playwright test tests/e2e.spec.js

# Run tests in a specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

---

## 📊 Viewing Reports

```bash
# Open the last HTML report
npx playwright show-report

# View a specific trace (for debugging)
npx playwright show-trace test-results/e2e-Place-an-Order-Successfully-webkit-retry1/trace.zip
```

---

## 🔧 Configuration

Playwright settings are managed in `playwright.config.js`. Key options include:

| Option | Description |
|--------|-------------|
| `baseURL` | Target application URL |
| `testDir` | Test file directory (`./tests`) |
| `reporter` | Set to `html` for visual reports |
| `trace` | Captures traces on test failure |
| `screenshot` | Captures screenshots on failure |

---

## 🏗️ Page Object Model

Each page of the application is encapsulated in its own class under `pages/`:

```js
// Example usage in a test
const loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login();
```

| Page Class | Responsibility |
|------------|----------------|
| `LoginPage` | Navigate to app, handle login/logout, validate login page |
| `ProductPage` | Select products, add to cart, click cart button |
| `YourCartPage` | Verify cart items, proceed to checkout |
| `YourInfoPage` | Fill in shipping/personal info, continue |
| `CheckoutOverviewPage` | Verify pricing, finish order |
| `ThankYouPage` | Validate confirmation page, logout |

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `@playwright/test` | Core Playwright test framework |

---
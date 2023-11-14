import { test, expect } from '@playwright/test';

test.describe('Report', () => {
	test.beforeEach(async ({ page }) => {
		// Go to the starting url before each test.
		await page.goto('http://localhost:3000/report');
	});

	test('renders correctly', async ({ page }) => {
		const title = await page.textContent('h1');
		expect(title).toBe('Reportar situación');

		const submitButton = await page.$('button[type="submit"]');
		expect(submitButton).toBeTruthy();
	});

	test('updates input fields correctly', async ({ page }) => {
		await page.fill('textarea[name="description"]', 'Test description');
		const descriptionValue = await page.inputValue(
			'textarea[name="description"]'
		);
		expect(descriptionValue).toBe('Test description');
	});

	test('submits the form correctly', async ({ page }) => {
		await page.fill('textarea[name="description"]', 'Test description');
		await page.selectOption('select[name="type"]', 'Incendio');
		await page.click('button[type="submit"]');

		// Add your assertions here for what should happen when the form is submitted.
		// For example, you might check that the form values are sent to the server correctly.
	});
});

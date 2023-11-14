import { test, expect } from '@playwright/test';

test.describe('Report', () => {
	test.beforeEach(async ({ page }) => {
		// Go to the starting url before each test.
		await page.goto('http://localhost:5173');
	});

	test('renders correctly', async ({ page }) => {
		const title = await page.textContent('h1');
		expect(title).toBe('Reportar situación');

		const type = await page.textContent('label[for="type"]');
		expect(type).toBe('Tipo de situación:');

		const description = await page.textContent('label[for="description"]');
		expect(description).toBe('Descripción:');

		const image = await page.textContent('label[for="image"]');
		expect(image).toBe('Imagen:');

		const location = await page.textContent('label[for="location"]');
		expect(location).toBe('Ubicación:');

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

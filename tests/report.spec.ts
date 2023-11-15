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

	test('updates select fields correctly', async ({ page }) => {
		await page.selectOption('select[name="type"]', 'Incendio');
		const typeValue = await page.inputValue('select[name="type"]');
		expect(typeValue).toBe('Incendio');
	}
	);
	test('updates select fields correctly 2', async ({ page }) => {
		await page.selectOption('select[name="type"]', 'Inundación');
		const typeValue = await page.inputValue('select[name="type"]');
		expect(typeValue).toBe('Inundación');
	});
	test('updates select fields correctly 3', async ({ page }) => {
		await page.selectOption('select[name="type"]', 'Deslave');
		const typeValue = await page.inputValue('select[name="type"]');
		expect(typeValue).toBe('Deslave');
	});
	test('updates select fields correctly 4', async ({ page }) => {
		await page.selectOption('select[name="type"]', 'Derrumbe');
		const typeValue = await page.inputValue('select[name="type"]');
		expect(typeValue).toBe('Derrumbe');
	});
	test('updates select fields correctly 5', async ({ page }) => {
		await page.selectOption('select[name="type"]', 'Choque');
		const typeValue = await page.inputValue('select[name="type"]');
		expect(typeValue).toBe('Choque');
	});
	test('updates select fields correctly 6', async ({ page }) => {
		await page.selectOption('select[name="type"]', 'Otro');
		const typeValue = await page.inputValue('select[name="type"]');
		expect(typeValue).toBe('Otro');
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
	});

});
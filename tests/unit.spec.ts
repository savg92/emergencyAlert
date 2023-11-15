import { test, expect } from '@playwright/test';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Report  from '../src/pages/Report';

test('Report component should render correctly', async ({ page }) => {
	const html = renderToString(<Report />);
	await page.setContent(html);
	const report = await page.waitForSelector('section');
	expect(await report.isVisible()).toBeTruthy();
});
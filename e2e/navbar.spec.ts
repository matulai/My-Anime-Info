import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/My-Anime-Info/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/My Anime Info/);
});

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/My-Anime-Info/")
  })

  test("home navigation", async ({ page }) => {
    await expect(page).toHaveURL(/\/$/);
  });

  test("top animes navigation", async ({ page }) => {
    await page.getByRole('link', { name: 'Top Animes', exact: true}).click();

    await expect(page).toHaveURL(/\/top\/anime\/\d+/); 
  })

  test("season animes navigation", async ({ page }) => {
    await page.getByRole('link', { name: 'Seasonal Animes', exact: true}).click();

    await expect(page).toHaveURL(/.*\/seasons/);
  })

  test("random animes navigation", async ({ page }) => {
    await page.getByRole('link', { name: 'Random', exact: true}).click();

    await expect(page).toHaveURL(/.*\/random\/animes/);
  })
})

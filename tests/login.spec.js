import test, { expect } from "@playwright/test";


test('Login sucessful', async ({page})=>{

    await page.goto('/login');
    await page.getByRole('textbox', {name: 'Type your username'}).fill('test');
    await page.getByRole('textbox', {name: 'Type your password'}).fill('password123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('User successfully logged in!')).toBeVisible();
});

test('Blocked account', async ({page})=>{

    await page.goto('/login');
    await page.getByRole('textbox', {name: 'Type your username'}).fill('testblock');
    await page.getByRole('textbox', {name: 'Type your password'}).fill('password123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('User blocked!')).toBeVisible();
});

test('Invalid user', async ({page})=>{

    await page.goto('/login');
    await page.getByRole('textbox', {name: 'Type your username'}).fill('graca');
    await page.getByRole('textbox', {name: 'Type your password'}).fill('password123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('User not found!')).toBeVisible();
});

test('Wrong password', async ({page})=>{

    await page.goto('/login');
    await page.getByRole('textbox', {name: 'Type your username'}).fill('test');
    await page.getByRole('textbox', {name: 'Type your password'}).fill('password125');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Incorrect username or password!')).toBeVisible();
});

test('Temporary block', async ({page})=>{

    await page.goto('/login');
    await page.getByRole('textbox', {name: 'Type your username'}).fill('test');
    await page.getByRole('textbox', {name: 'Type your password'}).fill('password125');
    await page.getByRole('button', { name: 'Login' }).click({ clickCount: 3 });

    await expect(page.getByText('User temporarily blocked!')).toBeVisible();
});

test('Empty fields', async ({page})=>{

    await page.goto('/login');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByPlaceholder('Type your username')).toBeVisible();
    await expect(page.getByPlaceholder('Type your password')).toBeVisible();
});

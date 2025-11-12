import test, { expect } from "@playwright/test";
import hpCharacters from "../data/json/hpCharacters.json";

for(const character of hpCharacters){
test('Has character: '+ character.name, async ({ page }) => {
  await page.goto('/table');
  
  const nameWithoutSpaces = character.name.replace(' ', '');

  await expect(page.getByRole('img', { name: character.name})).toBeVisible();
  await expect(page.locator('#tableCharacterName' + nameWithoutSpaces)).toBeVisible();
  await expect(page.locator('#tableCharacterHouse' + nameWithoutSpaces)).toBeVisible();

  const birthday = character.dateOfBirth ? character.dateOfBirth : 'Unknown';
  await expect(page.getByRole('cell', { name: birthday})).toBeVisible();

  console.log(nameWithoutSpaces);
});

}
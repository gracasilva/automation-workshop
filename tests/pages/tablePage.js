import { expect } from "@playwright/test";

export class TablePage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/table');
  }

  async expectCharacterVisible(character) {
    
    const nameWithoutSpaces = character.name.replace(' ', '');
    // Check for character image
    await expect(this.page.getByRole('img', { name: character.name})).toBeVisible();
    // Check for character name
    await expect(this.page.locator('#tableCharacterName' + nameWithoutSpaces)).toBeVisible();
    // Check for character birthday
    const birthday = character.dateOfBirth ? character.dateOfBirth : 'Unknown';
    await expect(this.page.getByRole('cell', { name: birthday})).toBeVisible();
    // Check for character house
    await expect(this.page.locator('#tableCharacterHouse' + nameWithoutSpaces)).toBeVisible();

  }
}
import { test, expect } from "@playwright/test";
import { TablePage } from "../pages/tablePage";

import hpCharacters from "../data/json/hpCharacters.json";

for(const character of hpCharacters){
test('Has character: '+ character.name, async ({ page }) => {
  const tablePage = new TablePage(page);

  await tablePage.goto();
});
}
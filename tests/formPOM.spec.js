import test from "@playwright/test";
import { FormPage } from "./pages/form.page.js";
import { USERS } from "./data/form.data.js";


for(const user of USERS){


    test('FORM - Filling for '+ user.name , async ({ page }) => {
    const form = new FormPage(page);
    //we are naming the test according to the scenario in form.data.js
    await form.navigateToForm();
    await form.fillName(user.name);
    await form.fillEmail(user.email);
    await form.fillPassword(user.password);
    await form.selectCountry(user.countryValue);
    await form.selectGender(user.genderValue);
    await form.selectHobbies(user.hobbies);
    await form.submitForm();
    await form.successTitle.waitFor();
    await form.successBody.waitFor();

    
    
});

}

import { userInfo } from "os";

export class FormPage {
  constructor(page) {
 
    this.page = page;
    this.header = page.getByRole('heading', { name: 'Form' });
    this.nameInput = page.getByRole('textbox', { name: 'Name *' });
    this.emailInput = page.getByRole('textbox', { name: 'Email *' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password *' });
    this.countrySelect = page.getByLabel('Country *');
    this.genderRadio = (value) =>
      page.locator(`input[name="gender"][value="${value}"]`);
    this.genderGroup = page.locator('#genderGroup');
    this.sendButton = page.getByRole('button', { name: 'Send' });
    this.successTitle = page.getByText('Success!');
    this.successBody = page.getByText('The form has been submitted');


  }

  async navigateToForm() {
    await this.page.goto('/form');
  }

  async fillName(name) {
    await this.nameInput.fill(name);
  }

  async fillEmail(email) { 
    await this.emailInput.fill(email);
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async selectCountry(countryValue) {
    await this.countrySelect.selectOption(countryValue);
  }

  async selectGender(genderValue) {
    await this.genderRadio(genderValue).check();
  }

  async selectHobbies(hobbies) {
    for (const hobby of hobbies) {
      await this.page.getByText(hobby).click();
    }
  }

  async submitForm() {
    await this.sendButton.click();
  } 

}
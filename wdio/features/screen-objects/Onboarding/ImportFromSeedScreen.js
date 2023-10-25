import {
  IMPORT_FROM_SEED_SCREEN_TITLE_ID,
  IMPORT_FROM_SEED_SCREEN_SEED_PHRASE_INPUT_ID,
  IMPORT_FROM_SEED_SCREEN_NEW_PASSWORD_INPUT_ID,
  IMPORT_FROM_SEED_SCREEN_CONFIRM_PASSWORD_INPUT_ID,
  IMPORT_FROM_SEED_SCREEN_SUBMIT_BUTTON_ID,
  IMPORT_FROM_SEED_SCREEN_PASSWORD_STRENGTH_ID
} from '../../testIDs/Screens/ImportFromSeedScreen.testIds';
import Selectors from '../../helpers/Selectors';
import Gestures from '../../helpers/Gestures';
import assert from 'assert';

class ImportFromSeed {

  get screenTitle() {
    return Selectors.getElementByPlatform(IMPORT_FROM_SEED_SCREEN_TITLE_ID);
  }

  get seedPhraseInput() {
    return Selectors.getElementByPlatform(IMPORT_FROM_SEED_SCREEN_SEED_PHRASE_INPUT_ID);
  }

  get newPasswordInput() {
    return Selectors.getElementByPlatform(IMPORT_FROM_SEED_SCREEN_NEW_PASSWORD_INPUT_ID, true);
  }

  get confirmPasswordInput() {
    return Selectors.getElementByPlatform(IMPORT_FROM_SEED_SCREEN_CONFIRM_PASSWORD_INPUT_ID, true);
  }

  get importButton() {
    return Selectors.getElementByPlatform(IMPORT_FROM_SEED_SCREEN_SUBMIT_BUTTON_ID);
  }

  get passwordStrengthLabel(){
    return Selectors.getElementByPlatform(IMPORT_FROM_SEED_SCREEN_PASSWORD_STRENGTH_ID);
  }

  async isScreenTitleVisible() {
    await expect(this.screenTitle).toBeDisplayed();
  }

  async typeSecretRecoveryPhrase(phrase) {
    await Gestures.typeText(this.seedPhraseInput, phrase);
  }

  async typeNewPassword(newPassword) {
    await Gestures.typeText(this.newPasswordInput, newPassword);
  }

  async typeConfirmPassword(confirmPassword) {
    await Gestures.typeText(this.confirmPasswordInput, confirmPassword);
  }

  async clickImportButton() {
    await Gestures.waitAndTap(this.screenTitle);
    await Gestures.waitAndTap(this.importButton);
  }

  async verifyPasswordStrength(text){
    await expect(this.passwordStrengthLabel).toHaveText(text);  
  }

  async verifyAlertText(text){
    const msg = await driver.getAlertText();
    assert(msg.includes(text));
  }

  async tapOkInAlertMessage(){
    await driver.acceptAlert();
  }
}

export default new ImportFromSeed();
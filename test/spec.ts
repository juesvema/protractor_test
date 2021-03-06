import { browser, element, by } from 'protractor';
require('dotenv').config()

describe('Given a SDET learning protractor', () => {
  describe('when open Google Page', () => {
    beforeEach(() => {
      browser.get('https://www.logmein.com');
    });

    it('then push login button', () => {
      element(by.xpath('/html/body/div[1]/header/div/nav[2]/ul/li[2]/a')).click();
      element(by.id('email')).sendKeys(process.env.EMAIL);
      element(by.id('password')).sendKeys(process.env.PASSWORD);
      element(by.id('btnSubmit')).click();
      var loc = by.tagName('iframe');
      var el = browser.driver.findElement(loc);
      browser.switchTo().frame(el).then(
        async () => {
          await browser.driver.findElement(by.id('availableSeatText')).getText().then(
            text => console.log(text)
          );
          await browser.driver.findElement(by.id('addhost')).click();
          await browser.driver.findElement(by.id('add-another-computer')).click();
          await browser.driver.findElement(by.xpath('//*[@id="deployment-link"]')).getAttribute('value').then(
            text => console.log(text)
          );
        }
      );
    });
  });
});
// import HomePage from '../page_objects/HomePage';
const HomePage = require('../page_objects/HomePage');

browser.waitForAngularEnabled(false);
const homePage = new HomePage();

beforeEach(async () => {
  browser.get(homePage.path);
});

describe('SEO checklist', () => {
  it('Check Title', () => {
    expect(browser.getTitle()).toEqual('Portfolio - Mateusz Błoch');
  });
  it('Check H1', () => {
    expect(homePage.headerOne.getText()).toEqual('O mnie');
  });
  it('Check Canonical Link', () => {
    expect(homePage.canonicalLink.isPresent()).toBe(true);
  });
});

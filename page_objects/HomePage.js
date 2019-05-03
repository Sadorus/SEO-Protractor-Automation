module.exports = class HomePage {
  constructor() {
    this.path = 'http://mateuszbloch.pl/';
    this.headerOne = element(by.css('h1'));
    this.canonicalLink = element(by.css('link[rel="canonical"][href="http://mateuszbloch.pl"]'));
  }
};

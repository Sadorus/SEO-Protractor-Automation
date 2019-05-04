module.exports = class HomePage {
  constructor() {
    this.path = 'http://mateuszbloch.pl/';
    this.headerOne = element(by.css('h1'));
    this.canonicalLink = element(by.css('link[rel="canonical"][href="http://mateuszbloch.pl"]'));
    // eslint-disable-next-line max-len
    this.metaDescription = element(by.css('meta[name="description"][content="Hej, mam na imię Mateusz Błoch. Pracuję na stanowisku QA Engineera. Jeżeli chcesz poznać więcej szczegółów na mój temat, zapraszam na stronę."]'));
    this.metaRobot = element(by.css('meta[name="robots"][content="index, follow"]'));
  }
};

import { AngularbindingPage } from './app.po';

describe('angularbinding App', () => {
  let page: AngularbindingPage;

  beforeEach(() => {
    page = new AngularbindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

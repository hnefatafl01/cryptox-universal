import { CryptoxPage } from './app.po';

describe('cryptox App', () => {
  let page: CryptoxPage;

  beforeEach(() => {
    page = new CryptoxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

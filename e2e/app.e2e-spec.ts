import { AppMJPage } from './app.po';

describe('app-mj App', () => {
  let page: AppMJPage;

  beforeEach(() => {
    page = new AppMJPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

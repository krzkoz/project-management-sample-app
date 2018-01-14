import { AppPage } from './app.po';

describe('projects-management App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display home page text', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Home Page!');
  });
});

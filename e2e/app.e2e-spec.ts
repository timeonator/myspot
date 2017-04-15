import { MyspotPage } from './app.po';

describe('myspot App', function() {
  let page: MyspotPage;

  beforeEach(() => {
    page = new MyspotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

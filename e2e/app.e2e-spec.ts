import { AngularWorldPage } from './app.po';

describe('angular-world App', function() {
  let page: AngularWorldPage;

  beforeEach(() => {
    page = new AngularWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

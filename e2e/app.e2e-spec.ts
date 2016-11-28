import { LazyRoutePage } from './app.po';

describe('lazy-route App', function() {
  let page: LazyRoutePage;

  beforeEach(() => {
    page = new LazyRoutePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

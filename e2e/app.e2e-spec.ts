import { TiendaJeffPage } from './app.po';

describe('tienda-jeff App', () => {
  let page: TiendaJeffPage;

  beforeEach(() => {
    page = new TiendaJeffPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

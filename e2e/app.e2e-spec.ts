import { ProjectWithRoutingScssPage } from './app.po';

describe('project-with-routing-scss App', () => {
  let page: ProjectWithRoutingScssPage;

  beforeEach(() => {
    page = new ProjectWithRoutingScssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

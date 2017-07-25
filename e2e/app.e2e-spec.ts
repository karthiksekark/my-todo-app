import { MyTodoAppPage } from './app.po';

describe('my-todo-app App', () => {
  let page: MyTodoAppPage;

  beforeEach(() => {
    page = new MyTodoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

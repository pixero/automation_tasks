import { Page } from 'playwright';



export class GooglePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  

  async navigate() { //страница Google поиска
    await this.page.goto('https://www.google.com/');
  }

  async search(query: string) {//вводим значение в поисковую строку
    await new Promise<void> (resolve => setTimeout(() => resolve(), 1000));//даем время для норм прогрузки страницы
    await this.page.click('textarea[class="gLFyf"]');
    await this.page.fill('textarea[class="gLFyf"]', query);
    await this.page.press('textarea[class="gLFyf"]', 'Enter');//enter для выбора текста
    await this.page.waitForResponse(response => ((response.url().includes('complete/search'))));//ожидаем ответа от сервера
  }
}
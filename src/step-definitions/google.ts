import {When, Then} from "@cucumber/cucumber";
import {OurWorld} from "../types/types";



When('Я открываю страницу в браузере', async function (this: OurWorld){
    await this.googlePage.navigate();
});

Then('Ищу через поисковую строку {string}', async function (this: OurWorld, query: string){
    await this.googlePage.search(query);
});
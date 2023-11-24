import {Then, When} from "@cucumber/cucumber";
import {OurWorld} from "../types/types";
import expect from 'expect';

When('Я открываю страницу {string}',async function (this:OurWorld, nameStringUrl: string){
    this.expectedUrl = nameStringUrl;
    await this.page.goto(nameStringUrl);
});

Then('Страница должна быть открыта', async function (this:OurWorld){
    const url = this.page.url();
    expect(url).toEqual(this.expectedUrl);
});

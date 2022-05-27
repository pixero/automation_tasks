import {Then, When} from "@cucumber/cucumber";
import {OurWorld} from "../types/types";
import expect from 'expect';

When('Я открываю страницу google.com',async function (this:OurWorld){
    await this.page.goto('https://www.google.com/');
})
Then('Страница должна быть открыта', async function (this:OurWorld){
    const url = this.page.url();
    expect(url).toEqual('https://www.google.com/');
})

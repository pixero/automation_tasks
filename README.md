# automation_tasks
Установить зависимости - `yarn install`

<br>Задание 1

Придумать как можно переписать шаг 'Я открываю страницу google.com', чтобы вместо страницы
google.com можно было открыть
URL любой страницы, который указывается в feature файле.

Задание 2
1. Добавить Page Object  для страницы `yandex.ru`
2. Добавить в объект страницы метод `goto`, в котором будет открываться страница `yandex.ru`
3. Добавить метод `search`, где будет выполняться поиск по значению аргумента функции
4. Добавить feature файл и features и реализацию шагов в src/step-definitions для теста на открытие страницы yandex.ru 
5. Добавить feature файл и features и реализацию шагов в src/step-definitions для теста на поиск по строковому значению "Море"

Примечание: тесты можно запустить командой yarn run test <br>
<bold>Необходимая информация для выполнения задания:</bold><br>
1. Playwright doc - https://playwright.dev/
2. Cucumber doc - https://docs.cucumber.io/docs/gherkin/reference/
3. Page Object - https://habr.com/ru/company/wapstart/blog/138674/

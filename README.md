# Лабораторная работа 2
## Знакомство с Node и NPM
### Цель работы
Познакомиться с NPM, рассчитать время в днях до нового года и вывести данную информацию на экран используя внешнюю зависимость Luxon

### Технические требования:
- Наличие интернет-соединения
- Наличие [Node](https://docs.docker.com/desktop/) [v22 и выше] или наличие [NVM](https://github.com/nvm-sh/nvm) для переключения между версиями Node

### Ход работы:
1. В директории (D:\work\Program\JS\lab2) с лабораторной работой выполнение инициализацию Node проекта с помощью команды `npm init`
В результате у вас должен появиться файл `package.json`, аналогиный представленному ниже
```
{
  "name": "lab_2",
  "version": "0.0.1",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/meteki/Node-and-NPM.git"
  },
  "keywords": [
    "Working",
    "with",
    "Node",
    "and",
    "NPM"
  ],
  "author": "Meteci",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/meteki/Node-and-NPM/issues"
  },
  "homepage": "https://github.com/meteki/Node-and-NPM#readme",
  "description": "",
  "dependencies": {
  }
}
```
2. Создайте директорию `src` внутри директории вашей лабораторной работы [можно создать с помощью команды `mkdir src`]
3. Создайте файл `index.js` внутри директории `src` [можно создать с помощью команды `touch index.js`, если используем PowerShell `New-Item -ItemType file index.js`]
4. Выполните установку внешней зависимости из NPM с помощью команды `npm i luxon`. В результате файл `package.json` видоизмениться, добавиться секция `dependencies` с содержимым, представленным ниже
```
  "dependencies": {
    "luxon": "^3.5.0"
  }
```
Дополнительно появится директория `node_modules` с загруженной внешней зависимостью `luxon`, а также файл `package-lock.json`
5. Модифицируйте файл `index.js` в директории `src`, добавив следующее содержимое
```
import { DateTime } from "luxon";

const date = DateTime.now();

console.log(date);
```
6. Модифицируйте файл `package.json`, добавив секцию `"type": "module",`, а также секцию `"start": "node src/index.js",` в `"scripts"`

В результате изменений файл package.json будет выглядеть следующим образом
```
{
  "name": "lab_2",
  "version": "0.0.1",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/meteki/Node-and-NPM.git"
  },
  "keywords": [
    "Working",
    "with",
    "Node",
    "and",
    "NPM"
  ],
  "author": "Meteci",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/meteki/Node-and-NPM/issues"
  },
  "homepage": "https://github.com/meteki/Node-and-NPM#readme",
  "description": "",
  "dependencies": {
    "luxon": "^3.5.0"
  }
}
```
7. Запустите проект с использованием команды `npm start`.
В результате на экране будет выведен результат, аналогичный представленному ниже
```
DateTime { ts: 2025-02-17T12:27:47.150+03:00, zone: Europe/Moscow, locale: en-US }
```
8. Модифицируйте файл `index.js` для вывода количества дней до нового года. Обратите внимание, в зависимости от даты, выставленной в настройках ОС количество дней должно изменяться
```
import { DateTime } from "luxon";
//Получение текущей даты и времени
const NowTime = DateTime.now()
//Создание даты следующего Нового года
//DateTime.fromObject() — это метод Luxon, который создает объект DateTime из переданного объекта с параметрами:
const NewYearTime = DateTime.fromObject({year: NowTime.year + 1,  month: 1, day: 1})
//Вычисление разницы между текущей датой и Новым годом
//diff() вычисляет разницу между двумя датами
//toObject() — преобразует результат в объект, который содержит разницу в днях, часах, минутах и секундах. Например:
const DaysBefore = NewYearTime.diff(NowTime, 'days').toObject();

console.log(`До нового года осталось ${Math.floor(DaysBefore.days)} дней!`)
```
### Контрольные вопросы:
1.Что такое NPM?
NPM (Node Package Manager) — это менеджер пакетов для Node.js, который позволяет устанавливать, управлять и публиковать пакеты JavaScript.
2.Что такое node_modules?
node_modules — это директория, в которой хранятся все установленные пакеты и их зависимости. Она создается автоматически при установке пакетов через NPM.
3.Какую роль играют файлы package.json и package-lock.json?
package.json — это файл, который содержит метаданные о проекте, такие как название, версия, зависимости и скрипты.
package-lock.json — это файл, который фиксирует точные версии всех установленных пакетов и их зависимостей, чтобы обеспечить воспроизводимость сборки.
4.Для чего используется команда npm i?
Команда npm i (или npm install) используется для установки пакетов, указанных в package.json, а также для установки всех зависимостей проекта.
5.Какие встроенные методы Luxon были использованы для выполнения лабораторной работы?
-DateTime.now() — используется для получения текущей даты и времени.
-DateTime.fromObject() — используется для создания объекта DateTime с указанными параметрами (год, месяц, день).
-diff() — используется для вычисления разницы между двумя датами.
-toObject() — используется для преобразования результата вычисления разницы в объект.

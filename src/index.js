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
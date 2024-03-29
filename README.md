# Movies Explorer (фронтенд-часть)

Репозиторий для фронтенд-части приложения с интерфейсом на React

## Приложение Movies Explorer

Приложение Movies Explorer - сервис с поиском фильмов и сохранением их в личном кабинете. Учебный проект Яндекс.Практикум х BeatFilm.

Это дипломный проект Яндекс.Практикума по специальности "Веб-разработчик".

### Структура приложения

Полностью приложение состоит из двух частей:

1. [Movies Explorer (бэкенд-часть)](https://github.com/novvember/movies-explorer-api)
2. Movies Explorer (фронтенд-часть) ⬅ _этот репозиторий_

## Демо

На GitHub Pages: [`movies.novvember.tk`](https://movies.novvember.tk/)

## Макет в Figma

[`figma.com/file/Bb8b92xns1lLgMiKkTwRPp/Diploma-(Kalugin)?node-id=891%3A3857`](<https://www.figma.com/file/Bb8b92xns1lLgMiKkTwRPp/Diploma-(Kalugin)?node-id=891%3A3857>)

## Пул-реквест для сдачи работы

[github.com/novvember/movies-explorer-frontend/pull/2](https://github.com/novvember/movies-explorer-frontend/pull/2)

## Используемые API

- собственное API для регистрации/авторизации и хранения сохраненных фильмов:
  `https://api.movies.novvember.nomoredomains.sbs`
- публичное API для получения коллекции фильмов BeatFilm `https://api.nomoreparties.co/beatfilm-movies`

## Функциональность

- Адаптивная, семантическая верстка
- Лендинг с описанием работы, а также с информацией обо мне и ссылками на другие работы из портфолио
- Отдельная страница с приложением по поиску и сохранению фильмов
- Регистрация/авторизация пользователей
- Поиск фильмов по ключевому слову
- Постепенный вывод результатов поиска на экран при клике на копнку «Ещё»
- Сохранение/удаление фильмов из результов поиска
- Просмотр и удаление фильмов из сохраненных в личном кабинете
- Редактирование информации о пользователе
- Валидация форм перед отправкой на сервер
- Прелоадеры с анимацией во время запросов к серверу

## Стек технологий

- HTML5, CSS3, БЭМ
  - JSX
  - normalize.css
  - @media, @keyframes, transition
- React
  - Create React App
  - React Router 6
  - Валидация форм с помощью кастомных хуков
  - React Context
  - Защищенные роуты
- Работа с API: публичное и собственное
- Local Storage: хранение JWT-токена и параметров поиска

## Статус разработки

✅ _Готово_

Вся основная и дополнительная функциональность реализована

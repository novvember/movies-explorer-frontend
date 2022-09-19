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

На отдельном сервере в Яндекс.Облаке: [`movies.novvember.nomoredomains.sbs`](https://movies.novvember.nomoredomains.sbs)

### Используемые API

- собственное API для регистрации/авторизации и хранения сохраненных фильмов:
  `https://api.movies.novvember.nomoredomains.sbs`
- публичное API для получения коллекции фильмов BeatFilm `https://api.nomoreparties.co/beatfilm-movies`

## Макет в Figma

[`figma.com/file/Bb8b92xns1lLgMiKkTwRPp/Diploma-(Kalugin)?node-id=891%3A3857`](<https://www.figma.com/file/Bb8b92xns1lLgMiKkTwRPp/Diploma-(Kalugin)?node-id=891%3A3857>)

## Функциональность

- Адаптивная, семантическая верстка
- Лендинг с описанием работы, а также с информацией обо мне и ссылками на другие работы
- Отдельная страница с приложением по поиску и сохранению фильмов
- Регистрация/авторизация пользователей
- Сохранение/удаление фильмов в личном кабинете
- Редактирование информации о пользователе
- Валидация форм

## Стек технологий

- HTML5, CSS3, БЭМ
- React
- React Router 6
- Работа с API
- Валидация форм с помощью кастомных хуков
- Хранение JWT-токена в localStorage
- React Context

## Статус разработки

⚒️ _В процессе разработки_

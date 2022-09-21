export const SEARCH_PARAMS = {
  SHORTIES_MAX_DURATION: 40,
  PLACEHOLDER: 'Фильм',
  SHORTIES: 'Короткометражки',
  REQUIRED_ERROR: 'Нужно ввести ключевое слово',
};

export const CARDS_RENDER_COUNT = {
  1: {
    INITIAL: 5,
    ADD: 2,
  },
  2: {
    INITIAL: 8,
    ADD: 2,
  },
  3: {
    INITIAL: 12,
    ADD: 3,
  },
  default: {
    INITIAL: 6,
    ADD: 6,
  },
};

export const MOVIE_API = {
  BASE_URL: 'https://api.nomoreparties.co',
  MEDIA_BASE_URL: 'https://api.nomoreparties.co/',
};

export const MAIN_API = {
  BASE_URL: 'https://api.movies.novvember.nomoredomains.sbs',
  AUTH_HEADERS: {
    'Content-Type': 'application/json',
    Authorization: 'jwt token here',
  },
};

export const SEARCH_ERRORS = {
  NOT_FOUND: 'Ничего не найдено',
  CANT_GET_MOVIES:
    'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
};

export const SEARCH_TEXTS = {
  MORE_BUTTON: 'Ещё',
};

export const REQUEST_ERRORS = {
  SERVER_500: 'На сервере произошла ошибка',

  SIGNUP_409: 'Пользователь с таким email уже существует.',
  SIGNUP_DEFAULT: 'При регистрации пользователя произошла ошибка.',

  SIGNIN_401: 'Вы ввели неправильный логин или пароль.',
  SIGNIN_NO_TOKEN:
    'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
  SIGNIN_INVALID_TOKEN:
    'При авторизации произошла ошибка. Переданный токен некорректен.',
  SIGNIN_DEFAULT: 'При входе произошла ошибка.',

  UPDATE_409: 'Пользователь с таким email уже существует.',
  UPDATE_DEFAULT: 'При обновлении профиля произошла ошибка.',
  UPDATE_SUCCESSULLY: 'Сохранено!',
};

export const NAV_TEXTS = {
  REGISTER: 'Регистрация',
  LOGIN: 'Войти',
  OPEN_MENU: 'Открыть меню',
  CLOSE_MENU: 'Закрыть меню',
  MAIN: 'Главная',
  MOVIES: 'Фильмы',
  SAVED_MOVIES: 'Сохранённые фильмы',
  PROFILE: 'Аккаунт',
};

export const CARD_TEXTS = {
  SAVE_BUTTON_TEXT: 'Сохранить',
  DELETE_BUTTON_ALT: 'Удалить фильм из сохраненных',
};

export const PAGE_404 = {
  TITLE: '404',
  SUBTITLE: 'Страница не найдена',
  LINK: 'Назад',
};

export const PLACEHOLDERS = {
  EMAIL: 'mcclane@nakatomi.corp',
  NAME: 'Джон Макклейн',
  PASSWORD: 'akagi',
};

export const SEARCH_PARAMS = {
  SHORTIES_MAX_DURATION: 40,
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
  BASE_URL: '',
  MEDIA_BASE_URL: 'https://api.nomoreparties.co/',
};

export const ERROR_MSGS = {
  NOT_FOUND: 'Ничего не найдено',
  CANT_GET_MOVIES:
    'Во&nbsp;время запроса произошла ошибка. Возможно, проблема с&nbsp;соединением или сервер недоступен. Подождите немного и&nbsp;попробуйте ещё раз',
};

export const REQUEST_ERRORS = {
  SIGNUP_409: 'Пользователь с&nbsp;таким email уже существует.',
  SIGNUP_DEFAULT: 'При регистрации пользователя произошла ошибка.',
  SIGNIN_401: 'Вы&nbsp;ввели неправильный логин или пароль.',
  SIGNIN_NO_TOKEN:
    'При авторизации произошла ошибка. Токен не&nbsp;передан или передан не&nbsp;в&nbsp;том формате.',
  SIGNIN_INVALID_TOKEN:
    'При авторизации произошла ошибка. Переданный токен некорректен.',
  SIGNIN_DEFAULT: 'При входе произошла ошибка.',
  UPDATE_409: 'Пользователь с&nbsp;таким email уже существует.',
  UPDATE_DEFAULT: 'При обновлении профиля произошла ошибка.',
};

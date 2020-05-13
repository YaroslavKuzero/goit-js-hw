const logins = [
  'Mango',
  'robotGoogles',
  'Poly',
  'Aj4x1sBozz',
  'qwerty123',
];

const isLoginValid = function (login) {
  const validation =
    login.length >= 4 && login.length <= 16;

  return validation;
};

const isLoginUnique = function (allLogins, login) {
  const unique = allLogins.includes(login);

  return !unique;
};

const addLogin = function (allLogins, login) {
  const validation = isLoginValid(login);
  const unique = isLoginUnique(allLogins, login);
  let message;
  if (!validation) {
    message =
      'Ошибка! Логин должен быть от 4 до 16 символов';
  } else if (!unique) {
    message = 'Такой логин уже используется!';
  } else {
    logins.push(login);
    message = 'Логин успешно добавлен!';
  }

  return message;
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'

console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'

console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

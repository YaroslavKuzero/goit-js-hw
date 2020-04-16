const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userEntrance = prompt('Please enter your password');

if (userEntrance === ADMIN_PASSWORD) {
  message = 'Welcome to our awesome site';
} else if (userEntrance === null) {
  message = 'Declined by user';
} else {
  message = 'Acces is denied, incorrect password';
}

alert(message);

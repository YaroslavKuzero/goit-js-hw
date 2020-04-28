// eslint-disable-next-line import/extensions
import users from './users.js';

const getUserNames = arrUsers =>
  arrUsers.map(user => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

const getUsersWithEyeColor = (arrUsers, color) =>
  arrUsers.reduce((suitNames, user) => {
    if (user.eyeColor === color) {
      suitNames.push(user);
    }
    return suitNames;
  }, []);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

const getUsersWithGender = (arrUsers, gender) =>
  arrUsers.reduce((suitNames, user) => {
    // eslint-disable-next-line no-unused-expressions
    user.gender === gender
      ? suitNames.push(user.name)
      : suitNames;
    return suitNames;
  }, []);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

const getInactiveUsers = arrUsers => {
  const inActiveUsers = arrUsers.filter(
    user => !user.isActive,
  );
  return inActiveUsers;
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

const getUserWithEmail = (arrUsers, email) =>
  arrUsers.find(user => user.email === email);

console.log(
  getUserWithEmail(users, 'shereeanthony@kog.com'),
); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

const getUsersWithAge = (arrUsers, min, max) =>
  arrUsers.filter(user => user.age < max && user.age > min);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

const calculateTotalBalance = arrUsers =>
  arrUsers.reduce(
    (totalBal, user) => totalBal + user.balance,
    0,
  );

console.log(calculateTotalBalance(users)); // 20916

const getUsersWithFriend = (arrUsers, friendName) =>
  arrUsers.reduce((suitNames, user) => {
    // eslint-disable-next-line no-unused-expressions
    user.friends.includes(friendName)
      ? suitNames.push(user.name)
      : suitNames;
    return suitNames;
  }, []);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

const getNamesSortedByFriendsCount = arrUsers =>
  [...arrUsers]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);

console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

const getSortedUniqueSkills = arrUsers =>
  arrUsers
    .reduce((allSkills, user) => {
      user.skills.forEach(skill => {
        if (!allSkills.includes(skill)) {
          allSkills.push(skill);
        }
      });
      return allSkills;
    }, [])
    .sort();

console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

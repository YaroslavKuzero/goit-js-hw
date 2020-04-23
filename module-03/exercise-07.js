const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

let tId = 0;

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  createTransaction(amount, type) {
    let newTransaction = {};
    tId += 1;
    newTransaction = {
      id: tId,
      amount,
      type,
    };
    this.transactions.push(newTransaction);
    return newTransaction;
  },

  deposit(amount) {
    this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    return `Transaction completed successfully! On your deposit account is ${this.balance} credits`;
  },

  withdraw(amount) {
    if (amount > this.balance) {
      return 'Withdrawal cancelled. Not enough funds in the deposit account.';
    }
    this.createTransaction(amount, Transaction.WITHDRAW);
    this.balance -= amount;
    return `Transaction completed successfully! On your  deposit account is ${this.balance} credits`;
  },

  getBalance() {
    return `On your deposit account is ${this.balance} credits`;
  },

  getTransactionDetails(id) {
    // eslint-disable-next-line
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return 'We can not find transaction. Pls recheck id-number and try again.';
  },

  getTransactionTotal(type) {
    const arrTotal = [];
    let total = 0;
    // eslint-disable-next-line
    for (const objects of this.transactions) {
      if (objects.type === type) {
        arrTotal.push(objects);
      }
    }
    // eslint-disable-next-line
    for (const objType of arrTotal) {
      total += objType.amount;
    }

    return `Sum of ${type} operations is ${total}`;
  },
};

console.log(account.deposit(100));
console.log(account.withdraw(300));
console.log(account.deposit(200));
console.log(account.withdraw(200));
console.log(account.deposit(300));
console.log(account.deposit(6000));
console.log(account.withdraw(500));
console.log(account.withdraw(800));

console.log(account.transactions);

console.log(account.getBalance());

console.log(account.getTransactionDetails(3));
console.log(account.getTransactionDetails(5));
console.log(account.getTransactionDetails(12));

console.log(account.getTransactionTotal('withdraw'));
console.log(account.getTransactionTotal('deposit'));

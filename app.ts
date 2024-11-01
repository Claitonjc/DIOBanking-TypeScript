
import { PeopleAccount } from './class/PeopleAccount';
import { CompanyAccount } from './class/CompanyAccount';
import { NewAccount } from './class/NewAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Claiton', 10);

peopleAccount.deposit(30);

console.log(peopleAccount);

peopleAccount.withdraw(15);

console.log(peopleAccount);

console.log(`Seu saldo é de: ${peopleAccount.getBalance()}R$`);



// const companyAccount: CompanyAccount = new CompanyAccount('Dio', 20);
// companyAccount.deposit(15);

// console.log(companyAccount);

// companyAccount.getLoan(50);

// console.log(companyAccount);

// companyAccount.withdraw(30);

// console.log(companyAccount);

// console.log(`Seu saldo é de: ${companyAccount.getBalance()}R$`);

// const newAccount: NewAccount = new NewAccount('Pedro', 125);
// console.log(newAccount);

// newAccount.depositPlus(30);

// console.log(newAccount);

// newAccount.deposit(30);

// console.log(newAccount);

// newAccount.withdraw(25);

// console.log(newAccount);

// console.log(`Seu saldo é de: ${newAccount.getBalance()}R$`);